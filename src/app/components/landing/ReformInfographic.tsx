'use client';
import { motion } from 'framer-motion';

export default function ReformInfographic() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden relative border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Entiende la reforma <span className="text-primary-500">en 1 minuto</span></h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">El debate se centra en una cotización extra del 6%. Así es como se plantea su distribución.</p>
          <div className="absolute top-0 right-10 text-[100px] text-slate-50 opacity-20 font-black pointer-events-none select-none select-none">REFORMA</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:px-10">
          {/* 3% Individual Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative bg-[#FBFBFB] border-2 border-slate-50 rounded-[40px] p-8 md:p-12 hover:border-primary-500/20 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-primary-500 rounded-3xl mb-8 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 group-hover:rotate-6 transition-transform">
              <span className="text-4xl font-black">3%</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Tu ahorro individual</h3>
            <p className="text-slate-500 leading-relaxed text-base">Este porcentaje va directamente a tu cuenta de ahorro. Se capitaliza con la rentabilidad de los fondos y es propiedad tuya en un 100%.</p>
            
            {/* Visual Indicator of growth */}
            <div className="mt-8 flex items-end gap-1 overflow-hidden h-24">
              {[20, 35, 45, 60, 80, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-primary-500/20 rounded-t-lg group-hover:bg-primary-500/40 transition-colors" style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>

          {/* 3% Shared Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative bg-[#FBFBFB] border-2 border-slate-50 rounded-[40px] p-8 md:p-12 hover:border-secondary-500/20 transition-all duration-300"
          >
            <div className="w-20 h-20 bg-slate-900 rounded-3xl mb-8 flex items-center justify-center text-white shadow-lg shadow-slate-900/20 group-hover:rotate-6 transition-transform">
              <span className="text-4xl font-black text-rose-400">3%</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Seguro Social compartido</h3>
            <p className="text-slate-500 leading-relaxed text-base">Este porcentaje se destina a un fondo común solidario. Su objetivo es mejorar las pensiones actuales de los jubilados y nivelar brechas.</p>
            
            {/* Visual Indicator of distribution */}
            <div className="mt-8 flex items-center justify-center gap-4 py-6">
              <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-rose-400 animate-spin-slow" />
              <div className="h-2 flex-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-rose-400 group-hover:w-full transition-all duration-1000" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 card p-10 bg-slate-900 text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
             <div className="md:col-span-2">
               <h3 className="text-2xl font-bold mb-4">¿Por qué es importante simular?</h3>
               <p className="text-slate-400">Cada persona tiene una historia laboral distinta. Dependiendo de tu edad, renta y años de cotización, una propuesta puede beneficiarte más que la otra. Obtén claridad instantánea con nuestro motor de cálculo.</p>
             </div>
             <div className="text-center md:text-right">
                <button className="bg-primary-500 text-white font-bold px-10 py-4 rounded-2xl hover:bg-primary-400 transition-colors">
                  Ver mi proyección
                </button>
             </div>
          </div>
          {/* background details */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
