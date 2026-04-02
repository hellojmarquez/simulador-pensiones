'use client';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import Steps from '../components/Steps';
import PensionChart from '../components/PensionChart';
import Questions from '../components/Questions';
import Opinion from '../components/Opinion';
import NewFooter from '../components/NewFooter';

export default function Home() {
  const [step, setStep] = useState(1);

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState(18);
  const [sexo, setSexo] = useState('M');
  const [rentaImponible, setRentaImponible] = useState(0);
  const [anosCotizados, setAnosCotizados] = useState(0);
  const [anosRestantes, setAnosRestantes] = useState(0);
  const [calculate, setCalculate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeRentaImponible = (newValue: string | undefined) => {
    if (newValue === undefined) {
      setRentaImponible(0);
    } else {
      setRentaImponible(Number(newValue));
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-background">
      <Navbar />

      <div className="w-full max-w-6xl mx-auto">
        <Steps step={step} setStep={setStep} />

        {step === 1 && (
          <Questions
            nombre={nombre}
            edad={edad}
            sexo={sexo}
            email={email}
            rentaImponible={rentaImponible}
            anosCotizados={anosCotizados}
            anosRestantes={anosRestantes}
            setNombre={setNombre}
            setEmail={setEmail}
            setEdad={setEdad}
            setSexo={setSexo}
            setRentaImponible={setRentaImponible}
            setAnosCotizados={setAnosCotizados}
            setAnosRestantes={setAnosRestantes}
            handleChangeRentaImponible={handleChangeRentaImponible}
            setStep={setStep}
            setCalculate={setCalculate}
            setIsLoading={setIsLoading}
          />
        )}

        {step === 2 && (
          <PensionChart
            nombre={nombre}
            edad={edad}
            sexo={sexo}
            email={email}
            rentaImponible={rentaImponible}
            anosCotizados={anosCotizados}
            anosRestantes={anosRestantes}
            setStep={setStep}
            setEdad={setEdad}
            setSexo={setSexo}
            setAnosCotizados={setAnosCotizados}
            setAnosRestantes={setAnosRestantes}
            handleChangeRentaImponible={handleChangeRentaImponible}
            calculate={calculate}
            setCalculate={setCalculate}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        )}

        {step === 3 && <Opinion setStep={setStep} />}
      </div>

      <NewFooter />
    </main>
  );
}
