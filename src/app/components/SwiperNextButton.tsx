/* eslint-disable react/prop-types */
import { useSwiper } from 'swiper/react';
import { RiArrowRightSLine } from 'react-icons/ri';

interface SwiperNextButtonsProps {
  index: number;
  nombre: string;
  edad: number;
  sexo: string;
  email: string;
  anosCotizados: number;
  anosRestantes: number;
  rentaImponible: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCalculate: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwiperNextButtons: React.FC<SwiperNextButtonsProps> = ({
  index,
  nombre,
  edad,
  sexo,
  email,
  anosCotizados,
  anosRestantes,
  rentaImponible,
  setStep,
  setCalculate,
  setIsLoading,
}) => {
  const swipe = useSwiper();

  const handleNext = () => {
    setIsLoading(true);

    const dataSimulation = {
      nombre,
      edad,
      sexo,
      email,
      rentaImponible,
      anosCotizados,
      anosRestantes,
    };

    console.log('[Simulation data finished]', dataSimulation);
    setCalculate(true);
    setStep(2);
  };

  const handleStop = () => {
    console.log('mal');
    return;
  };

  const isDisabled = nombre === '' || rentaImponible === 0;

  return (
    <>
      {index < 7 ? (
        <button
          className="absolute w-12 h-12 bottom-4 right-4 z-[100] rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/30 hover:bg-primary-600 hover:scale-110 active:scale-95 transition-all duration-200"
          onClick={() => swipe.slideNext()}
        >
          <RiArrowRightSLine size={24} />
        </button>
      ) : (
        <button
          onClick={isDisabled ? handleStop : handleNext}
          className={`absolute right-4 bottom-4 z-[100] px-8 py-3 rounded-full font-bold text-base transition-all duration-200 ${
            isDisabled
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'btn-primary shadow-lg hover:scale-105'
          }`}
        >
          ¡Ver resultados! 🔥
        </button>
      )}
    </>
  );
};

export default SwiperNextButtons;
