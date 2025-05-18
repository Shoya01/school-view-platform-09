
import React from 'react';
import TeacherDashboardHeader from '@/components/teacher/TeacherDashboardHeader';
import TeacherDashboardTabs from '@/components/teacher/TeacherDashboardTabs';
import TeacherDashboardOverview from '@/components/teacher/TeacherDashboardOverview';

const TeacherDashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <TeacherDashboardHeader />
      <TeacherDashboardTabs />
      <TeacherDashboardOverview />
    </div>
  );
};

export default TeacherDashboard;
