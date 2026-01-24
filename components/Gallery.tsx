import React from 'react';
import { IMAGES, SOCIAL_LINKS } from '../constants';

const Gallery: React.FC = () => {
  const galleryImages = [
    IMAGES.GALLERY_WEDDING,    // Feature Image (Big)
    IMAGES.GALLERY_RED_FRINGE,
    IMAGES.GALLERY_TRIO,
    IMAGES.GALLERY_STUDIO,
    IMAGES.HERO_BG,            // Reusing outdoor party
    IMAGES.SINAI_PIC,          // Reusing feather costume
    IMAGES.ANJALI_PIC,         // Reusing red dress
    IMAGES.RON_PIC,            // Reusing formal couple
    IMAGES.CAT_CHUCK_PIC       // Reusing fun couple
  ];

  return (
    <section id="gallery" className="py-0 bg-black scroll-mt-24">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-[200px]">
        {galleryImages.map((src, index) => (
          <div key={index} className={`relative group overflow-hidden ${index === 0 ? 'col-span-2 row-span-2 h-full' : 'col-span-1 h-full'}`}>
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gold/80 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
      <div className="bg-gold text-center transition-colors hover:bg-yellow-400">
         <a 
          href={SOCIAL_LINKS.INSTAGRAM} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block py-8 text-black font-black uppercase text-2xl md:text-3xl tracking-tight"
         >
           Follow the movement
         </a>
      </div>
    </section>
  );
};

export default Gallery;
