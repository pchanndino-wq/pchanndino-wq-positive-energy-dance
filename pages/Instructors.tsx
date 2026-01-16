import React, { useEffect, useState } from 'react';
import { Instagram, Zap, AlertCircle } from 'lucide-react';
import { db } from '../firebase';
import { Instructor } from '../types';

// Component to display the list of professional dance instructors
const Instructors: React.FC = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorIds, setErrorIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    db.instructors
      .getAll()
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      })
      .catch(() => {
        setInstructors([]);
        setLoading(false);
      });
  }, []);

  // ✅ Same method as Hero: GitHub Pages safe base path
  const BASE = import.meta.env.BASE_URL;

  // ✅ Hardcoded local images (your updated filenames)
  // Put these files in: public/images/instructors/
  const INSTRUCTOR_IMAGES: Record<string, string> = {
    'anjali': `${BASE}images/instructors/Anjali.png`,
    'sinai': `${BASE}images/instructors/sinai.jpg`,
    'cat chuck': `${BASE}images/instructors/catchuck.jpg`,
    'michael j saltus': `${BASE}images/instructors/michael-saltus.jpg`,
  };

  // Normalize names so "Michael J. Saltus" matches "michael j saltus"
  const normalizeNameKey = (name: string) => {
    return (name || '')
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, '')   // remove punctuation like "." "&" etc
      .replace(/\s+/g, ' ');     // collapse multiple spaces
  };

  // Hero-style: always return a local image path (no external links)
  const getInstructorPhoto = (inst: Instructor) => {
    const key = normalizeNameKey(inst.name);

    // Direct match
    if (INSTRUCTOR_IMAGES[key]) return INSTRUCTOR_IMAGES[key];

    // Soft matching fallback (in case names vary slightly)
    if (key.includes('anjali')) return `${BASE}images/instructors/Anjali.png`;
    if (key.includes('sinai')) return `${BASE}images/instructors/sinai.jpg`;
    if (key.includes('cat') || key.includes('chuck')) return `${BASE}images/instructors/catchuck.jpg`;
    if (key.includes('michael') || key.includes('saltus')) return `${BASE}images/instructors/michael-saltus.jpg`;

    // Final fallback (still local)
    return `${BASE}images/instructors/Anjali.png`;
  };

  const handleImageError = (id: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setErrorIds((prev) => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });

    const target = e.currentTarget;

    // Local fallback (no external)
    target.src = `${BASE}images/instructors/Anjali.png`;
    console.warn(`Instructor image (ID: ${id}) failed to load.`);
  };

  return (
    <div className="pt-32 bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 pb-32">
        <header className="max-w-4xl mb-24 text-center mx-auto">
          <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Team</span>
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

                  {errorIds.has(inst.id) && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center z-10">
                      <AlertCircle className="text-primary-400 w-12 h-12 mb-4 animate-pulse" />
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary-400 mb-2">
                        Image Failed to Load
                      </p>
                      <p className="text-[9px] text-zinc-400 uppercase tracking-wider leading-relaxed">
                        Check the file exists in public/images/instructors/
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

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

                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">{inst.bio}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {inst.styles.map((style) => (
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
