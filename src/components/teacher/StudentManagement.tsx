
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, MoreVertical, Plus, FileDown, Filter } from 'lucide-react';

// Mock student data
const mockStudents = [
  { id: '1', name: 'John Doe', className: '10-A', attendance: '92%', performance: 'Good', email: 'john.doe@example.com', contact: '123-456-7890' },
  { id: '2', name: 'Jane Smith', className: '10-A', attendance: '95%', performance: 'Excellent', email: 'jane.smith@example.com', contact: '123-456-7891' },
  { id: '3', name: 'Michael Brown', className: '10-B', attendance: '85%', performance: 'Average', email: 'michael.brown@example.com', contact: '123-456-7892' },
  { id: '4', name: 'Sarah Johnson', className: '10-B', attendance: '88%', performance: 'Good', email: 'sarah.johnson@example.com', contact: '123-456-7893' },
  { id: '5', name: 'David Lee', className: '11-A', attendance: '78%', performance: 'Needs Improvement', email: 'david.lee@example.com', contact: '123-456-7894' },
  { id: '6', name: 'Emily Wang', className: '11-A', attendance: '94%', performance: 'Excellent', email: 'emily.wang@example.com', contact: '123-456-7895' },
];

const getPerformanceBadge = (performance: string) => {
  switch (performance) {
    case 'Excellent':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Excellent</Badge>;
    case 'Good':
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Good</Badge>;
    case 'Average':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Average</Badge>;
    case 'Needs Improvement':
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Needs Improvement</Badge>;
    default:
      return <Badge>{performance}</Badge>;
  }
};

const StudentManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredStudents = mockStudents.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Students Management</h3>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Student
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Student Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students by name, class, or email..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
              <Button variant="outline" size="sm">
                <FileDown className="mr-2 h-4 w-4" /> Export
              </Button>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-muted-foreground">{student.email}</div>
                    </TableCell>
                    <TableCell>{student.className}</TableCell>
                    <TableCell>{student.attendance}</TableCell>
                    <TableCell>{getPerformanceBadge(student.performance)}</TableCell>
                    <TableCell>{student.contact}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>View Performance</DropdownMenuItem>
                          <DropdownMenuItem>Contact Parents</DropdownMenuItem>
                          <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentManagement;
