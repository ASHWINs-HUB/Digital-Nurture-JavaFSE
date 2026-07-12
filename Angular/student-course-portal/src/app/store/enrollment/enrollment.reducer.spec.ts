import { enrollmentReducer, initialState } from './enrollment.reducer';
import * as EnrollmentActions from './enrollment.actions';
import { Enrollment } from '../../services/enrollment';

describe('Enrollment Reducer', () => {
  const mockEnrollment: Enrollment = {
    id: 1, courseId: 1, studentId: 1, studentName: 'John',
    email: 'john@test.com', notes: '', enrolledAt: '2023', status: 'active'
  };

  it('should return the initial state', () => {
    const action = { type: 'Unknown' } as any;
    const state = enrollmentReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it('should add enrollment on enrollInCourseSuccess', () => {
    const action = EnrollmentActions.enrollInCourseSuccess({ enrollment: mockEnrollment });
    const state = enrollmentReducer(initialState, action);
    expect(state.enrollments.length).toBe(1);
    expect(state.enrolledCourseIds).toContain(1);
  });

  it('should remove enrollment on unenrollFromCourseSuccess', () => {
    const stateWithEnrollment = { ...initialState, enrollments: [mockEnrollment], enrolledCourseIds: [1] };
    const action = EnrollmentActions.unenrollFromCourseSuccess({ enrollmentId: 1, courseId: 1 });
    const state = enrollmentReducer(stateWithEnrollment, action);
    expect(state.enrollments.length).toBe(0);
    expect(state.enrolledCourseIds.length).toBe(0);
  });
});
