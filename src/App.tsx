
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

import MainLayout from "@/components/layout/MainLayout";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";

// Student Pages
import StudentDashboard from "@/pages/student/StudentDashboard";
import StudentAssignments from "@/pages/student/StudentAssignments";
import StudentAttendance from "@/pages/student/StudentAttendance";
import StudentNotices from "@/pages/student/StudentNotices";
import StudentProfile from "@/pages/student/StudentProfile";

// Teacher Pages
import TeacherDashboard from "@/pages/teacher/TeacherDashboard";
import TeacherAssignments from "@/pages/teacher/TeacherAssignments";
import TeacherAttendance from "@/pages/teacher/TeacherAttendance";
import TeacherNotices from "@/pages/teacher/TeacherNotices";
import TeacherStudents from "@/pages/teacher/TeacherStudents";
import TeacherProfile from "@/pages/teacher/TeacherProfile";

// Admin Pages
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminTeachers from "@/pages/admin/AdminTeachers";
import AdminStudents from "@/pages/admin/AdminStudents";
import AdminClasses from "@/pages/admin/AdminClasses";
import AdminNotices from "@/pages/admin/AdminNotices";
import AdminReports from "@/pages/admin/AdminReports";
import AdminSettings from "@/pages/admin/AdminSettings";

// 404 Page
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Define App as a React function component to ensure hooks work correctly
const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  {/* Public routes */}
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  
                  {/* Protected routes */}
                  <Route element={<MainLayout />}>
                    {/* Student routes */}
                    <Route path="/student/dashboard" element={<StudentDashboard />} />
                    <Route path="/student/assignments" element={<StudentAssignments />} />
                    <Route path="/student/attendance" element={<StudentAttendance />} />
                    <Route path="/student/notices" element={<StudentNotices />} />
                    <Route path="/student/profile" element={<StudentProfile />} />
                    
                    {/* Teacher routes */}
                    <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
                    <Route path="/teacher/assignments" element={<TeacherAssignments />} />
                    <Route path="/teacher/attendance" element={<TeacherAttendance />} />
                    <Route path="/teacher/notices" element={<TeacherNotices />} />
                    <Route path="/teacher/students" element={<TeacherStudents />} />
                    <Route path="/teacher/profile" element={<TeacherProfile />} />
                    
                    {/* Admin routes */}
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/teachers" element={<AdminTeachers />} />
                    <Route path="/admin/students" element={<AdminStudents />} />
                    <Route path="/admin/classes" element={<AdminClasses />} />
                    <Route path="/admin/notices" element={<AdminNotices />} />
                    <Route path="/admin/reports" element={<AdminReports />} />
                    <Route path="/admin/settings" element={<AdminSettings />} />
                  </Route>
                  
                  {/* 404 route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
