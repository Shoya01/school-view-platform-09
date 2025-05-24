
import React from 'react';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TeacherReportsHeaderProps {
  selectedClass: string;
  onClassChange: (value: string) => void;
}

const TeacherReportsHeader: React.FC<TeacherReportsHeaderProps> = ({
  selectedClass,
  onClassChange,
}) => {
  return (
    <CardHeader className="pb-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <CardTitle>Class Reports</CardTitle>
          <CardDescription>View attendance, grades, and assignment completion data</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedClass} onValueChange={onClassChange}>
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
  );
};

export default TeacherReportsHeader;
