import { Course } from './course.interface';
import { Fee } from './fee.interface';
import { Payment } from './payment.interface';

export interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  program: string;
  enrolledCourses: Course[];
  transcript: Course[];
  fees: Fee[];
  payments: Payment[];
  balance: number;
  department: string;
  level: number;
}
