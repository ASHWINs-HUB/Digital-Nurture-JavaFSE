import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { EnrollmentEffects } from './enrollment.effects';
import * as EnrollmentActions from './enrollment.actions';
import { EnrollmentService } from '../../services/enrollment';

describe('EnrollmentEffects', () => {
  let actions$: Observable<any>;
  let effects: EnrollmentEffects;
  let enrollmentService: any;

  beforeEach(() => {
    enrollmentService = {
      enrollInCourse: vi.fn(),
      unenrollFromCourse: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        EnrollmentEffects,
        provideMockActions(() => actions$),
        { provide: EnrollmentService, useValue: enrollmentService }
      ]
    });

    effects = TestBed.inject(EnrollmentEffects);
  });

  it('should handle enrollInCourse success', () => {
    const mockEnrollment = { id: 1, courseId: 1 } as any;
    enrollmentService.enrollInCourse.mockReturnValue(of(mockEnrollment));
    actions$ = of(EnrollmentActions.enrollInCourse({ request: { courseId: 1, studentName: 'J', email: 'j@t', notes: '' } }));

    effects.enrollInCourse$.subscribe(action => {
      expect(action).toEqual(EnrollmentActions.enrollInCourseSuccess({ enrollment: mockEnrollment }));
    });
  });

  it('should handle enrollInCourse failure', () => {
    enrollmentService.enrollInCourse.mockReturnValue(throwError(() => new Error('Error')));
    actions$ = of(EnrollmentActions.enrollInCourse({ request: { courseId: 1, studentName: 'J', email: 'j@t', notes: '' } }));

    effects.enrollInCourse$.subscribe(action => {
      expect(action).toEqual(EnrollmentActions.enrollInCourseFailure({ error: 'Error' }));
    });
  });
});
