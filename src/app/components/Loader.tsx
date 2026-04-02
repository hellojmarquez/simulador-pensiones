import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[5000] flex flex-col justify-center items-center bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 shadow-elevated flex flex-col items-center gap-4 animate-fade-in">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-primary-100"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 animate-spin"></div>
        </div>
        <p className="text-slate-700 font-medium text-base animate-pulse-soft">
          Estamos calculando...
        </p>
      </div>
    </div>
  );
};

export default Loader;
