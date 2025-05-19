
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ClassOverview } from '@/types/admin';

interface AdminClassesOverviewProps {
  classes: ClassOverview[];
}

const AdminClassesOverview: React.FC<AdminClassesOverviewProps> = ({ classes }) => {
  return (
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
          {classes.map((cls) => (
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
  );
};

export default AdminClassesOverview;
