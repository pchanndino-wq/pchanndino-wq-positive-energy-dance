import React from 'react';
import { IMAGES } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-gold font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-lg animate-fade-in-up">
          San Diego Based • Nationwide Travel
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-tight mb-6 drop-shadow-lg max-w-5xl mx-auto">
          Partner With <span className="text-transparent bg-clip-text gold-gradient">Positive Energy</span>
        </h1>
        <p className="text-zinc-200 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Experience over 20 years of professional dance excellence. Elevate your event with world-class performances, entertainment, and instruction.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            onClick={(e) => handleScroll(e, 'book')}
            className="w-full md:w-auto px-8 py-4 bg-gold hover:bg-yellow-400 text-black font-bold text-lg uppercase tracking-wider rounded-sm transition-transform hover:-translate-y-1 shadow-[0_0_15px_rgba(212,175,55,0.5)] cursor-pointer"
          >
            Request a Quote
          </a>
          <a
            href="#classes"
            onClick={(e) => handleScroll(e, 'classes')}
            className="w-full md:w-auto px-8 py-4 bg-transparent border-2 border-white hover:border-gold hover:text-gold text-white font-bold text-lg uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
          >
            View Class Schedule
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#services" 
        onClick={(e) => handleScroll(e, 'services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 hover:text-gold transition-colors cursor-pointer"
        aria-label="Scroll to services"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
