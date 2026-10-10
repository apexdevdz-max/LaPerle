import { useEffect, useRef } from 'react';

/**
 * Intersection Observer-based scroll reveal.
 * Adds a `data-revealed="true"` attribute when the element enters the viewport.
 * Respects prefers-reduced-motion: skips animation and reveals immediately.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      el.setAttribute('data-revealed', 'true');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-revealed', 'true');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
