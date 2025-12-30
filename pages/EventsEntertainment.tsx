
import React from 'react';
import { Building2, Users, Camera, Music, Zap, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features }: any) => (
  <div className="p-12 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:border-primary-400/20 transition-all group">
    <div className="w-16 h-16 bg-primary-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-400/20 transition-colors">
      <Icon className="text-primary-400 w-8 h-8" />
    </div>
    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{title}</h3>
    <p className="text-zinc-500 mb-8 leading-relaxed">{description}</p>
    <ul className="space-y-3 mb-10">
      {features.map((f: string) => (
        <li key={f} className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
          <Zap size={10} className="text-primary-400" /> {f}
        </li>
      ))}
    </ul>
    <Link to="/book" className="inline-flex items-center gap-2 text-primary-400 font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors">
      Request Proposal <ArrowRight size={14} />
    </Link>
  </div>
);

const EventsEntertainment: React.FC = () => {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 pb-32">
        <header className="max-w-4xl mb-24">
          <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Event Solutions</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">World-Class <span className="text-primary-400">Entertainment</span></h1>
          <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl">
            From high-energy corporate team building to professional performances and full-service event support.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <ServiceCard 
            icon={Building2}
            title="Corporate & Team Building"
            description="Boost morale and break the ice with interactive dance workshops. We transform office environments into vibrant dance floors."
            features={['Interactive Workshops', 'Performance Showcases', 'Icebreaker Sessions', 'Themed Events']}
          />
          <ServiceCard 
            icon={Users}
            title="Private Parties"
            description="Birthday, anniversary, or just because. We bring the instructors, the music, and the energy to make your party legendary."
            features={['Mini-Lessons for Guests', 'MC / Hosting Services', 'Themed Choreography', 'Party Starters']}
          />
          <ServiceCard 
            icon={Music}
            title="Professional DJ Services"
            description="Our specialist Latin and open-format DJs know exactly how to read a room and keep the dance floor packed all night."
            features={['High-End Sound System', 'Latin Specialists', 'Open Format Hits', 'Lighting Packages']}
          />
          <ServiceCard 
            icon={Camera}
            title="360 Photo Booth"
            description="Capture every angle of the fun. Our premium 360 booth experience is the perfect digital takeaway for your guests."
            features={['Instant Social Sharing', 'Custom Video Overlays', 'Professional Lighting', 'Attendant Included']}
          />
        </div>

        {/* Video Portfolio Placement */}
        <section className="relative rounded-[3rem] overflow-hidden aspect-[21/9] bg-zinc-900 flex items-center justify-center group mb-40">
          <img 
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1920" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" 
            alt="Event Atmosphere"
          />
          <div className="relative z-10 text-center">
            <button className="w-24 h-24 bg-primary-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform mb-6">
              <Play className="text-black fill-black ml-1" />
            </button>
            <p className="text-white font-black uppercase tracking-[0.4em] text-xs">Watch Event Reel</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventsEntertainment;
