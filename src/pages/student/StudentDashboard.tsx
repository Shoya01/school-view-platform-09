
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClassDiscussion from '@/components/student/ClassDiscussion';
import DashboardOverview from '@/components/student/DashboardOverview';

const StudentDashboard = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome back, {currentUser?.name}!
        </h2>
        <p className="text-muted-foreground">
          Here's an overview of your academic performance and upcoming assignments.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="discussion" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> Class Discussion
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="animate-fade-in">
          <DashboardOverview />
        </TabsContent>
        
        <TabsContent value="discussion" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" /> Class Discussion
              </CardTitle>
              <CardDescription>
                Connect with your classmates and discuss your studies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ClassDiscussion />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentDashboard;
