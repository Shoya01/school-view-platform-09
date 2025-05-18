
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CheckCircle, XCircle, Clock, BarChart, User } from 'lucide-react';
import { format, subDays, eachDayOfInterval, startOfMonth, endOfMonth, isWeekend, isSameDay } from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Type definition for attendance record
type AttendanceStatus = 'present' | 'absent' | 'late';

interface AttendanceRecord {
  date: string;
  status: AttendanceStatus;
  subject?: string;
  teacherName?: string;
  startTime?: string;
  endTime?: string;
  remarks?: string;
}

// Mock data for attendance
const today = new Date();
const generateAttendanceData = (): AttendanceRecord[] => {
  const records: AttendanceRecord[] = [];
  
  // Last 30 days attendance
  const lastThirtyDays = eachDayOfInterval({
    start: subDays(today, 30),
    end: today
  });
  
  // Subjects and teachers
  const subjects = ['Mathematics', 'Science', 'English', 'History', 'Art', 'Physical Education'];
  const teachers = ['Dr. Sarah Thompson', 'Ms. Emily Chen', 'Mr. James Wilson', 'Mr. Robert Brown', 'Ms. Lisa Park', 'Mr. David Jones'];
  
  lastThirtyDays.forEach((day) => {
    // Skip weekends
    if (isWeekend(day)) return;
    
    // Generate 1-3 classes per day
    const classCount = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < classCount; i++) {
      const subjectIndex = Math.floor(Math.random() * subjects.length);
      const randomStatus = Math.random();
      let status: AttendanceStatus = 'present';
      
      // 80% present, 10% late, 10% absent
      if (randomStatus > 0.9) status = 'absent';
      else if (randomStatus > 0.8) status = 'late';
      
      records.push({
        date: format(day, 'yyyy-MM-dd'),
        status,
        subject: subjects[subjectIndex],
        teacherName: teachers[subjectIndex],
        startTime: `${8 + i}:00 AM`,
        endTime: `${9 + i}:00 AM`,
        remarks: status === 'late' ? 'Arrived 10 minutes late' : undefined
      });
    }
  });
  
  return records;
};

const mockAttendanceData = generateAttendanceData();

// Calculate attendance statistics
const calculateAttendanceStats = (records: AttendanceRecord[]) => {
  const total = records.length;
  const present = records.filter(r => r.status === 'present').length;
  const late = records.filter(r => r.status === 'late').length;
  const absent = records.filter(r => r.status === 'absent').length;
  
  return {
    total,
    present,
    late,
    absent,
    presentPercentage: (present / total) * 100,
    latePercentage: (late / total) * 100,
    absentPercentage: (absent / total) * 100
  };
};

// Get unique dates for calendar view
const getUniqueDates = (records: AttendanceRecord[]) => {
  const uniqueDates = new Set<string>();
  records.forEach(record => uniqueDates.add(record.date));
  return Array.from(uniqueDates);
};

// Status colors mapping
const statusColorMap = {
  present: 'bg-green-100 text-green-800 border-green-200',
  late: 'bg-amber-100 text-amber-800 border-amber-200',
  absent: 'bg-red-100 text-red-800 border-red-200'
};

// Status icon mapping
const statusIconMap = {
  present: <CheckCircle className="h-4 w-4 text-green-600" />,
  late: <Clock className="h-4 w-4 text-amber-600" />,
  absent: <XCircle className="h-4 w-4 text-red-600" />
};

