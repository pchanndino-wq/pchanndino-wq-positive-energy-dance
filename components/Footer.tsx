import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-500 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h5 className="text-white font-black uppercase tracking-tight text-xl">Positive Energy</h5>
          <p className="text-xs uppercase tracking-wider mt-1">Dance Company • Est. 2003</p>
        </div>
        
        <div className="flex space-x-6 text-sm font-semibold uppercase tracking-wide">
          <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
        </div>

        <div className="mt-4 md:mt-0 text-xs text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Positive Energy Dance Company.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
