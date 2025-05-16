
export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImageUrl?: string;
  className?: string; // for students
  subject?: string; // for teachers
}

export interface Class {
  id: string;
  name: string;
  teacherId: string;
  teacherName: string;
  subject: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  classId: string;
  className: string;
  teacherId: string;
  teacherName: string;
  fileUrl?: string;
  createdAt: string;
}

export interface StudentAssignment {
  id: string;
  assignmentId: string;
  studentId: string;
  status: 'pending' | 'submitted' | 'graded';
  submissionDate?: string;
  grade?: number;
  feedback?: string;
  fileUrl?: string;
}

export interface Attendance {
  id: string;
  date: string;
  studentId: string;
  status: 'present' | 'absent' | 'late';
  classId: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  createdBy: string;
  creatorRole: UserRole;
  classId?: string;
  important: boolean;
}
