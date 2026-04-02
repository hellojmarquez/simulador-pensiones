import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';

type ModalProps = { isOpen: boolean; onClose: () => void };

function Consumo({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="relative z-10 bg-white rounded-3xl shadow-elevated max-w-md w-full p-7" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors text-slate-500"><RiCloseLine size={20} /></button>
            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-4"><span className="text-2xl">🛍️</span></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cotización por consumo</h3>
            <p className="text-slate-600 leading-relaxed">Cotización por consumo es que en vez de cotizar meramente de tu sueldo, lo hagas a través del consumo, como un agregado a tu compra, como el IVA. Lo interesante de esta propuesta es que puedes partir cotizando antes, ya que normalmente partes consumiendo antes que entras al mundo laboral. Lo malo puede ser la informalidad en el consumo.</p>
            <button onClick={onClose} className="btn-primary mt-6 w-full">Cerrar</button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
export default Consumo;
