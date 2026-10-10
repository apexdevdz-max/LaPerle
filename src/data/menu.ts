// ──────────────────────────────────────────────
// Menu data — prices are PLACEHOLDERS (null)
// ──────────────────────────────────────────────
// ⚠️ OWNER: Replace null with real prices in CHF.

import type { MenuItem, MenuCategoryInfo } from './types';

export const menuCategories: MenuCategoryInfo[] = [
  { slug: 'bureks',      label: 'Bureks' },
  { slug: 'sandwichs',   label: 'Sandwichs' },
  { slug: 'patisseries', label: 'Pâtisseries' },
  { slug: 'boissons',    label: 'Boissons' },
];

export const menuItems: MenuItem[] = [
  // ── Bureks ─────────────────────────────────
  {
    id: 'burek-viande',
    name: 'Burek viande',
    description: 'Pâte phyllo croustillante garnie de viande hachée assaisonnée, cuite au four.',
    price: null,
    category: 'bureks',
    tags: ['contient gluten'],
    image: 'burek-meat.jpg',
  },
  {
    id: 'burek-fromage',
    name: 'Burek fromage',
    description: 'Spirale de pâte feuilletée au fromage blanc fondant, dorée à perfection.',
    price: null,
    category: 'bureks',
    tags: ['végétarien', 'contient gluten'],
    image: 'burek-cheese.jpg',
  },
  {
    id: 'burek-epinards',
    name: 'Burek épinards',
    description: 'Garni d\'épinards frais et de fromage, un classique végétarien des Balkans.',
    price: null,
    category: 'bureks',
    tags: ['végétarien', 'contient gluten'],
    image: 'burek-spinach.jpg',
  },
  {
    id: 'burek-pomme-de-terre',
    name: 'Burek pomme de terre',
    description: 'Pommes de terre fondantes en garniture, enveloppées de pâte croustillante.',
    price: null,
    category: 'bureks',
    tags: ['végan', 'contient gluten'],
    image: 'burek-potato.jpg',
  },

  // ── Sandwichs ──────────────────────────────
  {
    id: 'sandwich-poulet',
    name: 'Sandwich poulet grillé',
    description: 'Poulet grillé, salade, tomates et sauce maison dans du pain frais.',
    price: null,
    category: 'sandwichs',
    tags: ['contient gluten'],
  },
  {
    id: 'sandwich-thon',
    name: 'Sandwich thon',
    description: 'Thon, maïs, salade et mayonnaise légère sur pain croustillant.',
    price: null,
    category: 'sandwichs',
    tags: ['contient gluten'],
  },
  {
    id: 'sandwich-veggie',
    name: 'Sandwich végétarien',
    description: 'Légumes frais de saison, houmous et herbes dans du pain complet.',
    price: null,
    category: 'sandwichs',
    tags: ['végétarien', 'contient gluten'],
  },

  // ── Pâtisseries ────────────────────────────
  {
    id: 'baklava',
    name: 'Baklava',
    description: 'Couches de pâte phyllo, noix concassées et sirop de miel parfumé.',
    price: null,
    category: 'patisseries',
    tags: ['végétarien', 'contient gluten'],
    image: 'baklava.jpg',
  },
  {
    id: 'trilece',
    name: 'Trilece (Tres Leches)',
    description: 'Gâteau moelleux imbibé de trois laits, nappé de caramel doré.',
    price: null,
    category: 'patisseries',
    tags: ['végétarien', 'contient gluten'],
    image: 'trilece.jpg',
  },
  {
    id: 'tulumba',
    name: 'Tulumba',
    description: 'Beignets croustillants trempés dans un sirop de sucre parfumé au citron.',
    price: null,
    category: 'patisseries',
    tags: ['végétarien', 'contient gluten'],
  },
  {
    id: 'hurmasice',
    name: 'Hurmasice',
    description: 'Petits gâteaux moelleux à base de semoule, imbibés de sirop.',
    price: null,
    category: 'patisseries',
    tags: ['végétarien', 'contient gluten'],
  },

  // ── Boissons ───────────────────────────────
  {
    id: 'cafe-turc',
    name: 'Café turc',
    description: 'Café finement moulu, préparé dans la tradition avec sa mousse.',
    price: null,
    category: 'boissons',
    tags: ['végan'],
  },
  {
    id: 'ayran',
    name: 'Ayran',
    description: 'Boisson au yaourt salé, rafraîchissante et légère.',
    price: null,
    category: 'boissons',
    tags: ['végétarien'],
  },
  {
    id: 'jus-orange',
    name: 'Jus d\'orange frais',
    description: 'Oranges pressées à la minute, pur jus sans sucre ajouté.',
    price: null,
    category: 'boissons',
    tags: ['végan'],
  },
  {
    id: 'eau',
    name: 'Eau minérale',
    description: 'Plate ou gazeuse, 50cl.',
    price: null,
    category: 'boissons',
    tags: ['végan'],
  },
];
