
import React from 'react';
import AdminDashboardHeader from '@/components/admin/AdminDashboardHeader';
import AdminDashboardTabs from '@/components/admin/AdminDashboardTabs';
import AdminTeachersManagement from '@/components/admin/AdminTeachersManagement';

const AdminTeachers: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminDashboardHeader />
      <AdminDashboardTabs />
      <AdminTeachersManagement />
    </div>
  );
};

export default AdminTeachers;
