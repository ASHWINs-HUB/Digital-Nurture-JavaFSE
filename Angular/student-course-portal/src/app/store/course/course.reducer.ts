import { createReducer, on } from '@ngrx/store';

import {
  loadCourses,
  loadCoursesSuccess,
  loadCoursesFailure,
  selectCourse,
  clearSelectedCourse
} from './course.actions';

import { Course } from '../../services/course';

export interface CourseState {
  courses: Course[];
  selectedCourseId: number | null;
  loading: boolean;
  error: string | null;
}

export const initialState: CourseState = {
  courses: [],
  selectedCourseId: null,
  loading: false,
  error: null
};

export const courseReducer = createReducer(
  initialState,

  on(loadCourses, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false
  })),

  on(loadCoursesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(selectCourse, (state, { courseId }) => ({
    ...state,
    selectedCourseId: courseId
  })),

  on(clearSelectedCourse, state => ({
    ...state,
    selectedCourseId: null
  }))
);