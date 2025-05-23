
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminDashboardTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Map routes to tab values
  const getActiveTab = () => {
    if (currentPath.includes('/admin/teachers')) return 'teachers';
    if (currentPath.includes('/admin/students')) return 'students';
    if (currentPath.includes('/admin/classes')) return 'classes';
    if (currentPath.includes('/admin/notices')) return 'notices';
    if (currentPath.includes('/admin/reports')) return 'reports';
    if (currentPath.includes('/admin/calendar')) return 'calendar';
    if (currentPath.includes('/admin/settings')) return 'settings';
    return 'overview'; // Default to overview tab
  };

  const handleTabChange = (value: string) => {
    switch (value) {
      case 'overview':
        navigate('/admin/dashboard');
        break;
      case 'teachers':
        navigate('/admin/teachers');
        break;
      case 'students':
        navigate('/admin/students');
        break;
      case 'classes':
        navigate('/admin/classes');
        break;
      case 'notices':
        navigate('/admin/notices');
        break;
      case 'reports':
        navigate('/admin/reports');
        break;
      case 'calendar':
        navigate('/admin/calendar');
        break;
      case 'settings':
        navigate('/admin/settings');
        break;
    }
  };

  return (
    <Tabs
      value={getActiveTab()}
      onValueChange={handleTabChange}
      className="w-full"
    >
      <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="teachers">Teachers</TabsTrigger>
        <TabsTrigger value="students">Students</TabsTrigger>
        <TabsTrigger value="classes">Classes</TabsTrigger>
        <TabsTrigger value="notices">Notices</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="calendar">Calendar</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default AdminDashboardTabs;
