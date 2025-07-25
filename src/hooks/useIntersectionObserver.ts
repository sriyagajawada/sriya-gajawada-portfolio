import { useEffect, useRef } from 'react';

export const useIntersectionObserver = () => {
  const elementsRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
      observer.observe(el);
      elementsRef.current.add(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        observer.unobserve(el);
      });
      elementsRef.current.clear();
    };
  }, []);

  return elementsRef;
};