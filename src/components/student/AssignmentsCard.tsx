
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
}

interface AssignmentsCardProps {
  assignments: Assignment[];
}

const AssignmentsCard: React.FC<AssignmentsCardProps> = ({ assignments }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <FileText className="mr-2 h-5 w-5" /> Assignments
        </CardTitle>
        <CardDescription>Your current assignments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assignments.map((assignment) => (
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
  );
};

export default AssignmentsCard;
