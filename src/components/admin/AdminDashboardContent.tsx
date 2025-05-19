
import React from 'react';
import AdminStatCards from '@/components/admin/AdminStatCards';
import AdminClassesOverview from '@/components/admin/AdminClassesOverview';
import AdminAnnouncementsCard from '@/components/admin/AdminAnnouncementsCard';
import AdminQuickActions from '@/components/admin/AdminQuickActions';
import { getSchoolStats, getClassesOverview, getSchoolNotices } from '@/services/adminService';

export const AdminDashboardContent: React.FC = () => {
  // Get mock data
  const schoolStats = getSchoolStats();
  const classesOverview = getClassesOverview();
  const schoolNotices = getSchoolNotices();

  return (
    <>
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
    </>
  );
};
