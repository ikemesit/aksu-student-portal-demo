import { Component, computed, inject, signal } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-course-registration',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './course-registration.html',
  styleUrl: './course-registration.scss',
})
export class CourseRegistrationComponent {
  private auth: StudentService = inject(StudentService);
  student = this.auth.student;
  balance = computed(() => this.student()?.balance || 0);
  registeredCount = computed(
    () =>
      this.student()?.enrolledCourses.filter((c: { semester: string | string[] }) =>
        c.semester.includes('2026')
      ).length || 0
  );

  availableCourses = signal([
    { id: 'c5', code: 'CS201', title: 'Data Structures', credits: 4, semester: 'Spring 2026' },
    { id: 'c6', code: 'CS301', title: 'Algorithms', credits: 3, semester: 'Spring 2026' },
    { id: 'c7', code: 'CS320', title: 'Web Development', credits: 3, semester: 'Spring 2026' },
    { id: 'c8', code: 'MATH301', title: 'Linear Algebra', credits: 3, semester: 'Spring 2026' },
  ]);

  register(courseId: string) {
    this.auth.registerCourse(courseId);
  }
}
