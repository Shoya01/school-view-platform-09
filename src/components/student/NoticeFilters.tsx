
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

interface NoticeFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  importantCount: number;
  unreadCount: number;
}

const NoticeFilters: React.FC<NoticeFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  activeTab,
  setActiveTab,
  importantCount,
  unreadCount
}) => {
  return (
    <>
      {/* Search */}
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
    </>
  );
};

export default NoticeFilters;
