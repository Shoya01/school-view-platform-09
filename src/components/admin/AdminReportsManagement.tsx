
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Filter, BarChart, LineChart, PieChart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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

const attendanceData = [
  { month: 'Jan', attendance: 92 },
  { month: 'Feb', attendance: 90 },
  { month: 'Mar', attendance: 88 },
  { month: 'Apr', attendance: 94 },
  { month: 'May', attendance: 91 },
  { month: 'Jun', attendance: 87 },
  { month: 'Jul', attendance: 89 },
  { month: 'Aug', attendance: 93 },
];

const classPerformanceData = [
  { name: '10-A', math: 85, science: 78, english: 82 },
  { name: '10-B', math: 75, science: 80, english: 85 },
  { name: '9-A', math: 90, science: 88, english: 78 },
  { name: '9-B', math: 72, science: 76, english: 80 },
  { name: '11-A', math: 83, science: 90, english: 85 },
];

const enrollmentData = [
  { name: 'Grade 9', value: 120 },
  { name: 'Grade 10', value: 170 },
  { name: 'Grade 11', value: 110 },
  { name: 'Grade 12', value: 90 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminReportsManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>School Reports</CardTitle>
              <CardDescription>View and export school performance reports</CardDescription>
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
                Attendance Trends
              </TabsTrigger>
              <TabsTrigger value="performance" className="flex items-center">
                <BarChart className="h-4 w-4 mr-2" />
                Class Performance
              </TabsTrigger>
              <TabsTrigger value="enrollment" className="flex items-center">
                <PieChart className="h-4 w-4 mr-2" />
                Enrollment
              </TabsTrigger>
            </TabsList>
            <TabsContent value="attendance">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Attendance Rate</CardTitle>
                  <CardDescription>School-wide attendance percentage by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={attendanceData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[60, 100]} />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="attendance" stroke="#8884d8" fill="#8884d8" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Subject Performance by Class</CardTitle>
                  <CardDescription>Average scores in core subjects across classes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartBarChart
                        data={classPerformanceData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="math" name="Mathematics" fill="#8884d8" />
                        <Bar dataKey="science" name="Science" fill="#82ca9d" />
                        <Bar dataKey="english" name="English" fill="#ffc658" />
                      </RechartBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="enrollment">
              <Card>
                <CardHeader>
                  <CardTitle>Student Enrollment by Grade</CardTitle>
                  <CardDescription>Distribution of students across grades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartPieChart>
                        <Pie
                          data={enrollmentData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={150}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {enrollmentData.map((entry, index) => (
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

export default AdminReportsManagement;
