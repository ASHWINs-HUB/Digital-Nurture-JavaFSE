import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { EnrollmentService } from './enrollment';

describe('EnrollmentService', () => {
  let service: EnrollmentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EnrollmentService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(EnrollmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should enroll in course', () => {
    const mockRequest = { courseId: 1, studentName: 'John', email: 'john@test.com', notes: '' };
    const mockResponse = { id: 1, postId: 1, name: 'John', email: 'john@test.com', body: '' };
    
    service.enrollInCourse(mockRequest).subscribe(enrollment => {
      expect(enrollment.studentName).toBe('John');
      expect(enrollment.courseId).toBe(1);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/comments');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});