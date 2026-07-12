import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { loadCourses, selectCourse, clearSelectedCourse } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError, selectSelectedCourseId } from '../../store/course/course.selectors';
import { enrollInCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledCourseIds, selectEnrollmentLoading } from '../../store/enrollment/enrollment.selectors';
import { EnrollmentRequest } from '../../services/enrollment';

import { CourseCard } from '../../components/course-card/course-card';
import { EnrollmentForm } from '../../components/enrollment-form/enrollment-form';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard, EnrollmentForm],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  private readonly store = inject(Store);

  courses$ = this.store.select(selectAllCourses);
  loading$ = this.store.select(selectCoursesLoading);
  error$ = this.store.select(selectCoursesError);
  
  selectedCourseId$ = this.store.select(selectSelectedCourseId);
  enrolledCourseIds$ = this.store.select(selectEnrolledCourseIds);
  enrollmentLoading$ = this.store.select(selectEnrollmentLoading);

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  onEnrollRequested(courseId: number): void {
    this.store.dispatch(selectCourse({ courseId }));
  }

  onEnroll(request: EnrollmentRequest): void {
    this.store.dispatch(enrollInCourse({ request }));
    this.store.dispatch(clearSelectedCourse());
  }

  onCancelEnrollment(): void {
    this.store.dispatch(clearSelectedCourse());
  }

  isEnrolled(courseId: number, enrolledIds: number[] | null): boolean {
    return enrolledIds ? enrolledIds.includes(courseId) : false;
  }
}