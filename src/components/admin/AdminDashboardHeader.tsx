
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const AdminDashboardHeader: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome, {currentUser?.name}!
        </h2>
        <p className="text-muted-foreground">
          Here's an overview of the school's performance and activities.
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Notice
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
