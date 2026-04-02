'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-card border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => router.push('/')}
          className="transition-transform duration-200 hover:scale-105"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-md shadow-primary-500/20">
              <span className="text-white font-bold text-lg leading-none">S</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-800">
              Simulador<span className="text-primary-500 font-black">.</span>
            </span>
          </div>
        </button>

        <button
          onClick={() => router.push('/simulacion')}
          className="btn-primary text-sm px-6 py-2.5"
        >
          ¡Simula tu pensión!
        </button>
      </div>
    </nav>
  );
}
