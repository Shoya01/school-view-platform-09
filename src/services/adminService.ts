
import { SchoolStats, ClassOverview, SchoolNotice } from '@/types/admin';

// Mock data for admin dashboard
export const getSchoolStats = (): SchoolStats => ({
  totalStudents: 450,
  totalTeachers: 28,
  totalClasses: 15,
  attendanceToday: 92,
});

export const getClassesOverview = (): ClassOverview[] => [
  { id: '1', name: '10-A', teacherName: 'Mrs. Johnson', studentCount: 28, attendanceToday: 26 },
  { id: '2', name: '10-B', teacherName: 'Mr. Smith', studentCount: 30, attendanceToday: 28 },
  { id: '3', name: '11-A', teacherName: 'Ms. Davis', studentCount: 25, attendanceToday: 23 },
];

export const getSchoolNotices = (): SchoolNotice[] => [
  {
    id: '1',
    title: 'School Board Meeting',
    content: 'School board meeting scheduled for May 22, 2025 at 4:00 PM.',
    date: '2025-05-15',
    important: true
  },
  {
    id: '2',
    title: 'End of Semester',
    content: 'The semester ends on June 15, 2025. All grades must be submitted by June 20.',
    date: '2025-05-12',
    important: true
  },
];
