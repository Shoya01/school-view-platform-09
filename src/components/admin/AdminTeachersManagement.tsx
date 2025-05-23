
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, UserPlus, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const mockTeachers = [
  { id: 1, name: 'Mrs. Johnson', subject: 'Mathematics', classes: ['10-A', '11-B'], status: 'active' },
  { id: 2, name: 'Mr. Smith', subject: 'Science', classes: ['10-B', '11-A'], status: 'active' },
  { id: 3, name: 'Ms. Davis', subject: 'English', classes: ['9-A', '9-B'], status: 'on leave' },
  { id: 4, name: 'Mr. Wilson', subject: 'History', classes: ['10-A', '10-B'], status: 'active' },
  { id: 5, name: 'Mrs. Brown', subject: 'Art', classes: ['9-A', '10-A', '11-A'], status: 'active' },
];

const AdminTeachersManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Teachers Management</CardTitle>
              <CardDescription>Manage all teachers and their assignments</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search teachers..."
                  className="w-full pl-8"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" /> Add Teacher
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-5 p-4 bg-muted/50 text-sm font-medium">
              <div>Name</div>
              <div>Subject</div>
              <div>Classes</div>
              <div>Status</div>
              <div className="text-right">Actions</div>
            </div>
            {mockTeachers.map((teacher) => (
              <div key={teacher.id} className="grid grid-cols-5 p-4 border-t items-center text-sm">
                <div className="font-medium">{teacher.name}</div>
                <div>{teacher.subject}</div>
                <div className="flex flex-wrap gap-1">
                  {teacher.classes.map(cls => (
                    <Badge key={cls} variant="outline">{cls}</Badge>
                  ))}
                </div>
                <div>
                  <Badge variant={teacher.status === 'active' ? 'default' : 'secondary'}>
                    {teacher.status}
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

export default AdminTeachersManagement;
