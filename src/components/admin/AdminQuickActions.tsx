
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, User, BookOpen, MessageSquare, Calendar, FileText, School } from 'lucide-react';

const AdminQuickActions: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Manage school resources and access key functions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-24 flex flex-col">
            <Users className="h-8 w-8 mb-2" />
            <span>Manage Teachers</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col">
            <User className="h-8 w-8 mb-2" />
            <span>Manage Students</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col">
            <BookOpen className="h-8 w-8 mb-2" />
            <span>Manage Classes</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col">
            <MessageSquare className="h-8 w-8 mb-2" />
            <span>Announcements</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col">
            <Calendar className="h-8 w-8 mb-2" />
            <span>School Calendar</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col">
            <FileText className="h-8 w-8 mb-2" />
            <span>Reports</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col">
            <School className="h-8 w-8 mb-2" />
            <span>School Profile</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col">
            <User className="h-8 w-8 mb-2" />
            <span>User Accounts</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminQuickActions;
