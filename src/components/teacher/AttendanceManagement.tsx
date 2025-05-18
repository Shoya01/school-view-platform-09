
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar, FileDown, Search, Check, X, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock classes
const mockClasses = [
  { id: '1', name: '10-A', studentCount: 28 },
  { id: '2', name: '10-B', studentCount: 30 },
  { id: '3', name: '11-A', studentCount: 25 },
];

// Mock students
const mockStudents = [
  { id: '1', name: 'John Doe', className: '10-A', status: 'present', time: '08:25 AM' },
  { id: '2', name: 'Jane Smith', className: '10-A', status: 'present', time: '08:15 AM' },
  { id: '3', name: 'Emily Wang', className: '10-A', status: 'present', time: '08:30 AM' },
  { id: '4', name: 'Michael Brown', className: '10-A', status: 'absent', time: null },
  { id: '5', name: 'Sarah Johnson', className: '10-A', status: 'late', time: '08:50 AM' },
  { id: '6', name: 'David Lee', className: '10-A', status: 'present', time: '08:20 AM' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'present':
      return <Badge className="bg-green-100 text-green-800">Present</Badge>;
    case 'absent':
      return <Badge className="bg-red-100 text-red-800">Absent</Badge>;
    case 'late':
      return <Badge className="bg-yellow-100 text-yellow-800">Late</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

// Attendance statistics
const attendanceStats = [
  { label: 'Present', count: 24, percentage: 85.7, color: 'bg-green-500' },
  { label: 'Absent', count: 2, percentage: 7.1, color: 'bg-red-500' },
  { label: 'Late', count: 2, percentage: 7.1, color: 'bg-yellow-500' },
];

const AttendanceManagement: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('10-A');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredStudents = mockStudents.filter(student => 
    student.className === selectedClass &&
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get today's date in a formatted string
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Attendance Management</h3>
        <Button>
          <Calendar className="mr-2 h-4 w-4" /> View Calendar
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">
              Today's Attendance - {today}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2 items-center">
                <Select
                  value={selectedClass}
                  onValueChange={setSelectedClass}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockClasses.map((cls) => (
                      <SelectItem key={cls.id} value={cls.name}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    className="pl-8 w-[200px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <FileDown className="mr-2 h-4 w-4" /> Export
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead className="w-[120px]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{getStatusBadge(student.status)}</TableCell>
                      <TableCell>
                        {student.time ? (
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                            {student.time}
                          </div>
                        ) : "-"}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className={cn("rounded-full", 
                              student.status === 'present' ? "bg-green-100 text-green-800" : ""
                            )}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className={cn("rounded-full",
                              student.status === 'absent' ? "bg-red-100 text-red-800" : ""
                            )}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className={cn("rounded-full",
                              student.status === 'late' ? "bg-yellow-100 text-yellow-800" : ""
                            )}
                          >
                            <Clock className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Attendance Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold">{attendanceStats[0].percentage}%</div>
                <div className="text-muted-foreground">Overall Attendance</div>
              </div>
              
              {attendanceStats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{stat.label}</span>
                    <span className="font-medium">{stat.count} ({stat.percentage}%)</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full", stat.color)}
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
              
              <div className="pt-4">
                <Button className="w-full">
                  View Detailed Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AttendanceManagement;
