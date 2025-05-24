
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface VintageCardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  academic?: boolean;
}

export const VintageCard: React.FC<VintageCardProps> = ({
  className,
  children,
  hover = true,
  academic = false
}) => {
  return (
    <Card
      className={cn(
        "transition-all duration-300 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950",
        "border-2 border-amber-800/30 shadow-lg",
        hover && "hover:shadow-xl hover:-translate-y-1 vintage-hover",
        academic && "vintage-border",
        "group cursor-pointer",
        className
      )}
    >
      {children}
    </Card>
  );
};
