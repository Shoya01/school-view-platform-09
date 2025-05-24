
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { attendanceData } from '@/data/teacherReportsData';

const AttendanceChart: React.FC = () => {
  return (
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
  );
};

export default AttendanceChart;
