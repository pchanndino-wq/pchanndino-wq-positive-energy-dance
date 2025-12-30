
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Zap } from 'lucide-react';
import { auth } from '../../firebase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await auth.login(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid credentials. Access denied.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="max-w-md w-full p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary-400/50"></div>
        
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary-400/10 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Zap className="text-primary-400 w-10 h-10 fill-primary-400/20" />
          </div>
          <h1 className="text-3xl font-black mb-2 uppercase tracking-tighter">Admin Portal</h1>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">PEDC Management System</p>
        </div>

        {error && (
          <div className="bg-red-500/5 border border-red-500/20 text-red-400 p-4 rounded-xl mb-8 text-xs text-center font-bold uppercase tracking-widest">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Email Access</label>
            <div className="relative group">
              <User className="absolute left-5 top-4 w-5 h-5 text-zinc-600 group-focus-within:text-primary-400 transition-colors" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white text-sm focus:outline-none focus:border-primary-400/50 transition-all placeholder:text-zinc-700"
                placeholder="admin@pedc.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Security Key</label>
            <div className="relative group">
              <Lock className="absolute left-5 top-4 w-5 h-5 text-zinc-600 group-focus-within:text-primary-400 transition-colors" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white text-sm focus:outline-none focus:border-primary-400/50 transition-all placeholder:text-zinc-700"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary-400 hover:bg-white text-black font-black py-5 rounded-2xl transition-all shadow-xl shadow-primary-400/10 disabled:opacity-50 uppercase tracking-[0.2em] text-xs"
          >
            {loading ? 'Validating...' : 'Enter Dashboard'}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest leading-relaxed">
            Strictly authorized personnel only.<br />
            IP security protocol active.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
