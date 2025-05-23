
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Filter, LineChart, PieChart, BarChart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  ResponsiveContainer, 
  LineChart as RechartLineChart, 
  Line,
  BarChart as RechartBarChart, 
  Bar, 
  PieChart as RechartPieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend
} from 'recharts';

// Sample data for the charts
const attendanceData = [
  { month: 'Sep', attendance: 95 },
  { month: 'Oct', attendance: 100 },
  { month: 'Nov', attendance: 90 },
  { month: 'Dec', attendance: 85 },
  { month: 'Jan', attendance: 92 },
  { month: 'Feb', attendance: 98 },
  { month: 'Mar', attendance: 100 }
];

const gradesData = [
  { subject: 'Math', grade: 85, average: 75 },
  { subject: 'Science', grade: 92, average: 78 },
  { subject: 'History', grade: 78, average: 72 },
  { subject: 'English', grade: 88, average: 76 },
  { subject: 'Art', grade: 95, average: 85 }
];

const assignmentCompletionData = [
  { name: 'Completed', value: 85 },
  { name: 'In Progress', value: 10 },
  { name: 'Not Started', value: 5 }
];

const COLORS = ['#4CAF50', '#FFC107', '#F44336'];

const StudentReportsManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>My Academic Reports</CardTitle>
              <CardDescription>View your attendance, grades, and assignments</CardDescription>
            </div>
            <div className="flex items-center gap-2">
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
                Subject Grades
              </TabsTrigger>
              <TabsTrigger value="assignments" className="flex items-center">
                <PieChart className="h-4 w-4 mr-2" />
                Assignments
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="attendance">
              <Card>
                <CardHeader>
                  <CardTitle>My Attendance</CardTitle>
                  <CardDescription>Your monthly attendance record</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartLineChart
                        data={attendanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="attendance" 
                          name="Attendance (%)" 
                          stroke="#8884d8" 
                          activeDot={{ r: 8 }} 
                        />
                      </RechartLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="grades">
              <Card>
                <CardHeader>
                  <CardTitle>Subject Performance</CardTitle>
                  <CardDescription>Your grades compared to class average</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartBarChart
                        data={gradesData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subject" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="grade" name="Your Grade" fill="#8884d8" />
                        <Bar dataKey="average" name="Class Average" fill="#82ca9d" />
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
                  <CardDescription>Your assignment completion status</CardDescription>
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
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentReportsManagement;
