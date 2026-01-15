
import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Music2, 
  Calendar, 
  Users, 
  MapPin, 
  Heart, 
  Star, 
  Camera,
  Mail,
  Phone,
  Clock,
  Zap
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Lessons', href: '/lessons' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Events & Entertainment', href: '/events-entertainment' },
  { label: 'Locations & Schedule', href: '/locations' },
  { label: 'Instructors', href: '/instructors' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Book', href: '/book' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICE_CATEGORIES = [
  'Salsa Lessons',
  'Bachata Lessons',
  'Tango Lessons',
  'Swing Dance',
  'Line Dancing',
  'Wedding Choreography',
  'Corporate Events',
  'Private Lessons',
  'DJ Services',
  '360 Photo Booth'
];

export const TRUSTED_PARTNERS = [
  { name: "Queen Bee's", description: "Art & Cultural Center" },
  { name: "Dance Headquarters", description: "Professional Dance Facility" },
  { name: "UCSD", description: "University of California San Diego" },
  { name: "Deseo Studios", description: "Professional Dance Studio" },
  { name: "Monserate", description: "Luxury Event Venue" },
  { name: "Follow My Lead Studio", description: "Boutique Dance Studio" },
  { name: "Flower Pot AI", description: "Digital Innovation Partner" }
];

export const MOCK_INSTRUCTORS = [
  {
    id: '1',
    name: 'Michael J. Saltus',
    role: 'Director / Lead Instructor',
    bio: 'Dance Champion originally from Montana. Expert in Salsa, Bachata, Cha-Cha, Swing, and Line Dancing with over 20 years of professional experience.',
    styles: ['Salsa', 'Bachata', 'Cha-Cha', 'Swing', 'Line Dancing'],
    photoUrl: 'https://drive.google.com/file/d/1gt6STJIUiA2R8qUfA8tugO9ue0p8drOD/view?usp=sharing',
    instagram: 'https://instagram.com/michaeljsaltus',
    showSocials: true,
    active: true,
    sortOrder: 1
  },
  {
    id: '2',
    name: 'Sinai',
    role: 'Senior Instructor',
    bio: 'Professional instructor specializing in the technical nuances of Salsa, Bachata, Tango, and Cha-Cha.',
    styles: ['Salsa', 'Bachata', 'Tango', 'Cha-Cha'],
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    showSocials: true,
    active: true,
    sortOrder: 2
  },
  {
    id: '3',
    name: 'Anjali',
    role: 'Dance Instructor',
    bio: 'Bringing high energy and precision to every class. Specialist in modern Salsa and Bachata styles.',
    styles: ['Salsa', 'Bachata'],
    photoUrl: 'https://drive.google.com/file/d/1q8VliC6nacKAh3sjThP1FJM29u24mVYn/view?usp=sharing',
    showSocials: true,
    active: true,
    sortOrder: 3
  },
  {
    id: '4',
    name: 'Ron',
    role: 'Technique Specialist',
    bio: 'Master of movement with a focus on Tango and social Latin dance connection.',
    styles: ['Salsa', 'Bachata', 'Tango'],
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    showSocials: true,
    active: true,
    sortOrder: 4
  },
  {
    id: '5',
    name: 'Cat & Chuck',
    role: 'Casino Rueda Specialists',
    bio: 'The leading experts in Casino Rueda in San Diego. Join their specialized classes at Dance Headquarters.',
    styles: ['Casino Rueda', 'Salsa'],
    photoUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400',
    showSocials: true,
    active: true,
    sortOrder: 5
  }
];

export const SCHEDULE_DATA = [
  {
    location: "Queen Bee’s North Park",
    address: "3925 Ohio St, San Diego, CA 92104",
    details: "Sunday Salsa & Bachata classes / socials, workshops, and special events.",
    time: "Sundays (Various Times)",
    link: "https://maps.google.com/?q=3925+Ohio+St,+San+Diego,+CA+92104"
  },
  {
    location: "Dance Headquarters – Group Classes",
    address: "5035 Shawline St, San Diego, CA 92111",
    time: "Every Thursday",
    classes: [
      { time: "6:30 PM", name: "Salsa" },
      { time: "7:30 PM", name: "Bachata" },
      { time: "8:30 PM", name: "Cha-Cha" }
    ],
    pricing: [
      { count: "1 Class", price: "$15" },
      { count: "2 Classes", price: "$20" },
      { count: "3 Classes", price: "$25" }
    ],
    link: "https://maps.google.com/?q=5035+Shawline+St,+San+Diego,+CA+92111"
  }
];
