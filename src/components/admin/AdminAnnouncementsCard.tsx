
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SchoolNotice } from '@/types/admin';

interface AdminAnnouncementsCardProps {
  notices: SchoolNotice[];
}

const AdminAnnouncementsCard: React.FC<AdminAnnouncementsCardProps> = ({ notices }) => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>School Announcements</CardTitle>
          <Button variant="outline" size="sm">Add New</Button>
        </div>
        <CardDescription>
          Recent notices and announcements
        </CardDescription>
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
          
          <Button variant="outline" className="w-full">
            Create New Notice
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminAnnouncementsCard;
