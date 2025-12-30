import React, { useEffect, useState } from 'react';
import { Instagram, Zap, AlertCircle } from 'lucide-react';
import { db } from '../firebase';
import { Instructor } from '../types';
import { resolveImageUrl } from '../utils';

// Component to display the list of professional dance instructors
const Instructors: React.FC = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorIds, setErrorIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    db.instructors.getAll().then(data => {
      setInstructors(data);
      setLoading(false);
    });
  }, []);

  // ✅ GitHub Pages safe base path (because your site is under /REPO_NAME/)
  const BASE = import.meta.env.BASE_URL;

  // ✅ Local image mapping by instructor name (matches your filenames)
  const LOCAL_PHOTOS_BY_NAME: Record<string, string> = {
    'anjali': `${BASE}images/hero/instructors/Anjali.png`,
    'cat&chuck': `${BASE}images/hero/instructors/Cat&Chuck.jpg`,
    'michael j saltus': `${BASE}images/hero/instructors/michaeljsaltus.jpg`,
    'sinai': `${BASE}images/hero/instructors/sinai.jpg`,
  };

  const getInstructorPhoto = (inst: Instructor) => {
    const key = (inst.name || '').trim().toLowerCase();

    // If we have a local photo for this instructor, always use it.
    if (LOCAL_PHOTOS_BY_NAME[key]) return LOCAL_PHOTOS_BY_NAME[key];

    // Otherwise fall back to whatever is in the "DB" (Drive link, etc)
    return resolveImageUrl(inst.photoUrl);
  };

  const handleImageError = (id: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setErrorIds(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });

    const target = e.currentTarget;

    // Fallback placeholder if local file OR remote link fails
    target.src = 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=800';
    console.warn(`Instructor image (ID: ${id}) failed to load.`);
  };

  return (
    <div className="pt-32 bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 pb-32">
        <header className="max-w-4xl mb-24 text-center mx-auto">
          <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">
            Our Team
          </span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">
            Meet the <span className="text-primary-400">Masters</span>
          </h1>
          <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl mx-auto">
            World champions, performance artists, and technical experts dedicated to helping you find your rhythm.
          </p>
        </header>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {instructors.map((inst) => (
              <div key={inst.id} className="group relative">
                <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] relative mb-8 grayscale hover:grayscale-0 transition-all duration-700 bg-zinc-900 border border-white/5 group-hover:border-primary-400/50 shadow-2xl">
                  <img
                    src={getInstructorPhoto(inst)}
                    alt={inst.name}
                    onError={(e) => handleImageError(inst.id, e)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Warning Overlay if image failed */}
                  {errorIds.has(inst.id) && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center z-10">
                      <AlertCircle className="text-primary-400 w-12 h-12 mb-4 animate-pulse" />
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary-400 mb-2">
                        Image failed to load
                      </p>
                      <p className="text-[9px] text-zinc-400 uppercase tracking-wider leading-relaxed">
                        Check the filename + folder path in /public
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Float Badge */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-primary-400 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Zap className="text-black fill-black" size={20} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-primary-400 transition-colors">
                        {inst.name}
                      </h3>
                      <p className="text-primary-400 text-[10px] font-black uppercase tracking-widest mt-1">
                        {inst.role}
                      </p>
                    </div>

                    {inst.instagram && (
                      <a
                        href={inst.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                    )}
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                    {inst.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {inst.styles.map(style => (
                      <span
                        key={style}
                        className="px-3 py-1 rounded-full border border-white/5 bg-zinc-950 text-[9px] font-black uppercase tracking-widest text-zinc-600"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Instructors;
