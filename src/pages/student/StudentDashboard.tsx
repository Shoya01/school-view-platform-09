
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, CheckCircle, FileText, X } from 'lucide-react';

// Mock data for student dashboard
const mockAttendance = {
  present: 85,
  absent: 3,
  late: 2,
};

const mockAssignments = [
  { id: '1', title: 'Mathematics Problem Set', dueDate: '2025-05-20', status: 'pending' },
  { id: '2', title: 'English Essay', dueDate: '2025-05-25', status: 'submitted' },
  { id: '3', title: 'Science Lab Report', dueDate: '2025-05-18', status: 'graded', grade: 'A' },
];

const mockNotices = [
  {
    id: '1',
    title: 'Exam Schedule',
    content: 'Final exams will be held from June 10-15, 2025.',
    date: '2025-05-14',
    important: true
  },
  {
    id: '2',
    title: 'School Holiday',
    content: 'School will be closed on May 25 for Memorial Day.',
    date: '2025-05-10',
    important: false
  },
];

const StudentDashboard = () => {
  const { currentUser } = useAuth();

  const attendancePercentage = (mockAttendance.present / (mockAttendance.present + mockAttendance.absent + mockAttendance.late)) * 100;

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
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Attendance Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Calendar className="mr-2 h-5 w-5" /> Attendance
            </CardTitle>
            <CardDescription>Your current attendance record</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Attendance</span>
                  <span className="text-sm font-medium">{attendancePercentage.toFixed(1)}%</span>
                </div>
                <Progress value={attendancePercentage} className="mt-2" />
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-md bg-green-50 p-2">
                  <div className="text-2xl font-bold text-green-700">{mockAttendance.present}</div>
                  <div className="text-xs text-green-700">Present</div>
                </div>
                <div className="rounded-md bg-red-50 p-2">
                  <div className="text-2xl font-bold text-red-700">{mockAttendance.absent}</div>
                  <div className="text-xs text-red-700">Absent</div>
                </div>
                <div className="rounded-md bg-yellow-50 p-2">
                  <div className="text-2xl font-bold text-yellow-700">{mockAttendance.late}</div>
                  <div className="text-xs text-yellow-700">Late</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assignments Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <FileText className="mr-2 h-5 w-5" /> Assignments
            </CardTitle>
            <CardDescription>Your current assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-start justify-between border-b pb-2">
                  <div>
                    <div className="font-medium">{assignment.title}</div>
                    <div className="text-sm text-muted-foreground">Due: {assignment.dueDate}</div>
                  </div>
                  {assignment.status === 'pending' && (
                    <span className="inline-flex rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">
                      Pending
                    </span>
                  )}
                  {assignment.status === 'submitted' && (
                    <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                      Submitted
                    </span>
                  )}
                  {assignment.status === 'graded' && (
                    <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                      {assignment.grade}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <a href="/student/assignments" className="text-sm text-primary hover:underline">
              View all assignments
            </a>
          </CardFooter>
        </Card>

        {/* Notices Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Notices</CardTitle>
            <CardDescription>Important announcements</CardDescription>
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
            </div>
          </CardContent>
          <CardFooter>
            <a href="/student/notices" className="text-sm text-primary hover:underline">
              View all notices
            </a>
          </CardFooter>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Academic Performance</CardTitle>
          <CardDescription>Your grades and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-sm font-medium">Mathematics</div>
              <div className="flex items-center">
                <Progress value={85} className="h-2 flex-1" />
                <span className="ml-2 text-sm font-medium">85%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-medium">Science</div>
              <div className="flex items-center">
                <Progress value={92} className="h-2 flex-1" />
                <span className="ml-2 text-sm font-medium">92%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-medium">English</div>
              <div className="flex items-center">
                <Progress value={78} className="h-2 flex-1" />
                <span className="ml-2 text-sm font-medium">78%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-medium">History</div>
              <div className="flex items-center">
                <Progress value={81} className="h-2 flex-1" />
                <span className="ml-2 text-sm font-medium">81%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-medium">Art</div>
              <div className="flex items-center">
                <Progress value={95} className="h-2 flex-1" />
                <span className="ml-2 text-sm font-medium">95%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-medium">Physical Education</div>
              <div className="flex items-center">
                <Progress value={88} className="h-2 flex-1" />
                <span className="ml-2 text-sm font-medium">88%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
