
import React, { useState } from 'react';
import { Notice } from '@/types/notice';
import { generateMockNotices } from '@/services/noticeService';
import NoticeFilters from '@/components/student/NoticeFilters';
import NoticeCard from '@/components/student/NoticeCard';
import NoticeEmptyState from '@/components/student/NoticeEmptyState';
import { useToast } from "@/hooks/use-toast";

const StudentNotices = () => {
  const [notices, setNotices] = useState<Notice[]>(generateMockNotices());
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [expandedNotices, setExpandedNotices] = useState<string[]>([]);
  const { toast } = useToast();
  
  // Toggle notice expanded state
  const toggleNoticeExpanded = (id: string) => {
    setExpandedNotices(prev => 
      prev.includes(id) 
        ? prev.filter(noticeId => noticeId !== id) 
        : [...prev, id]
    );
  };
  
  // Handle marking notice as read/unread
  const handleMarkAsRead = (id: string, isRead: boolean) => {
    setNotices(prevNotices => 
      prevNotices.map(notice => 
        notice.id === id 
          ? { ...notice, isRead } 
          : notice
      )
    );
    
    // Show toast notification
    toast({
      title: isRead ? "Notice marked as read" : "Notice marked as unread",
      description: "You can filter notices by read/unread status.",
      duration: 3000,
    });
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

      {/* Filters */}
      <NoticeFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        importantCount={importantCount}
        unreadCount={unreadCount}
      />
      
      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.length === 0 ? (
          <NoticeEmptyState />
        ) : (
          filteredNotices.map((notice) => (
            <NoticeCard 
              key={notice.id} 
              notice={notice} 
              isExpanded={expandedNotices.includes(notice.id)}
              onToggleExpand={() => toggleNoticeExpanded(notice.id)}
              onMarkAsRead={handleMarkAsRead}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default StudentNotices;
