
export interface Notice {
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

export const categoryColorMap = {
  academic: 'bg-blue-100 text-blue-800 border-blue-200',
  event: 'bg-purple-100 text-purple-800 border-purple-200',
  examination: 'bg-red-100 text-red-800 border-red-200',
  general: 'bg-gray-100 text-gray-800 border-gray-200',
  holiday: 'bg-green-100 text-green-800 border-green-200'
};
