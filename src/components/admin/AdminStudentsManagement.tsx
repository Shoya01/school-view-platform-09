
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, UserPlus, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const mockStudents = [
  { id: 1, name: 'Alice Smith', class: '10-A', guardianName: 'Robert Smith', attendance: 95, status: 'active' },
  { id: 2, name: 'Bob Johnson', class: '10-B', guardianName: 'Mary Johnson', attendance: 88, status: 'active' },
  { id: 3, name: 'Charlie Davis', class: '9-A', guardianName: 'John Davis', attendance: 92, status: 'active' },
  { id: 4, name: 'Diana Wilson', class: '11-A', guardianName: 'Patricia Wilson', attendance: 85, status: 'active' },
  { id: 5, name: 'Edward Brown', class: '9-B', guardianName: 'Susan Brown', attendance: 79, status: 'suspended' },
];

const AdminStudentsManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Students Management</CardTitle>
              <CardDescription>Manage all students and their information</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search students..."
                  className="w-full pl-8"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" /> Add Student
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-5 p-4 bg-muted/50 text-sm font-medium">
              <div>Name</div>
              <div>Class</div>
              <div>Guardian</div>
              <div>Attendance</div>
              <div className="text-right">Actions</div>
            </div>
            {mockStudents.map((student) => (
              <div key={student.id} className="grid grid-cols-5 p-4 border-t items-center text-sm">
                <div className="font-medium">{student.name}</div>
                <div>{student.class}</div>
                <div>{student.guardianName}</div>
                <div>
                  <Badge variant={student.attendance >= 90 ? 'default' : 
                          student.attendance >= 80 ? 'secondary' : 'destructive'}>
                    {student.attendance}%
                  </Badge>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminStudentsManagement;
