
import React from 'react';
import TeacherDashboardHeader from '@/components/teacher/TeacherDashboardHeader';
import TeacherDashboardTabs from '@/components/teacher/TeacherDashboardTabs';
import AssignmentsManagement from '@/components/teacher/AssignmentsManagement';

const TeacherAssignments: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <TeacherDashboardHeader />
      <TeacherDashboardTabs />
      <AssignmentsManagement />
    </div>
  );
};

export default TeacherAssignments;
