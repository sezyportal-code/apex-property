export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  country: string;
  price: number;
  priceFormatted: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  type: string;
  status: "For Sale" | "For Rent" | "Sold";
  featured: boolean;
  images: string[];
  description: string;
  amenities: string[];
  yearBuilt: number;
  roi?: number;
  agent: {
    name: string;
    avatar: string;
    agency: string;
  };
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Oceanfront Villa with Private Beach",
    location: "Malibu, California",
    city: "Malibu",
    country: "USA",
    price: 45000000,
    priceFormatted: "$45,000,000",
    bedrooms: 7,
    bathrooms: 9,
    area: 12500,
    areaUnit: "sq ft",
    type: "Villa",
    status: "For Sale",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    description: "An extraordinary oceanfront estate offering unparalleled luxury with direct beach access and panoramic Pacific views.",
    amenities: ["Private Beach", "Infinity Pool", "Wine Cellar", "Home Theater", "Smart Home", "Helipad"],
    yearBuilt: 2021,
    roi: 4.2,
    agent: {
      name: "Alexandra Sterling",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      agency: "Sterling Properties",
    },
  },
  {
    id: "2",
    title: "Penthouse at One57",
    location: "Manhattan, New York",
    city: "New York",
    country: "USA",
    price: 38500000,
    priceFormatted: "$38,500,000",
    bedrooms: 5,
    bathrooms: 6,
    area: 6890,
    areaUnit: "sq ft",
    type: "Penthouse",
    status: "For Sale",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80",
    ],
    description: "A masterpiece of urban luxury with 360-degree views of Central Park and the Manhattan skyline.",
    amenities: ["Concierge", "Private Elevator", "Terrace", "Gym", "Spa", "Wine Storage"],
    yearBuilt: 2019,
    roi: 3.8,
    agent: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      agency: "Prestige NYC",
    },
  },
  {
    id: "3",
    title: "Modern Mansion in Beverly Hills",
    location: "Beverly Hills, California",
    city: "Beverly Hills",
    country: "USA",
    price: 52000000,
    priceFormatted: "$52,000,000",
    bedrooms: 8,
    bathrooms: 12,
    area: 18000,
    areaUnit: "sq ft",
    type: "Mansion",
    status: "For Sale",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
    ],
    description: "Architectural masterpiece featuring museum-quality finishes and world-class amenities in the heart of Beverly Hills.",
    amenities: ["Infinity Edge Pool", "Tennis Court", "Guest House", "Car Gallery", "Outdoor Kitchen", "Security"],
    yearBuilt: 2022,
    roi: 5.1,
    agent: {
      name: "Victoria Hayes",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      agency: "Hayes Luxury Estates",
    },
  },
  {
    id: "4",
    title: "Lakeside Estate",
    location: "Lake Como, Italy",
    city: "Lake Como",
    country: "Italy",
    price: 28000000,
    priceFormatted: "€28,000,000",
    bedrooms: 6,
    bathrooms: 7,
    area: 8500,
    areaUnit: "sq ft",
    type: "Estate",
    status: "For Sale",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
    description: "Historic villa with private dock and breathtaking views of Lake Como, blending Italian heritage with modern luxury.",
    amenities: ["Private Dock", "Landscaped Gardens", "Pool", "Wine Cellar", "Staff Quarters"],
    yearBuilt: 1920,
    roi: 3.2,
    agent: {
      name: "Marco Bellini",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      agency: "Bellini Immobiliare",
    },
  },
  {
    id: "5",
    title: "Modern Chalet in the Alps",
    location: "Zermatt, Switzerland",
    city: "Zermatt",
    country: "Switzerland",
    price: 19500000,
    priceFormatted: "CHF 19,500,000",
    bedrooms: 5,
    bathrooms: 5,
    area: 5200,
    areaUnit: "sq ft",
    type: "Chalet",
    status: "For Sale",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
    ],
    description: "Ski-in/ski-out luxury chalet with panoramic Matterhorn views and world-class alpine amenities.",
    amenities: ["Ski Room", "Spa", "Indoor Pool", "Fireplace", "Mountain Views", "Heated Driveway"],
    yearBuilt: 2020,
    roi: 4.5,
    agent: {
      name: "Sophie Laurent",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      agency: "Swiss Alpine Properties",
    },
  },
  {
    id: "6",
    title: "Beachfront Paradise",
    location: "Miami Beach, Florida",
    city: "Miami",
    country: "USA",
    price: 32000000,
    priceFormatted: "$32,000,000",
    bedrooms: 6,
    bathrooms: 8,
    area: 9800,
    areaUnit: "sq ft",
    type: "Villa",
    status: "For Sale",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    description: "Ultra-modern beachfront residence with direct ocean access and resort-style amenities.",
    amenities: ["Beach Access", "Rooftop Lounge", "Elevator", "Smart Home", "Pool", "Boat Dock"],
    yearBuilt: 2023,
    roi: 5.8,
    agent: {
      name: "Carlos Rivera",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      agency: "Rivera Luxury Group",
    },
  },
];

export const featuredProperties = properties.filter((p) => p.featured);
