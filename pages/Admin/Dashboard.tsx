
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Calendar, Settings, FileText, LogOut, ChevronRight, 
  Plus, Edit2, Trash2, CheckCircle, XCircle, Share2, Phone, Mail, MapPin, Save, X
} from 'lucide-react';
import { auth, db } from '../../firebase';
import { Instructor, Event, SiteSettings, Lead } from '../../types';
import { resolveImageUrl } from '../../utils';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'instructors' | 'events' | 'settings' | 'leads'>('instructors');
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [editingInstructor, setEditingInstructor] = useState<Instructor | null>(null);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [navigate]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [inst, ev, set, ld] = await Promise.all([
        db.instructors.getAdminAll(),
        db.events.getAdminAll(),
        db.settings.get(),
        db.leads.getAll()
      ]);
      setInstructors(inst);
      setEvents(ev);
      setSettings(set);
      setLeads(ld);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    auth.logout();
    navigate('/admin/login');
  };

  const saveInstructor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingInstructor) {
      await db.instructors.save(editingInstructor);
      setEditingInstructor(null);
      loadData();
    }
  };

  const saveEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEvent) {
      await db.events.save(editingEvent);
      setEditingEvent(null);
      loadData();
    }
  };

  const deleteInstructor = async (id: string) => {
    if (confirm('Delete this instructor?')) {
      await db.instructors.delete(id);
      loadData();
    }
  };

  const deleteEvent = async (id: string) => {
    if (confirm('Delete this event?')) {
      await db.events.delete(id);
      loadData();
    }
  };

  const updateSetting = async (field: keyof SiteSettings, value: any) => {
    if (!settings) return;
    const newSettings = { ...settings, [field]: value };
    setSettings(newSettings);
    await db.settings.update(newSettings);
  };

  return (
    <div className="min-h-screen bg-black flex text-zinc-100">
      <aside className="w-72 bg-zinc-950 border-r border-white/5 flex flex-col fixed h-full z-20">
        <div className="p-10 border-b border-white/5">
          <h2 className="text-xl font-black text-white tracking-tighter uppercase">PEDC <span className="text-primary-400">ADMIN</span></h2>
        </div>
        <nav className="flex-1 p-6 space-y-3 mt-6">
          {[
            { id: 'instructors', label: 'Instructors', icon: Users },
            { id: 'events', label: 'Events', icon: Calendar },
            { id: 'settings', label: 'Site Settings', icon: Settings },
            { id: 'leads', label: 'Inquiries', icon: FileText },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => { setActiveTab(item.id as any); setEditingInstructor(null); setEditingEvent(null); }}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all uppercase tracking-widest text-[10px] font-black ${activeTab === item.id ? 'bg-primary-400 text-black' : 'text-zinc-500 hover:bg-white/5'}`}
            >
              <item.icon size={18} /> {item.label}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-white/5">
          <button onClick={handleLogout} className="w-full flex items-center gap-4 px-6 py-4 text-red-400 hover:bg-red-400/5 rounded-2xl transition-all uppercase tracking-widest text-[10px] font-black">
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-72 p-16 bg-black min-h-screen">
        <div className="max-w-6xl mx-auto">
          {!editingInstructor && !editingEvent && (
            <header className="flex justify-between items-center mb-16">
              <div>
                <h1 className="text-5xl font-black capitalize tracking-tighter">{activeTab}</h1>
                <p className="text-zinc-500 mt-2 font-medium">Professional content management system.</p>
              </div>
              {activeTab === 'instructors' && (
                <button 
                  onClick={() => setEditingInstructor({ id: '', name: '', role: '', bio: '', styles: [], photoUrl: '', showSocials: true, active: true, sortOrder: instructors.length + 1 })}
                  className="bg-primary-400 hover:bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all"
                >
                  <Plus size={18} /> New Instructor
                </button>
              )}
              {activeTab === 'events' && (
                <button 
                  onClick={() => setEditingEvent({ id: '', title: '', date: '', time: '', location: '', description: '', flyerUrl: '', status: 'Published', featured: false })}
                  className="bg-primary-400 hover:bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all"
                >
                  <Plus size={18} /> Create Event
                </button>
              )}
            </header>
          )}

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400"></div>
            </div>
          ) : (
            <div className="space-y-8">
              
              {/* Instructor Edit Form */}
              {editingInstructor && (
                <form onSubmit={saveInstructor} className="bg-zinc-900 p-12 rounded-[2.5rem] border border-white/5 space-y-8 max-w-2xl mx-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Edit Instructor</h2>
                    <button type="button" onClick={() => setEditingInstructor(null)} className="p-2 hover:bg-white/5 rounded-full"><X /></button>
                  </div>
                  <div className="flex items-center gap-6 mb-4">
                    <img 
                      src={resolveImageUrl(editingInstructor.photoUrl)} 
                      className="w-24 h-24 rounded-2xl object-cover bg-black border border-white/5" 
                      alt="Preview" 
                      onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/150')}
                    />
                    <div className="text-xs text-zinc-500">
                      <p className="font-bold text-zinc-300">Live Preview</p>
                      <p>Check if the image loads correctly above.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <input value={editingInstructor.name} onChange={e => setEditingInstructor({...editingInstructor, name: e.target.value})} className="w-full bg-black border border-white/5 p-4 rounded-xl focus:border-primary-400 transition-colors" placeholder="Full Name" />
                    <input value={editingInstructor.role} onChange={e => setEditingInstructor({...editingInstructor, role: e.target.value})} className="w-full bg-black border border-white/5 p-4 rounded-xl focus:border-primary-400 transition-colors" placeholder="Role (e.g. Director)" />
                    <textarea value={editingInstructor.bio} onChange={e => setEditingInstructor({...editingInstructor, bio: e.target.value})} className="w-full bg-black border border-white/5 p-4 rounded-xl focus:border-primary-400 transition-colors" placeholder="Biography" rows={4} />
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Photo Source (Drive Link or URL)</label>
                      <input value={editingInstructor.photoUrl} onChange={e => setEditingInstructor({...editingInstructor, photoUrl: e.target.value})} className="w-full bg-black border border-white/5 p-4 rounded-xl focus:border-primary-400 transition-colors" placeholder="Paste Google Drive link here" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-primary-400 text-black py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all">Save Changes</button>
                </form>
              )}

              {/* Event Edit Form */}
              {editingEvent && (
                <form onSubmit={saveEvent} className="bg-zinc-900 p-12 rounded-[2.5rem] border border-white/5 space-y-8 max-w-2xl mx-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Edit Event</h2>
                    <button type="button" onClick={() => setEditingEvent(null)} className="p-2 hover:bg-white/5 rounded-full"><X /></button>
                  </div>
                  <div className="space-y-4">
                    <input value={editingEvent.title} onChange={e => setEditingEvent({...editingEvent, title: e.target.value})} className="w-full bg-black border border-white/5 p-4 rounded-xl" placeholder="Event Title" />
                    <input value={editingEvent.location} onChange={e => setEditingEvent({...editingEvent, location: e.target.value})} className="w-full bg-black border border-white/5 p-4 rounded-xl" placeholder="Location" />
                    <div className="grid grid-cols-2 gap-4">
                      <input value={editingEvent.date} onChange={e => setEditingEvent({...editingEvent, date: e.target.value})} className="bg-black border border-white/5 p-4 rounded-xl" placeholder="Date" />
                      <input value={editingEvent.time} onChange={e => setEditingEvent({...editingEvent, time: e.target.value})} className="bg-black border border-white/5 p-4 rounded-xl" placeholder="Time" />
                    </div>
                    <textarea value={editingEvent.description} onChange={e => setEditingEvent({...editingEvent, description: e.target.value})} className="w-full bg-black border border-white/5 p-4 rounded-xl" placeholder="Description" rows={3} />
                    <div className="flex items-center gap-4 py-2">
                      <input type="checkbox" checked={editingEvent.featured} onChange={e => setEditingEvent({...editingEvent, featured: e.target.checked})} className="w-5 h-5 accent-primary-400" />
                      <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Feature on Homepage</label>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-primary-400 text-black py-4 rounded-xl font-black uppercase tracking-widest text-xs">Save Event</button>
                </form>
              )}

              {activeTab === 'instructors' && !editingInstructor && (
                <div className="grid grid-cols-1 gap-4">
                  {instructors.map(inst => (
                    <div key={inst.id} className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl flex items-center gap-8">
                      <img src={resolveImageUrl(inst.photoUrl)} className="w-20 h-20 rounded-xl object-cover grayscale" alt="" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{inst.name}</h3>
                        <p className="text-zinc-500 text-xs font-black uppercase tracking-widest mt-1">{inst.role}</p>
                      </div>
                      <div className="flex gap-3">
                        <button onClick={() => setEditingInstructor(inst)} className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"><Edit2 size={18} /></button>
                        <button onClick={() => deleteInstructor(inst.id)} className="p-4 bg-red-500/5 text-red-500 hover:bg-red-500/10 rounded-2xl transition-all"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'events' && !editingEvent && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {events.map(ev => (
                    <div key={ev.id} className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">{ev.status}</span>
                        {ev.featured && <span className="bg-primary-400 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">Home Featured</span>}
                      </div>
                      <h3 className="text-2xl font-bold mb-6">{ev.title}</h3>
                      <div className="flex justify-between pt-6 border-t border-white/5">
                        <div className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">{ev.date}</div>
                        <div className="flex gap-2">
                          <button onClick={() => setEditingEvent(ev)} className="p-2 hover:bg-white/5 rounded-lg"><Edit2 size={16} /></button>
                          <button onClick={() => deleteEvent(ev.id)} className="p-2 hover:bg-red-400/10 text-red-500 rounded-lg"><Trash2 size={16} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'settings' && settings && (
                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="p-10 bg-zinc-900/30 rounded-[2.5rem] border border-white/5 space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3"><Phone className="text-primary-400" /> Site Identity</h3>
                    <div className="space-y-4">
                      <input value={settings.phone} onChange={e => updateSetting('phone', e.target.value)} className="w-full bg-black border border-white/5 p-4 rounded-xl" placeholder="Phone" />
                      <input value={settings.email} onChange={e => updateSetting('email', e.target.value)} className="w-full bg-black border border-white/5 p-4 rounded-xl" placeholder="Email" />
                    </div>
                  </div>
                  <div className="p-10 bg-zinc-900/30 rounded-[2.5rem] border border-white/5 space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3"><Share2 className="text-primary-400" /> Social Links</h3>
                    <div className="space-y-4">
                      {['instagram', 'facebook', 'tiktok', 'youtube'].map(s => (
                        <input key={s} value={(settings as any)[s]} onChange={e => updateSetting(s as any, e.target.value)} className="w-full bg-black border border-white/5 p-4 rounded-xl" placeholder={`${s} URL`} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'leads' && (
                <div className="bg-zinc-900/30 rounded-[2.5rem] overflow-hidden border border-white/5">
                   <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/5">
                      <tr>
                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">Contact</th>
                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">Type</th>
                        <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-right">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {leads.map(lead => (
                        <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                          <td className="px-10 py-8">
                            <div className="font-bold mb-1">{lead.name}</div>
                            <div className="text-xs text-zinc-600">{lead.email}</div>
                          </td>
                          <td className="px-10 py-8">
                            <span className="text-[9px] font-black uppercase px-3 py-1 bg-primary-400/10 text-primary-400 border border-primary-400/20 rounded-full">{lead.serviceType}</span>
                          </td>
                          <td className="px-10 py-8 text-right text-[10px] font-black uppercase tracking-widest text-zinc-600">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                   </table>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
