import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-congo-green">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Col 1: Marque */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-congo-green flex items-center justify-center font-black text-white text-lg">
              $
            </div>
            <span className="font-extrabold text-xl text-white tracking-tight">
              EXCHANGE<span className="text-congo-green">.CG</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Votre bureau de change de référence à Brazzaville. Achat, vente et réservation de devises au meilleur taux du marché.
          </p>
        </div>

        {/* Col 2: Liens rapides */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider border-b border-slate-800 pb-2">Navigation</h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li><Link href="/" className="hover:text-congo-green transition">Accueil</Link></li>
            <li><Link href="/#taux" className="hover:text-congo-green transition">Taux de change</Link></li>
            <li><Link href="/#convertisseur" className="hover:text-congo-green transition">Convertisseur</Link></li>
            <li><Link href="/contact" className="hover:text-congo-green transition">Nous contacter</Link></li>
          </ul>
        </div>

        {/* Col 3: Heures d'ouverture */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider border-b border-slate-800 pb-2">Horaires</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex justify-between">
              <span>Lun - Ven :</span>
              <span className="text-white font-medium">08h00 - 18h00</span>
            </li>
            <li className="flex justify-between">
              <span>Samedi :</span>
              <span className="text-white font-medium">08h00 - 16h00</span>
            </li>
            <li className="flex justify-between text-congo-red">
              <span>Dimanche :</span>
              <span>Fermé</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact rapide */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider border-b border-slate-800 pb-2">Agence</h4>
          <p className="text-sm text-slate-400 mb-2">📍 Avenue Amilcar Cabral, Brazzaville</p>
          <p className="text-sm text-slate-400 mb-4">📞 +242 06 000 00 00</p>
          <a
            href="https://wa.me/242000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl transition"
          >
            Discuter sur WhatsApp
          </a>
        </div>

      </div>

      {/* Baseline */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Exchange.cg — Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link href="/dashboard" className="hover:text-slate-300">Accès Administration</Link>
        </div>
      </div>
    </footer>
  );
}