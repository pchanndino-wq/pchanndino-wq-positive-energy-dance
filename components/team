import React from 'react';
import { TEAM_DATA } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-zinc-100 text-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Expert Instructors</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase text-zinc-950">Meet The Team</h3>
          <p className="max-w-2xl mx-auto mt-4 text-zinc-600">
            Our versatile professionals are trained across multiple dance styles, bringing decades of experience and passion to every class and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-zinc-200">
              <div className="h-64 overflow-hidden relative group">
                {member.image ? (
                   <img 
                   src={member.image} 
                   alt={member.name} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                ) : (
                  <div className="w-full h-full bg-zinc-200 flex items-center justify-center text-zinc-400">
                    No Image
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-gold font-bold uppercase tracking-wider text-sm">Instructor</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-4">{member.role}</p>
                <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
