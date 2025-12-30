import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <Zap className="text-primary-400 fill-primary-400 group-hover:scale-110 transition-transform duration-300" size={24} />
          <span className="text-lg font-black tracking-tighter text-white uppercase leading-none">
            POSITIVE ENERGY <span className="text-primary-400 block sm:inline">DANCE CO.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                className={`text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary-400 transition-colors ${location.pathname === item.href ? 'text-primary-400' : 'text-zinc-400'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1 border-l border-white/10 pl-8">
            <Link to="/book" className="bg-primary-400 hover:bg-white text-black px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all shadow-lg shadow-primary-900/20">
              BOOK NOW
            </Link>
            <a href="tel:6192518863" className="text-[9px] font-black tracking-[0.2em] text-primary-400 hover:text-white transition-colors">
              (619) 251-8863
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-primary-400 p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-2xl border-t border-white/10 h-screen overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-1 p-8 text-center">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                className={`text-sm font-black uppercase tracking-widest py-4 border-b border-white/5 ${location.pathname === item.href ? 'text-primary-400' : 'text-zinc-500'}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col items-center gap-4 mt-8">
              <Link to="/book" className="w-full bg-primary-400 text-black text-center py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl">
                BOOK A QUOTE
              </Link>
              <a href="tel:6192518863" className="flex items-center gap-2 text-primary-400 font-black uppercase tracking-[0.3em] text-xs py-2">
                <Phone size={14} /> (619) 251-8863
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;