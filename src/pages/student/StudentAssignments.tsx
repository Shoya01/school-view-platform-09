
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, FileCheck, Clock, Filter, Upload, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Mock data for assignments
const mockAssignments = [
  {
    id: '1',
    title: 'Mathematics Problem Set',
    description: 'Complete problems 1-20 in Chapter 5',
    subject: 'Mathematics',
    teacherName: 'Dr. Sarah Thompson',
    dueDate: '2025-05-25',
    status: 'pending' as const,
    priority: 'high',
  },
  {
    id: '2',
    title: 'English Essay',
    description: 'Write a 1000-word essay on Macbeth',
    subject: 'English',
    teacherName: 'Mr. James Wilson',
    dueDate: '2025-05-28',
    status: 'submitted' as const,
    submittedDate: '2025-05-26',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Science Lab Report',
    description: 'Document findings from the acid-base experiment',
    subject: 'Science',
    teacherName: 'Ms. Emily Chen',
    dueDate: '2025-05-18',
    status: 'graded' as const,
    submittedDate: '2025-05-15',
    grade: 'A',
    feedback: 'Excellent work on the methodology section. Consider adding more details to your conclusion.',
    priority: 'medium',
  },
  {
    id: '4',
    title: 'History Research Paper',
    description: 'Research and write about a significant event from the 20th century',
    subject: 'History',
    teacherName: 'Mr. Robert Brown',
    dueDate: '2025-06-10',
    status: 'pending' as const,
    priority: 'low',
  },
  {
    id: '5',
    title: 'Art Project',
    description: 'Create a mixed media self-portrait',
    subject: 'Art',
    teacherName: 'Ms. Lisa Park',
    dueDate: '2025-06-05',
    status: 'pending' as const,
    priority: 'medium',
  },
];

// Status colors mapping
const statusColorMap = {
  pending: 'bg-amber-100 text-amber-800 border-amber-200',
  submitted: 'bg-blue-100 text-blue-800 border-blue-200',
  graded: 'bg-green-100 text-green-800 border-green-200',
};

// Priority colors mapping
const priorityColorMap = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-purple-100 text-purple-800 border-purple-200',
  low: 'bg-slate-100 text-slate-800 border-slate-200',
};

const StudentAssignments = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [filters, setFilters] = useState({
    subjects: [] as string[],
    priority: [] as string[],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get all unique subjects
  const allSubjects = Array.from(new Set(mockAssignments.map(assignment => assignment.subject)));
  const allPriorities = ['high', 'medium', 'low'];
  
  // Filter assignments based on tab and other filters
  const filteredAssignments = mockAssignments.filter(assignment => {
    // Filter by tab
    if (selectedTab !== 'all' && assignment.status !== selectedTab) {
      return false;
    }
    
    // Filter by subject
    if (filters.subjects.length > 0 && !filters.subjects.includes(assignment.subject)) {
      return false;
    }
    
    // Filter by priority
    if (filters.priority.length > 0 && !filters.priority.includes(assignment.priority)) {
      return false;
    }
    
    return true;
  });
  
  // Toggle subject filter
  const toggleSubject = (subject: string) => {
    setFilters(prev => {
      if (prev.subjects.includes(subject)) {
        return { ...prev, subjects: prev.subjects.filter(s => s !== subject) };
      } else {
        return { ...prev, subjects: [...prev.subjects, subject] };
      }
    });
  };
  
  // Toggle priority filter
  const togglePriority = (priority: string) => {
    setFilters(prev => {
      if (prev.priority.includes(priority)) {
        return { ...prev, priority: prev.priority.filter(p => p !== priority) };
      } else {
        return { ...prev, priority: [...prev.priority, priority] };
      }
    });
  };

  // Calculate completion stats
  const totalAssignments = mockAssignments.length;
  const completedAssignments = mockAssignments.filter(a => a.status === 'submitted' || a.status === 'graded').length;
  const completionPercentage = (completedAssignments / totalAssignments) * 100;
  
  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Assignments
        </h2>
        <p className="text-muted-foreground mt-1">
          Track, submit, and manage your course assignments here
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-white to-amber-50/50 dark:from-gray-900 dark:to-amber-900/10 shadow-sm">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending</p>
              <h3 className="text-2xl font-bold">{mockAssignments.filter(a => a.status === 'pending').length}</h3>
            </div>
            <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-900/10 shadow-sm">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Submitted</p>
              <h3 className="text-2xl font-bold">{mockAssignments.filter(a => a.status === 'submitted').length}</h3>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Upload className="h-6 w-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-white to-green-50/50 dark:from-gray-900 dark:to-green-900/10 shadow-sm">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Graded</p>
              <h3 className="text-2xl font-bold">{mockAssignments.filter(a => a.status === 'graded').length}</h3>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <FileCheck className="h-6 w-6 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">Completion Progress</CardTitle>
            <span className="text-sm text-muted-foreground">{completionPercentage.toFixed(0)}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </CardHeader>
      </Card>

      <div className="flex items-center justify-between">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all" className="data-[state=active]:bg-background">All</TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-background">Pending</TabsTrigger>
            <TabsTrigger value="submitted" className="data-[state=active]:bg-background">Submitted</TabsTrigger>
            <TabsTrigger value="graded" className="data-[state=active]:bg-background">Graded</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="ml-2 gap-1">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Subjects</h4>
                <div className="space-y-2">
                  {allSubjects.map(subject => (
                    <div className="flex items-center space-x-2" key={subject}>
                      <Checkbox 
                        id={`subject-${subject}`} 
                        checked={filters.subjects.includes(subject)}
                        onCheckedChange={() => toggleSubject(subject)}
                      />
                      <Label htmlFor={`subject-${subject}`}>{subject}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Priority</h4>
                <div className="space-y-2">
                  {allPriorities.map(priority => (
                    <div className="flex items-center space-x-2" key={priority}>
                      <Checkbox 
                        id={`priority-${priority}`} 
                        checked={filters.priority.includes(priority)}
                        onCheckedChange={() => togglePriority(priority)}
                      />
                      <Label htmlFor={`priority-${priority}`} className="capitalize">{priority}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setFilters({ subjects: [], priority: [] })}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="space-y-4">
        {filteredAssignments.length === 0 ? (
          <Card className="border-dashed border-2 bg-muted/20">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <FileText className="h-12 w-12 text-muted-foreground mb-3" />
              <h3 className="text-lg font-medium">No assignments found</h3>
              <p className="text-sm text-muted-foreground mt-1">
                No assignments match your current filters
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredAssignments.map((assignment) => (
            <Card key={assignment.id} className="overflow-hidden hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-muted-foreground mr-2" />
                    <CardTitle className="text-lg font-medium">{assignment.title}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className={priorityColorMap[assignment.priority]}>
                      {assignment.priority}
                    </Badge>
                    <Badge variant="outline" className={statusColorMap[assignment.status]}>
                      {assignment.status}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="mt-1">
                  {assignment.subject} • {assignment.teacherName}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm mb-4">{assignment.description}</p>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>
                    Due: {format(new Date(assignment.dueDate), 'MMM dd, yyyy')}
                  </span>
                </div>
                
                {assignment.status === 'graded' && (
                  <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">Grade:</span>
                      <span className="font-bold text-green-700 dark:text-green-400">{assignment.grade}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{assignment.feedback}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-0 p-4 border-t flex justify-end gap-2">
                {assignment.status === 'pending' && (
                  <Button>Submit Assignment</Button>
                )}
                {assignment.status === 'submitted' && (
                  <Button variant="outline" disabled>Submitted</Button>
                )}
                <Button variant="outline">View Details</Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentAssignments;
