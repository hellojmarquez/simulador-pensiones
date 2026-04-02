'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi2';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿De dónde obtenemos la información para el simulador?",
      answer: "Utilizamos los supuestos y fórmulas del actual proyecto de ley. Además el valor de la UF se actualiza automáticamente a diario."
    },
    {
      question: "¿La simulación es completamente privada?",
      answer: "Sí. No guardamos ningún dato personal de tu simulación. Los cálculos se procesan en el navegador y los datos mueren al cerrar la pestaña."
    },
    {
      question: "¿Cómo se calcula el beneficio del seguro social del 3%?",
      answer: "Se aplica una lógica de solidaridad intrageneracional y ahorro colectivo proporcional a la renta, premiando la permanencia en el sistema."
    },
    {
      question: "¿Qué pasa con el tope imponible?",
      answer: "El simulador contempla automáticamente el tope imponible para sus cálculos, tal como establece la ley vigente."
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold uppercase text-xs tracking-widest">RESOLVIENDO DUDAS</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 tracking-tight">Preguntas frecuentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
               key={i} 
               className={`rounded-[32px] overflow-hidden border-2 transition-all duration-300 ${openIndex === i ? 'border-primary-500 bg-primary-50/10 shadow-lg shadow-primary-500/5' : 'border-slate-50 bg-[#FBFBFB] hover:border-slate-100'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold tracking-tight transition-colors ${openIndex === i ? 'text-primary-800' : 'text-slate-800 group-hover:text-primary-600'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === i ? 'bg-primary-500 text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                   {openIndex === i ? <HiOutlineMinus size={20} /> : <HiOutlinePlus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-slate-500 leading-relaxed text-base">
                       {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
