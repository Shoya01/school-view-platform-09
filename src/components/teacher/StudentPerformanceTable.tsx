
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { studentPerformanceData } from '@/data/teacherReportsData';

const StudentPerformanceTable: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Performance</CardTitle>
        <CardDescription>Individual student performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Attendance (%)</TableHead>
                <TableHead>Avg. Grade</TableHead>
                <TableHead>Completed Assignments</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentPerformanceData.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.attendance}%</TableCell>
                  <TableCell>{student.avgGrade}/100</TableCell>
                  <TableCell>{student.completedAssignments}/12</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentPerformanceTable;
