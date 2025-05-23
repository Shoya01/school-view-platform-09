
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TeacherDashboardTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Check if we're in the reports section
  const isReportsSection = currentPath.includes('/teacher/reports');
  
  // If in reports section, show report-specific tabs
  if (isReportsSection) {
    return (
      <Tabs defaultValue="attendance" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="attendance" className="flex items-center">
            Attendance Reports
          </TabsTrigger>
          <TabsTrigger value="grades" className="flex items-center">
            Grade Distribution
          </TabsTrigger>
          <TabsTrigger value="assignments" className="flex items-center">
            Assignment Completion
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center">
            Student Performance
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );
  }
  
  // For other sections, map routes to tab values
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
