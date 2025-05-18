
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, FileText, Plus, Search, Filter, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Mock assignment data
const mockAssignments = [
  { 
    id: '1', 
    title: 'Algebra Problems', 
    className: '10-A', 
    subject: 'Mathematics',
    dueDate: '2025-05-20', 
    status: 'active',
    submissionCount: 18, 
    totalStudents: 28,
    description: 'Complete problems 1-20 in Chapter 5 of the textbook.'
  },
  { 
    id: '2', 
    title: 'Geometry Quiz', 
    className: '10-B', 
    subject: 'Mathematics',
    dueDate: '2025-05-18', 
    status: 'active',
    submissionCount: 25, 
    totalStudents: 30,
    description: 'Online quiz covering triangles, circles, and quadrilaterals.'
  },
  { 
    id: '3', 
    title: 'Calculus Homework', 
    className: '11-A', 
    subject: 'Mathematics',
    dueDate: '2025-05-22', 
    status: 'active',
    submissionCount: 10, 
    totalStudents: 25,
    description: 'Complete the differentiation exercises from worksheet.'
  },
  { 
    id: '4', 
    title: 'Mid-term Test', 
    className: '10-A', 
    subject: 'Mathematics',
    dueDate: '2025-04-15', 
    status: 'graded',
    submissionCount: 28, 
    totalStudents: 28,
    description: 'Comprehensive test covering all topics from first semester.'
  },
  { 
    id: '5', 
    title: 'Statistics Project', 
    className: '11-A', 
    subject: 'Mathematics',
    dueDate: '2025-06-10', 
    status: 'draft',
    submissionCount: 0, 
    totalStudents: 25,
    description: 'Data analysis project using real-world datasets.'
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-green-100 text-green-800">Active</Badge>;
    case 'draft':
      return <Badge className="bg-gray-100 text-gray-800">Draft</Badge>;
    case 'graded':
      return <Badge className="bg-blue-100 text-blue-800">Graded</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const AssignmentsManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredAssignments = mockAssignments.filter(assignment => {
    const matchesSearch = 
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.className.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    return matchesSearch && assignment.status === activeTab;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Assignments Management</h3>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Assignment
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">All Assignments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search assignments..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
          
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="draft">Drafts</TabsTrigger>
              <TabsTrigger value="graded">Graded</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="space-y-4">
              {filteredAssignments.map((assignment) => (
                <Card key={assignment.id} className="overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-medium">{assignment.title}</h4>
                          {getStatusBadge(assignment.status)}
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          Class: {assignment.className} | Subject: {assignment.subject}
                        </div>
                        <p className="text-sm">{assignment.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end mb-1 gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Due: {assignment.dueDate}</span>
                        </div>
                        <div className="text-sm">
                          {assignment.submissionCount}/{assignment.totalStudents} submissions
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 justify-end">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" /> View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" /> Edit Due Date
                      </Button>
                      <Button size="sm">View Submissions</Button>
                    </div>
                  </div>
                </Card>
              ))}
              
              {filteredAssignments.length === 0 && (
                <div className="flex flex-col items-center justify-center p-10 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mb-2" />
                  <h3 className="text-lg font-medium">No assignments found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchQuery ? "Try adjusting your search query" : "Create your first assignment to get started"}
                  </p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create Assignment
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignmentsManagement;
