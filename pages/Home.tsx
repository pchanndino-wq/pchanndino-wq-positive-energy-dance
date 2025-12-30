import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  MapPin,
  Star,
  Play,
  Heart,
  Users,
  Building2,
  User,
  ChevronRight,
  Phone,
  Zap,
  Handshake
} from 'lucide-react';
import { db } from '../firebase';
import { Event } from '../types';
import { TRUSTED_PARTNERS } from '../constants';

const Home: React.FC = () => {
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([]);

  useEffect(() => {
    db.events.getFeatured().then(setFeaturedEvents).catch(() => setFeaturedEvents([]));
  }, []);

  const resolveImageUrl = (url?: string) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    const cleaned = url.startsWith('/') ? url.slice(1) : url;
    return `${import.meta.env.BASE_URL}${cleaned}`;
  };

  return (
    <div className="overflow-hidden bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero/home-hero.png`}
            alt="Positive Energy Dance Company"
            className="
              w-full h-full
              object-cover
              object-[50%_85%]
              opacity-60
              animate-[kenburns_30s_ease-in-out_infinite]
            "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-400/10 border border-primary-400/30 text-primary-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 backdrop-blur-xl">
              <Zap size={14} className="fill-primary-400" />
              San Diego&apos;s Premier Dance Company
            </div>

            <h1 className="text-6xl md:text-9xl font-serif font-black mb-8 leading-[0.85] tracking-tighter">
              Dance with <br />
              <span className="text-primary-400 italic">Positive Energy</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-zinc-100 mb-12 leading-relaxed font-light">
              Experience the rhythm of San Diego. Professional Latin dance lessons, breathtaking wedding choreography, and elite event entertainment.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <Link
                to="/lessons"
                className="px-12 py-6 bg-primary-400 text-black font-black rounded-full flex items-center justify-center gap-3 text-xs uppercase tracking-widest hover:bg-white transition-all"
              >
                Start Dancing <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/book"
                className="px-12 py-6 bg-white/5 text-white font-black rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center gap-3 text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                Book for Event
              </Link>
            </div>

            <div className="inline-flex items-center gap-6 bg-black/60 p-1.5 pr-8 rounded-full border border-white/10 backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-primary-400 flex items-center justify-center text-black">
                <Phone size={20} />
              </div>
              <div>
                <span className="block text-[8px] font-black uppercase tracking-[0.5em] text-primary-400/70">
                  Connect with Michael
                </span>
                <a
                  href="tel:6192518863"
                  className="text-xl font-black uppercase tracking-[0.1em] hover:text-primary-400 transition-colors"
                >
                  (619) 251-8863
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <Link to="/lessons" className="group p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/40 transition-all">
            <Users className="text-primary-400 w-8 h-8 mb-6" />
            <h3 className="text-2xl font-bold mb-3">Dance Lessons</h3>
            <p className="text-zinc-500 text-sm">Salsa, Bachata, Tango & more.</p>
          </Link>

          <Link to="/events-entertainment" className="group p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/40 transition-all">
            <Building2 className="text-primary-400 w-8 h-8 mb-6" />
            <h3 className="text-2xl font-bold mb-3">Corporate Events</h3>
            <p className="text-zinc-500 text-sm">Entertainment that elevates your brand.</p>
          </Link>

          <Link to="/weddings" className="group p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/40 transition-all">
            <Heart className="text-primary-400 w-8 h-8 mb-6" />
            <h3 className="text-2xl font-bold mb-3">Wedding Dance</h3>
            <p className="text-zinc-500 text-sm">Unforgettable first dances.</p>
          </Link>

          <Link to="/book" className="group p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/40 transition-all">
            <User className="text-primary-400 w-8 h-8 mb-6" />
            <h3 className="text-2xl font-bold mb-3">Private Lessons</h3>
            <p className="text-zinc-500 text-sm">1-on-1 tailored coaching.</p>
          </Link>
        </div>
      </section>

      {/* ================= FEATURED EVENTS ================= */}
      <section className="py-32 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          {featuredEvents.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-10">
              {featuredEvents.map(event => (
                <div key={event.id} className="rounded-3xl overflow-hidden border border-white/5">
                  <img
                    src={resolveImageUrl(event.flyerUrl)}
                    alt={event.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-zinc-500 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-500 uppercase tracking-widest text-xs">
              No featured events yet
            </p>
          )}
        </div>
      </section>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translate(0,0); }
          50% { transform: scale(1.1) translate(-1%,-1%); }
          100% { transform: scale(1) translate(0,0); }
        }
      `}</style>

    </div>
  );
};

export default Home;
