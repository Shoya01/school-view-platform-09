
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Plus, Filter, Eye, Edit, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getSchoolNotices } from '@/services/adminService';
import { format } from 'date-fns';

const AdminNoticesManagement: React.FC = () => {
  // Get notices from the service
  const notices = getSchoolNotices();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Notices Management</CardTitle>
              <CardDescription>Manage all school announcements and notices</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search notices..."
                  className="w-full pl-8"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Notice
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-4 p-4 bg-muted/50 text-sm font-medium">
              <div>Title</div>
              <div>Date</div>
              <div>Priority</div>
              <div className="text-right">Actions</div>
            </div>
            {notices.map((notice) => (
              <div key={notice.id} className="grid grid-cols-4 p-4 border-t items-center text-sm">
                <div className="font-medium">{notice.title}</div>
                <div>{format(new Date(notice.date), 'PPP')}</div>
                <div>
                  <Badge variant={notice.important ? 'destructive' : 'secondary'}>
                    {notice.important ? 'Important' : 'Normal'}
                  </Badge>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminNoticesManagement;
