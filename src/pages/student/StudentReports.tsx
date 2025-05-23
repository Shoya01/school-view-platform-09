
import React from 'react';
import StudentDashboardHeader from '@/components/student/DashboardHeader';
import StudentReportsManagement from '@/components/student/StudentReportsManagement';

const StudentReports: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Reports</h1>
      <StudentReportsManagement />
    </div>
  );
};

export default StudentReports;
