
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

import MainLayout from "@/components/layout/MainLayout";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";

// Student Pages
import StudentDashboard from "@/pages/student/StudentDashboard";

// Teacher Pages
import TeacherDashboard from "@/pages/teacher/TeacherDashboard";

// Admin Pages
import AdminDashboard from "@/pages/admin/AdminDashboard";

// 404 Page
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
              {/* Add more student routes as needed */}
              
              {/* Teacher routes */}
              <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
              {/* Add more teacher routes as needed */}
              
              {/* Admin routes */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              {/* Add more admin routes as needed */}
            </Route>
            
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
