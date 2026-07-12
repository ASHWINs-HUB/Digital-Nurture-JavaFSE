import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentProfile } from './student-profile';
import { provideMockStore } from '@ngrx/store/testing';
import { selectAllEnrollments, selectEnrollmentCount } from '../../store/enrollment/enrollment.selectors';

describe('StudentProfile Component', () => {
  let component: StudentProfile;
  let fixture: ComponentFixture<StudentProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfile],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectAllEnrollments, value: [] },
            { selector: selectEnrollmentCount, value: 0 }
          ]
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
