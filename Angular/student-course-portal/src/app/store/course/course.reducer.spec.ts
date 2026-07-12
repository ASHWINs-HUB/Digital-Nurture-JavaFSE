import { courseReducer, initialState } from './course.reducer';
import * as CourseActions from './course.actions';
import { Course } from '../../services/course';

describe('Course Reducer', () => {
  const mockCourse: Course = {
    id: 1, title: 'T', body: 'B', name: 'N', code: 'C',
    credits: 3, status: 'active', price: 1000, instructor: 'I',
    duration: 'D', category: 'Cat'
  };

  it('should return the initial state', () => {
    const action = { type: 'Unknown' } as any;
    const state = courseReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it('should set loading to true on loadCourses', () => {
    const action = CourseActions.loadCourses();
    const state = courseReducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('should update state on loadCoursesSuccess', () => {
    const action = CourseActions.loadCoursesSuccess({ courses: [mockCourse] });
    const state = courseReducer(initialState, action);
    expect(state.courses.length).toBe(1);
    expect(state.loading).toBe(false);
  });

  it('should set selectedCourseId on selectCourse', () => {
    const action = CourseActions.selectCourse({ courseId: 1 });
    const state = courseReducer(initialState, action);
    expect(state.selectedCourseId).toBe(1);
  });
});
