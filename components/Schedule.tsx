import React from 'react';
import { SCHEDULE_DATA, IMAGES } from '../constants';
import { MapPin, Clock, CalendarDays } from 'lucide-react';

const Schedule: React.FC = () => {
  return (
    <section id="classes" className="py-20 bg-zinc-950 text-white relative overflow-hidden scroll-mt-24">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
             <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Join Us Weekly</h2>
             <h3 className="text-4xl md:text-5xl font-black uppercase mb-6">Class Schedule</h3>
             <p className="text-zinc-400 text-lg mb-8">
               Step into the studio with our expert instructors. Whether you are a beginner or looking to refine your technique, our group classes offer a supportive and high-energy environment.
             </p>
             <img 
               src={IMAGES.GROUP_CLASS} 
               alt="Group dance class" 
               className="rounded-lg shadow-2xl border border-zinc-800 w-full object-cover h-[300px]"
             />
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            {SCHEDULE_DATA.map((location, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-gold transition-colors duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{location.name}</h4>
                <div className="flex items-start text-zinc-400 mb-6 text-sm">
                  <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-gold" />
                  <span>{location.address}<br/>{location.cityStateZip}</span>
                </div>

                <div className="space-y-4">
                  {location.sessions.map((session, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex items-center text-gold font-bold uppercase tracking-wide mb-3">
                        <CalendarDays size={18} className="mr-2" />
                        {session.day}
                      </div>
                      <ul className="space-y-3">
                        {session.times.map((time, tIdx) => (
                          <li key={tIdx} className="flex items-center text-zinc-300 bg-zinc-800/50 p-3 rounded-lg border border-zinc-800">
                            <Clock size={16} className="mr-3 text-gold" />
                            {time}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
