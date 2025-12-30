
export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  styles: string[];
  photoUrl: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  showSocials: boolean;
  active: boolean;
  sortOrder: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  flyerUrl: string;
  ticketLink?: string;
  status: 'Draft' | 'Published' | 'Past';
  featured: boolean;
}

export interface SiteSettings {
  phone: string;
  email: string;
  address: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  youtube: string;
  showSocialIcons: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType: string;
  createdAt: number;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number;
  active: boolean;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'Lessons' | 'Events' | 'Weddings';
}
