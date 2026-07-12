import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { CourseEffects } from './course.effects';
import * as CourseActions from './course.actions';
import { CourseService } from '../../services/course';

describe('CourseEffects', () => {
  let actions$: Observable<any>;
  let effects: CourseEffects;
  let courseService: any;

  beforeEach(() => {
    courseService = {
      getCourses: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        CourseEffects,
        provideMockActions(() => actions$),
        { provide: CourseService, useValue: courseService }
      ]
    });

    effects = TestBed.inject(CourseEffects);
  });

  it('should handle loadCourses success', () => {
    courseService.getCourses.mockReturnValue(of([]));
    actions$ = of(CourseActions.loadCourses());

    effects.loadCourses$.subscribe(action => {
      expect(action).toEqual(CourseActions.loadCoursesSuccess({ courses: [] }));
    });
  });

  it('should handle loadCourses failure', () => {
    courseService.getCourses.mockReturnValue(throwError(() => new Error('Error')));
    actions$ = of(CourseActions.loadCourses());

    effects.loadCourses$.subscribe(action => {
      expect(action).toEqual(CourseActions.loadCoursesFailure({ error: 'Error' }));
    });
  });
});
