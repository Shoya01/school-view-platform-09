
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Calendar } from 'lucide-react';

interface AttendanceCardProps {
  attendance: {
    present: number;
    absent: number;
    late: number;
  };
}

const AttendanceCard: React.FC<AttendanceCardProps> = ({ attendance }) => {
  const attendancePercentage = (attendance.present / (attendance.present + attendance.absent + attendance.late)) * 100;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <Calendar className="mr-2 h-5 w-5" /> Attendance
        </CardTitle>
        <CardDescription>Your current attendance record</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Attendance</span>
              <span className="text-sm font-medium">{attendancePercentage.toFixed(1)}%</span>
            </div>
            <Progress value={attendancePercentage} className="mt-2" />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-md bg-green-50 p-2">
              <div className="text-2xl font-bold text-green-700">{attendance.present}</div>
              <div className="text-xs text-green-700">Present</div>
            </div>
            <div className="rounded-md bg-red-50 p-2">
              <div className="text-2xl font-bold text-red-700">{attendance.absent}</div>
              <div className="text-xs text-red-700">Absent</div>
            </div>
            <div className="rounded-md bg-yellow-50 p-2">
              <div className="text-2xl font-bold text-yellow-700">{attendance.late}</div>
              <div className="text-xs text-yellow-700">Late</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceCard;
