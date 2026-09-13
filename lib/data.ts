export type CupSize = 'j1' | 'j2' | 'hot';

export const CUP_SIZE_LABELS: Record<CupSize, string> = {
  j1: 'J1',
  j2: 'J2',
  hot: 'HOT',
};

export interface MenuItem {
  name: string;
  prices: Partial<Record<CupSize, number>>;
}

export interface MenuFamily {
  id: string;
  name: string;
  sub: string;
  /** Desktop column the family card sits in (0 = left, 1 = right). */
  column: 0 | 1;
  sizes: CupSize[];
  items: MenuItem[];
}

const cup = (name: string, j1: number, j2: number, hot?: number): MenuItem => ({
  name,
  prices: hot === undefined ? { j1, j2 } : { j1, j2, hot },
});

// Prices from the in-store menu board.
export const MENU_FAMILIES: MenuFamily[] = [
  {
    id: 'jacks-classics',
    name: "Jack's Classics",
    sub: 'where it all started',
    column: 0,
    sizes: ['j1', 'j2', 'hot'],
    items: [
      cup('Classic Lemonade', 85, 95, 95),
      cup('Honey Lemonade', 110, 120, 120),
      cup('Yakult Lemonade', 110, 120, 120),
    ],
  },
  {
    id: 'jacks-specials',
    name: "Jack's Specials",
    sub: 'the signatures',
    column: 1,
    sizes: ['j1', 'j2'],
    items: [
      cup('Lemon Cheesecake', 125, 160),
      cup('Berry Cheesecake', 145, 175),
      cup('Basil Rich Tamarind', 125, 160),
      cup('Ginger Cucumber Sugar-Free', 145, 185),
    ],
  },
  {
    id: 'dad-johns-tea',
    name: "Dad John's Tea Lemonade",
    sub: 'brewed & chilled',
    column: 0,
    sizes: ['j1', 'j2', 'hot'],
    items: [
      cup('Tea Lemonade', 95, 135, 135),
      cup('Blueberry Tea', 115, 155, 155),
      cup('Green Apple Tea', 115, 155, 155),
      cup('Kiwi Tea', 115, 155, 155),
      cup('Peach Tea', 115, 155, 155),
      cup('Strawberry Tea', 115, 155, 155),
      cup('Wintermelon Tea', 115, 155, 155),
    ],
  },
  {
    id: 'sis-julias-fruit',
    name: "Sis Julia's Fruit Lemonade",
    sub: 'sweet & sunny',
    column: 1,
    sizes: ['j1', 'j2', 'hot'],
    items: [
      cup('Blueberry', 95, 135, 135),
      cup('Green Apple', 95, 135, 135),
      cup('Kiwi', 95, 135, 135),
      cup('Peach', 95, 135, 135),
      cup('Strawberry', 95, 135, 135),
      cup('Wintermelon', 95, 135, 135),
    ],
  },
  {
    id: 'baby-james-sweet',
    name: "Baby James' Sweet Lemonade",
    sub: 'for the little ones',
    column: 0,
    sizes: ['j1', 'j2'],
    items: [cup('Gummy Lemonade', 110, 120)],
  },
  {
    id: 'mom-jennys-herb',
    name: "Mom Jenny's Herb Lemonade",
    sub: 'straight from the garden',
    column: 1,
    sizes: ['j1', 'j2', 'hot'],
    items: [
      cup('Basil', 95, 135, 135),
      cup('Cucumber', 95, 135, 135),
      cup('Ginger', 95, 135, 135),
      cup('Mint', 95, 135, 135),
      cup('Tamarind', 95, 135, 135),
    ],
  },
];

/** "Treasures" add-ons; a price of 0 is shown as FREE. */
export const ADD_ONS = [
  { name: 'Plum Salt', price: 0 },
  { name: 'Basil Seeds', price: 25 },
  { name: 'Coconut Jelly', price: 25 },
  { name: 'Gummy', price: 25 },
  { name: 'Honey', price: 25 },
  { name: 'Poppers', price: 25 },
  { name: 'Yakult', price: 25 },
  { name: 'Stevia Cup', price: 30 },
  { name: 'Stevia Liter', price: 90 },
];

export type BottleSize = 'ml350' | 'literRegular' | 'literSugarFree' | 'literHoney';

export const BOTTLE_SIZES: { key: BottleSize; label: string }[] = [
  { key: 'ml350', label: '350ML' },
  { key: 'literRegular', label: 'Liter Reg.' },
  { key: 'literSugarFree', label: 'Liter Sugar-Free' },
  { key: 'literHoney', label: 'Liter Honey' },
];

