
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart as RechartPieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { assignmentCompletionData, CHART_COLORS } from '@/data/teacherReportsData';

const AssignmentCompletionChart: React.FC = () => {
  return (
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
                  <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RechartPieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssignmentCompletionChart;
