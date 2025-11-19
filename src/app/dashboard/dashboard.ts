import { Component, computed, inject, OnInit } from '@angular/core';
import { StudentService } from './shared/student.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CurrencyPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent implements OnInit {
  auth = inject(StudentService);
  student = this.auth.student;
  private router = inject(Router);

  ngOnInit() {
    if (!this.student() && localStorage.getItem('loggedIn') === '1') {
      const storedStudent = localStorage.getItem('loggedInStudent');
      if (storedStudent) {
        const studentData = JSON.parse(storedStudent);
        this.auth.currentStudent.set(studentData);
      }
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
