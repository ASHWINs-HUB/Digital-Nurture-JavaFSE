import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrollmentForm } from './enrollment-form';
import { ReactiveFormsModule } from '@angular/forms';

describe('EnrollmentForm Component', () => {
  let component: EnrollmentForm;
  let fixture: ComponentFixture<EnrollmentForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentForm, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentForm);
    component = fixture.componentInstance;
    component.courseId = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.enrollmentForm.valid).toBeFalsy();
  });

  it('should emit enroll when valid and submitted', () => {
    vi.spyOn(component.enroll, 'emit');
    component.enrollmentForm.patchValue({
      studentName: 'John Doe',
      email: 'john@example.com'
    });
    component.onSubmit();
    expect(component.enroll.emit).toHaveBeenCalled();
  });
});
