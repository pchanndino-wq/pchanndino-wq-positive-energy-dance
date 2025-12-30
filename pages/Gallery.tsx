
import React, { useState } from 'react';
import { Camera, Play, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { resolveImageUrl } from '../utils';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Lessons' | 'Events' | 'Weddings'>('all');
  const [errorIds, setErrorIds] = useState<Set<number>>(new Set());

  // Updated with the user-provided Google Drive links
  const items = [
    { id: 1, cat: 'Lessons', url: 'https://drive.google.com/file/d/1Io3MG4nwHNuoBUpRmySzyy04PhFxBpTO/view?usp=sharing' },
    { id: 2, cat: 'Events', url: 'https://drive.google.com/file/d/1qPlOaVySmByLula4CqkEnyOqcGhLYh9y/view?usp=sharing' },
    { id: 3, cat: 'Weddings', url: 'https://drive.google.com/file/d/1uLn5rz-k5Htz1JiZFam6qkOmotssmQZk/view?usp=sharing' },
    { id: 4, cat: 'Lessons', url: 'https://drive.google.com/file/d/1dk6G75o9ZwC52ydK0hEs6iXA9-MXTDi_/view?usp=sharing' },
    { id: 5, cat: 'Events', url: 'https://drive.google.com/file/d/1Kev8NXSZ8aVMYL2ycyhWlHhwSwl2OEHa/view?usp=sharing' },
    { id: 6, cat: 'Weddings', url: 'https://drive.google.com/file/d/1fDiKwQiIcTvqtnqKr3Du-sJDOlpKRlFi/view?usp=sharing' },
    { id: 7, cat: 'Lessons', url: 'https://drive.google.com/file/d/1AWSvjOHAlklNMvQnMHBfxEoUgWfNy30H/view?usp=sharing' },
    { id: 8, cat: 'Events', url: 'https://drive.google.com/file/d/15_w4XEr4QA90yMxoV0as0rHArLktnamL/view?usp=sharing' },
  ];

  const filtered = filter === 'all' ? items : items.filter(i => i.cat === filter);

  const handleImageError = (id: number) => {
    setErrorIds(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 pb-32">
        <header className="max-w-4xl mb-20">
          <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Visual Journey</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10">Photo <span className="text-primary-400">Vault</span></h1>
          
          <div className="flex flex-wrap gap-4">
            {['all', 'Lessons', 'Events', 'Weddings'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${filter === cat ? 'bg-primary-400 border-primary-400 text-black shadow-lg shadow-primary-400/20' : 'border-white/10 text-zinc-500 hover:text-white hover:border-white/20 bg-zinc-900/50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="group relative aspect-square rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl transition-transform duration-500 hover:-translate-y-2">
              <img 
                src={resolveImageUrl(item.url)} 
                className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100 ${errorIds.has(item.id) ? 'hidden' : 'block'}`} 
                alt={`${item.cat} gallery`}
                onError={() => handleImageError(item.id)}
              />
              
              {/* Permission/Error UI */}
              {errorIds.has(item.id) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-zinc-900">
                  <AlertCircle className="text-primary-400 w-10 h-10 mb-4 opacity-50" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Image Protected</p>
                  <p className="text-[8px] text-zinc-700 uppercase tracking-tighter mt-2 leading-relaxed">Check Google Drive Sharing Permissions</p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-primary-400/50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <ImageIcon size={18} className="text-primary-400" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">{item.cat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-40 text-center border-t border-white/5 pt-24">
          <p className="text-zinc-500 font-black uppercase tracking-[0.4em] text-[10px] mb-12">Follow the Energy</p>
          <div className="flex flex-wrap justify-center gap-12">
            <a href="#" className="flex flex-col items-center gap-6 group">
              <div className="w-20 h-20 rounded-[1.5rem] bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-primary-400/50 group-hover:bg-primary-400/5 transition-all duration-500">
                <Play className="text-primary-400 w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-primary-400 transition-colors">Watch Reels</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-6 group">
              <div className="w-20 h-20 rounded-[1.5rem] bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-primary-400/50 group-hover:bg-primary-400/5 transition-all duration-500">
                <Camera className="text-primary-400 w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-primary-400 transition-colors">Instagram Feed</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
