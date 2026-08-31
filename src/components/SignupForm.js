'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);

    if (error) {
      alert('Erreur lors de la création : ' + error.message);
    } else {
      alert('Inscription réussie ! Vous pouvez vous connecter.');
      router.push('/login');
    }
  };

  return (
    <form onSubmit={handleSignup} className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full space-y-5">
      <div className="text-center">
        <h1 className="text-2xl font-black text-slate-900">Inscription Admin</h1>
        <p className="text-xs text-slate-500 mt-1">Créer un nouvel accès administrateur</p>
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
        {loading ? 'Création...' : "S'inscrire"}
      </button>

      <p className="text-center text-xs text-slate-500 pt-2">
        Déjà un compte ?{' '}
        <Link href="/login" className="text-congo-green font-bold hover:underline">
          Se connecter
        </Link>
      </p>
    </form>
  );
}