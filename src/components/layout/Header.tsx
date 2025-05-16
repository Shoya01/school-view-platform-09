
import React from 'react';
import { Bell, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { User as UserType } from '@/types';

interface HeaderProps {
  user: UserType;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const { logout } = useAuth();
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const getRoleBadge = () => {
    switch (user.role) {
      case 'admin':
        return <span className="rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">Admin</span>;
      case 'teacher':
        return <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">Teacher</span>;
      case 'student':
        return <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Student</span>;
      default:
        return null;
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <h1 className="text-xl font-semibold text-gray-900">
          {user.role === 'admin' ? 'Admin Dashboard' : 
           user.role === 'teacher' ? 'Teacher Dashboard' : 'Student Dashboard'}
        </h1>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarImage src={user.profileImageUrl} />
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span>{user.name}</span>
                  <span className="text-xs text-muted-foreground">{user.email}</span>
                  <div className="mt-1">{getRoleBadge()}</div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
