'use client';
import { useState, useRef } from 'react';

import { RiInformation2Line } from 'react-icons/ri';
import { BsEmojiFrown, BsEmojiNeutral, BsEmojiLaughing } from 'react-icons/bs';

import BonoNacer from './_modals/BonoNacer';
import BonoAutPrestamo from './_modals/BonoAutPrestamo';
import BonoLongevidad from './_modals/BonoLongevidad';
import HipotecaInversa from './_modals/HipotecaInversa';
import Consumo from './_modals/Consumo';

type LikeOps = 1 | 2 | 3 | null;

const proposals = [
  { key: 'bonoNacer', label: 'Bono al nacer', modalKey: 'bonoNacerModal' },
  { key: 'autoPrestamo', label: 'Auto préstamo', modalKey: 'bonoAutPrestamoModal' },
  { key: 'seguroLongevidad', label: 'Seguro de longevidad', modalKey: 'bonoLongevidadModal' },
  { key: 'hipotecaInversa', label: 'Hipoteca inversa', modalKey: 'hipotecaInversaModal' },
  { key: 'cotizacionConsumo', label: 'Cotización por consumo', modalKey: 'consumoModal' },
];

const Opinion = ({ setStep }: { setStep: (step: number) => void }) => {
  const [selectedLike, setSelectedLike] = useState<LikeOps | null>(null);
  const [bonoNacer, setBonoNacer] = useState('No');
  const [autoPrestamo, setAutoPrestamo] = useState('No');
  const [seguroLongevidad, setSeguroLongevidad] = useState('No');
  const [hipotecaInversa, setHipotecaInversa] = useState('No');
  const [cotizacionConsumo, setCotizacionConsumo] = useState('No');
  const [otra, setOtra] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [bonoNacerModal, setBonoNacerModal] = useState(false);
  const [bonoAutPrestamoModal, setBonoAutPrestamoModal] = useState(false);
  const [bonoLongevidadModal, setBonoLongevidadModal] = useState(false);
  const [hipotecaInversaModal, sethipotecaInversaModal] = useState(false);
  const [consumoModal, setConsumoModal] = useState(false);

  const toggleSetters: Record<string, (val: string) => void> = {
    bonoNacer: setBonoNacer,
    autoPrestamo: setAutoPrestamo,
    seguroLongevidad: setSeguroLongevidad,
    hipotecaInversa: setHipotecaInversa,
    cotizacionConsumo: setCotizacionConsumo,
  };

  const toggleValues: Record<string, string> = {
    bonoNacer,
    autoPrestamo,
    seguroLongevidad,
    hipotecaInversa,
    cotizacionConsumo,
  };

  const modalOpeners: Record<string, () => void> = {
    bonoNacerModal: () => setBonoNacerModal(true),
    bonoAutPrestamoModal: () => setBonoAutPrestamoModal(true),
    bonoLongevidadModal: () => setBonoLongevidadModal(true),
    hipotecaInversaModal: () => sethipotecaInversaModal(true),
    consumoModal: () => setConsumoModal(true),
  };

  const handleSelect = (id: LikeOps) => {
    setSelectedLike(id);
  };

  const handleEnviar = async () => {
    setFormLoading(true);
    
    const data = {
      bonoNacer,
      autoPrestamo,
      seguroLongevidad,
      hipotecaInversa,
      cotizacionConsumo,
      otra,
      impresion: selectedLike === 1 ? 'MALA' : selectedLike === 2 ? 'REGULAR' : 'BUENA',
    };
    
    console.log('[Opinion submitted]', data);
    setShowSuccess(true);
    setFormLoading(false);
  };

  const emojiOptions = [
    { id: 1 as LikeOps, icon: BsEmojiFrown, label: 'Mala', color: 'red' },
    { id: 2 as LikeOps, icon: BsEmojiNeutral, label: 'Regular', color: 'amber' },
    { id: 3 as LikeOps, icon: BsEmojiLaughing, label: 'Buena', color: 'green' },
  ];

  if (showSuccess) {
    return (
      <div className="w-full max-w-lg mx-auto px-6 py-20 text-center animate-fade-in">
        <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg shadow-primary-500/10">
          🎉
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">¡Muchas gracias!</h2>
        <p className="text-slate-500 mb-10 text-lg">Tu opinión es fundamental para entender qué espera la ciudadanía de estas reformas.</p>
        <div className="space-y-4">
           <button 
             onClick={() => window.location.href = '/'}
             className="w-full btn-primary py-4 text-lg"
           >
             Volver al inicio
           </button>
           <button 
             onClick={() => setShowSuccess(false)}
             className="w-full text-slate-400 font-bold hover:text-slate-600 text-sm transition-colors"
           >
             Editar mi opinión
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-4 mb-20 animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Tu opinión cuenta</h2>
        <p className="text-slate-500 mt-2">Ayúdanos a enriquecer el debate con tu punto de vista.</p>
      </div>

      {/* Rating Card */}
      <div className="card p-6 md:p-8 mb-6 border-slate-100 shadow-xl shadow-slate-900/5">
        <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center">
           ¿Qué te pareció esta herramienta?
        </h2>
        <div className="flex items-center justify-center gap-4 md:gap-6">
          {emojiOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedLike === opt.id;
            const colorMap: Record<string, string> = {
              red: isSelected
                ? 'border-rose-400 bg-rose-50 shadow-lg shadow-rose-100'
                : 'border-slate-100 hover:border-rose-200 hover:bg-rose-50/50',
              amber: isSelected
                ? 'border-amber-400 bg-amber-50 shadow-lg shadow-amber-100'
                : 'border-slate-100 hover:border-amber-200 hover:bg-amber-50/50',
              green: isSelected
                ? 'border-primary-400 bg-primary-50 shadow-lg shadow-primary-100'
                : 'border-slate-100 hover:border-primary-200 hover:bg-primary-50/50',
            };
            const iconColorMap: Record<string, string> = {
              red: 'text-rose-500',
              amber: 'text-amber-500',
              green: 'text-primary-500',
            };

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`flex-1 flex flex-col items-center gap-3 p-5 rounded-3xl border-2 transition-all duration-300 ${colorMap[opt.color]} ${isSelected ? 'scale-105' : 'hover:translate-y-[-4px]'}`}
              >
                <div className={`${iconColorMap[opt.color]} transition-transform duration-300 ${isSelected ? 'scale-125' : ''}`}>
                  <Icon size={44} />
                </div>
                <span className={`text-sm font-bold ${isSelected ? iconColorMap[opt.color] : 'text-slate-400'}`}>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Proposals Card */}
      <div className="card p-6 md:p-8 mb-6 border-slate-100 shadow-xl shadow-slate-900/5">
        <h3 className="text-lg font-bold text-slate-900 mb-6">
          ¿Qué otras propuestas te gustaría simular?
        </h3>

        <div className="space-y-4">
          {proposals.map((p) => (
            <div
              key={p.key}
              className="flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-50 hover:border-slate-100 hover:bg-slate-50 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={modalOpeners[p.modalKey]}
                  className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"
                >
                  <RiInformation2Line size={20} />
                </button>
                <span
                  onClick={modalOpeners[p.modalKey]}
                  className="text-base text-slate-700 font-bold cursor-pointer hover:text-primary-600 transition-colors"
                >
                  {p.label}
                </span>
              </div>

              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={toggleValues[p.key] === 'Si'}
                  onChange={(e) =>
                    toggleSetters[p.key](e.target.checked ? 'Si' : 'No')
                  }
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          ))}
        </div>

        {/* Otra */}
        <div className="mt-8">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">¿ALGUNA OTRA PROPUESTA?</label>
          <input
            type="text"
            placeholder="Ej: Aumentar edad de jubilación..."
            onChange={(e) => setOtra(e.target.value)}
            className="input-field py-4 text-base bg-slate-50 border-transparent focus:bg-white"
          />
        </div>
      </div>

      {/* Submit & Back */}
      <div className="flex flex-col items-center gap-6 mt-10">
        <button
          onClick={handleEnviar}
          className={`w-full py-5 text-lg font-black tracking-tight ${
            formLoading ? 'bg-slate-200 cursor-not-allowed text-slate-400' : 'btn-primary'
          }`}
          disabled={formLoading}
        >
          {formLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              Enviando opinión...
            </div>
          ) : (
            'Enviar opinión →'
          )}
        </button>

        <button 
           onClick={() => setStep(2)}
           className="text-slate-400 font-bold hover:text-primary-500 text-sm flex items-center gap-2 transition-colors group"
        >
           <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver a ver mis resultados
        </button>
      </div>

      {bonoNacerModal && <BonoNacer isOpen={bonoNacerModal} onClose={() => setBonoNacerModal(false)} />}
      {bonoAutPrestamoModal && (
        <BonoAutPrestamo isOpen={bonoAutPrestamoModal} onClose={() => setBonoAutPrestamoModal(false)} />
      )}
      {bonoLongevidadModal && (
        <BonoLongevidad isOpen={bonoLongevidadModal} onClose={() => setBonoLongevidadModal(false)} />
      )}
      {hipotecaInversaModal && (
        <HipotecaInversa isOpen={hipotecaInversaModal} onClose={() => sethipotecaInversaModal(false)} />
      )}
      {consumoModal && <Consumo isOpen={consumoModal} onClose={() => setConsumoModal(false)} />}
    </div>
  );
};

export default Opinion;
