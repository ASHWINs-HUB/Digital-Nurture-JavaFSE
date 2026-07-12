import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseList } from './course-list';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectAllCourses, selectCoursesLoading, selectCoursesError, selectSelectedCourseId } from '../../store/course/course.selectors';
import { selectEnrolledCourseIds, selectEnrollmentLoading } from '../../store/enrollment/enrollment.selectors';
import { loadCourses } from '../../store/course/course.actions';

describe('CourseList Component', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            { selector: selectAllCourses, value: [] },
            { selector: selectCoursesLoading, value: false },
            { selector: selectCoursesError, value: null },
            { selector: selectSelectedCourseId, value: null },
            { selector: selectEnrolledCourseIds, value: [] },
            { selector: selectEnrollmentLoading, value: false }
          ]
        })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    vi.spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadCourses on init', () => {
    expect(store.dispatch).toHaveBeenCalledWith(loadCourses());
  });
});
