
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, Clock, Search, FileText, User, Pin, Check } from 'lucide-react';
import { format, subDays } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Notice type
interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  authorRole: string;
  category: 'academic' | 'event' | 'examination' | 'general' | 'holiday';
  important: boolean;
  isRead: boolean;
}

// Generate mock notices
const generateMockNotices = (): Notice[] => {
  const today = new Date();
  
  return [
    {
      id: '1',
      title: 'Final Examination Schedule',
      content: 'This is to inform all students that the final examinations will be held from June 10, 2025 to June 15, 2025. The detailed schedule has been posted on the examination portal. All students are requested to check their respective examination dates and prepare accordingly.',
      date: format(today, 'yyyy-MM-dd'),
      author: 'Dr. Richard Adams',
      authorRole: 'Principal',
      category: 'examination',
      important: true,
      isRead: false
    },
    {
      id: '2',
      title: 'Annual Day Celebration',
      content: 'We are pleased to announce that our Annual Day Celebration will be held on May 30, 2025 at the School Auditorium. All students are encouraged to participate in various cultural activities. Parents are cordially invited to attend the event.',
      date: format(subDays(today, 2), 'yyyy-MM-dd'),
      author: 'Ms. Julia Roberts',
      authorRole: 'Event Coordinator',
      category: 'event',
      important: false,
      isRead: true
    },
    {
      id: '3',
      title: 'Holiday Announcement',
      content: 'This is to inform all students that the school will remain closed on May 25, 2025 on account of Memorial Day. Classes will resume as usual on May 26, 2025.',
      date: format(subDays(today, 5), 'yyyy-MM-dd'),
      author: 'Dr. Richard Adams',
      authorRole: 'Principal',
      category: 'holiday',
      important: false,
      isRead: false
    },
    {
      id: '4',
      title: 'Parent-Teacher Meeting',
      content: 'The Parent-Teacher Meeting for this semester is scheduled for June 5, 2025. Parents are requested to attend the meeting to discuss their ward\'s academic progress.',
      date: format(subDays(today, 3), 'yyyy-MM-dd'),
      author: 'Ms. Elizabeth Parker',
      authorRole: 'Academic Coordinator',
      category: 'academic',
      important: true,
      isRead: true
    },
    {
      id: '5',
      title: 'Library Book Return',
      content: 'All students are reminded to return their library books before May 31, 2025. Failure to do so may result in a fine as per library rules.',
      date: format(subDays(today, 7), 'yyyy-MM-dd'),
      author: 'Mr. Thomas Wright',
      authorRole: 'Librarian',
      category: 'general',
      important: false,
      isRead: false
    },
    {
      id: '6',
      title: 'Science Project Submission Deadline',
      content: 'The deadline for submitting the Science Project has been extended to June 3, 2025. All students are required to submit their projects to their respective Science teachers.',
      date: format(subDays(today, 1), 'yyyy-MM-dd'),
      author: 'Ms. Emily Chen',
      authorRole: 'Science Department Head',
      category: 'academic',
      important: true,
      isRead: false
    }
  ];
};

// Category colors mapping
const categoryColorMap = {
  academic: 'bg-blue-100 text-blue-800 border-blue-200',
  event: 'bg-purple-100 text-purple-800 border-purple-200',
  examination: 'bg-red-100 text-red-800 border-red-200',
  general: 'bg-gray-100 text-gray-800 border-gray-200',
  holiday: 'bg-green-100 text-green-800 border-green-200'
};

// Category icon mapping
const categoryIconMap = {
  academic: <FileText className="h-4 w-4" />,
  event: <Calendar className="h-4 w-4" />,
  examination: <FileText className="h-4 w-4" />,
  general: <Bell className="h-4 w-4" />,
  holiday: <Calendar className="h-4 w-4" />
};

