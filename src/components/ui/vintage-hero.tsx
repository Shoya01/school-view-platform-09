
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface VintageHeroProps {
  className?: string;
  children: React.ReactNode;
}

export const VintageHero: React.FC<VintageHeroProps> = ({
  className,
  children
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn(
      "relative min-h-screen flex items-center justify-center overflow-hidden",
      "parchment-bg",
      className
    )}>
      {/* Vintage Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      
      {/* Falling Leaves Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="falling-leaf text-amber-600 text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            🍂
          </div>
        ))}
      </div>

      {/* Academic Seal Background */}
      <div className="absolute top-20 right-20 academic-seal w-48 h-48 opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 academic-seal w-32 h-32 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className={cn(
        "relative z-10 w-full transition-all duration-1000",
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        {children}
      </div>
    </section>
  );
};
