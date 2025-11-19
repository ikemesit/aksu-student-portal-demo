// src/app/dashboard/finance/fees.component.ts
import { Component, computed, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../shared/student.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-fees',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './fees.html',
  styleUrl: './fees.scss',
})
export class FeesComponent {
  student = inject(StudentService).student;
  amount = model(0);
  method = model('Bank Transfer');

  unpaidFees = computed(() => this.student()?.fees.filter((f) => !f.paid && f.amount > 0) || []);

  pay() {
    if (this.amount() > 0) {
      inject(StudentService).makePayment(this.amount(), this.method());
      this.amount.set(0);
    }
  }
}
