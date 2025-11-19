import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StudentService } from './shared/student.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './home.html',
})
export class HomeComponent {
  studentService: StudentService = inject(StudentService);
  student = this.studentService.student;
}
