
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Book, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Home, 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  User, 
  Users,
  BarChart
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { currentUser } = useAuth();
  const location = useLocation();

  const adminNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Users, label: 'Teachers', href: '/admin/teachers' },
    { icon: Users, label: 'Students', href: '/admin/students' },
    { icon: Book, label: 'Classes', href: '/admin/classes' },
    { icon: Calendar, label: 'Calendar', href: '/admin/calendar' },
    { icon: MessageSquare, label: 'Notices', href: '/admin/notices' },
    { icon: BarChart, label: 'Reports', href: '/admin/reports' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ];

  const teacherNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/teacher/dashboard' },
    { icon: Users, label: 'Students', href: '/teacher/students' },
    { icon: FileText, label: 'Assignments', href: '/teacher/assignments' },
    { icon: Calendar, label: 'Attendance', href: '/teacher/attendance' },
    { icon: MessageSquare, label: 'Notices', href: '/teacher/notices' },
    { icon: BarChart, label: 'Reports', href: '/teacher/reports' },
    { icon: Settings, label: 'Settings', href: '/teacher/settings' },
  ];

  const studentNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/student/dashboard' },
    { icon: FileText, label: 'Assignments', href: '/student/assignments' },
    { icon: Calendar, label: 'Attendance', href: '/student/attendance' },
    { icon: MessageSquare, label: 'Notices', href: '/student/notices' },
    { icon: BarChart, label: 'Reports', href: '/student/reports' },
    { icon: User, label: 'Profile', href: '/student/profile' },
  ];

  const getNavItems = () => {
    switch (currentUser?.role) {
      case 'admin':
        return adminNavItems;
      case 'teacher':
        return teacherNavItems;
      case 'student':
        return studentNavItems;
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <div
      className={cn(
        "bg-sidebar text-sidebar-foreground transition-all duration-300 flex flex-col h-screen",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
          {!collapsed && (
            <span className="font-bold text-xl">EduMgmt</span>
          )}
          {collapsed && (
            <span className="font-bold text-xl">E</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    location.pathname === item.href
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    collapsed && "justify-center"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", !collapsed && "mr-2")} />
                  {!collapsed && <span>{item.label}</span>}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
