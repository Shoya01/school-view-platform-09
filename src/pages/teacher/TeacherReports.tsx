
import React from 'react';
import TeacherDashboardHeader from '@/components/teacher/TeacherDashboardHeader';
import TeacherDashboardTabs from '@/components/teacher/TeacherDashboardTabs';
import TeacherReportsManagement from '@/components/teacher/TeacherReportsManagement';

const TeacherReports: React.FC = () => {
  return (
    <div className="space-y-6">
      <TeacherDashboardHeader />
      <TeacherDashboardTabs />
      <TeacherReportsManagement />
    </div>
  );
};

export default TeacherReports;
