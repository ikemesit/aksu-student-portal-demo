import { Component, computed, inject } from '@angular/core';
import { StudentService } from '../../shared/student.service';

@Component({
  selector: 'app-transcript',
  standalone: true,
  templateUrl: './transcripts.html',
})
export class TranscriptsComponent {
  student = inject(StudentService).student;
  gpa = computed(() => {
    const t = this.student()?.transcript;
    if (!t || t.length === 0) return 'N/A';
    const points: Record<string, number> = {
      A: 4.0,
      'A-': 3.7,
      'B+': 3.3,
      B: 3.0,
      'B-': 2.7,
      'C+': 2.3,
      C: 2.0,
    };
    let total = 0,
      credits = 0;
    for (const c of t) {
      if (c.grade && points[c.grade] !== undefined) {
        total += points[c.grade] * c.credits;
        credits += c.credits;
      }
    }
    return credits > 0 ? (total / credits).toFixed(2) : 'N/A';
  });
}
