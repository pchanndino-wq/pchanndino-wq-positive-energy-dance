import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Classes', href: '#classes' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Optional: Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-sm py-2 shadow-lg border-b border-zinc-800' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, '#')} 
            className="flex items-center"
          >
            <img 
              src={IMAGES.LOGO} 
              alt="Positive Energy Dance Company" 
              className={`transition-all duration-300 object-contain ${scrolled ? 'h-10 md:h-12' : 'h-14 md:h-20'}`}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-widest font-semibold text-zinc-300 hover:text-gold transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              onClick={(e) => handleNavClick(e, '#book')}
              className="bg-gold hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-gold/20"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gold focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-4 py-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-semibold uppercase tracking-wider text-center py-2 text-lg hover:text-gold cursor-pointer"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            onClick={(e) => handleNavClick(e, '#book')}
            className="bg-gold text-black font-bold uppercase tracking-wider text-center py-3 rounded-full mx-8"
          >
            Book Now
          </a>
          <div className="flex justify-center space-x-6 pt-6 border-t border-zinc-800">
             <a href={`tel:${CONTACT_INFO.PHONE.replace(/-/g, '')}`} className="flex items-center text-gold hover:text-white transition-colors">
                <Phone size={20} className="mr-2" /> Call
             </a>
             <a href={`mailto:${CONTACT_INFO.EMAIL}?subject=Inquiry from Website`} className="flex items-center text-gold hover:text-white transition-colors">
                <Mail size={20} className="mr-2" /> Email
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
