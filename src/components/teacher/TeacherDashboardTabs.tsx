
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TeacherDashboardTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Map routes to tab values
  const getActiveTab = () => {
    if (currentPath.includes('/teacher/students')) return 'students';
    if (currentPath.includes('/teacher/assignments')) return 'assignments';
    if (currentPath.includes('/teacher/attendance')) return 'attendance';
    if (currentPath.includes('/teacher/notices')) return 'notices';
    if (currentPath.includes('/teacher/profile')) return 'profile';
    return 'overview'; // Default to overview tab
  };

  const handleTabChange = (value: string) => {
    switch (value) {
      case 'overview':
        navigate('/teacher/dashboard');
        break;
      case 'students':
        navigate('/teacher/students');
        break;
      case 'assignments':
        navigate('/teacher/assignments');
        break;
      case 'attendance':
        navigate('/teacher/attendance');
        break;
      case 'notices':
        navigate('/teacher/notices');
        break;
      case 'profile':
        navigate('/teacher/profile');
        break;
    }
  };

  return (
    <Tabs
      value={getActiveTab()}
      onValueChange={handleTabChange}
      className="w-full"
    >
      <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="students">Students</TabsTrigger>
        <TabsTrigger value="assignments">Assignments</TabsTrigger>
        <TabsTrigger value="attendance">Attendance</TabsTrigger>
        <TabsTrigger value="notices">Notices</TabsTrigger>
        <TabsTrigger value="profile">Profile</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TeacherDashboardTabs;