/** Family Delights to-go bottles. */
export const BOTTLES: { name: string; prices: Partial<Record<BottleSize, number>> }[] = [
  { name: 'Classic', prices: { ml350: 65, literRegular: 270, literSugarFree: 360, literHoney: 360 } },
  { name: 'Cucumber', prices: { ml350: 75, literRegular: 300, literSugarFree: 390, literHoney: 390 } },
  { name: 'Ginger', prices: { ml350: 75, literRegular: 300, literSugarFree: 390, literHoney: 390 } },
  { name: 'Tamarind', prices: { ml350: 75, literRegular: 300, literSugarFree: 390, literHoney: 390 } },
  { name: 'Yakult 2', prices: { literRegular: 330, literSugarFree: 420, literHoney: 420 } },
];

export const JARS = [
  { name: 'Lemon Ginger Tea', size: '300g jar', price: 370 },
  { name: 'Pure Honey', size: '300g jar', price: 250 },
];

export interface BestSeller {
  rank: number;
  slug: string;
  name: string;
  prices: { label: string; value: number }[];
}

// Ranking and prices from the "Most-Loved Best Seller" poster.
// Photos live in public/images/best-sellers/<slug>.png.
export const BEST_SELLERS: BestSeller[] = [
  { rank: 1, slug: 'lemon-cheesecake', name: 'Lemon Cheesecake', prices: [{ label: 'J1', value: 125 }, { label: 'J2', value: 160 }] },
  { rank: 2, slug: 'cucumber-lemon-liter', name: 'Cucumber Lemon Liter', prices: [{ label: 'Regular', value: 300 }, { label: 'Sugar-Free', value: 390 }] },
  { rank: 3, slug: 'strawberry-yakult-lemonade', name: 'Strawberry Yakult Lemonade', prices: [{ label: 'J1', value: 120 }, { label: 'J2', value: 160 }] },
  { rank: 4, slug: 'ginger-honey-lemonade', name: 'Ginger Honey Lemonade', prices: [{ label: 'J1', value: 125 }, { label: 'J2', value: 165 }] },
  { rank: 5, slug: 'green-apple-tea-lemonade', name: 'Green Apple Tea Lemonade', prices: [{ label: 'J1', value: 140 }, { label: 'J2', value: 180 }] },
  { rank: 6, slug: 'sugar-free-classic-lemonade', name: 'Sugar-Free Classic Lemonade', prices: [{ label: 'J1', value: 115 }, { label: 'J2', value: 125 }] },
  { rank: 7, slug: 'basil-rich-tamarind', name: 'Basil Rich Tamarind', prices: [{ label: 'J1', value: 125 }, { label: 'J2', value: 160 }] },
  { rank: 8, slug: 'blueberry-lemonade', name: 'Blueberry Lemonade', prices: [{ label: 'J1', value: 120 }, { label: 'J2', value: 160 }] },
  { rank: 9, slug: 'kiwi-lemonade', name: 'Kiwi Lemonade', prices: [{ label: 'J1', value: 120 }, { label: 'J2', value: 160 }] },
  { rank: 10, slug: 'orange-lemonade', name: 'Orange Lemonade', prices: [{ label: 'J1', value: 120 }, { label: 'J2', value: 160 }] },
];

export const formatPrice = (value: number) => (value === 0 ? 'FREE' : `₱${value}`);

export const BRANCHES = [
  {
    id: 'glorietta-4',
    mall: "Glorietta 4",
    city: "Makati City",
    note: "Ground Floor, Activity Center",
    mapQuery: "Jack's Fresh Lemonade Glorietta 4 Activity Center, Makati",
  },
  {
    id: 'market-market',
    mall: "Market! Market!",
    city: "Taguig City",
    note: "4th Floor",
    mapQuery: "Jack's Fresh Lemonade Market Market, Taguig",
  },
  {
    id: 'up-town-center',
    mall: "UP Town Center",
    city: "Quezon City",
    note: "Ground Floor, Phase 1",
    mapQuery: "Jack's Fresh Lemonade UP Town Center, Quezon City",
  },
  {
    id: 'ayala-malls-feliz',
    mall: "Ayala Malls Feliz",
    city: "Pasig City",
    note: "Food Choices",
    mapQuery: "Jack's Fresh Lemonade Ayala Malls Feliz, Pasig",
  },
];

export const SITE_CONFIG = {
  siteName: "Jack's Lemonade",
  description: "The only fresh lemonade in 30 flavors. Hand-squeezed daily and served ice-cold at malls across Metro Manila.",
  tagline: "Squeeze the joy in every sip!",
  url: "https://jackslemonade.com",
  logo: "/images/jacks-logo.png",
  orderLinks: {
    // Placeholder: replace '#' with the Jack's Lemonade store link on Grab.
    grab: "#",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/jackslemonadeph",
    instagram: "https://www.instagram.com/jackslemonadeph",
  },
  contact: {
    email: "hello@jackslemonade.com",
    phone: "+63 (02) 1234-5678",
    city: "Metro Manila, Philippines",
  },
};
