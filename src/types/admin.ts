
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
