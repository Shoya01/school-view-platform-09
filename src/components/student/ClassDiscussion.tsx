
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, ThumbsUp, Users, Clock, Bell } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

// Mock discussion data
const mockDiscussions = [
  {
    id: '1',
    user: { id: '101', name: 'Emma Thompson', avatar: null },
    message: "Has anyone started working on the math assignment yet? I'm finding question 3 particularly challenging.",
    timestamp: '2025-05-15T14:32:00',
    likes: 5,
    category: 'question',
    replies: [
      {
        id: '1-1',
        user: { id: '102', name: 'Michael Chen', avatar: null },
        message: "I've completed most of it. Question 3 involves applying the quadratic formula but with a twist. I can explain during lunch break tomorrow.",
        timestamp: '2025-05-15T14:45:00',
        likes: 3,
      }
    ]
  },
  {
    id: '2',
    user: { id: '102', name: 'Michael Chen', avatar: null },
    message: "I've completed most of it. Question 3 involves applying the quadratic formula but with a twist.",
    timestamp: '2025-05-15T14:45:00',
    likes: 3,
    category: 'discussion',
    replies: []
  },
  {
    id: '3',
    user: { id: '103', name: 'Sophia Rodriguez', avatar: null },
    message: "Don't forget we have that science project due next week as well. Who wants to form a study group this weekend?",
    timestamp: '2025-05-15T15:10:00',
    likes: 7,
    category: 'announcement',
    replies: [
      {
        id: '3-1',
        user: { id: '3', name: 'Student Jones', avatar: null },
        message: "I'd be happy to join the study group. How about Saturday at 2pm in the library?",
        timestamp: '2025-05-15T15:20:00',
        likes: 4,
      }
    ]
  },
  {
    id: '4',
    user: { id: '3', name: 'Student Jones', avatar: null },
    message: "I'd be happy to join the study group. How about Saturday at 2pm in the library?",
    timestamp: '2025-05-15T15:20:00',
    likes: 4,
    category: 'discussion',
    replies: []
  }
];

const categoryColors = {
  question: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    iconColor: 'text-amber-500',
    icon: () => <MessageSquare className="h-4 w-4" />
  },
  discussion: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
    iconColor: 'text-blue-500',
    icon: () => <Users className="h-4 w-4" />
  },
  announcement: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
    iconColor: 'text-green-500',
    icon: () => <Bell className="h-4 w-4" />
  }
};

