
import React from 'react';
import AdminDashboardHeader from '@/components/admin/AdminDashboardHeader';
import AdminDashboardTabs from '@/components/admin/AdminDashboardTabs';
import AdminNoticesManagement from '@/components/admin/AdminNoticesManagement';

const AdminNotices: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminDashboardHeader />
      <AdminDashboardTabs />
      <AdminNoticesManagement />
    </div>
  );
};

export default AdminNotices;
