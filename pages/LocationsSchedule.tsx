
import React from 'react';
import { MapPin, Clock, Calendar, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { SCHEDULE_DATA } from '../constants';

const LocationsSchedule: React.FC = () => {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 pb-24">
        <header className="max-w-4xl mb-20">
          <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Visit Us</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">Locations & <span className="text-primary-400">Schedule</span></h1>
          <p className="text-zinc-500 text-xl max-w-2xl leading-relaxed">
            Join our community at San Diego's top dance hubs. Whether it's a social night in North Park or technical training at Dance Headquarters, we have a spot for you.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {SCHEDULE_DATA.map((loc, idx) => (
            <div key={idx} className="bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-10 md:p-14 hover:border-primary-400/20 transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400/5 rounded-bl-full group-hover:bg-primary-400/10 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-400/10 rounded-2xl flex items-center justify-center mb-10">
                  <MapPin className="text-primary-400 w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{loc.location}</h3>
                <p className="text-zinc-400 font-bold mb-8 flex items-center gap-2">
                  <MapPin size={16} className="text-zinc-600" /> {loc.address}
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary-400 shrink-0 mt-1" />
                    <div>
                      <p className="font-black uppercase tracking-widest text-xs text-zinc-500 mb-2">When</p>
                      <p className="text-white text-lg font-bold">{loc.time}</p>
                    </div>
                  </div>
                  
                  {loc.classes && (
                    <div className="space-y-4">
                      <p className="font-black uppercase tracking-widest text-xs text-zinc-500">Group Classes</p>
                      <div className="grid gap-3">
                        {loc.classes.map((cls, cIdx) => (
                          <div key={cIdx} className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
                            <span className="font-bold text-white">{cls.name}</span>
                            <span className="text-primary-400 font-black text-xs uppercase tracking-widest">{cls.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {loc.pricing && (
                    <div className="pt-8 border-t border-white/5">
                      <p className="font-black uppercase tracking-widest text-xs text-zinc-500 mb-4">Pricing</p>
                      <div className="flex flex-wrap gap-4">
                        {loc.pricing.map((price, pIdx) => (
                          <div key={pIdx} className="bg-primary-400 text-black px-6 py-2 rounded-full font-black text-sm">
                            {price.count}: {price.price}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {!loc.classes && (
                    <p className="text-zinc-500 leading-relaxed italic">{loc.details}</p>
                  )}
                </div>

                <a 
                  href={loc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white font-black px-8 py-4 rounded-2xl transition-all uppercase tracking-widest text-xs"
                >
                  Get Directions <ExternalLink size={16} className="text-primary-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing/FAQ Section */}
        <section className="mt-32">
          <div className="bg-zinc-950 rounded-[3rem] p-12 md:p-20 border border-white/5">
            <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter text-center">Frequently Asked <span className="text-primary-400">Questions</span></h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary-400">Do I need a partner?</h4>
                <p className="text-zinc-500 leading-relaxed">No partner is ever required! We rotate dancers throughout our group classes to ensure everyone gets to practice with different styles and levels.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary-400">What should I wear?</h4>
                <p className="text-zinc-500 leading-relaxed">Comfortable clothing and shoes that allow you to spin. Avoid heavy rubber soles; leather or suede bottoms are best for our wooden dance floors.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary-400">I have two left feet. Can I learn?</h4>
                <p className="text-zinc-500 leading-relaxed">Absolutely! Our beginner classes are specifically designed for people who have never danced before. We break down the fundamentals step-by-step.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary-400">How do I pay?</h4>
                <p className="text-zinc-500 leading-relaxed">We accept cash, Venmo, or card at the door for group classes. Private lessons and events are invoiced via email.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocationsSchedule;
