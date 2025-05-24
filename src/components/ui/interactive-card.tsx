
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface InteractiveCardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  className,
  children,
  hover = true,
  glow = false
}) => {
  return (
    <Card
      className={cn(
        "transition-all duration-300",
        hover && "hover:scale-105 hover:shadow-2xl",
        glow && "hover:shadow-2xl hover:shadow-primary/25",
        "group cursor-pointer",
        className
      )}
    >
      {children}
    </Card>
  );
};
