export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio: 'tall' | 'square' | 'wide';
}

export const siteData = {
  brand: {
    name: "THE FINE STROKES",
    tagline: "Where ink meets emotion.",
    subtitle: "Thoughtfully curated, bespoke gifts and custom calligraphy crafted to turn moments into heirlooms.",
    artistName: "The Fine Strokes Studio",
  },
  contactInfo: {
    email: "hello@thefinestrokes.com",
    phone: "+1 (555) 019-2834",
    instagram: "https://instagram.com/thefinestrokes",
  },
  gallery: [
    {
      id: "1",
      title: "Vow Booklets",
      category: "Gold ink on deckled edges",
      image: "/images/work-1.jpg",
      aspectRatio: "tall",
    },
    {
      id: "2",
      title: "Heirloom Keepsakes",
      category: "Engraved Glassware",
      image: "/images/work-2.jpg",
      aspectRatio: "square",
    },
    {
      id: "3",
      title: "Commissioned Poetry",
      category: "Handmade Cotton Paper",
      image: "/images/work-3.jpg",
      aspectRatio: "square",
    },
    {
      id: "4",
      title: "Luxury Gift Wrapping & Custom Tags",
      category: "Bespoke Holiday Collection",
      image: "/images/work-4.jpg",
      aspectRatio: "wide",
    },
  ] as GalleryItem[],
  services: [
    {
      number: "01",
      title: "Live Calligraphy",
      description: "Add a luxurious touch to your live events or brand activations. Watch your guests' names turn into beautiful keepsakes in real-time.",
    },
    {
      number: "02",
      title: "Personalized Gifts",
      description: "From custom-written wedding vows and engraved perfume bottles to bespoke poetry layouts, tailored perfectly to your story.",
    },
    {
      number: "03",
      title: "Event Stationery",
      description: "Invitations, placement cards, menus, and custom signage that set a striking, romantic tone for your most intimate celebrations.",
    },
  ],
};
