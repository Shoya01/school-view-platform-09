
import React from 'react';
import AdminDashboardHeader from '@/components/admin/AdminDashboardHeader';
import AdminDashboardTabs from '@/components/admin/AdminDashboardTabs';
import AdminSettingsManagement from '@/components/admin/AdminSettingsManagement';

const AdminSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminDashboardHeader />
      <AdminDashboardTabs />
      <AdminSettingsManagement />
    </div>
  );
};

export default AdminSettings;
