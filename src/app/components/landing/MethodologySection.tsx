'use client';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineVariable, HiOutlineShieldCheck } from 'react-icons/hi2';

const methods = [
  {
    title: 'Variables de Mercado',
    description: 'Nuestra herramienta utiliza datos actualizados de instituciones financieras y de seguridad social en Chile para calcular proyecciones basadas en escenarios reales.',
    icon: HiOutlineVariable,
    color: 'emerald',
  },
  {
    title: 'Modelado Neutro',
    description: 'Los cálculos se basan exclusivamente en las fórmulas matemáticas propuestas en el proyecto de ley vigente, sin interpretaciones políticas.',
    icon: HiOutlineLightBulb,
    color: 'rose',
  },
  {
    title: 'Transparencia de Datos',
    description: 'Nuestros algoritmos son abiertos y están diseñados para reflejar fielmente el impacto de las cotizaciones en tu futura pensión.',
    icon: HiOutlineShieldCheck,
    color: 'indigo',
  },
];

export default function MethodologySection() {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-full bg-slate-800/30 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full bg-emerald-500/5 rounded-full blur-3xl transform -rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Nuestra Metodología
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
              Simulaciones basadas en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                datos objetivos.
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              No somos un actor político. Somos una plataforma técnica diseñada para que cada ciudadano pueda visualizar, con sus propios números, las implicancias reales de la reforma.
            </p>

            <div className="space-y-8">
              {methods.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="flex gap-5"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-lg">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{m.title}</h4>
                      <p className="text-slate-500 text-sm">{m.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual Showcase (3D style Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative lg:block hidden"
          >
            <div className="relative z-20 bg-slate-800/80 backdrop-blur-xl p-8 rounded-[40px] border border-slate-700 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-all duration-700" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-700/50 pb-6">
                    <span className="text-emerald-400 font-mono text-xs tracking-tighter uppercase opacity-70">Simulation Algorithm v4.2.0</span>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="h-6 w-full bg-slate-700/30 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '65%' }}
                          transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
                          className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
                        />
                    </div>
                    <div className="h-6 w-full bg-slate-700/30 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '45%' }}
                          transition={{ delay: 0.7, duration: 1.5, ease: 'easeInOut' }}
                          className="h-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]" 
                        />
                    </div>
                    <div className="h-6 w-full bg-slate-700/30 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ delay: 0.9, duration: 1.5, ease: 'easeInOut' }}
                          className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]" 
                        />
                    </div>
                </div>

                <div className="pt-4 text-slate-400 text-xs font-mono leading-relaxed opacity-60">
                    {`>>> EXEC_MT_CALC.PROCESS(USER_DATA)`}<br />
                    {`>>> CALCULATING SOCIAL_SEC_BENEFIT...`}<br />
                    {`>>> DONE. DELTA: +$342,000 CLP`}<br />
                    {`>>> VALIDATING WITH CENTRAL BANK DATA...`}<br />
                    {`>>> METRIC: ACCURACY_99.87%`}
                </div>
              </div>
            </div>

            {/* Decorative orbits */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-slate-800 rounded-full animate-spin-slow opacity-20 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-emerald-500/10 rounded-full animate-reverse-spin opacity-40 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
