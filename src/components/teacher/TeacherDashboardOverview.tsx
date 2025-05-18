
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, FileText, User, Users, Plus } from 'lucide-react';

// Mock data for teacher dashboard
const mockClasses = [
  { id: '1', name: '10-A', subject: 'Mathematics', studentCount: 28, attendanceToday: 26 },
  { id: '2', name: '10-B', subject: 'Mathematics', studentCount: 30, attendanceToday: 28 },
  { id: '3', name: '11-A', subject: 'Mathematics', studentCount: 25, attendanceToday: 23 },
];

const mockAssignments = [
  { id: '1', title: 'Algebra Problems', className: '10-A', dueDate: '2025-05-20', submissionCount: 18, totalStudents: 28 },
  { id: '2', title: 'Geometry Quiz', className: '10-B', dueDate: '2025-05-18', submissionCount: 25, totalStudents: 30 },
  { id: '3', title: 'Calculus Homework', className: '11-A', dueDate: '2025-05-22', submissionCount: 10, totalStudents: 25 },
];

const mockNotices = [
  {
    id: '1',
    title: 'Staff Meeting',
    content: 'Staff meeting scheduled for May 20, 2025 at 3:00 PM.',
    date: '2025-05-12',
    important: true
  },
  {
    id: '2',
    title: 'Grade Submission',
    content: 'Please submit all grades by May 25, 2025.',
    date: '2025-05-10',
    important: true
  },
];

const TeacherDashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Classes Overview */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Your Classes</h3>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" /> Add Class
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {mockClasses.map((cls) => (
            <Card key={cls.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{cls.name}</CardTitle>
                <CardDescription>{cls.subject}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{cls.studentCount} students</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Today: {cls.attendanceToday}/{cls.studentCount}</span>
                  </div>
                </div>
                <Progress 
                  value={(cls.attendanceToday / cls.studentCount) * 100} 
                  className="h-1"
                />
              </CardContent>
              <CardFooter>
                <div className="flex space-x-2 w-full">
                  <Button variant="outline" size="sm" className="flex-1">
                    <User className="mr-2 h-4 w-4" /> Students
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" /> Attendance
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Assignments & Notices */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Assignments Card */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-medium">Active Assignments</CardTitle>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4 mr-1" /> New
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-start justify-between border-b pb-3">
                  <div>
                    <div className="font-medium">{assignment.title}</div>
                    <div className="text-sm text-muted-foreground">Class: {assignment.className}</div>
                    <div className="text-sm text-muted-foreground">Due: {assignment.dueDate}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      {assignment.submissionCount}/{assignment.totalStudents}
                    </div>
                    <div className="text-xs text-muted-foreground">submissions</div>
                    <Progress 
                      value={(assignment.submissionCount / assignment.totalStudents) * 100} 
                      className="h-1 mt-1 w-16"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <a href="/teacher/assignments" className="text-sm text-primary hover:underline">
              View all assignments
            </a>
          </CardFooter>
        </Card>

        {/* Notices Card */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-medium">Notices & Announcements</CardTitle>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>
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
          <CardFooter>
            <a href="/teacher/notices" className="text-sm text-primary hover:underline">
              View all notices
            </a>
          </CardFooter>
        </Card>
      </div>
      
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest actions in your classes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <FileText className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <p className="text-sm font-medium">New assignment submission</p>
                <p className="text-sm text-muted-foreground">John Doe submitted "Algebra Problems" - 15 minutes ago</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <p className="text-sm font-medium">Grade updated</p>
                <p className="text-sm text-muted-foreground">You graded Jane Smith's "Geometry Quiz" - 2 hours ago</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Calendar className="h-5 w-5 text-purple-700" />
              </div>
              <div>
                <p className="text-sm font-medium">Attendance marked</p>
                <p className="text-sm text-muted-foreground">You marked attendance for Class 10-B - 3 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboardOverview;
