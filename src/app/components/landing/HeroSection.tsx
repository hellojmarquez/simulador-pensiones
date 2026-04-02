'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { HiSparkles } from 'react-icons/hi2';

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center py-20 px-6">
      {/* Background Massive Text - "SIMULA & DECIDE" */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden pb-20">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-massive font-black text-secondary leading-none text-center"
        >
          SIMULA
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="text-massive font-black text-secondary leading-none text-center"
        >
          & DECIDE
        </motion.h1>
      </div>

      {/* Floating Vertical Badges (Left Side) */}
      <div className="absolute left-4 md:left-20 top-1/4 space-y-12 hidden lg:block">
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="bg-primary-500 text-white rounded-2xl p-4 flex flex-col items-center gap-4 shadow-xl shadow-primary-500/20"
        >
          <span className="vertical-text font-bold tracking-widest text-sm py-2">LA REFORMA</span>
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="bg-rose-400 text-white rounded-2xl p-4 flex flex-col items-center gap-4 shadow-xl shadow-rose-500/20"
        >
          <span className="vertical-text font-bold tracking-widest text-sm py-2">TU FUTURO</span>
          <HiSparkles size={18} className="opacity-80" />
        </motion.div>
      </div>

      {/* Stats Badges (Right Side) */}
      <div className="absolute right-10 md:right-24 top-1/3 space-y-8 hidden xl:block text-right">
        <div>
          <p className="text-primary-500 text-stats uppercase">95% de confianza</p>
          <h4 className="text-2xl font-bold text-slate-800">Cálculos precisos</h4>
        </div>
        <div>
          <p className="text-rose-500 text-stats uppercase">100% privado</p>
          <h4 className="text-2xl font-bold text-slate-800">Tus datos seguros</h4>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl w-full text-center">
        {/* The "3D Figure" Replacement: A Composed Dashboard Preview */}
        <div className="relative mx-auto w-full max-w-[500px] aspect-square flex items-center justify-center mb-[-40px]">
          {/* Main Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-card p-6 w-[280px] md:w-[360px] animate-float-slow relative z-10"
          >
             <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">📊</div>
                <div className="h-2 w-20 bg-slate-100 rounded-full" />
             </div>
             <div className="space-y-4">
               <div className="h-6 w-full bg-emerald-50 rounded-lg border border-emerald-100" />
               <div className="h-40 w-full flex items-end gap-2 px-2 pb-2 border-b border-slate-100">
                  <div className="flex-1 bg-primary-400 rounded-t-lg h-[60%]" />
                  <div className="flex-1 bg-accent-400 rounded-t-lg h-[90%]" />
                  <div className="flex-1 bg-primary-200 rounded-t-lg h-[40%]" />
               </div>
             </div>
             <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent-500 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-accent-500/30 rotate-12">
                <span className="text-2xl font-black">+%</span>
             </div>
          </motion.div>

          {/* Background Decorative Graphic */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="absolute inset-0 flex items-center justify-center"
          >
             <div className="w-[80%] h-[80%] border-2 border-dashed border-slate-200 rounded-full animate-spin-slow opacity-60" />
             <div className="absolute top-0 right-0 text-slate-100 text-[180px] font-black -rotate-12 select-none pointer-events-none">
               TU
             </div>
          </motion.div>
        </div>

        {/* Hero Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Compara tu pensión <br className="hidden md:block" />
            <span className="text-stroke text-primary-500 text-6xl md:text-7xl">en 60 segundos</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Descubre cómo te afecta la reforma de pensiones real. Sin sesgos, solo datos y cálculos precisos.
          </p>
          <button 
             onClick={() => router.push('/simulacion')}
             className="bg-primary-500 text-white font-black text-xl px-12 py-5 rounded-2xl 
                        hover:bg-primary-600 transition-all duration-300 shadow-2xl shadow-primary-500/40 
                        active:scale-95 group relative overflow-hidden"
          >
            <span className="relative z-10">Comenzar ahora</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 slant" />
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .slant {
          clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
