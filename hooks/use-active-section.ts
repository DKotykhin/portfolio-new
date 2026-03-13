'use client';

import { useEffect, useRef, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const intersecting = useRef<Set<string>>(new Set());

  useEffect(() => {
    const pickTopmost = () => {
      // Return the first sectionId (in DOM order) that is currently intersecting
      const active = sectionIds.find(id => intersecting.current.has(id)) ?? null;
      setActiveSection(active);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersecting.current.add(entry.target.id);
          } else {
            intersecting.current.delete(entry.target.id);
          }
        });
        pickTopmost();
      },
      {
        rootMargin: '-80% 0px -20% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const set = intersecting.current;
    return () => {
      observer.disconnect();
      set.clear();
    };
  }, [sectionIds]);

  useEffect(() => {
    if (activeSection === null) {
      history.replaceState(null, '', window.location.pathname);
    } else {
      history.replaceState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);

  return activeSection;
}
