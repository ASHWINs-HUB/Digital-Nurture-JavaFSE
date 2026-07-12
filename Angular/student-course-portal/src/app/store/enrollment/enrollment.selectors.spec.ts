import { selectIsEnrolled, selectEnrollmentCount } from './enrollment.selectors';
import { EnrollmentState } from './enrollment.reducer';

describe('Enrollment Selectors', () => {
  const initialState: EnrollmentState = {
    enrollments: [{ id: 1, courseId: 1, studentId: 1, studentName: 'John', email: 'j@t.com', notes: '', enrolledAt: '23', status: 'active' }],
    enrolledCourseIds: [1],
    loading: false,
    error: null
  };

  it('should return true if enrolled', () => {
    const result = selectIsEnrolled(1).projector(initialState.enrolledCourseIds);
    expect(result).toBe(true);
  });

  it('should return false if not enrolled', () => {
    const result = selectIsEnrolled(2).projector(initialState.enrolledCourseIds);
    expect(result).toBe(false);
  });

  it('should return enrollment count', () => {
    const result = selectEnrollmentCount.projector(initialState.enrollments);
    expect(result).toBe(1);
  });
});
