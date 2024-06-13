import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (callback: () => void, options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            callback();
          } else {
            setIsVisible(false);
          }
        });
      }, options);

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref, options, callback]);

  return [ref, isVisible] as const;
};

export default useIntersectionObserver;
