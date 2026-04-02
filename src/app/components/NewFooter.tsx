'use client';

import { useState } from 'react';
import Terms from './_modals/Terms';
import Politics from './_modals/Politics';
import Supuestos from './_modals/Supuestos';

export default function NewFooter() {
  const [terms, setTerms] = useState(false);
  const [politics, setPolitics] = useState(false);
  const [supuestos, setSupuestos] = useState(false);

  return (
    <footer className="w-full bg-slate-900 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Disclaimer */}
        <div className="bg-slate-800/50 rounded-2xl p-6 mb-10 border border-slate-700/50">
          <p className="text-slate-400 text-sm leading-relaxed text-center">
            <span className="text-slate-300 font-semibold">Disclaimer: </span>
            Los resultados de este simulador deben considerarse como una orientación de carácter
            informacional y bajo ninguna circunstancia debe considerarse como asesoría previsional.
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg mb-2">Simulador de pensiones</p>
            <p className="text-slate-400 text-sm">
              Simula tu pensión y toma decisiones informadas sobre tu futuro.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-1">
              Legal
            </p>
            <button
              onClick={() => setSupuestos(true)}
              className="text-slate-400 text-sm hover:text-primary-400 transition-colors duration-200"
            >
              Supuestos
            </button>
            <button
              onClick={() => setTerms(true)}
              className="text-slate-400 text-sm hover:text-primary-400 transition-colors duration-200"
            >
              Términos y condiciones
            </button>
            <button
              onClick={() => setPolitics(true)}
              className="text-slate-400 text-sm hover:text-primary-400 transition-colors duration-200"
            >
              Políticas de privacidad
            </button>
          </div>

          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              Hecho con{' '}
              <span className="text-red-400 animate-pulse-soft inline-block">❤️</span> por{' '}
              <a
                className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200"
                href="https://github.com/hellojmarquez"
                target="_blank"
                rel="noopener noreferrer"
              >
                @hellojmarquez
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-10 pt-6">
          <p className="text-center text-slate-500 text-xs">
            Simulador de Pensiones 2024 © — Todos los derechos reservados
          </p>
        </div>
      </div>

      <Terms isOpen={terms} onClose={() => setTerms(false)} />
      <Politics isOpen={politics} onClose={() => setPolitics(false)} />
      <Supuestos isOpen={supuestos} onClose={() => setSupuestos(false)} />
    </footer>
  );
}
