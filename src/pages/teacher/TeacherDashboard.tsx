
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import TeacherDashboardOverview from '@/components/teacher/TeacherDashboardOverview';
import StudentManagement from '@/components/teacher/StudentManagement';
import AssignmentsManagement from '@/components/teacher/AssignmentsManagement';
import AttendanceManagement from '@/components/teacher/AttendanceManagement';
import NoticesManagement from '@/components/teacher/NoticesManagement';
import TeacherProfile from '@/components/teacher/TeacherProfile';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
        <p className="text-muted-foreground">
          Manage your classes, assignments, attendance and more.
        </p>
      </div>
      
      <Tabs
        defaultValue="overview"
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="notices">Notices</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <TeacherDashboardOverview />
        </TabsContent>
        
        <TabsContent value="students" className="space-y-4">
          <StudentManagement />
        </TabsContent>
        
        <TabsContent value="assignments" className="space-y-4">
          <AssignmentsManagement />
        </TabsContent>
        
        <TabsContent value="attendance" className="space-y-4">
          <AttendanceManagement />
        </TabsContent>
        
        <TabsContent value="notices" className="space-y-4">
          <NoticesManagement />
        </TabsContent>
        
        <TabsContent value="profile" className="space-y-4">
          <TeacherProfile />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeacherDashboard;
