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
    db.events.getFeatured().then(setFeaturedEvents);
  }, []);

  return (
    <div className="overflow-hidden bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* ✅ GitHub Pages SAFE image path + crop focus adjustment */}
          <img
            src={`${import.meta.env.BASE_URL}images/hero/home-hero.png`}
            alt="Positive Energy Dance Company"
            className="
              w-full h-full
              object-cover
              object-[50%_20%]
              opacity-60
              animate-[kenburns_30s_ease-in-out_infinite]
            "
          />

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-400/10 border border-primary-400/30 text-primary-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 backdrop-blur-xl">
              <Zap size={14} className="fill-primary-400" />
              San Diego's Premier Dance Company
            </div>

            <h1 className="text-6xl md:text-9xl font-serif font-black mb-8 leading-[0.85] tracking-tighter">
              Dance with <br />
              <span className="text-primary-400 italic">Positive Energy</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-zinc-100 mb-12 leading-relaxed font-light">
              Experience the rhythm of San Diego. Professional Latin dance lessons,
              breathtaking wedding choreography, and elite event entertainment.
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

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(-1%, -1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
      `}</style>

    </div>
  );
};

export default Home;
