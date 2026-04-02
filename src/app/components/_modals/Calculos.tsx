import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';

type ModalProps = { isOpen: boolean; onClose: () => void };

function Calculos({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="relative z-10 bg-white rounded-3xl shadow-elevated max-w-lg w-full max-h-[85vh] overflow-y-auto p-7" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors text-slate-500"><RiCloseLine size={20} /></button>
            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-4"><span className="text-2xl">🔢</span></div>
            <h3 className="text-xl font-bold text-slate-900 mb-5">Supuestos detrás del Simulador</h3>
            <ul className="space-y-3 list-none">
              {[
                'Este simulador no entrega como resultado una estimación de la pensión total del usuario. Este simulador sólo entrega cómo resultado los beneficios que obtendría el usuario con el 6% de cotización extra que se estipula la reforma.',
                'Se asume una cotización extra del 6%, la cual se distribuye entre 3% Seguro Social y 3% Capitalización Individual.',
                'Se utiliza un tope imponible para la remuneración mensual de 84,3 UF.',
                'No se incluye el 10% de cotización actual, sólo el 6% extra que está en discusión en la reforma.',
                'No incluye PGU ni ningún tipo de pensión estatal.',
                'Se asume una edad de jubilación de 62 años para la mujer, correspondiente a la edad promedio de jubilación reportada por las actuales jubiladas, según datos de la Superintendencia de Pensiones.',
                'Se asume una edad de jubilación de 65 años para los hombres, puesto que esta última corresponde a la edad promedio de jubilación reportada por los actuales jubilados.',
                'Se asume una edad de inicio de cotización de mínimo 18 años, por lo tanto, un hombre puede cotizar hasta 47 años, y la mujer, hasta 42 años.',
                'Se considera solidaridad intrageneracional, con una distribución 70% - 30% (establecido en el proyecto de ley).',
                'Se asume una rentabilidad de los fondos de pensiones del 4%, correspondiente a una aproximación de la rentabilidad histórica de los fondos de pensiones.',
                'Se asume un CNU fijo para hombres y otro para mujeres, ambos sin cónyuge, sin hijos.',
                'Se asume una fecha de jubilación al 31/06/2024 para el cálculo de los CNU antes mencionado.',
                'Para el cálculo de los CNU antes mencionados, se consideró una tasa del 3,2% correspondiente a la utilizada para la renta vitalicia.',
                'No se incluye el complemento por cuidado de terceros.',
                'El beneficio social está calculado al valor UF actualizado automáticamente a diario.',
                'Se asume un ingreso promedio de los cotizantes del mes de $1.100.000.',
                'Se contempla un crecimiento salarial del 1.5% anual.',
                'Es importante mencionar que, debido al desconocimiento de la historia laboral de la persona que utiliza la calculadora, existe un margen de error en aquellos usuarios que estén cerca de la edad límite.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button onClick={onClose} className="btn-primary mt-6 w-full">Cerrar</button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
export default Calculos;
