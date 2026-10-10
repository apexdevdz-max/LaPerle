// ──────────────────────────────────────────────
// Business configuration — SINGLE FILE to edit
// ──────────────────────────────────────────────
// ⚠️ OWNER: Confirm opening hours, phone, and links below.

import type { OpeningHours, BusinessConfig } from './types';

// ── Opening Hours ──────────────────────────────
// TO BE CONFIRMED — update these values as needed.
export const openingHours: OpeningHours[] = [
  { day: 'Lundi',    isoDay: 1, open: '06:00', close: '19:00' },
  { day: 'Mardi',    isoDay: 2, open: '06:00', close: '19:00' },
  { day: 'Mercredi', isoDay: 3, open: '06:00', close: '19:00' },
  { day: 'Jeudi',    isoDay: 4, open: '06:00', close: '19:00' },
  { day: 'Vendredi', isoDay: 5, open: '06:00', close: '19:00' },
  { day: 'Samedi',   isoDay: 6, open: '07:00', close: '16:00' },
  { day: 'Dimanche', isoDay: 7, open: '07:00', close: '13:00' },
];

// ── Business Info ──────────────────────────────
export const business: BusinessConfig = {
  name: 'La Perle de Béthusy',
  legalName: 'La Perle de Béthusy EA Sàrl',
  address: {
    street: 'Avenue de Béthusy 25',
    postalCode: '1005',
    city: 'Lausanne',
    country: 'Suisse',
  },
  phone: '+41215554775',
  phoneDisplay: '+41 21 555 47 75',
  googleMapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Avenue+de+Bethusy+25,+1005+Lausanne,+Suisse',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.5!2d6.6400!3d46.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAvenue+de+B%C3%A9thusy+25%2C+1005+Lausanne!5e0!3m2!1sfr!2sch!4v1',
  coordinates: {
    lat: 46.52,
    lng: 6.64,
  },
  aggregateRating: 4.7,
  totalReviews: 100,
  // ⚠️ OWNER: Add your real social media URLs below
  socialLinks: {
    instagram: '#',
    facebook: '#',
  },
};
