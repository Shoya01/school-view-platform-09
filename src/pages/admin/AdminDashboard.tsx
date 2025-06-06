
import React from 'react';
import AdminDashboardHeader from '@/components/admin/AdminDashboardHeader';
import AdminDashboardTabs from '@/components/admin/AdminDashboardTabs';
import { AdminDashboardContent } from '@/components/admin/AdminDashboardContent';

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminDashboardHeader />
      <AdminDashboardTabs />
      <AdminDashboardContent />
    </div>
  );
};

export default AdminDashboard;
