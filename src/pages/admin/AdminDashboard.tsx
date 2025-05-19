
import React from 'react';
import AdminDashboardHeader from '@/components/admin/AdminDashboardHeader';
import AdminStatCards from '@/components/admin/AdminStatCards';
import AdminClassesOverview from '@/components/admin/AdminClassesOverview';
import AdminAnnouncementsCard from '@/components/admin/AdminAnnouncementsCard';
import AdminQuickActions from '@/components/admin/AdminQuickActions';
import { getSchoolStats, getClassesOverview, getSchoolNotices } from '@/services/adminService';

const AdminDashboard: React.FC = () => {
  // Get mock data
  const schoolStats = getSchoolStats();
  const classesOverview = getClassesOverview();
  const schoolNotices = getSchoolNotices();

  return (
    <div className="space-y-6">
      <AdminDashboardHeader />
      
      {/* Stats Overview */}
      <AdminStatCards stats={schoolStats} />
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Classes Card */}
        <AdminClassesOverview classes={classesOverview} />

        {/* Notices Card */}
        <AdminAnnouncementsCard notices={schoolNotices} />
      </div>
      
      {/* Quick Actions */}
      <AdminQuickActions />
    </div>
  );
};

export default AdminDashboard;