const StudentNotices = () => {
  const [notices] = useState<Notice[]>(generateMockNotices());
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [expandedNotices, setExpandedNotices] = useState<string[]>([]);
  
  // Toggle notice expanded state
  const toggleNoticeExpanded = (id: string) => {
    setExpandedNotices(prev => 
      prev.includes(id) 
        ? prev.filter(noticeId => noticeId !== id) 
        : [...prev, id]
    );
  };
  
  // Filter notices based on search and active tab
  const filteredNotices = notices.filter(notice => {
    // Search filter
    const matchesSearch = 
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Tab filter
    const matchesTab = 
      activeTab === 'all' ||
      (activeTab === 'important' && notice.important) ||
      (activeTab === 'unread' && !notice.isRead) ||
      activeTab === notice.category;
    
    return matchesSearch && matchesTab;
  });
  
  // Get counts for badges
  const importantCount = notices.filter(notice => notice.important).length;
  const unreadCount = notices.filter(notice => !notice.isRead).length;
  
  return (
    <div className="space-y-6 max-w-7xl mx-auto animate-fade-in">
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
          Notices & Announcements
        </h2>
        <p className="text-muted-foreground mt-1">
          Stay updated with the latest notices and announcements from your school
        </p>
      </div>

      {/* Search and Filter */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          className="pl-9"
          placeholder="Search notices..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Tabs for filtering */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-muted/50 mb-4 flex flex-nowrap overflow-x-auto">
          <TabsTrigger value="all" className="data-[state=active]:bg-background">
            All
          </TabsTrigger>
          <TabsTrigger value="important" className="data-[state=active]:bg-background flex items-center">
            Important
            {importantCount > 0 && (
              <Badge variant="outline" className="ml-1 bg-red-100 text-red-800 border-red-200 h-5 min-w-5 flex items-center justify-center p-0 text-xs">
                {importantCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="unread" className="data-[state=active]:bg-background flex items-center">
            Unread
            {unreadCount > 0 && (
              <Badge variant="outline" className="ml-1 bg-blue-100 text-blue-800 border-blue-200 h-5 min-w-5 flex items-center justify-center p-0 text-xs">
                {unreadCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="academic" className="data-[state=active]:bg-background">Academic</TabsTrigger>
          <TabsTrigger value="event" className="data-[state=active]:bg-background">Events</TabsTrigger>
          <TabsTrigger value="examination" className="data-[state=active]:bg-background">Exams</TabsTrigger>
          <TabsTrigger value="holiday" className="data-[state=active]:bg-background">Holidays</TabsTrigger>
        </TabsList>
      </Tabs>
      
      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.length === 0 ? (
          <Card className="border-dashed border-2 bg-muted/20">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <Bell className="h-12 w-12 text-muted-foreground mb-3" />
              <h3 className="text-lg font-medium">No notices found</h3>
              <p className="text-sm text-muted-foreground mt-1">
                There are no notices matching your search or filters
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredNotices.map((notice) => {
            const isExpanded = expandedNotices.includes(notice.id);
            
            return (
              <Collapsible 
                key={notice.id}
                open={isExpanded}
                onOpenChange={() => toggleNoticeExpanded(notice.id)}
                className="w-full"
              >
                <Card className={`overflow-hidden transition-all duration-200 
                               ${notice.important ? 'border-l-4 border-l-red-500' : ''}
                               ${!notice.isRead ? 'bg-blue-50/50 dark:bg-blue-900/5' : ''}
                               hover:shadow-md`}>
                  <CardHeader className="pb-2 flex flex-row items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium flex items-center">
                        {notice.important && 
                          <Pin className="h-4 w-4 text-red-500 mr-1 inline-flex" />
                        }
                        {notice.title}
                        {!notice.isRead && 
                          <Badge variant="outline" className="ml-2 bg-blue-100 text-blue-800 border-blue-200 text-xs">New</Badge>
                        }
                      </CardTitle>
                      <CardDescription className="mt-1 flex items-center gap-2 text-xs">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {format(new Date(notice.date), 'MMM dd, yyyy')}
                        </div>
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {notice.author} ({notice.authorRole})
                        </div>
                      </CardDescription>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`flex items-center gap-1 ${categoryColorMap[notice.category]}`}
                    >
                      {categoryIconMap[notice.category]}
                      <span className="capitalize">{notice.category}</span>
                    </Badge>
                  </CardHeader>
                  
                  <CollapsibleTrigger asChild>
                    <CardContent className="px-6 py-2 cursor-pointer">
                      <p className={`text-sm ${isExpanded ? '' : 'line-clamp-2'}`}>
                        {notice.content}
                      </p>
                    </CardContent>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardFooter className="pt-0 pb-4 border-t flex justify-end gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Check className="h-4 w-4" />
                        Mark as Read
                      </Button>
                      <Button size="sm">View Details</Button>
                    </CardFooter>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })
        )}
      </div>
    </div>
  );
};

export default StudentNotices;
