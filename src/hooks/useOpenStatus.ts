import { useState, useEffect } from 'react';
import { openingHours } from '../data/config';

/**
 * Returns whether the bakery is currently open, based on config hours
 * and the user's local time (Lausanne = Europe/Zurich).
 */
export function useOpenStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [todayHours, setTodayHours] = useState<{ open: string; close: string } | null>(null);

  useEffect(() => {
    function check() {
      // Lausanne is in Europe/Zurich
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      const dayFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Zurich',
        weekday: 'long',
      });

      const timeStr = formatter.format(now); // "06:30"
      const dayStr = dayFormatter.format(now); // "Monday"

      // Map English day name to ISO day number
      const dayMap: Record<string, number> = {
        Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4,
        Friday: 5, Saturday: 6, Sunday: 7,
      };
      const isoDay = dayMap[dayStr] ?? 1;

      const today = openingHours.find((h) => h.isoDay === isoDay);
      if (!today) {
        setIsOpen(false);
        setTodayHours(null);
        return;
      }

      setTodayHours({ open: today.open, close: today.close });

      // Parse time "HH:MM" to minutes since midnight
      const toMinutes = (t: string) => {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + m;
      };

      const nowMinutes = toMinutes(timeStr);
      const openMinutes = toMinutes(today.open);
      const closeMinutes = toMinutes(today.close);

      setIsOpen(nowMinutes >= openMinutes && nowMinutes < closeMinutes);
    }

    check();
    // Re-check every 60 seconds
    const interval = setInterval(check, 60_000);
    return () => clearInterval(interval);
  }, []);

  return { isOpen, todayHours };
}
