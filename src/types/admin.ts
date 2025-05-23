
export interface SchoolStats {
  totalStudents: number;
  totalTeachers: number;
  totalClasses: number;
  attendanceToday: number;
}

export interface ClassOverview {
  id: string;
  name: string;
  teacherName: string;
  studentCount: number;
  attendanceToday: number;
}

export interface SchoolNotice {
  id: string;
  title: string;
  content: string;
  date: string;
  important: boolean;
}

export interface TeacherData {
  id: number;
  name: string;
  subject: string;
  classes: string[];
  status: 'active' | 'inactive' | 'on leave';
}

export interface StudentData {
  id: number;
  name: string;
  class: string;
  guardianName: string;
  attendance: number;
  status: 'active' | 'inactive' | 'suspended';
}

export interface ClassData {
  id: number;
  name: string;
  teacher: string;
  students: number;
  capacity: number;
  attendance: number;
}
