
import React, { useState } from 'react';
import { Send, Zap, CheckCircle2, Phone, Mail } from 'lucide-react';
import { db } from '../firebase';
import { SERVICE_CATEGORIES } from '../constants';

const Book: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Salsa Lessons',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await db.leads.submit(formData);
    setSubmitted(true);
  };

  return (
    <div className="pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4 pb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5">
            <span className="text-primary-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Get a Quote</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Let's <span className="text-primary-400">Dance</span></h1>
            <p className="text-zinc-500 text-xl leading-relaxed mb-12">
              Tell us about your goals or your event. We'll get back to you within 24 hours with a personalized plan.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                  <Phone className="text-primary-400" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-xs text-zinc-600 mb-1">Direct Line</h4>
                  <p className="text-xl font-bold">619-251-8863</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                  <Mail className="text-primary-400" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-xs text-zinc-600 mb-1">General Inquiries</h4>
                  <p className="text-xl font-bold">positivesalsa2@yahoo.com</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-zinc-950 border border-white/5">
              <h4 className="font-black uppercase tracking-widest text-[10px] text-primary-400 mb-6">Available For</h4>
              <div className="grid grid-cols-2 gap-4">
                {['Wedding Prep', 'Corporate Prep', 'Private 1-on-1', 'Nationwide Travel'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    <Zap size={10} className="text-primary-400" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="h-full bg-zinc-900/30 border border-primary-400/20 rounded-[3rem] p-16 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-primary-400 rounded-full flex items-center justify-center mb-10 shadow-2xl shadow-primary-900/20">
                  <CheckCircle2 size={48} className="text-black" />
                </div>
                <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Inquiry <span className="text-primary-400">Received</span></h2>
                <p className="text-zinc-500 text-lg leading-relaxed max-w-xs">One of our specialists will reach out shortly to discuss your details.</p>
                <button onClick={() => setSubmitted(false)} className="mt-12 text-primary-400 font-black uppercase tracking-widest text-xs hover:text-white transition-colors">Send another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zinc-900/30 border border-white/5 rounded-[3rem] p-10 md:p-16 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 ml-1">Full Name</label>
                    <input 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary-400/50 transition-all font-medium text-white"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 ml-1">Email Address</label>
                    <input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary-400/50 transition-all font-medium text-white"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 ml-1">Phone Number</label>
                    <input 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary-400/50 transition-all font-medium text-white"
                      placeholder="(619) 000-0000"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 ml-1">Interest</label>
                    <select 
                      value={formData.serviceType}
                      onChange={e => setFormData({...formData, serviceType: e.target.value})}
                      className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary-400/50 transition-all font-medium text-white appearance-none cursor-pointer"
                    >
                      {SERVICE_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 ml-1">Your Message / Event Details</label>
                  <textarea 
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-black border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary-400/50 transition-all font-medium text-white resize-none"
                    placeholder="Tell us about your experience level or event details..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary-400 hover:bg-white text-black font-black py-6 rounded-2xl transition-all shadow-2xl shadow-primary-900/20 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs"
                >
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
