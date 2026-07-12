import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllEnrollments, selectEnrollmentCount } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css',
})
export class StudentProfile {
  private readonly store = inject(Store);

  enrollments$ = this.store.select(selectAllEnrollments);
  enrollmentCount$ = this.store.select(selectEnrollmentCount);
}
