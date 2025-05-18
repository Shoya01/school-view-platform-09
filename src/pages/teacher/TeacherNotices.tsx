
import React from 'react';
import TeacherDashboardHeader from '@/components/teacher/TeacherDashboardHeader';
import TeacherDashboardTabs from '@/components/teacher/TeacherDashboardTabs';
import NoticesManagement from '@/components/teacher/NoticesManagement';

const TeacherNotices: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <TeacherDashboardHeader />
      <TeacherDashboardTabs />
      <NoticesManagement />
    </div>
  );
};

export default TeacherNotices;
