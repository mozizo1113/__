import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const emergencySection = document.getElementById('emergency');
      if (emergencySection) {
        const rect = emergencySection.getBoundingClientRect();
        // Show button when emergency section is at or above the viewport
        setIsVisible(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-24 left-6 z-50 rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-lg animate-fade-in"
      size="icon"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};
