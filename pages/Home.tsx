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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* ✅ CHANGED: local hero image */}
          <img
            src="/images/hero/home-hero.png"
            className="w-full h-full object-cover opacity-60 scale-100 animate-[kenburns_30s_ease-in-out_infinite]"
            alt="Positive Energy Dance Company"
          />
          {/* Multi-layered gradients for cinematic text pop */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-400/10 border border-primary-400/30 text-primary-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 backdrop-blur-xl animate-in fade-in slide-in-from-left-4 duration-1000">
              <Zap size={14} className="fill-primary-400" />
              San Diego's Premier Dance Company
            </div>

            <h1 className="text-6xl md:text-9xl font-serif font-black mb-8 leading-[0.85] tracking-tighter drop-shadow-2xl animate-in fade-in slide-in-from-left-6 duration-1000 delay-100">
              Dance with <br />
              <span className="text-primary-400 italic">Positive Energy</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-zinc-100 mb-12 leading-relaxed font-light drop-shadow-lg animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              Experience the rhythm of San Diego. Professional Latin dance lessons, breathtaking wedding choreography, and elite event entertainment.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <Link to="/lessons" className="px-12 py-6 bg-primary-400 hover:bg-white text-black font-black rounded-full transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95">
                Start Dancing <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/book" className="px-12 py-6 bg-white/5 hover:bg-white/20 text-white font-black rounded-full backdrop-blur-md transition-all border border-white/20 flex items-center justify-center gap-3 text-xs uppercase tracking-widest hover:scale-105 active:scale-95">
                Book for Event
              </Link>
            </div>

            <div className="inline-flex items-center gap-6 bg-black/60 p-1.5 pr-8 rounded-full border border-white/10 backdrop-blur-md animate-in fade-in duration-1000 delay-500">
              <div className="w-12 h-12 rounded-full bg-primary-400 flex items-center justify-center text-black shadow-lg">
                <Phone size={20} />
              </div>
              <div>
                <span className="block text-[8px] font-black uppercase tracking-[0.5em] text-primary-400/70">Connect with Michael</span>
                <a href="tel:6192518863" className="text-xl font-black uppercase tracking-[0.1em] hover:text-primary-400 transition-colors">(619) 251-8863</a>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Scroll Label */}
        <div className="absolute right-10 bottom-24 hidden lg:flex flex-col items-center gap-10">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] rotate-90 text-zinc-600 origin-center whitespace-nowrap">Scroll for Rhythm</span>
          <div className="w-px h-24 bg-gradient-to-b from-primary-400 to-transparent"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Elevate Your <span className="text-primary-400">Experience</span></h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-6"></div>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Whether you're looking to learn a new skill, plan a dream wedding, or impress at your next corporate event.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/lessons" className="group p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/40 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-400/20 transition-colors">
                <Users className="text-primary-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors">Take Dance Lessons</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">Join our vibrant community. From Salsa to Bachata, classes are beginner-friendly and full of energy.</p>
              <div className="flex items-center gap-2 text-primary-400 font-bold text-xs uppercase tracking-widest">
                View Schedule <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link to="/events-entertainment" className="group p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/40 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-400/20 transition-colors">
                <Building2 className="text-primary-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors">Corporate Events</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">Boost morale and foster team building with professional dance performances and workshops.</p>
              <div className="flex items-center gap-2 text-primary-400 font-bold text-xs uppercase tracking-widest">
                Book for Corporate <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link to="/weddings" className="group p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/40 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-400/20 transition-colors">
                <Heart className="text-primary-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors">Wedding Dance</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">Make your first dance unforgettable with custom choreography that matches your unique style.</p>
              <div className="flex items-center gap-2 text-primary-400 font-bold text-xs uppercase tracking-widest">
                Wedding Packages <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link to="/book" className="group p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/40 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-400/20 transition-colors">
                <User className="text-primary-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors">Private Lessons</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">Accelerate your progress with 1-on-1 coaching tailored specifically to your goals and skill level.</p>
              <div className="flex items-center gap-2 text-primary-400 font-bold text-xs uppercase tracking-widest">
                Get a Quote <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-32 bg-zinc-950 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Upcoming <span className="text-primary-400">Highlights</span></h2>
                <p className="text-zinc-500 max-w-lg">Don't miss our latest workshops, socials, and parties.</p>
              </div>
              <Link to="/events-entertainment" className="flex items-center gap-2 text-primary-400 font-bold hover:text-white transition-all uppercase tracking-widest text-xs">
                View All Events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {featuredEvents.map(event => (
                <div key={event.id} className="group relative rounded-3xl overflow-hidden glass border-white/5 hover:border-primary-400/30 transition-all shadow-2xl">
                  <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img
                      src={event.flyerUrl}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={event.title}
                    />
                  </div>
                  <div className="p-8 bg-gradient-to-t from-black via-black/90 to-transparent">
                    <div className="flex items-center gap-4 text-[10px] text-primary-400 font-black uppercase tracking-[0.2em] mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {event.date}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {event.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-sm text-zinc-500 line-clamp-2 mb-8 leading-relaxed">{event.description}</p>
                    <a
                      href={event.ticketLink || '#'}
                      className="inline-block w-full text-center py-4 rounded-xl border border-primary-400/30 text-primary-400 text-xs font-black uppercase tracking-widest hover:bg-primary-400 hover:text-black transition-all"
                    >
                      TICKETS & INFO
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trusted Partners Section */}
      <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-primary-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
              <Handshake size={14} /> Our Network
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Trusted <span className="text-primary-400">Partners</span></h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {TRUSTED_PARTNERS.map((partner, idx) => (
              <div key={idx} className="group p-8 rounded-[2rem] bg-zinc-900/20 border border-white/5 hover:border-primary-400/30 transition-all flex flex-col items-center justify-center text-center hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary-400/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-400/10 transition-colors">
                  <Star className="text-primary-400/40 w-5 h-5 group-hover:text-primary-400 transition-colors" />
                </div>
                <h4 className="text-lg font-black uppercase tracking-tighter mb-1 text-zinc-300 group-hover:text-primary-400 transition-colors">{partner.name}</h4>
                <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors leading-tight">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary-400/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/5 blur-[150px] rounded-full pointer-events-none"></div>
      </section>

      {/* Bottom Value Props */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary-400/5 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-400/10 transition-colors">
              <Star className="text-primary-400 w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">World Class Instruction</h3>
            <p className="text-zinc-500 leading-relaxed">Learn from champions and experts with decades of professional performance experience.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary-400/5 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-400/10 transition-colors">
              <Heart className="text-primary-400 w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Community Focused</h3>
            <p className="text-zinc-500 leading-relaxed">Join a family of dancers who support each other's growth on and off the dance floor.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary-400/5 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-400/10 transition-colors">
              <Play className="text-primary-400 w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Event Mastery</h3>
            <p className="text-zinc-500 leading-relaxed">From festivals to corporate galas, we bring the energy that makes every event legendary.</p>
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
