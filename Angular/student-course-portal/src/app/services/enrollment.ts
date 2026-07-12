import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Enrollment {
  id: number;
  courseId: number;
  studentId: number;
  studentName: string;
  email: string;
  notes: string;
  enrolledAt: string;
  status: 'active' | 'completed' | 'dropped';
}

export interface EnrollmentRequest {
  courseId: number;
  studentName: string;
  email: string;
  notes: string;
}
function mapApiToEnrollment(
  comment: ApiComment,
  courseId?: number
): Enrollment {
  return {
    id: comment.id,
    courseId: courseId ?? comment.postId,
    studentId: comment.id,
    studentName: comment.name,
    email: comment.email,
    notes: comment.body,
    enrolledAt: new Date().toISOString(),
    status: 'active'
  };
}

// ── Service ────────────────────────────────────────────────────────────────
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  // GET ENROLLMENTS BY COURSE
  getStudentsByCourse(courseId: number): Observable<Enrollment[]> {
    return this.http
      .get<ApiComment[]>(`${this.apiUrl}?postId=${courseId}`)
      .pipe(
        map((comments: ApiComment[]) =>
          comments.map(c => mapApiToEnrollment(c, courseId))
        )
      );
  }

  // GET ENROLLMENTS FOR STUDENT (simulated via postId)
  getEnrollments(studentId: number = 1): Observable<Enrollment[]> {
    return this.http
      .get<ApiComment[]>(`${this.apiUrl}?postId=${studentId}`)
      .pipe(
        map((comments: ApiComment[]) =>
          comments.map(c => mapApiToEnrollment(c))
        )
      );
  }

  // ENROLL IN COURSE
  enrollInCourse(request: EnrollmentRequest): Observable<Enrollment> {
    return this.http
      .post<ApiComment>(this.apiUrl, {
        postId: request.courseId,
        name: request.studentName,
        email: request.email,
        body: request.notes
      })
      .pipe(
        map((comment: ApiComment) =>
          mapApiToEnrollment(comment, request.courseId)
        )
      );
  }

  // UNENROLL FROM COURSE
  unenrollFromCourse(enrollmentId: number): Observable<object> {
    return this.http.delete(`${this.apiUrl}/${enrollmentId}`);
  }
}