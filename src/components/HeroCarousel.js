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
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Overlay Vert Flouté */}
          <div className="absolute inset-0 bg-congo-greenDark/60 backdrop-blur-md flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light">
              {slide.desc}
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#taux"
                className="bg-congo-green hover:bg-congo-greenDark text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
              >
                Voir les taux du jour
              </a>
              <a
                href="#convertisseur"
                className="bg-congo-yellow text-slate-900 font-semibold px-6 py-3 rounded-xl shadow-lg transition"
              >
                Convertir
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}