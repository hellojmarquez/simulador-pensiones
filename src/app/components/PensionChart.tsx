'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsTrophyFill, BsGraphUpArrow, BsShieldCheck } from 'react-icons/bs';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import Social from './Social';
import Loader from './Loader';
import Calculos from './_modals/Calculos';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type PensionChartProps = {
  nombre: string;
  edad: number;
  sexo: string;
  email: string;
  rentaImponible: number;
  anosCotizados: number;
  anosRestantes: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setEdad: React.Dispatch<React.SetStateAction<number>>;
  setSexo: React.Dispatch<React.SetStateAction<string>>;
  setAnosCotizados: React.Dispatch<React.SetStateAction<number>>;
  setAnosRestantes: React.Dispatch<React.SetStateAction<number>>;
  handleChangeRentaImponible: (newValue: string | undefined) => void;
  calculate: boolean;
  setCalculate: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PensionChart({
  nombre,
  edad,
  sexo,
  email,
  rentaImponible,
  anosCotizados,
  anosRestantes,
  setStep,
  setEdad,
  setSexo,
  setAnosCotizados,
  setAnosRestantes,
  handleChangeRentaImponible,
  calculate,
  setCalculate,
  isLoading,
  setIsLoading,
}: PensionChartProps) {
  const barChartRef = useRef(null);
  const [CalcExplanation, setCalcExplanation] = useState(false);
  const [beneficioCI, setBeneficioCI] = useState(0);
  const [beneficioSsp, setBeneficioSsp] = useState(0);
  const [valorUF, setValorUF] = useState(0);
  const [showModify, setShowModify] = useState(false);

  // Auto-recalculate when data changes (with a small delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCalculate(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [edad, sexo, rentaImponible, anosCotizados, anosRestantes]);

  const handleExplanation = () => {
    setCalcExplanation(false);
  };

  const resultBtn = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          edad,
          rentaImponible,
          anosCotizados,
          anosRestantes,
          sexo,
        }),
      });

      if (!response.ok) throw new Error('Calculation failed');

      const calcData = await response.json();
      
      setBeneficioCI(calcData.beneficioCI);
      setBeneficioSsp(calcData.beneficioSsp);
      if (calcData.valorUF) setValorUF(calcData.valorUF);

      console.log('[Simulation results calculated on backend]');
    } catch (error) {
      console.error('Error calculating results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (calculate) {
      resultBtn();
      setCalculate(false);
    }
  }, [calculate]);

  const formatCLP = (value: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const ciWins = beneficioCI >= beneficioSsp;

  const data = {
    labels: ['Capitalización Individual', 'Seguro Social'],
    datasets: [
      {
        label: 'Monto de Pensión',
        data: [beneficioCI, beneficioSsp],
        backgroundColor: ['#10B981', '#F97316'],
        borderRadius: 12,
        borderSkipped: false,
        barThickness: 40,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        padding: 12,
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 14 },
        callbacks: {
          label: (context) => `Estimación: ${formatCLP(context.raw as number)}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => formatCLP(value as number),
          font: { size: 11 },
          color: '#64748b',
        },
        grid: { color: '#f1f5f9' },
      },
      x: {
        ticks: { font: { size: 12, weight: 600 as const }, color: '#475569' },
        grid: { display: false },
      },
    },
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-4 mt-4 mb-20 animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Tus resultados, {nombre}
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Esta es la comparación de tu pensión estimada bajo ambos sistemas.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* Capitalización Individual */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`card overflow-hidden ${ciWins ? 'ring-2 ring-primary-500/30' : ''}`}
              >
                <div className="h-1.5 bg-gradient-to-r from-primary-400 to-primary-600" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center">
                        <BsGraphUpArrow className="text-primary-500" size={16} />
                      </div>
                      <span className="text-sm font-semibold text-slate-500">Cap. Individual</span>
                    </div>
                    {ciWins && (
                      <span className="text-xs font-bold bg-primary-50 text-primary-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <BsTrophyFill size={10} /> Mayor
                      </span>
                    )}
                  </div>
                  <p className="text-3xl font-bold text-slate-900">{formatCLP(beneficioCI)}</p>
                  <p className="text-xs text-slate-400 mt-1">Beneficio mensual estimado</p>
                </div>
              </motion.div>

              {/* Seguro Social */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={`card overflow-hidden ${!ciWins ? 'ring-2 ring-accent-500/30' : ''}`}
              >
                <div className="h-1.5 bg-gradient-to-r from-accent-400 to-accent-600" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center">
                        <BsShieldCheck className="text-accent-500" size={16} />
                      </div>
                      <span className="text-sm font-semibold text-slate-500">Seguro Social</span>
                    </div>
                    {!ciWins && (
                      <span className="text-xs font-bold bg-accent-50 text-accent-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <BsTrophyFill size={10} /> Mayor
                      </span>
                    )}
                  </div>
                  <p className="text-3xl font-bold text-slate-900">{formatCLP(beneficioSsp)}</p>
                  <p className="text-xs text-slate-400 mt-1">Beneficio mensual estimado</p>
                </div>
              </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            {/* Left Column: Quick Modify */}
            <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
              <button
                onClick={() => setShowModify(!showModify)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95 ${
                  showModify
                    ? 'bg-primary-500 text-white shadow-xl shadow-primary-500/20'
                    : 'bg-white text-slate-600 border-2 border-slate-100 hover:border-primary-200 hover:bg-primary-50/10 shadow-sm'
                }`}
              >
                <span>{showModify ? 'Ocultar ajustes' : 'Ajustar mis datos'}</span>
                <span className={`transition-transform duration-300 ${showModify ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {showModify && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="card p-6 border-primary-100 bg-white"
                >
                  <div className="space-y-8">
                    {/* Edad */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-600">Edad actual</label>
                        <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">
                          {edad} años
                        </span>
                      </div>
                      <input
                        type="range"
                        min="18"
                        max="65"
                        value={edad}
                        onChange={(e) => setEdad(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>

                    {/* Sexo */}
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-600 block">Género</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSexo('M')}
                          className={`flex-1 py-2.5 rounded-xl border-2 font-bold transition-all text-sm ${
                            sexo === 'M'
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-slate-100 text-slate-400 hover:border-slate-200'
                          }`}
                        >
                          Masc.
                        </button>
                        <button
                          onClick={() => setSexo('F')}
                          className={`flex-1 py-2.5 rounded-xl border-2 font-bold transition-all text-sm ${
                            sexo === 'F'
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-slate-100 text-slate-400 hover:border-slate-200'
                          }`}
                        >
                          Fem.
                        </button>
                      </div>
                    </div>

                    {/* Renta */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-600">Renta imponible</label>
                        <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">
                          {formatCLP(rentaImponible)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5000000"
                        step="50000"
                        value={rentaImponible}
                        onChange={(e) => handleChangeRentaImponible(e.target.value)}
                        className="w-full"
                      />
                    </div>

                    {/* Años Cotizados */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-600">Años cotizados</label>
                        <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">
                          {anosCotizados} años
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="45"
                        value={anosCotizados}
                        onChange={(e) => setAnosCotizados(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>

                    {/* Años Restantes */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-slate-600">Años por cotizar</label>
                        <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">
                          {anosRestantes} años
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="45"
                        value={anosRestantes}
                        onChange={(e) => setAnosRestantes(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column: Explanation then Chart */}
            <div className="lg:col-span-8 space-y-6 order-1 lg:order-2">
              {/* Explanation Box (Moved up) */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm animate-fade-in-up">
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  Si un 3% de cotización extra se destina a tu{' '}
                  <span className="text-primary-600 font-bold underline decoration-primary-200 decoration-2 underline-offset-4">
                    Capitalización Individual
                  </span>
                  , recibirás un beneficio de {formatCLP(beneficioCI)}. En cambio, si destinas el
                  mismo 3% al{' '}
                  <span className="text-accent-600 font-bold underline decoration-accent-200 decoration-2 underline-offset-4">
                    Seguro Social
                  </span>
                  , recibirás {formatCLP(beneficioSsp)}.
                </p>
              </div>

              {/* Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="card p-6"
              >
                <h4 className="text-base font-bold text-slate-900 mb-4 text-center md:text-left">Comparación visual</h4>
                <div ref={barChartRef} className="w-full h-[380px]">
                  <Bar data={data} options={options} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Share Section (Outside the Grid & Centered) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center w-full mt-6"
          >
            <div className="w-full max-w-sm">
              <Social bnsp={beneficioSsp} bci={beneficioCI} />
            </div>
          </motion.div>

          {/* Bottom Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 pt-10 border-t border-slate-100 text-center"
          >
            <p className="text-slate-500 text-sm mb-6">¿Qué te parece la reforma? Queremos saber tu opinión.</p>
            <button
              onClick={() => setStep(3)}
              className="w-full md:w-auto bg-slate-900 text-white font-bold px-16 py-4 rounded-2xl hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/10 active:scale-95"
            >
              ¡Danos tu opinión! →
            </button>
          </motion.div>
        </div>
      </div>

      {CalcExplanation && <Calculos isOpen={CalcExplanation} onClose={handleExplanation} />}
    </>
  );
}
