
import React from 'react';
import { cn } from '@/lib/utils';

interface AcademicNavigationProps {
  className?: string;
  children: React.ReactNode;
  isScrolled?: boolean;
}

export const AcademicNavigation: React.FC<AcademicNavigationProps> = ({
  className,
  children,
  isScrolled = false
}) => {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 vintage-nav",
        isScrolled && "shadow-lg",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-yellow-900/10 to-amber-900/10"></div>
      <div className="relative">
        {children}
      </div>
    </nav>
  );
};
