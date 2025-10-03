'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const NavigationWrapper = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={cn(
        'fixed top-0 left-0 w-full py-3 z-50 transition-colors duration-300',
        scrolled ? 'bg-white/10 dark:bg-white/1 border-b-1 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      {children}
    </section>
  );
};
