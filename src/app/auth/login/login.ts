import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../dashboard/shared/student.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  private auth = inject(StudentService);
  private router = inject(Router);
  studentId = '';
  password = '';
  error = signal(false);

  login() {
    if (this.auth.login(this.studentId, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error.set(true);
    }
  }
}
