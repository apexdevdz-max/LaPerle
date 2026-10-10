// ──────────────────────────────────────────────
// Shared types — used across data files and components
// ──────────────────────────────────────────────

export interface OpeningHours {
  /** Day label in French */
  day: string;
  /** ISO day-of-week: 1 = Monday … 7 = Sunday */
  isoDay: number;
  open: string;   // "06:00"
  close: string;  // "19:00"
}

export type DietaryTag = 'végétarien' | 'végan' | 'sans porc' | 'contient gluten';

export interface MenuItem {
  id: string;
  name: string;
  /** Short French description */
  description: string;
  /** Price in CHF — use null for placeholder */
  price: number | null;
  /** Category slug */
  category: MenuCategory;
  /** Optional dietary info */
  tags?: DietaryTag[];
  /** Image filename in /images/ */
  image?: string;
}

export type MenuCategory = 'bureks' | 'sandwichs' | 'patisseries' | 'boissons';

export interface MenuCategoryInfo {
  slug: MenuCategory;
  label: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;     // 1–5
  text: string;
  /** e.g. "Il y a 2 mois" */
  date: string;
  /** Mark as placeholder for owner to replace */
  isPlaceholder: boolean;
}

export interface BusinessConfig {
  name: string;
  legalName: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  phone: string;
  phoneDisplay: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  aggregateRating: number;
  totalReviews: number;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}
