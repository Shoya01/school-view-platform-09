
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { MessageSquare, Grid } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClassDiscussion from '@/components/student/ClassDiscussion';
import DashboardOverview from '@/components/student/DashboardOverview';

const StudentDashboard = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Welcome back, {currentUser?.name}!
        </h2>
        <p className="text-muted-foreground mt-1">
          Here's an overview of your academic performance and upcoming assignments.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-4 bg-blue-50 dark:bg-blue-900/20">
          <TabsTrigger value="overview" className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800/50">
            <Grid className="h-4 w-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="discussion" className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800/50">
            <MessageSquare className="h-4 w-4" /> Class Discussion
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="animate-fade-in">
          <DashboardOverview />
        </TabsContent>
        
        <TabsContent value="discussion" className="animate-fade-in">
          <Card className="border-none shadow-md bg-gradient-to-b from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/10">
            <CardHeader className="pb-2 border-b">
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                <MessageSquare className="h-5 w-5" /> Class Discussion
              </CardTitle>
              <CardDescription>
                Connect with your classmates and discuss your studies
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ClassDiscussion />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentDashboard;
