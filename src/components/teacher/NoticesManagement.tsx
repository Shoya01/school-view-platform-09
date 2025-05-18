
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Plus, Filter, AlertCircle, Eye, EyeOff, MoreVertical, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';

// Mock notices data
const mockNotices = [
  {
    id: '1',
    title: 'Staff Meeting',
    content: 'Staff meeting scheduled for May 20, 2025 at 3:00 PM in the conference room. All teachers are required to attend. We will be discussing the upcoming semester curriculum and events.',
    date: '2025-05-12',
    category: 'general',
    important: true,
    audience: 'teachers',
    author: 'Principal Johnson',
  },
  {
    id: '2',
    title: 'Grade Submission',
    content: 'Please submit all grades by May 25, 2025. This deadline is crucial for generating report cards on time. Contact the academic office if you need any assistance.',
    date: '2025-05-10',
    category: 'academic',
    important: true,
    audience: 'teachers',
    author: 'Academic Coordinator',
  },
  {
    id: '3',
    title: 'Annual Math Olympiad',
    content: 'The Annual Math Olympiad will be held on June 5, 2025. Please encourage students from grades 9-12 to participate. Registration forms are available in the mathematics department office.',
    date: '2025-05-08',
    category: 'event',
    important: false,
    audience: 'all',
    author: 'Mathematics Department',
  },
  {
    id: '4',
    title: 'Summer Break Schedule',
    content: 'Summer break will begin on July 1, 2025. Faculty is expected to complete all pending work and submit clearance forms by June 30. The new academic year will begin on August 15.',
    date: '2025-05-05',
    category: 'general',
    important: false,
    audience: 'all',
    author: 'Administration',
  },
  {
    id: '5',
    title: 'Parent-Teacher Conference',
    content: 'Parent-Teacher conferences are scheduled for May 15-16, 2025. Please prepare progress reports for all students in your classes. The schedule will be shared by the end of this week.',
    date: '2025-05-03',
    category: 'event',
    important: true,
    audience: 'teachers',
    author: 'Vice Principal',
  },
];

const getCategoryBadge = (category: string) => {
  switch (category) {
    case 'academic':
      return <Badge className="bg-blue-100 text-blue-800">Academic</Badge>;
    case 'event':
      return <Badge className="bg-purple-100 text-purple-800">Event</Badge>;
    case 'examination':
      return <Badge className="bg-red-100 text-red-800">Examination</Badge>;
    case 'general':
      return <Badge className="bg-gray-100 text-gray-800">General</Badge>;
    default:
      return <Badge>{category}</Badge>;
  }
};

const NoticesManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredNotices = mockNotices.filter(notice => {
    const matchesSearch = 
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'important') return matchesSearch && notice.important;
    return matchesSearch && notice.category === activeTab;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Notices Management</h3>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Notice
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">All Notices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search notices..."
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
            <TabsList className="mb-4 grid grid-cols-5 md:w-max">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="important">Important</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="event">Events</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="space-y-4">
              {filteredNotices.map((notice) => (
                <Card key={notice.id}>
                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {notice.important && (
                            <AlertCircle className="h-4 w-4 text-red-500" />
                          )}
                          <h4 className="text-lg font-medium">{notice.title}</h4>
                          {getCategoryBadge(notice.category)}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span>By: {notice.author}</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {notice.date}
                          </div>
                          <span>•</span>
                          <span>For: {notice.audience}</span>
                        </div>
                        <p className="text-sm line-clamp-2">{notice.content}</p>
                      </div>
                      <div className="ml-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <AlertCircle className="h-4 w-4 mr-2" />
                              {notice.important ? "Remove Importance" : "Mark as Important"}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              {filteredNotices.length === 0 && (
                <div className="flex flex-col items-center justify-center p-10 text-center">
                  <EyeOff className="h-12 w-12 text-muted-foreground mb-2" />
                  <h3 className="text-lg font-medium">No notices found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchQuery ? "Try adjusting your search query" : "Create your first notice to get started"}
                  </p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Create Notice
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

export default NoticesManagement;
