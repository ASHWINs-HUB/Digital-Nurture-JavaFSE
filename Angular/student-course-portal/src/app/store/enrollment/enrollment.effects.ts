import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EnrollmentService } from '../../services/enrollment';
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
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EnrollmentEffects {
  private readonly actions$ = inject(Actions);
  private readonly enrollmentService = inject(EnrollmentService);

  loadEnrollments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEnrollments),
      switchMap(({ studentId }) =>
        this.enrollmentService.getEnrollments(studentId).pipe(
          map(enrollments => loadEnrollmentsSuccess({ enrollments })),
          catchError(error => of(loadEnrollmentsFailure({ error: error.message })))
        )
      )
    )
  );

  enrollInCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enrollInCourse),
      mergeMap(({ request }) =>
        this.enrollmentService.enrollInCourse(request).pipe(
          map(enrollment => enrollInCourseSuccess({ enrollment })),
          catchError(error => of(enrollInCourseFailure({ error: error.message })))
        )
      )
    )
  );

  unenrollFromCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unenrollFromCourse),
      mergeMap(({ enrollmentId, courseId }) =>
        this.enrollmentService.unenrollFromCourse(enrollmentId).pipe(
          map(() => unenrollFromCourseSuccess({ enrollmentId, courseId })),
          catchError(error => of(unenrollFromCourseFailure({ error: error.message })))
        )
      )
    )
  );
}