const ClassDiscussion = () => {
  const { currentUser } = useAuth();
  const [newMessage, setNewMessage] = useState('');
  const [messageCategory, setMessageCategory] = useState('discussion');
  const [discussions, setDiscussions] = useState(mockDiscussions);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [filterBy, setFilterBy] = useState('all');

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
      category: messageCategory,
      replies: []
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

  const handleReply = (discussionId: string) => {
    if (!replyContent.trim()) {
      toast.error('Please enter a reply');
      return;
    }

    const newReply = {
      id: `${discussionId}-${Date.now()}`,
      user: { id: currentUser?.id || '0', name: currentUser?.name || 'Unknown', avatar: currentUser?.profileImageUrl },
      message: replyContent.trim(),
      timestamp: new Date().toISOString(),
      likes: 0,
    };

    setDiscussions(prev =>
      prev.map(discussion =>
        discussion.id === discussionId
          ? { ...discussion, replies: [...(discussion.replies || []), newReply] }
          : discussion
      )
    );

    setReplyContent('');
    setReplyingTo(null);
    toast.success('Reply posted');
  };

  const filteredDiscussions = filterBy === 'all' 
    ? discussions 
    : discussions.filter(d => d.category === filterBy);

  return (
    <div className="space-y-2 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-blue-100 dark:ring-blue-800">
              {currentUser?.profileImageUrl && (
                <AvatarImage src={currentUser.profileImageUrl} alt={currentUser.name} />
              )}
              <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">{getInitials(currentUser?.name || "")}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <Textarea 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Share something with your class..."
                className="flex-1 min-h-[80px] border-blue-200 focus-visible:ring-blue-400"
              />
              
              <div className="flex items-center gap-2">
                <div className="text-sm text-muted-foreground">Post as:</div>
                <div className="flex gap-1">
                  <Badge 
                    variant="outline"
                    className={`cursor-pointer ${messageCategory === 'discussion' ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-blue-50/50'}`}
                    onClick={() => setMessageCategory('discussion')}
                  >
                    <Users className="mr-1 h-3 w-3" />
                    Discussion
                  </Badge>
                  <Badge 
                    variant="outline"
                    className={`cursor-pointer ${messageCategory === 'question' ? 'bg-amber-100 text-amber-700 border-amber-300' : 'bg-amber-50/50'}`}
                    onClick={() => setMessageCategory('question')}
                  >
                    <MessageSquare className="mr-1 h-3 w-3" />
                    Question
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              <MessageSquare className="h-4 w-4 mr-2" />
              Post
            </Button>
          </div>
        </form>
      </div>
      
      <div className="flex items-center justify-between py-2">
        <h3 className="font-medium text-muted-foreground flex items-center gap-1">
          <MessageSquare className="h-4 w-4" />
          Class Conversations
        </h3>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Filter:</span>
          <div className="flex gap-1">
            <Badge 
              variant="outline" 
              className={`cursor-pointer transition-colors ${filterBy === 'all' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-transparent'}`}
              onClick={() => setFilterBy('all')}
            >
              All
            </Badge>
            <Badge 
              variant="outline" 
              className={`cursor-pointer transition-colors ${filterBy === 'question' ? 'bg-amber-100 text-amber-700' : 'bg-transparent'}`}
              onClick={() => setFilterBy('question')}
            >
              Questions
            </Badge>
            <Badge 
              variant="outline" 
              className={`cursor-pointer transition-colors ${filterBy === 'discussion' ? 'bg-blue-100 text-blue-700' : 'bg-transparent'}`}
              onClick={() => setFilterBy('discussion')}
            >
              Discussions
            </Badge>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredDiscussions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No conversations match your filter. Start a new discussion!
          </div>
        ) : (
          filteredDiscussions.map((discussion) => (
            <div key={discussion.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    {discussion.user.avatar && (
                      <AvatarImage src={discussion.user.avatar} alt={discussion.user.name} />
                    )}
                    <AvatarFallback>{getInitials(discussion.user.name)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{discussion.user.name}</h4>
                        {discussion.category && (
                          <Badge variant="outline" className={`${categoryColors[discussion.category]?.bg || 'bg-gray-50'} ${categoryColors[discussion.category]?.text || 'text-gray-700'} ${categoryColors[discussion.category]?.border || 'border-gray-200'} text-xs`}>
                            <span className="flex items-center">
                              {categoryColors[discussion.category]?.icon()}
                              <span className="ml-1">{discussion.category.charAt(0).toUpperCase() + discussion.category.slice(1)}</span>
                            </span>
                          </Badge>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatTimestamp(discussion.timestamp)}
                      </span>
                    </div>
                    <p className="text-sm">{discussion.message}</p>
                    <div className="flex items-center gap-4 pt-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`text-muted-foreground hover:text-blue-600 gap-1 ${discussion.likes > 0 ? 'text-blue-600' : ''}`}
                        onClick={() => handleLike(discussion.id)}
                      >
                        <ThumbsUp className="h-4 w-4" />
                        {discussion.likes}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-muted-foreground hover:text-blue-600 gap-1"
                        onClick={() => setReplyingTo(replyingTo === discussion.id ? null : discussion.id)}
                      >
                        <MessageSquare className="h-4 w-4" />
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Replies section */}
              {discussion.replies && discussion.replies.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                  {discussion.replies.map(reply => (
                    <div key={reply.id} className="p-3 pl-12 border-t border-gray-100 dark:border-gray-700 first:border-0">
                      <div className="flex items-start gap-2">
                        <Avatar className="h-8 w-8">
                          {reply.user.avatar && (
                            <AvatarImage src={reply.user.avatar} alt={reply.user.name} />
                          )}
                          <AvatarFallback className="text-xs">{getInitials(reply.user.name)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm">{reply.user.name}</h4>
                            <span className="text-xs text-muted-foreground">{formatTimestamp(reply.timestamp)}</span>
                          </div>
                          <p className="text-sm">{reply.message}</p>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className={`text-muted-foreground hover:text-blue-600 gap-1 text-xs ${reply.likes > 0 ? 'text-blue-600' : ''}`}
                            onClick={() => handleLike(reply.id)}
                          >
                            <ThumbsUp className="h-3 w-3" />
                            {reply.likes}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Reply input */}
              {replyingTo === discussion.id && (
                <div className="bg-gray-50 dark:bg-gray-800/50 p-3 pl-12 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                      {currentUser?.profileImageUrl && (
                        <AvatarImage src={currentUser.profileImageUrl} alt={currentUser.name} />
                      )}
                      <AvatarFallback className="text-xs bg-blue-100 text-blue-700">
                        {getInitials(currentUser?.name || "")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <Textarea 
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Write your reply..."
                        className="min-h-[60px] text-sm"
                      />
                      <div className="flex justify-end gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => setReplyingTo(null)}
                        >
                          Cancel
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleReply(discussion.id)}
                        >
                          Post Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClassDiscussion;
