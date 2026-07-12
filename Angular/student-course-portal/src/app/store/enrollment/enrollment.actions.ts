import { createAction, props } from '@ngrx/store';
import { Enrollment, EnrollmentRequest } from '../../services/enrollment';

export const loadEnrollments = createAction(
  '[Enrollment] Load Enrollments',
  props<{ studentId: number }>()
);

export const loadEnrollmentsSuccess = createAction(
  '[Enrollment] Load Enrollments Success',
  props<{ enrollments: Enrollment[] }>()
);

export const loadEnrollmentsFailure = createAction(
  '[Enrollment] Load Enrollments Failure',
  props<{ error: string }>()
);

export const enrollInCourse = createAction(
  '[Enrollment] Enroll In Course',
  props<{ request: EnrollmentRequest }>()
);

export const enrollInCourseSuccess = createAction(
  '[Enrollment] Enroll In Course Success',
  props<{ enrollment: Enrollment }>()
);

export const enrollInCourseFailure = createAction(
  '[Enrollment] Enroll In Course Failure',
  props<{ error: string }>()
);

export const unenrollFromCourse = createAction(
  '[Enrollment] Unenroll From Course',
  props<{ enrollmentId: number, courseId: number }>()
);

export const unenrollFromCourseSuccess = createAction(
  '[Enrollment] Unenroll From Course Success',
  props<{ enrollmentId: number, courseId: number }>()
);

export const unenrollFromCourseFailure = createAction(
  '[Enrollment] Unenroll From Course Failure',
  props<{ error: string }>()
);
