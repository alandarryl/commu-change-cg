'use client';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/hero1.jpg',
    title: 'Transparence & Rapidité',
    desc: 'Bénéficiez des meilleurs taux d’échange de devises en toute confiance.',
  },
  {
    image: '/images/hero2.jpg',
    title: 'Proximité & Sécurité',
    desc: 'Votre partenaire financier de confiance à Brazzaville et dans toute la région.',
  },
  {
    image: '/images/hero3.jpg',
    title: 'Service Client Exceptionnel',
    desc: 'Notre équipe est là pour vous accompagner dans tous vos échanges de devises.',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-slate-900 group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Overlay léger avec dégradé sombre et flou très léger (2px) */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/30 backdrop-blur-[2px] flex flex-col justify-center items-center text-center p-6">
            
            {/* Tag / Badge discret */}
            <span className="bg-congo-green/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
              Bureau de change agréé
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg max-w-4xl">
              {slide.title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-100 max-w-2xl font-normal drop-shadow">
              {slide.desc}
            </p>

            {/* Boutons aux couleurs distinctes */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
              <a
                href="#taux"
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-3.5 rounded-xl shadow-xl transition transform hover:-translate-y-0.5"
              >
                Voir les taux du jour
              </a>
              <a
                href="#convertisseur"
                className="bg-congo-yellow hover:bg-yellow-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-xl transition transform hover:-translate-y-0.5"
              >
                Convertir
              </a>
            </div>

          </div>
        </div>
      ))}

      {/* Flèches de navigation (Visibles au survol du carrousel) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition opacity-0 group-hover:opacity-100"
        aria-label="Slide précédente"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition opacity-0 group-hover:opacity-100"
        aria-label="Slide suivante"
      >
        ❯
      </button>

      {/* Indicateurs (Pills) en bas */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? 'w-8 bg-congo-yellow' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Aller à la slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}