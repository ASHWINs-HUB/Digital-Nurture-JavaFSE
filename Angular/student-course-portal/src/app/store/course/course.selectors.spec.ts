import { selectAllCourses, selectCoursesLoading, selectSelectedCourseId } from './course.selectors';
import { CourseState } from './course.reducer';

describe('Course Selectors', () => {
  const initialState: CourseState = {
    courses: [{ id: 1, title: 'T', body: 'B', name: 'N', code: 'C', credits: 3, status: 'active', price: 1000, instructor: 'I', duration: 'D', category: 'Cat' }],
    selectedCourseId: 1,
    loading: false,
    error: null
  };

  it('should select courses', () => {
    const result = selectAllCourses.projector(initialState);
    expect(result.length).toBe(1);
  });

  it('should select loading', () => {
    const result = selectCoursesLoading.projector(initialState);
    expect(result).toBe(false);
  });

  it('should select selectedCourseId', () => {
    const result = selectSelectedCourseId.projector(initialState);
    expect(result).toBe(1);
  });
});
