
import React from 'react';
import TeacherDashboardHeader from '@/components/teacher/TeacherDashboardHeader';
import TeacherDashboardTabs from '@/components/teacher/TeacherDashboardTabs';
import AttendanceManagement from '@/components/teacher/AttendanceManagement';

const TeacherAttendance: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <TeacherDashboardHeader />
      <TeacherDashboardTabs />
      <AttendanceManagement />
    </div>
  );
};

export default TeacherAttendance;