const StudentAttendance = () => {
  const [selectedTab, setSelectedTab] = useState('list');
  const [selectedMonth, setSelectedMonth] = useState(format(today, 'yyyy-MM'));
  
  // Calculate attendance stats
  const stats = calculateAttendanceStats(mockAttendanceData);
  
  // Get current month dates
  const currentMonthStart = startOfMonth(new Date(selectedMonth));
  const currentMonthEnd = endOfMonth(new Date(selectedMonth));
  const monthDays = eachDayOfInterval({
    start: currentMonthStart,
    end: currentMonthEnd
  });
  
  // Get unique attendance dates
  const attendanceDates = getUniqueDates(mockAttendanceData);
  
  // Group attendance by date for easier lookup
  const attendanceByDate: { [key: string]: AttendanceStatus } = {};
  mockAttendanceData.forEach(record => {
    // If multiple entries for same day, prioritize: absent > late > present
    const currentStatus = attendanceByDate[record.date];
    if (!currentStatus || 
        (currentStatus === 'present' && record.status !== 'present') ||
        (currentStatus === 'late' && record.status === 'absent')) {
      attendanceByDate[record.date] = record.status;
    }
  });
  
  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-teal-700 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
          Attendance Record
        </h2>
        <p className="text-muted-foreground mt-1">
          Track your class attendance and view your attendance statistics
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/10 shadow-sm">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Classes</p>
              <h3 className="text-2xl font-bold">{stats.total}</h3>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-white to-green-50/50 dark:from-gray-900 dark:to-green-900/10 shadow-sm">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Present</p>
              <h3 className="text-2xl font-bold">{stats.present}</h3>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-white to-amber-50/50 dark:from-gray-900 dark:to-amber-900/10 shadow-sm">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Late</p>
              <h3 className="text-2xl font-bold">{stats.late}</h3>
            </div>
            <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-white to-red-50/50 dark:from-gray-900 dark:to-red-900/10 shadow-sm">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Absent</p>
              <h3 className="text-2xl font-bold">{stats.absent}</h3>
            </div>
            <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Progress */}
      <Card className="border-none shadow-sm">
        <CardHeader className="pb-0">
          <CardTitle className="text-lg font-medium">Attendance Overview</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Present ({stats.presentPercentage.toFixed(1)}%)</span>
                <span>{stats.present} classes</span>
              </div>
              <Progress value={stats.presentPercentage} className="h-2 bg-muted" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Late ({stats.latePercentage.toFixed(1)}%)</span>
                <span>{stats.late} classes</span>
              </div>
              <Progress value={stats.latePercentage} className="h-2 bg-muted" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Absent ({stats.absentPercentage.toFixed(1)}%)</span>
                <span>{stats.absent} classes</span>
              </div>
              <Progress value={stats.absentPercentage} className="h-2 bg-muted" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="bg-muted/50 mb-4">
          <TabsTrigger value="list" className="data-[state=active]:bg-background">List View</TabsTrigger>
          <TabsTrigger value="calendar" className="data-[state=active]:bg-background">Calendar View</TabsTrigger>
          <TabsTrigger value="chart" className="data-[state=active]:bg-background">Statistics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Log</CardTitle>
              <CardDescription>Detailed record of your class attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Teacher</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Remarks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockAttendanceData
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .slice(0, 10)
                    .map((record, index) => (
                      <TableRow key={index}>
                        <TableCell>{format(new Date(record.date), 'MMM dd, yyyy')}</TableCell>
                        <TableCell>{record.subject}</TableCell>
                        <TableCell>{record.teacherName}</TableCell>
                        <TableCell>{record.startTime} - {record.endTime}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {statusIconMap[record.status]}
                            <Badge variant="outline" className={`ml-1 ${statusColorMap[record.status]}`}>
                              {record.status}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{record.remarks || '-'}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Monthly View</span>
                <div>
                  <input 
                    type="month" 
                    value={selectedMonth} 
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="px-2 py-1 border rounded text-sm"
                  />
                </div>
              </CardTitle>
              <CardDescription>Calendar view of your attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-sm font-medium p-2">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {monthDays.map((day, i) => {
                  const dateString = format(day, 'yyyy-MM-dd');
                  const status = attendanceByDate[dateString];
                  const isToday = isSameDay(day, today);
                  
                  // Weekend or no attendance record
                  if (isWeekend(day) || !status) {
                    return (
                      <div 
                        key={i} 
                        className={`p-2 h-16 border rounded flex flex-col items-center justify-center 
                                 ${isWeekend(day) ? 'bg-muted/30' : ''} 
                                 ${isToday ? 'ring-2 ring-primary/50' : ''}`}
                      >
                        <span className={`text-sm ${isWeekend(day) ? 'text-muted-foreground' : ''}`}>
                          {format(day, 'd')}
                        </span>
                      </div>
                    );
                  }
                  
                  // Has attendance record
                  return (
                    <div 
                      key={i}
                      className={`p-2 h-16 border rounded flex flex-col items-center justify-center
                               ${status === 'present' ? 'bg-green-50 dark:bg-green-900/20' : 
                                 status === 'late' ? 'bg-amber-50 dark:bg-amber-900/20' : 
                                 'bg-red-50 dark:bg-red-900/20'}
                               ${isToday ? 'ring-2 ring-primary/50' : ''}`}
                    >
                      <span className="text-sm">{format(day, 'd')}</span>
                      <div className="mt-1">
                        {statusIconMap[status]}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex items-center justify-center mt-6 gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-xs">Present</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                  <span className="text-xs">Late</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                  <span className="text-xs">Absent</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="chart">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Trends</CardTitle>
              <CardDescription>Visual representation of your attendance patterns</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center p-6">
              <div className="text-center p-8 text-muted-foreground">
                <BarChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium">Attendance Charts</h3>
                <p className="max-w-sm mx-auto mt-2">
                  Detailed attendance analytics with charts and trends will be available soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentAttendance;
