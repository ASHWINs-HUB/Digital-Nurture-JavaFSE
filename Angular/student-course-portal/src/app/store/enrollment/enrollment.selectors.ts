import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';

export const selectEnrollmentState =
  createFeatureSelector<EnrollmentState>('enrollment');

export const selectAllEnrollments = createSelector(
  selectEnrollmentState,
  state => state.enrollments
);

export const selectEnrolledCourseIds = createSelector(
  selectEnrollmentState,
  state => state.enrolledCourseIds
);

export const selectIsEnrolled = (courseId: number) => createSelector(
  selectEnrolledCourseIds,
  (enrolledCourseIds) => enrolledCourseIds.includes(courseId)
);

export const selectEnrollmentLoading = createSelector(
  selectEnrollmentState,
  state => state.loading
);

export const selectEnrollmentError = createSelector(
  selectEnrollmentState,
  state => state.error
);

export const selectEnrollmentCount = createSelector(
  selectAllEnrollments,
  enrollments => enrollments.length
);
