
import React from 'react';
import { format } from 'date-fns';
import { Calendar, FileText, Bell } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AttendanceCard from './AttendanceCard';
import AssignmentsCard from './AssignmentsCard';
import NoticesCard from './NoticesCard';
import AcademicPerformance from './AcademicPerformance';

// Mock data for student dashboard
const mockAttendance = {
  present: 85,
  absent: 3,
  late: 2,
};

const mockAssignments = [
  { id: '1', title: 'Mathematics Problem Set', dueDate: '2025-05-20', status: 'pending' as const },
  { id: '2', title: 'English Essay', dueDate: '2025-05-25', status: 'submitted' as const },
  { id: '3', title: 'Science Lab Report', dueDate: '2025-05-18', status: 'graded' as const, grade: 'A' },
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

const mockPerformances = [
  { subject: 'Mathematics', percentage: 85 },
  { subject: 'Science', percentage: 92 },
  { subject: 'English', percentage: 78 },
  { subject: 'History', percentage: 81 },
  { subject: 'Art', percentage: 95 },
  { subject: 'Physical Education', percentage: 88 },
];

const DashboardOverview = () => {
  const today = new Date();
  const formattedDate = format(today, "EEEE, MMMM d, yyyy");
  
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Today's date and quick stats */}
      <div className="mb-6">
        <div className="text-sm text-muted-foreground">
          {formattedDate}
        </div>
        <div className="mt-2 flex flex-wrap gap-4">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
            <Calendar className="mr-1 h-3 w-3" /> Today's Attendance: Present
          </Badge>
          <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200">
            <FileText className="mr-1 h-3 w-3" /> Assignments Due: 2
          </Badge>
          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">
            <Bell className="mr-1 h-3 w-3" /> New Notices: 1
          </Badge>
        </div>
      </div>
      
      {/* Main dashboard content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-1 space-y-6">
          <Card className="overflow-hidden border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-0">
              <AttendanceCard attendance={mockAttendance} />
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-1 space-y-6">
          <Card className="overflow-hidden border-t-4 border-t-amber-500 shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-0">
              <AssignmentsCard assignments={mockAssignments} />
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-1 space-y-6">
          <Card className="overflow-hidden border-t-4 border-t-green-500 shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-0">
              <NoticesCard notices={mockNotices} />
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card className="overflow-hidden border-t-4 border-t-purple-500 shadow-sm hover:shadow-md transition-all mt-6">
        <CardContent className="p-0">
          <AcademicPerformance performances={mockPerformances} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
