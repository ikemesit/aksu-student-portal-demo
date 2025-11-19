// src/app/models/student.model.ts
export interface Course {
  id: string;
  code: string;
  title: string;
  credits: number;
  semester: string;
  grade?: string;
  registered?: boolean;
}
