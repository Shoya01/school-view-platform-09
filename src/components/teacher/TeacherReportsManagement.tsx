
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import TeacherReportsHeader from './TeacherReportsHeader';
import AttendanceChart from './AttendanceChart';
import GradeDistributionChart from './GradeDistributionChart';
import AssignmentCompletionChart from './AssignmentCompletionChart';
import StudentPerformanceTable from './StudentPerformanceTable';

const TeacherReportsManagement: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('all');

  return (
    <div className="space-y-6">
      <Card>
        <TeacherReportsHeader 
          selectedClass={selectedClass}
          onClassChange={setSelectedClass}
        />
        <CardContent>
          <Tabs defaultValue="attendance">
            <TabsContent value="attendance">
              <AttendanceChart />
            </TabsContent>
            
            <TabsContent value="grades">
              <GradeDistributionChart />
            </TabsContent>
            
            <TabsContent value="assignments">
              <AssignmentCompletionChart />
            </TabsContent>
            
            <TabsContent value="performance">
              <StudentPerformanceTable />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherReportsManagement;
