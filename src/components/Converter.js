'use client';
import { useState, useEffect } from 'react';

export default function Converter() {
  const [amount, setAmount] = useState(100);
  const [type, setType] = useState('buy');
  const [mounted, setMounted] = useState(false); // 1. État pour suivre le montage client
  
  const rateUSD = 610;
  const result = amount * rateUSD;

  // 2. Activer le rendu dynamiquement après le premier chargement
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="convertisseur" className="py-16 bg-white">
      <div className="max-w-xl mx-auto px-6 bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">Calculateur Rapide</h2>
        
        <div className="flex gap-2 mb-6 p-1 bg-slate-200 rounded-xl">
          <button
            onClick={() => setType('buy')}
            className={`flex-1 py-2 rounded-lg font-bold transition ${type === 'buy' ? 'bg-congo-green text-white' : 'text-slate-600'}`}
          >
            Je Vends du Dollar
          </button>
          <button
            onClick={() => setType('sell')}
            className={`flex-1 py-2 rounded-lg font-bold transition ${type === 'sell' ? 'bg-congo-green text-white' : 'text-slate-600'}`}
          >
            J'Achète du Dollar
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">Montant en USD ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-4 border rounded-xl text-lg font-bold focus:ring-2 focus:ring-congo-green outline-none"
            />
          </div>

          <div className="p-4 bg-congo-green/10 border border-congo-green/30 rounded-xl text-center">
            <span className="block text-sm text-slate-600">Vous recevez environ</span>
            <span className="text-3xl font-extrabold text-congo-green">
              {/* 3. Afficher la valeur formatée uniquement quand le client est prêt */}
              {mounted ? result.toLocaleString('fr-FR') : result} FCFA
            </span>
          </div>

          <a
            href="https://wa.me/242000000000?text=Bonjour,%20je%20souhaite%20réserver%20un%20échange"
            target="_blank"
            className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition"
          >
            💬 Réserver ce montant sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}