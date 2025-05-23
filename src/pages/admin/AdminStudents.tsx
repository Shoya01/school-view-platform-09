
import React from 'react';
import AdminDashboardHeader from '@/components/admin/AdminDashboardHeader';
import AdminDashboardTabs from '@/components/admin/AdminDashboardTabs';
import AdminStudentsManagement from '@/components/admin/AdminStudentsManagement';

const AdminStudents: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminDashboardHeader />
      <AdminDashboardTabs />
      <AdminStudentsManagement />
    </div>
  );
};

export default AdminStudents;
