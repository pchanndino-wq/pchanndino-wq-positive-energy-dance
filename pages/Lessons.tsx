import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, User, Zap, Music2 } from 'lucide-react';

const StyleSection = ({ title, description, styles, color }: any) => (
  <div className="py-24 border-b border-white/5 last:border-0 group">
    <div className="grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5">
        <span className="text-primary-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Dance Style</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 group-hover:text-primary-400 transition-colors">{title}</h2>
        <p className="text-zinc-500 text-lg leading-relaxed mb-10">{description}</p>
        <div className="flex flex-wrap gap-3">
          {styles.map((s: string) => (
            <span key={s} className="px-5 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="md:col-span-7">
        <div className="aspect-video rounded-[2.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative bg-zinc-900">
          <img src={`https://picsum.photos/seed/${title}/1200/800`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center border border-primary-400/20 group-hover:scale-110 transition-transform">
              <Zap className="text-primary-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Lessons: React.FC = () => {
  return (
    <div className="pt-40 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <header className="max-w-4xl mb-24">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">The <span className="text-primary-400">Master</span> Classes</h1>
          <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl">
            From your very first basic step to high-level performance technicality. Our curriculum is designed to build confidence, skill, and connection.
          </p>
        </header>

        <StyleSection 
          title="Latin Rhythms"
          description="The heart and soul of San Diego nightlife. Learn the timing, body movement, and social lead/follow patterns that will have you on the dance floor in no time."
          styles={['Salsa', 'Bachata', 'Cha-Cha', 'Mambo']}
        />

        <StyleSection 
          title="Social & Ballroom"
          description="Elegance meets energy. Master the classic ballroom styles with a focus on practical social application and beautiful floor movement."
          styles={['Argentine Tango', 'Swing', 'West Coast Swing', 'Bolero']}
        />

        <StyleSection 
          title="Folk & Party"
          description="High energy, accessible, and perfect for events. We specialize in bringing the party to life through structured community dances."
          styles={['Line Dancing', 'Country Swing', 'Casino Rueda']}
        />

        {/* Private vs Group */}
        <section className="py-32 grid md:grid-cols-2 gap-12">
          <div className="p-16 rounded-[3rem] bg-zinc-900/30 border border-white/5 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary-400/50"></div>
            <Users className="text-primary-400 w-12 h-12 mb-8" />
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Group Classes</h3>
            <p className="text-zinc-500 mb-8 leading-relaxed">Join a vibrant community of dancers. Perfect for social interaction, learning fundamentals, and having fun in a low-pressure environment.</p>
            <Link to="/locations" className="inline-flex items-center gap-2 text-primary-400 font-black uppercase tracking-widest text-xs">
              View Schedule <ArrowRight size={16} />
            </Link>
          </div>
          <div className="p-16 rounded-[3rem] bg-white text-black relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-black/20"></div>
            <User className="text-black w-12 h-12 mb-8" />
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Private Lessons</h3>
            <p className="text-zinc-800 mb-8 leading-relaxed">Accelerate your progress with 1-on-1 coaching. Tailored to your goals, pace, and specific dance aspirations.</p>
            <Link to="/book" className="inline-flex items-center gap-2 text-black font-black uppercase tracking-widest text-xs">
              Book Session <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Lessons;