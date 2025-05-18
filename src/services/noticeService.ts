
import { format, subDays } from 'date-fns';
import { Notice } from '@/types/notice';

export const generateMockNotices = (): Notice[] => {
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
