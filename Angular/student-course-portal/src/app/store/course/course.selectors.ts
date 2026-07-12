import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

export const selectCourseState =
  createFeatureSelector<CourseState>('course');

export const selectAllCourses = createSelector(
  selectCourseState,
  state => state.courses
);

export const selectCoursesLoading = createSelector(
  selectCourseState,
  state => state.loading
);

export const selectCoursesError = createSelector(
  selectCourseState,
  state => state.error
);

export const selectSelectedCourseId = createSelector(
  selectCourseState,
  state => state.selectedCourseId
);

export const selectCourseById = (id: number) => createSelector(
  selectAllCourses,
  (courses) => courses.find(course => course.id === id) || null
);

export const selectSelectedCourse = createSelector(
  selectAllCourses,
  selectSelectedCourseId,
  (courses, selectedId) =>
    selectedId ? courses.find(course => course.id === selectedId) || null : null
);

export const selectCourseCount = createSelector(
  selectAllCourses,
  courses => courses.length
);