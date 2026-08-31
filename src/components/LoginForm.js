'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      alert('Erreur de connexion : ' + error.message);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full space-y-5">
      <div className="text-center">
        <h1 className="text-2xl font-black text-slate-900">Espace Admin</h1>
        <p className="text-xs text-slate-500 mt-1">Connectez-vous pour gérer les taux</p>
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 uppercase">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 p-3 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-congo-green outline-none text-slate-900"
        />
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 uppercase">Mot de passe</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 p-3 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-congo-green outline-none text-slate-900"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl shadow-lg transition disabled:opacity-50"
      >
        {loading ? 'Connexion en cours...' : 'Se connecter'}
      </button>

      <p className="text-center text-xs text-slate-500 pt-2">
        Pas encore de compte ?{' '}
        <Link href="/signup" className="text-congo-green font-bold hover:underline">
          Créer un compte
        </Link>
      </p>
    </form>
  );
}