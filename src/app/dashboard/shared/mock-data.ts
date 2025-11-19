import { Course } from '../../shared/models/course.interface';
import { Student } from '../../shared/models/student.interface';

// Inside student.service.ts
export const MOCK_STUDENT: Student = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.j@university.edu',
  studentId: 'S12345',
  program: 'B.Sc. Computer Science',
  balance: 2450.0,
  department: 'Computer Science',
  level: 200,
  enrolledCourses: [
    {
      id: 'c1',
      code: 'CS101',
      title: 'Intro to Programming',
      credits: 3,
      semester: 'Fall 2025',
      registered: true,
    },
    {
      id: 'c2',
      code: 'MATH201',
      title: 'Calculus II',
      credits: 4,
      semester: 'Fall 2025',
      registered: true,
    },
  ],
  transcript: [
    {
      id: 'c1',
      code: 'CS101',
      title: 'Intro to Programming',
      credits: 3,
      semester: 'Spring 2025',
      grade: 'A-',
    },
    {
      id: 'c3',
      code: 'ENG101',
      title: 'English Composition',
      credits: 3,
      semester: 'Spring 2025',
      grade: 'B+',
    },
    { id: 'c4', code: 'PHY101', title: 'Physics I', credits: 4, semester: 'Fall 2024', grade: 'A' },
  ],
  fees: [
    { id: 'f1', description: 'Tuition Fall 2025', amount: 5000, dueDate: '2025-09-01', paid: true },
    { id: 'f2', description: 'Lab Fees', amount: 450, dueDate: '2025-10-15', paid: false },
    { id: 'f3', description: 'Library Fine', amount: 50, dueDate: '2025-11-01', paid: false },
  ],
  payments: [{ id: 'p1', date: '2025-08-15', amount: 5000, method: 'Bank Transfer' }],
};

export const AVAILABLE_COURSES: Course[] = [
  { id: 'c5', code: 'CS201', title: 'Data Structures', credits: 4, semester: 'Spring 2026' },
  { id: 'c6', code: 'CS301', title: 'Algorithms', credits: 3, semester: 'Spring 2026' },
  { id: 'c7', code: 'CS320', title: 'Web Development', credits: 3, semester: 'Spring 2026' },
  { id: 'c8', code: 'MATH301', title: 'Linear Algebra', credits: 3, semester: 'Spring 2026' },
];
