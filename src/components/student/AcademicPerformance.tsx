
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface SubjectPerformance {
  subject: string;
  percentage: number;
}

interface AcademicPerformanceProps {
  performances: SubjectPerformance[];
}

const AcademicPerformance: React.FC<AcademicPerformanceProps> = ({ performances }) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Academic Performance</CardTitle>
        <CardDescription>Your grades and performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          {performances.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="text-sm font-medium">{item.subject}</div>
              <div className="flex items-center">
                <Progress value={item.percentage} className="h-2 flex-1" />
                <span className="ml-2 text-sm font-medium">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicPerformance;
