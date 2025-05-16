
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  important: boolean;
}

interface NoticesCardProps {
  notices: Notice[];
}

const NoticesCard: React.FC<NoticesCardProps> = ({ notices }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Notices</CardTitle>
        <CardDescription>Important announcements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium flex items-center">
                  {notice.important && (
                    <span className="mr-1 text-red-500">•</span>
                  )}
                  {notice.title}
                </h4>
                <span className="text-xs text-muted-foreground">{notice.date}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{notice.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href="/student/notices" className="text-sm text-primary hover:underline">
          View all notices
        </a>
      </CardFooter>
    </Card>
  );
};

export default NoticesCard;
