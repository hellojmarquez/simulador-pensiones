/* eslint-disable react/prop-types */
import { useSwiper } from 'swiper/react';
import { RiArrowLeftSLine } from 'react-icons/ri';

interface SwiperBackButtonsProps {
  index: number;
}

const SwiperBackButtons: React.FC<SwiperBackButtonsProps> = ({ index }) => {
  const swipe = useSwiper();

  return (
    <>
      {index > 0 && (
        <button
          className="absolute w-12 h-12 bottom-4 left-4 z-[100] rounded-full bg-white text-slate-600 border-2 border-slate-200 flex items-center justify-center shadow-card hover:bg-slate-50 hover:border-slate-300 hover:scale-110 active:scale-95 transition-all duration-200"
          onClick={() => swipe.slidePrev()}
        >
          <RiArrowLeftSLine size={24} />
        </button>
      )}
    </>
  );
};

export default SwiperBackButtons;
