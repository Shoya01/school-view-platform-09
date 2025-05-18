
import React from 'react';
import TeacherDashboardHeader from '@/components/teacher/TeacherDashboardHeader';
import TeacherDashboardTabs from '@/components/teacher/TeacherDashboardTabs';
import StudentManagement from '@/components/teacher/StudentManagement';

const TeacherStudents: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <TeacherDashboardHeader />
      <TeacherDashboardTabs />
      <StudentManagement />
    </div>
  );
};

export default TeacherStudents;
