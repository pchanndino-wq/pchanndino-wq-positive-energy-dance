import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Clock, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 bg-black min-h-screen">
      <div className="container mx-auto px-4 pb-32">
        <header className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">Reach <span className="text-primary-400">Out</span></h1>
          <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl">
            Have questions about our classes or events? We're here to help you get moving.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary-400">Communication</h3>
              <div className="space-y-6">
                <a href="tel:6192518863" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary-400/50 transition-all">
                    <Phone className="text-primary-400" />
                  </div>
                  <span className="text-lg font-bold group-hover:text-primary-400 transition-colors">619-251-8863</span>
                </a>
                <a href="mailto:positivesalsa2@yahoo.com" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary-400/50 transition-all">
                    <Mail className="text-primary-400" />
                  </div>
                  <span className="text-lg font-bold group-hover:text-primary-400 transition-colors">positivesalsa2@yahoo.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary-400">Social Studio</h3>
              <div className="flex gap-4">
                {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 hover:border-primary-400/50 transition-all text-zinc-500 hover:text-white">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-primary-400 text-black">
              <h4 className="font-black uppercase tracking-tighter text-2xl mb-4">Office Hours</h4>
              <p className="font-bold text-sm mb-6 opacity-70">Our team is available for phone inquiries during these times:</p>
              <div className="space-y-2 text-xs font-black uppercase tracking-widest">
                <div className="flex justify-between"><span>Mon - Fri</span><span>10AM - 6PM</span></div>
                <div className="flex justify-between"><span>Sat</span><span>11AM - 4PM</span></div>
                <div className="flex justify-between"><span>Sun</span><span>Event Support Only</span></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/40 p-10 rounded-[2.5rem] border border-white/5 space-y-6">
                <div className="w-12 h-12 bg-primary-400/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary-400" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">North Park</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Queen Bee’s Art & Cultural Center<br/>3925 Ohio St, San Diego, CA 92104</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary-400 font-black uppercase tracking-widest text-[10px]">Open in Maps <ExternalLink size={14} /></a>
              </div>
              <div className="bg-zinc-900/40 p-10 rounded-[2.5rem] border border-white/5 space-y-6">
                <div className="w-12 h-12 bg-primary-400/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary-400" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Kearny Mesa</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">Dance Headquarters<br/>5035 Shawline St, San Diego, CA 92111</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary-400 font-black uppercase tracking-widest text-[10px]">Open in Maps <ExternalLink size={14} /></a>
              </div>
            </div>

            <div className="aspect-video w-full rounded-[3rem] bg-zinc-900/40 border border-white/5 flex items-center justify-center relative overflow-hidden grayscale group">
              <img src="https://picsum.photos/seed/map/1200/800" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" alt="Map Placeholder" />
              <div className="relative text-center p-12">
                <MapPin className="w-16 h-16 text-primary-400 mx-auto mb-6 drop-shadow-2xl" />
                <p className="text-white font-black uppercase tracking-widest text-xs">Interactive Map Data Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;