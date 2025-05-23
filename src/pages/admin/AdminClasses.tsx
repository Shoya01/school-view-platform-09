
import React from 'react';
import AdminDashboardHeader from '@/components/admin/AdminDashboardHeader';
import AdminDashboardTabs from '@/components/admin/AdminDashboardTabs';
import AdminClassesManagement from '@/components/admin/AdminClassesManagement';

const AdminClasses: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminDashboardHeader />
      <AdminDashboardTabs />
      <AdminClassesManagement />
    </div>
  );
};

export default AdminClasses;
