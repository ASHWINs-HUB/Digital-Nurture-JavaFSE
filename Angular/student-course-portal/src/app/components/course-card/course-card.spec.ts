import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCard } from './course-card';

describe('CourseCard Component', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  const mockCourse = {
    id: 1,
    title: 'Test Course',
    body: 'Test Body',
    name: 'Test Course',
    code: 'CSE101',
    credits: 3,
    status: 'active' as const,
    price: 1000,
    instructor: 'John Doe',
    duration: '4 weeks',
    category: 'Programming'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit enrollRequested on enroll click', () => {
    vi.spyOn(component.enrollRequested, 'emit');
    component.enrollRequested.emit(mockCourse.id);
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });
});
