import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnrollmentRequest } from '../../services/enrollment';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {
  @Input({ required: true }) courseId!: number;
  @Input() loading = false;
  @Output() enroll = new EventEmitter<EnrollmentRequest>();
  @Output() cancel = new EventEmitter<void>();

  enrollmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      notes: ['']
    });
  }

  onSubmit(): void {
    if (this.enrollmentForm.valid) {
      this.enroll.emit({
        courseId: this.courseId,
        ...this.enrollmentForm.value
      });
    } else {
      this.enrollmentForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.enrollmentForm.reset();
    this.cancel.emit();
  }
}
