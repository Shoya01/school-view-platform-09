
import React from 'react';
import { FileText, Calendar, Bell } from 'lucide-react';
import { Notice } from '@/types/notice';

interface NoticeCategoryIconProps {
  category: Notice['category'];
  className?: string;
}

const NoticeCategoryIcon: React.FC<NoticeCategoryIconProps> = ({ category, className = "h-4 w-4" }) => {
  switch (category) {
    case 'academic':
    case 'examination':
      return <FileText className={className} />;
    case 'event':
    case 'holiday':
      return <Calendar className={className} />;
    case 'general':
    default:
      return <Bell className={className} />;
  }
};

export default NoticeCategoryIcon;
