import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

interface ApiPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Course {
  id: number;
  title: string;
  body: string;
  name: string;
  code: string;
  credits: number;
  status: 'active' | 'completed' | 'pending';
  price: number;
  instructor: string;
  duration: string;
  category: string;
}

const STATUSES: Array<'active' | 'completed' | 'pending'> = [
  'active',
  'completed',
  'pending'
];

const CATEGORIES = [
  'Programming',
  'Design',
  'Data Science',
  'DevOps',
  'Cloud'
];

const INSTRUCTORS = [
  'Prof. Sharma',
  'Dr. Patel',
  'Prof. Kumar',
  'Dr. Gupta',
  'Prof. Singh'
];

function mapApiToCourse(post: ApiPost): Course {
  const words = post.title.split(' ').slice(0, 6);
  const name = words
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    id: post.id,
    title: post.title,
    body: post.body,
    name,
    code: `CSE${100 + post.id}`,
    credits: (post.id % 4) + 1,
    status: STATUSES[post.id % 3],
    price: (post.id % 10 + 1) * 1000,
    instructor: INSTRUCTORS[post.id % INSTRUCTORS.length],
    duration: `${(post.id % 6) + 1} weeks`,
    category: CATEGORIES[post.id % CATEGORIES.length]
  };
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getCourses(): Observable<Course[]> {
    return this.http.get<ApiPost[]>(this.apiUrl).pipe(
      retry(2),
      map((posts: ApiPost[]) =>
        posts
          .filter((p: ApiPost) => p.id > 0)
          .slice(0, 20)
          .map(mapApiToCourse)
      ),
      tap((courses: Course[]) =>
        console.log('Courses Loaded:', courses.length)
      ),
      catchError(error => {
        console.error(error);
        return throwError(() => new Error('Failed to load courses'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http
      .get<ApiPost>(`${this.apiUrl}/${id}`)
      .pipe(map(mapApiToCourse));
  }

  createCourse(course: Partial<Course>): Observable<Course> {
    return this.http
      .post<ApiPost>(this.apiUrl, course)
      .pipe(map(mapApiToCourse));
  }

  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http
      .put<ApiPost>(`${this.apiUrl}/${id}`, course)
      .pipe(map(mapApiToCourse));
  }

  deleteCourse(id: number): Observable<object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}