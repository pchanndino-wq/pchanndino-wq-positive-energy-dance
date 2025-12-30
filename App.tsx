
import React, { useEffect, Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Weddings from './pages/Weddings';
import EventsEntertainment from './pages/EventsEntertainment';
import LocationsSchedule from './pages/LocationsSchedule';
import Instructors from './pages/Instructors';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import { Instagram, Facebook, Youtube, Zap, MapPin, ArrowLeft, AlertTriangle } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SEOManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Positive Energy Dance Company | San Diego Salsa & Bachata',
      '/lessons': 'Dance Lessons San Diego | Salsa, Bachata, Tango & more',
      '/weddings': 'Wedding Dance Lessons San Diego | First Dance Choreography',
      '/events-entertainment': 'Corporate Event Entertainment & DJ Services | San Diego',
      '/locations': 'Dance Studio Locations & Schedule | North Park San Diego',
      '/instructors': 'Professional Dance Instructors San Diego | Meet the Team',
      '/gallery': 'Photo & Video Gallery | Positive Energy Dance Company',
      '/reviews': 'Client Reviews & Testimonials | San Diego Dance Lessons',
      '/book': 'Book a Dance Class or Event | Get a Quote',
      '/contact': 'Contact Us | Positive Energy Dance Company San Diego',
    };
    document.title = titles[pathname] || 'Positive Energy Dance Company';
  }, [pathname]);
  return null;
};

const NotFound = () => (
  <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center">
    <AlertTriangle className="text-primary-400 w-20 h-20 mb-8" />
    <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">404</h1>
    <p className="text-zinc-500 text-xl mb-12 max-w-md">The rhythm took a wrong turn. This page doesn't exist.</p>
    <Link to="/" className="flex items-center gap-3 bg-primary-400 text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
      <ArrowLeft size={16} /> Back to the Dance Floor
    </Link>
  </div>
);

const Footer: React.FC = () => (
  <footer className="bg-black py-24 border-t border-white/5 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent"></div>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-8">
            <Zap className="text-primary-400 fill-primary-400" />
            <h2 className="text-2xl font-black tracking-tighter uppercase">
              POSITIVE ENERGY <span className="text-primary-400">DANCE CO.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
            Based in San Diego. Available nationwide for events. Empowering dancers through professional instruction, community energy, and the joy of movement.
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com/positiveenergydance" target="_blank" className="text-zinc-400 hover:text-primary-400 transition-colors"><Instagram /></a>
            <a href="https://facebook.com/positiveenergydance" target="_blank" className="text-zinc-400 hover:text-primary-400 transition-colors"><Facebook /></a>
            <a href="https://youtube.com/@positiveenergydance" target="_blank" className="text-zinc-400 hover:text-primary-400 transition-colors"><Youtube /></a>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-primary-400 mb-8">Quick Navigation</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-zinc-500">
            <li><Link to="/lessons" className="hover:text-white transition-colors">Dance Lessons</Link></li>
            <li><Link to="/weddings" className="hover:text-white transition-colors">Weddings</Link></li>
            <li><Link to="/events-entertainment" className="hover:text-white transition-colors">Events & Entertainment</Link></li>
            <li><Link to="/locations" className="hover:text-white transition-colors">Schedule</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-primary-400 mb-8">Our Presence</h4>
          <ul className="space-y-4 text-sm text-zinc-500 font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-400 shrink-0" />
              <span>Queen Bee’s North Park<br/>3925 Ohio St, San Diego, CA</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-400 shrink-0" />
              <span>Dance Headquarters<br/>5035 Shawline St, San Diego, CA</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-zinc-700 shrink-0" />
              <span>Montana (Instruction & Events Network)</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-zinc-700 font-black uppercase tracking-widest">
        <p>&copy; 2024 Positive Energy Dance Company. Professional Excellence in San Diego.</p>
        <div className="flex gap-8">
          <Link to="/admin" className="text-zinc-700 hover:text-primary-400">Portal Access</Link>
          <span>SEO Optimized by PEDC Tech</span>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <SEOManager />
      <div className="min-h-screen bg-black text-white font-sans selection:bg-primary-400 selection:text-black">
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="w-12 h-12 border-4 border-primary-400 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            {/* Public Routes with Layout */}
            <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/lessons" element={<><Navbar /><Lessons /><Footer /></>} />
            <Route path="/weddings" element={<><Navbar /><Weddings /><Footer /></>} />
            <Route path="/events-entertainment" element={<><Navbar /><EventsEntertainment /><Footer /></>} />
            <Route path="/locations" element={<><Navbar /><LocationsSchedule /><Footer /></>} />
            <Route path="/instructors" element={<><Navbar /><Instructors /><Footer /></>} />
            <Route path="/gallery" element={<><Navbar /><Gallery /><Footer /></>} />
            <Route path="/reviews" element={<><Navbar /><Reviews /><Footer /></>} />
            <Route path="/book" element={<><Navbar /><Book /><Footer /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />

            {/* Catch-all for GitHub Pages routing stability */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  );
};

export default App;
