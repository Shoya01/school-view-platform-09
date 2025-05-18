
import React from 'react';
import { Bell } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const NoticeEmptyState: React.FC = () => {
  return (
    <Card className="border-dashed border-2 bg-muted/20">
      <CardContent className="p-6 flex flex-col items-center justify-center text-center">
        <Bell className="h-12 w-12 text-muted-foreground mb-3" />
        <h3 className="text-lg font-medium">No notices found</h3>
        <p className="text-sm text-muted-foreground mt-1">
          There are no notices matching your search or filters
        </p>
      </CardContent>
    </Card>
  );
};

export default NoticeEmptyState;
