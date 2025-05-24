
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

interface MegaMenuItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

interface MegaMenuProps {
  title: string;
  items: MegaMenuItemProps[];
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
  };
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ title, items, featured }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-white/90 hover:text-white transition-colors">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-6 w-[600px] lg:w-[800px] lg:grid-cols-[1fr_300px]">
          <div className="grid gap-4 lg:grid-cols-2">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href || '#'}
                className={cn(
                  "group grid h-auto w-full items-start gap-2 rounded-md p-4 transition-colors",
                  "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-sm font-medium leading-none">{item.title}</div>
                </div>
                <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {item.description}
                </div>
              </a>
            ))}
          </div>
          {featured && (
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-4">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h4 className="text-sm font-medium">{featured.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {featured.description}
                  </p>
                </div>
                <div className="mt-4">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="rounded-md object-cover w-full h-32"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
