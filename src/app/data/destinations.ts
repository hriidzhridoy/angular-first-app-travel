export type Destination = {
  name: string;
  tagline: string;
  image: string;
  days: number;
  priceFrom: number;
};

export const destinations: Destination[] = [
  {
    name: 'Bali',
    tagline: 'Beaches • Culture • Resorts',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    days: 5,
    priceFrom: 399,
  },
  {
    name: 'Paris',
    tagline: 'Romance • Food • Museums',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    days: 4,
    priceFrom: 499,
  },
  {
    name: 'Tokyo',
    tagline: 'City • Tech • Nightlife',
    image:
      'https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1200&q=80',
    days: 6,
    priceFrom: 699,
  },
];
