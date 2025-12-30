// This file simulates Firebase services with browser localStorage persistence.
import { Instructor, Event, SiteSettings, Lead } from './types';
import { MOCK_INSTRUCTORS } from './constants';

const STORAGE_KEYS = {
  INSTRUCTORS: 'pedc_instructors',
  EVENTS: 'pedc_events',
  SETTINGS: 'pedc_settings',
  LEADS: 'pedc_leads'
};

// Initialization helper
const initStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.INSTRUCTORS)) {
    localStorage.setItem(STORAGE_KEYS.INSTRUCTORS, JSON.stringify(MOCK_INSTRUCTORS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.EVENTS)) {
    const defaultEvents: Event[] = [
      {
        id: 'e1',
        title: 'New Year Resolution 2026',
        date: 'Jan 2026',
        time: '6:30 PM',
        location: 'Dance Headquarters',
        description: 'New Year. New Moves. New Confidence. Start 2026 strong by learning to dance with Positive Energy Dance Company. Join us Thursdays to learn Salsa, Bachata, or Cha Cha.',
        flyerUrl: 'https://images.unsplash.com/photo-1516475429286-465d815a0df7?auto=format&fit=crop&q=80&w=800',
        status: 'Published',
        featured: true
      },
      {
        id: 'e2',
        title: 'Sunday Funday Dance',
        date: 'Every Sunday',
        time: '5:30 PM - 7:30 PM',
        location: "Queen Bee’s North Park",
        description: 'Join us for Sunday Funday! Learn Salsa & Bachata in a high-energy environment. $15 Cover at the door.',
        flyerUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
        status: 'Published',
        featured: true
      },
      {
        id: 'e3',
        title: 'Learn to Be a Better Dancer',
        date: 'Daily',
        time: 'By Appointment',
        location: 'Private Studio / On-site',
        description: 'Book private lessons and get personalized coaching to improve faster. Whether you are prepping for a wedding or just want to level up.',
        flyerUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
        status: 'Published',
        featured: true
      }
    ];
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(defaultEvents));
  }
  if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
    const defaultSettings: SiteSettings = {
      phone: '619-251-8863',
      email: 'positivesalsa2@yahoo.com',
      address: 'San Diego, CA 92101',
      instagram: 'https://instagram.com/positiveenergydance',
      facebook: 'https://facebook.com/positiveenergydance',
      tiktok: 'https://tiktok.com/@positiveenergydance',
      youtube: 'https://youtube.com/@positiveenergydance',
      showSocialIcons: true
    };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(defaultSettings));
  }
  if (!localStorage.getItem(STORAGE_KEYS.LEADS)) {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify([]));
  }
};

// Execute init
initStorage();

// Database abstraction
const getStore = <T>(key: string): T[] => JSON.parse(localStorage.getItem(key) || '[]');
const setStore = <T>(key: string, data: T[]) => localStorage.setItem(key, JSON.stringify(data));

export const db = {
  instructors: {
    getAll: async () => getStore<Instructor>(STORAGE_KEYS.INSTRUCTORS).filter(i => i.active).sort((a, b) => a.sortOrder - b.sortOrder),
    getAdminAll: async () => getStore<Instructor>(STORAGE_KEYS.INSTRUCTORS),
    save: async (data: Instructor) => {
      const store = getStore<Instructor>(STORAGE_KEYS.INSTRUCTORS);
      const idx = store.findIndex(i => i.id === data.id);
      if (idx > -1) store[idx] = data;
      else store.push({ ...data, id: Math.random().toString(36).substr(2, 9) });
      setStore(STORAGE_KEYS.INSTRUCTORS, store);
      return true;
    },
    delete: async (id: string) => {
      const store = getStore<Instructor>(STORAGE_KEYS.INSTRUCTORS).filter(i => i.id !== id);
      setStore(STORAGE_KEYS.INSTRUCTORS, store);
      return true;
    }
  },
  events: {
    getFeatured: async () => getStore<Event>(STORAGE_KEYS.EVENTS).filter(e => e.featured && e.status === 'Published'),
    getAll: async () => getStore<Event>(STORAGE_KEYS.EVENTS).filter(e => e.status !== 'Draft'),
    getAdminAll: async () => getStore<Event>(STORAGE_KEYS.EVENTS),
    save: async (data: Event) => {
      const store = getStore<Event>(STORAGE_KEYS.EVENTS);
      const idx = store.findIndex(e => e.id === data.id);
      if (idx > -1) store[idx] = data;
      else store.push({ ...data, id: Math.random().toString(36).substr(2, 9) });
      setStore(STORAGE_KEYS.EVENTS, store);
      return true;
    },
    delete: async (id: string) => {
      const store = getStore<Event>(STORAGE_KEYS.EVENTS).filter(e => e.id !== id);
      setStore(STORAGE_KEYS.EVENTS, store);
      return true;
    }
  },
  settings: {
    get: async () => JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS) || '{}'),
    update: async (data: SiteSettings) => {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(data));
      return true;
    }
  },
  leads: {
    submit: async (data: Omit<Lead, 'id' | 'createdAt'>) => {
      const store = getStore<Lead>(STORAGE_KEYS.LEADS);
      store.push({ ...data, id: Date.now().toString(), createdAt: Date.now() });
      setStore(STORAGE_KEYS.LEADS, store);
      return true;
    },
    getAll: async () => getStore<Lead>(STORAGE_KEYS.LEADS).sort((a, b) => b.createdAt - a.createdAt)
  }
};

export const auth = {
  login: async (email: string, pass: string) => {
    if (email === 'admin@pedc.com' && pass === 'password') {
      localStorage.setItem('pedc_auth', 'true');
      return { email };
    }
    throw new Error('Invalid credentials');
  },
  logout: () => {
    localStorage.removeItem('pedc_auth');
    window.location.hash = '/admin/login';
  },
  isAuthenticated: () => !!localStorage.getItem('pedc_auth')
};