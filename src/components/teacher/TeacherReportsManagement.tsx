
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Filter, BarChart, LineChart, PieChart, FileText } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  BarChart as RechartBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  PieChart as RechartPieChart,
  Pie,
  Cell
} from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Sample data for the charts
const attendanceData = [
  { date: '10/01', class9A: 92, class9B: 88, class10A: 95 },
  { date: '10/02', class9A: 90, class9B: 85, class10A: 93 },
  { date: '10/03', class9A: 91, class9B: 89, class10A: 96 },
  { date: '10/04', class9A: 88, class9B: 84, class10A: 94 },
  { date: '10/05', class9A: 95, class9B: 91, class10A: 98 },
];

const gradeDistributionData = [
  { grade: 'A', count: 15 },
  { grade: 'B', count: 20 },
  { grade: 'C', count: 8 },
  { grade: 'D', count: 4 },
  { grade: 'F', count: 2 },
];

const assignmentCompletionData = [
  { name: 'Completed', value: 75 },
  { name: 'Late', value: 15 },
  { name: 'Not Submitted', value: 10 },
];

const COLORS = ['#4CAF50', '#FFC107', '#F44336'];

const studentPerformanceData = [
  { id: 1, name: 'Alice Smith', attendance: 98, avgGrade: 92, completedAssignments: 12 },
  { id: 2, name: 'Bob Johnson', attendance: 85, avgGrade: 78, completedAssignments: 10 },
  { id: 3, name: 'Charlie Brown', attendance: 90, avgGrade: 85, completedAssignments: 11 },
  { id: 4, name: 'Diana Prince', attendance: 95, avgGrade: 90, completedAssignments: 12 },
  { id: 5, name: 'Edward Jones', attendance: 80, avgGrade: 75, completedAssignments: 9 },
];

const TeacherReportsManagement: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('all');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Class Reports</CardTitle>
              <CardDescription>View attendance, grades, and assignment completion data</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Classes</SelectItem>
                  <SelectItem value="9A">Class 9-A</SelectItem>
                  <SelectItem value="9B">Class 9-B</SelectItem>
                  <SelectItem value="10A">Class 10-A</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Export Reports
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="attendance">
            <TabsList className="mb-4">
              <TabsTrigger value="attendance" className="flex items-center">
                <LineChart className="h-4 w-4 mr-2" />
                Attendance
              </TabsTrigger>
              <TabsTrigger value="grades" className="flex items-center">
                <BarChart className="h-4 w-4 mr-2" />
                Grade Distribution
              </TabsTrigger>
              <TabsTrigger value="assignments" className="flex items-center">
                <PieChart className="h-4 w-4 mr-2" />
                Assignment Completion
              </TabsTrigger>
              <TabsTrigger value="students" className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Student Performance
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="attendance">
              <Card>
                <CardHeader>
                  <CardTitle>Class Attendance</CardTitle>
                  <CardDescription>Daily attendance percentages by class</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={attendanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="class9A" name="Class 9-A" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="class9B" name="Class 9-B" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="class10A" name="Class 10-A" stroke="#ffc658" fill="#ffc658" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="grades">
              <Card>
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                  <CardDescription>Distribution of grades across all assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartBarChart
                        data={gradeDistributionData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="grade" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" name="Number of Students" fill="#8884d8" />
                      </RechartBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="assignments">
              <Card>
                <CardHeader>
                  <CardTitle>Assignment Completion</CardTitle>
                  <CardDescription>Status of assigned work completion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartPieChart>
                        <Pie
                          data={assignmentCompletionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {assignmentCompletionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </RechartPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="students">
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherReportsManagement;
