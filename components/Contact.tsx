import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-zinc-950 text-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-none">Let's Dance</h3>
            <p className="text-zinc-400 text-lg mb-12 max-w-lg">
              Ready to bring Positive Energy to your next event? Have questions about our classes? Reach out today and let's make it happen.
            </p>

            <div className="space-y-8">
              <a href={`tel:${CONTACT_INFO.PHONE.replace(/-/g, '')}`} className="flex items-center group">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mr-6 group-hover:border-gold group-hover:bg-zinc-800 transition-all">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-2xl font-bold group-hover:text-gold transition-colors">{CONTACT_INFO.PHONE}</p>
                </div>
              </a>

              <a href={`mailto:${CONTACT_INFO.EMAIL}?subject=Inquiry from Website`} className="flex items-center group">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mr-6 group-hover:border-gold group-hover:bg-zinc-800 transition-all">
                  <Mail className="text-gold w-6 h-6" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-2xl font-bold group-hover:text-gold transition-colors break-all">{CONTACT_INFO.EMAIL}</p>
                </div>
              </a>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mr-6">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm uppercase tracking-wider mb-1">Based In</p>
                  <p className="text-2xl font-bold">San Diego, CA</p>
                  <p className="text-zinc-400 text-sm italic mt-1">Travels Nationwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="book" className="lg:w-1/2 bg-white rounded-2xl p-8 md:p-12 text-zinc-900 shadow-2xl scroll-mt-32">
            <h4 className="text-2xl font-bold uppercase mb-6">Request A Quote</h4>
            <form className="space-y-6" action={`mailto:${CONTACT_INFO.EMAIL}`} method="post" encType="text/plain">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-zinc-500">Name</label>
                  <input type="text" name="name" className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-zinc-500">Phone</label>
                  <input type="tel" name="phone" className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="Your phone" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-zinc-500">Email</label>
                <input type="email" name="email" className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="Your email address" required />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-zinc-500">Service Interest</label>
                <select name="service" className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all appearance-none">
                  <option>Performance / Entertainment</option>
                  <option>Private Lessons</option>
                  <option>Wedding Dance</option>
                  <option>Group Classes</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide mb-2 text-zinc-500">Message</label>
                <textarea name="message" rows={4} className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" placeholder="Tell us about your event or goals..."></textarea>
              </div>

              <button type="submit" className="w-full bg-zinc-900 hover:bg-gold hover:text-black text-white font-bold text-lg uppercase py-4 rounded-lg transition-all duration-300 tracking-wider shadow-lg">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
