
import React from 'react';
import AdminDashboardHeader from '@/components/admin/AdminDashboardHeader';
import AdminStatCards from '@/components/admin/AdminStatCards';
import AdminClassesOverview from '@/components/admin/AdminClassesOverview';
import AdminAnnouncementsCard from '@/components/admin/AdminAnnouncementsCard';
import AdminQuickActions from '@/components/admin/AdminQuickActions';
import { AdminDashboardContent } from '@/components/admin/AdminDashboardContent';

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminDashboardHeader />
      <AdminDashboardContent />
    </div>
  );
};

export default AdminDashboard;
