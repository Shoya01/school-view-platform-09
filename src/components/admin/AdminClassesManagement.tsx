
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Plus, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const mockClasses = [
  { id: 1, name: '10-A', teacher: 'Mrs. Johnson', students: 28, capacity: 30, attendance: 92 },
  { id: 2, name: '10-B', teacher: 'Mr. Smith', students: 30, capacity: 30, attendance: 88 },
  { id: 3, name: '9-A', teacher: 'Ms. Davis', students: 25, capacity: 30, attendance: 95 },
  { id: 4, name: '9-B', teacher: 'Mr. Wilson', students: 27, capacity: 30, attendance: 87 },
  { id: 5, name: '11-A', teacher: 'Mrs. Brown', students: 22, capacity: 30, attendance: 91 },
];

const AdminClassesManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Classes Management</CardTitle>
              <CardDescription>Manage all classes, subjects, and schedules</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search classes..."
                  className="w-full pl-8"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Class
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-6 p-4 bg-muted/50 text-sm font-medium">
              <div>Class</div>
              <div>Teacher</div>
              <div>Students</div>
              <div>Capacity</div>
              <div>Attendance</div>
              <div className="text-right">Actions</div>
            </div>
            {mockClasses.map((cls) => (
              <div key={cls.id} className="grid grid-cols-6 p-4 border-t items-center text-sm">
                <div className="font-medium">{cls.name}</div>
                <div>{cls.teacher}</div>
                <div>{cls.students}</div>
                <div className="flex items-center gap-2">
                  <Progress value={(cls.students / cls.capacity) * 100} className="h-2" />
                  <span className="text-xs text-muted-foreground">{cls.students}/{cls.capacity}</span>
                </div>
                <div>
                  <Badge variant={cls.attendance >= 90 ? 'default' : 
                          cls.attendance >= 80 ? 'secondary' : 'destructive'}>
                    {cls.attendance}%
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

export default AdminClassesManagement;
