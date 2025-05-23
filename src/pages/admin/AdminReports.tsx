
import React from 'react';
import AdminDashboardHeader from '@/components/admin/AdminDashboardHeader';
import AdminDashboardTabs from '@/components/admin/AdminDashboardTabs';
import AdminReportsManagement from '@/components/admin/AdminReportsManagement';

const AdminReports: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <AdminDashboardHeader />
      <AdminDashboardTabs />
      <AdminReportsManagement />
    </div>
  );
};

export default AdminReports;
