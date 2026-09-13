'use client';

import { useEffect } from 'react';

// Plays `[data-reveal]` entrances each time an element scrolls into view: rising from below when
// scrolling down, dropping in from above when scrolling up.
// Content stays visible without JavaScript and for visitors who prefer reduced motion.
export default function ScrollReveal() {
  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const show = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const item = entry.target as HTMLElement;
          if (!entry.isIntersecting || item.classList.contains('is-revealed')) continue;
          item.style.setProperty('--reveal-shift', entry.boundingClientRect.top < 0 ? '-22px' : '22px');
          item.classList.add('is-revealed', 'is-revealing');
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );

    // Once an element is well clear of the screen, reset it so it plays again on the next visit.
    const reset = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) entry.target.classList.remove('is-revealed', 'is-revealing');
        }
      },
      { rootMargin: '25% 0px' },
    );

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((item) => {
      // Anything already on screen stays put instead of blinking out and back in.
      const { top, bottom } = item.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) item.classList.add('is-revealed');
      show.observe(item);
      reset.observe(item);
    });
    document.documentElement.classList.add('reveal-ready');

    return () => {
      show.disconnect();
      reset.disconnect();
    };
  }, []);

  return null;
}
