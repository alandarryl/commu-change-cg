import HeroCarousel from '@/components/HeroCarousel';
import Services from '@/components/Services';
import RateTable from '@/components/RateTable';
import Converter from '@/components/Converter';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* <Navbar /> */}
      {/* 1. Header Hero avec Carousel & effet flouté */}
      <HeroCarousel />

      {/* 2. Section À propos / Présentation */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-congo-green text-sm font-bold uppercase tracking-wider">
            À propos de nous
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
            Votre partenaire de confiance pour le change de devises
          </h2>
          <div className="w-16 h-1 bg-congo-yellow mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
            Implanté au cœur de Brazzaville, notre bureau de change vous offre des transactions rapides, 
            sécurisées et sans frais cachés. Que ce soit pour vos voyages, vos affaires ou vos transferts d'argent, 
            nous garantissons des taux ultras compétitifs mis à jour en temps réel.
          </p>
          
          {/* Petites statistiques / Valeurs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-slate-100 pt-10">
            <div>
              <span className="block text-3xl font-extrabold text-congo-green">100%</span>
              <span className="text-sm text-slate-500 font-medium">Sécurisé & Conforme</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-congo-green">0 FCFA</span>
              <span className="text-sm text-slate-500 font-medium">Frais de commission cachés</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-congo-green">En Direct</span>
              <span className="text-sm text-slate-500 font-medium">Taux réactualisés au quotidien</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tableau des Taux de Change */}
      <RateTable />

      {/* 3. Présentation des Services (Cartes) */}
      <Services />

      {/* 5. Calculateur de Conversion */}
      {/* <Converter /> */}
      {/* <Footer /> */}
    </main>
  );
}