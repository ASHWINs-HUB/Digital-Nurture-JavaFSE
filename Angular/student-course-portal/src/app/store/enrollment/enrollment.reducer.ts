import { createReducer, on } from '@ngrx/store';

import {
  loadEnrollments,
  loadEnrollmentsSuccess,
  loadEnrollmentsFailure,
  enrollInCourse,
  enrollInCourseSuccess,
  enrollInCourseFailure,
  unenrollFromCourse,
  unenrollFromCourseSuccess,
  unenrollFromCourseFailure
} from './enrollment.actions';

import { Enrollment } from '../../services/enrollment';

export interface EnrollmentState {
  enrollments: Enrollment[];
  enrolledCourseIds: number[];
  loading: boolean;
  error: string | null;
}

export const initialState: EnrollmentState = {
  enrollments: [],
  enrolledCourseIds: [],
  loading: false,
  error: null
};

export const enrollmentReducer = createReducer(
  initialState,

  on(loadEnrollments, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadEnrollmentsSuccess, (state, { enrollments }) => ({
    ...state,
    enrollments,
    enrolledCourseIds: enrollments.map(e => e.courseId),
    loading: false
  })),
  on(loadEnrollmentsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(enrollInCourse, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(enrollInCourseSuccess, (state, { enrollment }) => ({
    ...state,
    enrollments: [...state.enrollments, enrollment],
    enrolledCourseIds: [...state.enrolledCourseIds, enrollment.courseId],
    loading: false
  })),
  on(enrollInCourseFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(unenrollFromCourse, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(unenrollFromCourseSuccess, (state, { enrollmentId, courseId }) => ({
    ...state,
    enrollments: state.enrollments.filter(e => e.id !== enrollmentId),
    enrolledCourseIds: state.enrolledCourseIds.filter(id => id !== courseId),
    loading: false
  })),
  on(unenrollFromCourseFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
