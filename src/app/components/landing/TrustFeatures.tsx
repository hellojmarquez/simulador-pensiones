'use client';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiShieldCheck, HiOutlineSparkles, HiOutlineCubeTransparent } from 'react-icons/hi2';

export default function TrustFeatures() {
  const features = [
    {
      title: 'Información neutral',
      description: 'El simulador utiliza fórmulas públicas del proyecto de ley, asegurando resultados objetivos y sin sesgos políticos.',
      icon: <HiOutlineCubeTransparent className="text-primary-500" size={32} />,
      color: 'bg-emerald-50'
    },
    {
      title: 'Tus datos son tuyos',
      description: 'No guardamos tus datos personales en ninguna base de datos externa. Tus simulaciones son privadas y se procesan localmente.',
      icon: <HiShieldCheck className="text-rose-500" size={32} />,
      color: 'bg-rose-50'
    },
    {
      title: 'Simulación instantánea',
      description: 'Obtén tus resultados en segundos. Solo necesitas datos básicos como tu edad y renta imponible.',
      icon: <HiOutlineSparkles className="text-amber-500" size={32} />,
      color: 'bg-amber-50'
    },
    {
      title: 'Educación previsional',
      description: 'Nuestro objetivo es que entiendas el impacto real de las reformas para que puedas formar tu propia opinión informada.',
      icon: <HiOutlineLightBulb className="text-blue-500" size={32} />,
      color: 'bg-blue-50'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FDFDFD] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-lg">
             <span className="text-primary-600 font-bold tracking-widest text-xs uppercase mb-2 block">EL PODER DE LA INFORMACIÓN</span>
             <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Por qué confiar en Simulador de Pensiones</h2>
          </div>
          <p className="text-slate-500 max-w-sm mb-2 leading-relaxed">
            Hemos construido una herramienta transparente y segura para que el debate previsional sea de todos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[40px] bg-white border border-slate-100 hover:border-slate-200 hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                 {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
