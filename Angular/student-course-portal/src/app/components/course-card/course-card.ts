import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { TitleCasePipe } from '../../pipes/title-case-pipe';
import { Course } from '../../services/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input({ required: true }) course!: Course;
  @Input() isEnrolled = false;
  @Output() enrollRequested = new EventEmitter<number>();
  @Output() selectCourse = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('CourseCard changes:', changes);
  }

  getStatusClass() {
    return `status-${this.course.status}`;
  }

  getStatusStyle() {
    if (this.course.status === 'active') {
      return { color: 'green' };
    }
    if (this.course.status === 'completed') {
      return { color: 'blue' };
    }
    if (this.course.status === 'pending') {
      return { color: 'orange' };
    }
    return { color: 'black' };
  }
}
