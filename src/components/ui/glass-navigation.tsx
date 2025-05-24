
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassNavigationProps {
  className?: string;
  children: React.ReactNode;
  isScrolled?: boolean;
}

export const GlassNavigation: React.FC<GlassNavigationProps> = ({
  className,
  children,
  isScrolled = false
}) => {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-transparent",
        className
      )}
    >
      {children}
    </nav>
  );
};
