
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

// Mock discussion data
const mockDiscussions = [
  {
    id: '1',
    user: { id: '101', name: 'Emma Thompson', avatar: null },
    message: "Has anyone started working on the math assignment yet? I'm finding question 3 particularly challenging.",
    timestamp: '2025-05-15T14:32:00',
    likes: 5,
  },
  {
    id: '2',
    user: { id: '102', name: 'Michael Chen', avatar: null },
    message: "I've completed most of it. Question 3 involves applying the quadratic formula but with a twist. I can explain during lunch break tomorrow.",
    timestamp: '2025-05-15T14:45:00',
    likes: 3,
  },
  {
    id: '3',
    user: { id: '103', name: 'Sophia Rodriguez', avatar: null },
    message: "Don't forget we have that science project due next week as well. Who wants to form a study group this weekend?",
    timestamp: '2025-05-15T15:10:00',
    likes: 7,
  },
  {
    id: '4',
    user: { id: '3', name: 'Student Jones', avatar: null },
    message: "I'd be happy to join the study group. How about Saturday at 2pm in the library?",
    timestamp: '2025-05-15T15:20:00',
    likes: 4,
  }
];

const ClassDiscussion = () => {
  const { currentUser } = useAuth();
  const [newMessage, setNewMessage] = useState('');
  const [discussions, setDiscussions] = useState(mockDiscussions);

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) {
      toast.error('Please enter a message');
      return;
    }

    const newPost = {
      id: `${Date.now()}`,
      user: { id: currentUser?.id || '0', name: currentUser?.name || 'Unknown', avatar: currentUser?.profileImageUrl },
      message: newMessage.trim(),
      timestamp: new Date().toISOString(),
      likes: 0,
    };

    setDiscussions(prev => [newPost, ...prev]);
    setNewMessage('');
    toast.success('Message posted successfully');
  };

  const handleLike = (id: string) => {
    setDiscussions(prev =>
      prev.map(discussion =>
        discussion.id === id
          ? { ...discussion, likes: discussion.likes + 1 }
          : discussion
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg shadow-sm border p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              {currentUser?.profileImageUrl && (
                <AvatarImage src={currentUser.profileImageUrl} alt={currentUser.name} />
              )}
              <AvatarFallback>{getInitials(currentUser?.name || "")}</AvatarFallback>
            </Avatar>
            <Textarea 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Share something with your class..."
              className="flex-1 min-h-[80px]"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Post
            </Button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="bg-card rounded-lg shadow-sm border p-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                {discussion.user.avatar && (
                  <AvatarImage src={discussion.user.avatar} alt={discussion.user.name} />
                )}
                <AvatarFallback>{getInitials(discussion.user.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{discussion.user.name}</h4>
                  <span className="text-xs text-muted-foreground">
                    {formatTimestamp(discussion.timestamp)}
                  </span>
                </div>
                <p className="text-sm">{discussion.message}</p>
                <div className="flex items-center gap-4 pt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-muted-foreground hover:text-foreground gap-1"
                    onClick={() => handleLike(discussion.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up">
                      <path d="M7 10v12"/>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
                    </svg>
                    {discussion.likes}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-muted-foreground hover:text-foreground gap-1"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassDiscussion;
