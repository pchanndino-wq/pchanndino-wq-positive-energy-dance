
import React from 'react';
import { Star, Quote, Zap } from 'lucide-react';

const ReviewCard = ({ author, content, rating }: any) => (
  <div className="p-12 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 relative group">
    <div className="absolute -top-6 left-12 w-12 h-12 bg-primary-400 rounded-2xl flex items-center justify-center shadow-xl">
      <Quote className="text-black w-6 h-6" />
    </div>
    <div className="flex gap-1 mb-8">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < rating ? "text-primary-400 fill-primary-400" : "text-zinc-800"} />
      ))}
    </div>
    <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-medium italic">"{content}"</p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-primary-400/10 border border-primary-400/20 flex items-center justify-center font-black text-primary-400 text-xs">
        {author[0]}
      </div>
      <div>
        <p className="font-black uppercase tracking-widest text-xs text-white">{author}</p>
        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Verified Client</p>
      </div>
    </div>
  </div>
);

const Reviews: React.FC = () => {
  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 pb-32">
        <header className="max-w-4xl mb-24 text-center mx-auto">
          <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Testimonials</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">What They <span className="text-primary-400">Say</span></h1>
          <div className="flex items-center justify-center gap-4 bg-zinc-950 p-6 rounded-3xl border border-white/5 max-w-sm mx-auto">
            <div className="text-4xl font-black text-white">4.9</div>
            <div className="h-10 w-px bg-zinc-800"></div>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-primary-400 fill-primary-400" />)}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Based on 150+ Reviews</div>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ReviewCard 
            author="Jessica R."
            content="Michael and his team are incredible. We came for our wedding dance and stayed for the Salsa classes. Best community in SD!"
            rating={5}
          />
          <ReviewCard 
            author="David M."
            content="The Thursday classes at DHQ are the highlight of my week. High energy, great music, and very welcoming for beginners."
            rating={5}
          />
          <ReviewCard 
            author="Sarah L."
            content="Professional, patient, and highly skilled. They turned our corporate event from standard to unforgettable."
            rating={5}
          />
          <ReviewCard 
            author="Mark & Elena"
            content="Our first dance was magical thanks to the signature package. Highly recommend for any couple getting married."
            rating={5}
          />
        </div>

        <section className="mt-40 p-16 rounded-[3rem] bg-primary-400 text-black text-center relative overflow-hidden shadow-2xl shadow-primary-900/40">
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Ready to <span className="italic">Experience</span> It?</h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto mb-12 font-bold">Join the hundreds of satisfied dancers who have found their rhythm with us.</p>
          <a href="#/book" className="inline-block bg-black text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-900 transition-all shadow-xl">
            Book Your First Session
          </a>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
