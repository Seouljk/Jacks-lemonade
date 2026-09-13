'use client';

import { useEffect } from 'react';

// Scroll-linked touches: the sticky header lifts and fills its progress bar, the nav marks the section
// on screen, and the promo strip speeds up with the scroll (running backwards while scrolling up).
export default function ScrollEffects() {
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    // Only present when motion is allowed; see the promo-scroll animation in globals.css.
    const marquee = document.querySelector('.promo-track')?.getAnimations()[0];
    const lap = marquee?.effect?.getComputedTiming().duration;
    // Start the loop many laps in, so running it backwards never reaches its first frame.
    if (marquee && typeof lap === 'number' && typeof marquee.currentTime === 'number') {
      marquee.currentTime += lap * 1000;
    }

    let lastY = window.scrollY;
    let lastTime = performance.now();
    let boost = 0;
    let frame = 0;

    const update = (now: number) => {
      frame = 0;
      const y = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      header.classList.toggle('is-scrolled', y > 8);
      header.style.setProperty('--scroll-progress', scrollable > 0 ? (y / scrollable).toFixed(4) : '0');

      if (!marquee) return;
      // Recent scroll speed pushes the marquee along, then it eases back to its normal drift.
      const velocity = (y - lastY) / Math.max(now - lastTime, 1);
      lastY = y;
      lastTime = now;
      boost += (Math.max(-6, Math.min(8, velocity * 6)) - boost) * 0.25;
      if (Math.abs(boost) < 0.01) boost = 0;
      marquee.playbackRate = 1 + boost;
      if (boost !== 0) frame = requestAnimationFrame(update);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update(performance.now());
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const linksBySection = new Map<Element, HTMLAnchorElement>();
    header.querySelectorAll<HTMLAnchorElement>('nav a').forEach((link) => {
      const section = link.hash && document.getElementById(link.hash.slice(1));
      if (section) linksBySection.set(section, link);
    });

    // A section counts as on screen while it crosses the middle of the viewport.
    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                linksBySection.get(entry.target)?.classList.toggle('is-active', entry.isIntersecting);
              }
            },
            { rootMargin: '-45% 0px -50% 0px' },
          )
        : null;
    linksBySection.forEach((_, section) => observer?.observe(section));

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      observer?.disconnect();
      if (marquee) marquee.playbackRate = 1;
    };
  }, []);

  return null;
}
