
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { toast } from '@/components/ui/sonner';

const MainLayout = () => {
  const { isAuthenticated, currentUser, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    toast.error("Please login to continue");
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header user={currentUser!} />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
