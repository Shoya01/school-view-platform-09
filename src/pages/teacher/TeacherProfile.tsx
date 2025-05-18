
import React from 'react';
import TeacherDashboardHeader from '@/components/teacher/TeacherDashboardHeader';
import TeacherDashboardTabs from '@/components/teacher/TeacherDashboardTabs';
import TeacherProfileComponent from '@/components/teacher/TeacherProfile';

const TeacherProfile: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <TeacherDashboardHeader />
      <TeacherDashboardTabs />
      <TeacherProfileComponent />
    </div>
  );
};

export default TeacherProfile;
