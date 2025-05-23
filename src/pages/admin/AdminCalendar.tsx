
import React from 'react';
import AdminDashboardHeader from '@/components/admin/AdminDashboardHeader';
import AdminDashboardTabs from '@/components/admin/AdminDashboardTabs';
import AdminCalendarManagement from '@/components/admin/AdminCalendarManagement';

const AdminCalendar: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <AdminDashboardHeader />
      <AdminDashboardTabs />
      <AdminCalendarManagement />
    </div>
  );
};

export default AdminCalendar;
