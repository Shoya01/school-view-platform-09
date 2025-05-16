
import React from 'react';
import AttendanceCard from './AttendanceCard';
import AssignmentsCard from './AssignmentsCard';
import NoticesCard from './NoticesCard';
import AcademicPerformance from './AcademicPerformance';

// Mock data for student dashboard
const mockAttendance = {
  present: 85,
  absent: 3,
  late: 2,
};

const mockAssignments = [
  { id: '1', title: 'Mathematics Problem Set', dueDate: '2025-05-20', status: 'pending' as const },
  { id: '2', title: 'English Essay', dueDate: '2025-05-25', status: 'submitted' as const },
  { id: '3', title: 'Science Lab Report', dueDate: '2025-05-18', status: 'graded' as const, grade: 'A' },
];

const mockNotices = [
  {
    id: '1',
    title: 'Exam Schedule',
    content: 'Final exams will be held from June 10-15, 2025.',
    date: '2025-05-14',
    important: true
  },
  {
    id: '2',
    title: 'School Holiday',
    content: 'School will be closed on May 25 for Memorial Day.',
    date: '2025-05-10',
    important: false
  },
];

const mockPerformances = [
  { subject: 'Mathematics', percentage: 85 },
  { subject: 'Science', percentage: 92 },
  { subject: 'English', percentage: 78 },
  { subject: 'History', percentage: 81 },
  { subject: 'Art', percentage: 95 },
  { subject: 'Physical Education', percentage: 88 },
];

const DashboardOverview = () => {
  return (
    <div className="animate-fade-in">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AttendanceCard attendance={mockAttendance} />
        <AssignmentsCard assignments={mockAssignments} />
        <NoticesCard notices={mockNotices} />
      </div>
      <AcademicPerformance performances={mockPerformances} />
    </div>
  );
};

export default DashboardOverview;
