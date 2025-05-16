
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, FileText, User, Users, MessageSquare, BookOpen, Plus, School } from 'lucide-react';

// Mock data for admin dashboard
const schoolStats = {
  totalStudents: 450,
  totalTeachers: 28,
  totalClasses: 15,
  attendanceToday: 92,
};

const mockClasses = [
  { id: '1', name: '10-A', teacherName: 'Mrs. Johnson', studentCount: 28, attendanceToday: 26 },
  { id: '2', name: '10-B', teacherName: 'Mr. Smith', studentCount: 30, attendanceToday: 28 },
  { id: '3', name: '11-A', teacherName: 'Ms. Davis', studentCount: 25, attendanceToday: 23 },
];

const mockNotices = [
  {
    id: '1',
    title: 'School Board Meeting',
    content: 'School board meeting scheduled for May 22, 2025 at 4:00 PM.',
    date: '2025-05-15',
    important: true
  },
  {
    id: '2',
    title: 'End of Semester',
    content: 'The semester ends on June 15, 2025. All grades must be submitted by June 20.',
    date: '2025-05-12',
    important: true
  },
];

const AdminDashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="space-y-6">
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
      
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.totalStudents}</div>
            <Progress value={100} className="h-1 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.totalTeachers}</div>
            <Progress value={100} className="h-1 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.totalClasses}</div>
            <Progress value={100} className="h-1 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schoolStats.attendanceToday}%</div>
            <Progress value={schoolStats.attendanceToday} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Classes Card */}
        <Card className="col-span-1">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Classes Overview</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <CardDescription>
              Current attendance and status of classes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockClasses.map((cls) => (
                <div key={cls.id} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <div className="font-medium">{cls.name}</div>
                    <div className="text-sm text-muted-foreground">Teacher: {cls.teacherName}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      {cls.attendanceToday}/{cls.studentCount}
                    </div>
                    <div className="text-xs text-muted-foreground">attendance</div>
                    <Progress 
                      value={(cls.attendanceToday / cls.studentCount) * 100} 
                      className="h-1 mt-1 w-16"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Manage Classes</Button>
          </CardFooter>
        </Card>

        {/* Notices Card */}
        <Card className="col-span-1">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>School Announcements</CardTitle>
              <Button variant="outline" size="sm">Add New</Button>
            </div>
            <CardDescription>
              Recent notices and announcements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockNotices.map((notice) => (
                <div key={notice.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium flex items-center">
                      {notice.important && (
                        <span className="mr-1 text-red-500">•</span>
                      )}
                      {notice.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">{notice.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{notice.content}</p>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                Create New Notice
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Quick Actions */}
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
    </div>
  );
};

export default AdminDashboard;
