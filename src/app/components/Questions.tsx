import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperNextButtons from './SwiperNextButton';
import SwiperBackButtons from './SipeBackButton';
import CurrencyInput from 'react-currency-input-field';
import { BsPersonFill, BsCalendar3, BsPerson, BsCurrencyDollar, BsBriefcase, BsHourglass, BsEnvelope } from 'react-icons/bs';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': any;
      'swiper-slide': any;
    }
  }
}

interface QuestionsProps {
  nombre: string;
  edad: number;
  sexo: string;
  email: string;
  rentaImponible: number;
  anosCotizados: number;
  anosRestantes: number;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setEdad: React.Dispatch<React.SetStateAction<number>>;
  setSexo: React.Dispatch<React.SetStateAction<string>>;
  setRentaImponible: React.Dispatch<React.SetStateAction<number>>;
  setAnosCotizados: React.Dispatch<React.SetStateAction<number>>;
  setAnosRestantes: React.Dispatch<React.SetStateAction<number>>;
  handleChangeRentaImponible: (newValue: string | undefined) => void;
  setCalculate: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Questions: React.FC<QuestionsProps> = ({
  nombre,
  edad,
  sexo,
  email,
  anosCotizados,
  anosRestantes,
  rentaImponible,
  setNombre,
  setEmail,
  setStep,
  setEdad,
  setSexo,
  setAnosCotizados,
  setAnosRestantes,
  handleChangeRentaImponible,
  setCalculate,
  setIsLoading,
}) => {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const totalSlides = 8;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-4 mb-32">
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-primary-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((index + 1) / totalSlides) * 100}%` }}
        />
      </div>

      <div className="card p-6 md:p-10 relative min-h-[320px]">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={1}
          navigation={false}
          onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
          className="w-full h-full"
          allowTouchMove={false}
        >
          {/* Slide 0: Intro */}
          <SwiperSlide>
            <div className="flex flex-col gap-6 justify-center items-center py-6">
              <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center">
                <BsPersonFill className="text-primary-500" size={36} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
                Una pequeña guía
              </h2>
              <p className="text-slate-500 text-center text-base md:text-lg leading-relaxed max-w-md">
                Te haremos algunas preguntas para obtener tu perfil, y luego te entregaremos una
                comparación para que entiendas el impacto de la reforma en tu pensión.
              </p>
              <button
                className="btn-primary text-lg px-10 py-3.5"
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.swiper.slideNext();
                  }
                }}
              >
                Comenzar
              </button>
              <p className="text-sm text-slate-400 flex items-center gap-1.5">
                🕐 1 min aprox
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 1: Nombre */}
          <SwiperSlide>
            <div className="w-full flex flex-col gap-6 justify-center items-center py-8">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center">
                <BsPersonFill className="text-primary-500" size={24} />
              </div>
              <p className="text-xl font-semibold text-slate-900 text-center">
                ¿Cuál es tu nombre?
              </p>
              <input
                type="text"
                placeholder="Tu nombre"
                className="input-field max-w-xs text-center"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
          </SwiperSlide>

          {/* Slide 2: Edad */}
          <SwiperSlide>
            <div className="w-full flex flex-col gap-6 justify-center items-center py-8">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center">
                <BsCalendar3 className="text-primary-500" size={24} />
              </div>
              <p className="text-xl font-semibold text-slate-900 text-center">
                ¿Cuántos años tienes?
              </p>
              <input
                type="number"
                placeholder="Edad"
                className="input-field max-w-[120px] text-center"
                value={edad || ''}
                onChange={(e) => setEdad(Number(e.target.value))}
              />
            </div>
          </SwiperSlide>

          {/* Slide 3: Género */}
          <SwiperSlide>
            <div className="w-full flex flex-col gap-6 justify-center items-center py-8">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center">
                <BsPerson className="text-primary-500" size={24} />
              </div>
              <p className="text-xl font-semibold text-slate-900 text-center">
                ¿Cuál es tu género?
              </p>
              <div className="flex gap-3">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="sexo"
                    value="M"
                    checked={sexo === 'M'}
                    onChange={() => setSexo('M')}
                    className="peer sr-only"
                  />
                  <div className="px-8 py-3 rounded-full border-2 border-slate-200 font-semibold text-slate-600 peer-checked:border-primary-500 peer-checked:bg-primary-50 peer-checked:text-primary-700 transition-all duration-200 hover:border-slate-300">
                    Masculino
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="sexo"
                    value="F"
                    checked={sexo === 'F'}
                    onChange={() => setSexo('F')}
                    className="peer sr-only"
                  />
                  <div className="px-8 py-3 rounded-full border-2 border-slate-200 font-semibold text-slate-600 peer-checked:border-primary-500 peer-checked:bg-primary-50 peer-checked:text-primary-700 transition-all duration-200 hover:border-slate-300">
                    Femenino
                  </div>
                </label>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4: Renta Imponible */}
          <SwiperSlide>
            <div className="w-full flex flex-col gap-6 justify-center items-center py-8">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center">
                <BsCurrencyDollar className="text-primary-500" size={24} />
              </div>
              <p className="text-xl font-semibold text-slate-900 text-center">
                ¿Cuál es tu renta imponible actual?
              </p>
              <CurrencyInput
                intlConfig={{ locale: 'es-CL', currency: 'CLP' }}
                allowDecimals
                decimalSeparator=","
                id="input-currency-field"
                name="input-currency-field-name"
                prefix="$"
                value={rentaImponible}
                onValueChange={handleChangeRentaImponible}
                step={1}
                className="input-field max-w-xs text-center"
              />
            </div>
          </SwiperSlide>

          {/* Slide 5: Años cotizados */}
          <SwiperSlide>
            <div className="w-full flex flex-col gap-6 justify-center items-center py-8">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center">
                <BsBriefcase className="text-primary-500" size={24} />
              </div>
              <p className="text-xl font-semibold text-slate-900 text-center">
                ¿Cuántos años has cotizado hasta la actualidad?
              </p>
              <input
                type="number"
                placeholder="Años"
                className="input-field max-w-[120px] text-center"
                value={anosCotizados || ''}
                onChange={(e) => setAnosCotizados(Number(e.target.value))}
              />
            </div>
          </SwiperSlide>

          {/* Slide 6: Años restantes */}
          <SwiperSlide>
            <div className="w-full flex flex-col gap-6 justify-center items-center py-8">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center">
                <BsHourglass className="text-primary-500" size={24} />
              </div>
              <p className="text-xl font-semibold text-slate-900 text-center">
                ¿Cuántos años esperas cotizar desde hoy hasta jubilar?
              </p>
              <input
                type="number"
                placeholder="Años"
                className="input-field max-w-[120px] text-center"
                value={anosRestantes || ''}
                onChange={(e) => setAnosRestantes(Number(e.target.value))}
              />
            </div>
          </SwiperSlide>

          {/* Slide 7: Email (optional) */}
          <SwiperSlide>
            <div className="w-full flex flex-col gap-6 justify-center items-center py-8">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center">
                <BsEnvelope className="text-primary-500" size={24} />
              </div>
              <p className="text-xl font-semibold text-slate-900 text-center">
                ¿Deseas que te enviemos tus resultados por email?
              </p>
              <p className="text-sm text-slate-400 -mt-3">(opcional)</p>
              <input
                type="email"
                placeholder="tu@email.com"
                className="input-field max-w-xs text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </SwiperSlide>

          <SwiperBackButtons index={index} />
          <SwiperNextButtons
            index={index}
            nombre={nombre}
            edad={edad}
            sexo={sexo}
            email={email}
            anosCotizados={anosCotizados}
            anosRestantes={anosRestantes}
            rentaImponible={rentaImponible}
            setStep={setStep}
            setCalculate={setCalculate}
            setIsLoading={setIsLoading}
          />
        </Swiper>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-6">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? 'w-6 bg-primary-500'
                : i < index
                ? 'w-1.5 bg-primary-300'
                : 'w-1.5 bg-slate-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
