
import React from 'react';
import { Heart, Star, Calendar, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Weddings: React.FC = () => {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 pb-32">
        <header className="max-w-4xl mb-24">
          <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">First Dances</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">Unforgettable <span className="text-primary-400">Weddings</span></h1>
          <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl">
            We specialize in creating personalized choreography that makes you feel confident, natural, and breathtaking on your big day.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-40">
          <div className="bg-zinc-900/30 border border-white/5 p-12 rounded-[2.5rem] flex flex-col hover:border-primary-400/20 transition-all">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">The Starter</h3>
            <p className="text-zinc-500 mb-8 text-sm">Perfect for couples wanting to learn basic movement and a clean finish without complex choreography.</p>
            <div className="text-4xl font-black mb-10 uppercase tracking-tighter">Basic Flow</div>
            <ul className="space-y-4 mb-12 flex-1">
              {['3 Private Sessions', 'Song Selection Help', 'Basic Entrance/Exit', 'Comfortable Lead/Follow'].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-400 font-medium">
                  <CheckCircle2 size={16} className="text-primary-400 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/book" className="w-full text-center py-4 rounded-xl border border-white/10 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Get Started</Link>
          </div>

          <div className="bg-primary-400 text-black p-12 rounded-[2.5rem] flex flex-col scale-105 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-black/5 rounded-bl-full"></div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">The Signature</h3>
            <p className="text-zinc-900/60 mb-8 text-sm">Our most popular choice. Full choreography designed specifically for your unique style and song.</p>
            <div className="text-4xl font-black mb-10 uppercase tracking-tighter">Full Story</div>
            <ul className="space-y-4 mb-12 flex-1">
              {['5 Private Sessions', 'Full Custom Choreography', 'Edited Music File', 'Dip & Showcase Finale', 'Video Practice Notes'].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-black font-black uppercase tracking-widest">
                  <Zap size={16} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/book" className="w-full text-center py-4 rounded-xl bg-black text-white font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Book Signature</Link>
          </div>

          <div className="bg-zinc-900/30 border border-white/5 p-12 rounded-[2.5rem] flex flex-col hover:border-primary-400/20 transition-all">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">The Party</h3>
            <p className="text-zinc-500 mb-8 text-sm">Include your parents or the whole wedding party in a fun, high-energy group performance.</p>
            <div className="text-4xl font-black mb-10 uppercase tracking-tighter">Group Vibes</div>
            <ul className="space-y-4 mb-12 flex-1">
              {['Custom Group Lessons', 'Parents Dance Prep', 'Wedding Party Flash Mob', 'On-Site Rehearsal Option'].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-400 font-medium">
                  <CheckCircle2 size={16} className="text-primary-400 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/book" className="w-full text-center py-4 rounded-xl border border-white/10 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Inquire Now</Link>
          </div>
        </div>

        {/* Wedding FAQ */}
        <section className="bg-zinc-950 p-16 rounded-[3rem] border border-white/5">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter text-center">Wedding <span className="text-primary-400">Dance FAQ</span></h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h4 className="font-bold text-white mb-4">When should we start?</h4>
              <p className="text-zinc-500 leading-relaxed">We recommend starting 2-4 months before your wedding. This allows you to learn the steps comfortably without last-minute stress.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">What if we've never danced?</h4>
              <p className="text-zinc-500 leading-relaxed">Most of our wedding couples have zero previous experience! We specialize in making absolute beginners look like naturals.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Can you edit our music?</h4>
              <p className="text-zinc-500 leading-relaxed">Yes! We provide basic music editing (cuts and fades) included with our Signature and Party packages.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Can we learn more than one style?</h4>
              <p className="text-zinc-500 leading-relaxed">Absolutely. Many couples start with a classic slow dance and transition into a high-energy Salsa or Swing section.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Weddings;
