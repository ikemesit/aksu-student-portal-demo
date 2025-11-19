// src/app/dashboard/shared/student.service.ts
import { Injectable, Signal, signal } from '@angular/core';
import { AVAILABLE_COURSES, MOCK_STUDENT } from './mock-data';
import { Payment } from '../../shared/models/payment.interface';
import { Student } from '../../shared/models/student.interface';

@Injectable({ providedIn: 'root' })
export class StudentService {
  currentStudent = signal<Student | null>(null);
  student: Signal<Student | null> = this.currentStudent.asReadonly();

  // Mock logged-in student
  login(studentId: string, password: string): boolean {
    if (studentId === 'S12345' && password === 'password') {
      this.currentStudent.set(MOCK_STUDENT);
      localStorage.setItem('loggedIn', '1');
      localStorage.setItem('loggedInStudent', JSON.stringify(MOCK_STUDENT));
      return true;
    }
    return false;
  }
  logout() {
    this.currentStudent.set(null);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('loggedInStudent');
  }

  registerCourse(courseId: string) {
    this.currentStudent.update((s) => {
      if (!s) return s;
      const course = AVAILABLE_COURSES.find((c) => c.id === courseId);
      if (course && s.balance === 0) {
        s.enrolledCourses.push({ ...course, registered: true });
        return { ...s };
      }
      return s;
    });
  }

  makePayment(amount: number, method: string) {
    this.currentStudent.update((s) => {
      if (!s) return s;
      const payment: Payment = {
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        amount,
        method,
      };
      s.payments.unshift(payment);
      s.balance = Math.max(0, s.balance - amount);
      // Mark fees as paid proportionally
      let remaining = amount;
      for (const fee of s.fees) {
        if (!fee.paid && remaining > 0) {
          const pay = Math.min(remaining, fee.amount);
          fee.amount -= pay;
          remaining -= pay;
          if (fee.amount <= 0) fee.paid = true;
        }
      }
      return { ...s };
    });
  }
}
