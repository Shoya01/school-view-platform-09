
import React from 'react';
import { format } from 'date-fns';
import { Notice, categoryColorMap } from '@/types/notice';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Check, Calendar, User, Pin, Eye, EyeOff } from 'lucide-react';
import NoticeCategoryIcon from './NoticeCategoryIcon';

interface NoticeCardProps {
  notice: Notice;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onMarkAsRead: (id: string, isRead: boolean) => void;
}

const NoticeCard: React.FC<NoticeCardProps> = ({ notice, isExpanded, onToggleExpand, onMarkAsRead }) => {
  const handleToggleReadStatus = () => {
    onMarkAsRead(notice.id, !notice.isRead);
  };

  return (
    <Collapsible 
      open={isExpanded}
      onOpenChange={onToggleExpand}
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
            <NoticeCategoryIcon category={notice.category} className="h-4 w-4" />
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
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-1"
              onClick={handleToggleReadStatus}
            >
              {notice.isRead ? (
                <>
                  <EyeOff className="h-4 w-4" />
                  Mark as Unread
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4" />
                  Mark as Read
                </>
              )}
            </Button>
            <Button size="sm">View Details</Button>
          </CardFooter>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default NoticeCard;
