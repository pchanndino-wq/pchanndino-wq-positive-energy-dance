import React from 'react';
import { Star, Music, Users, Calendar } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Star className="w-10 h-10 text-gold" />,
      title: "Professional Performances",
      description: "Captivate your audience with high-energy dance shows for corporate events, private parties, and galas. Our world-class dancers bring Broadway-caliber entertainment to any stage."
    },
    {
      icon: <Users className="w-10 h-10 text-gold" />,
      title: "Dance Lessons",
      description: "From wedding first dances to corporate team building. We offer private and group instruction tailored to all skill levels. Learn Salsa, Bachata, Swing, and more."
    },
    {
      icon: <Music className="w-10 h-10 text-gold" />,
      title: "Event Entertainment",
      description: "More than just a show—we create an atmosphere. Live engaging entertainment, crowd interaction, and immersive experiences that get your guests moving."
    },
    {
      icon: <Calendar className="w-10 h-10 text-gold" />,
      title: "Group Class Partnerships",
      description: "We partner with studios across San Diego to provide ongoing group classes. Join a community of dancers and experience the joy of movement weekly."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white text-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase text-zinc-950">Bring The Energy</h3>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-zinc-50 border border-zinc-100 hover:border-gold hover:shadow-xl transition-all duration-300 group rounded-xl">
              <div className="mb-6 p-4 bg-zinc-900 rounded-full w-fit group-hover:bg-gold transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-gold group-hover:text-black transition-colors" })}
              </div>
              <h4 className="text-xl font-bold uppercase mb-4">{service.title}</h4>
              <p className="text-zinc-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
