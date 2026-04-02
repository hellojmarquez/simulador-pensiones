import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';

type ModalProps = { isOpen: boolean; onClose: () => void };

function HipotecaInversa({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="relative z-10 bg-white rounded-3xl shadow-elevated max-w-md w-full p-7" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors text-slate-500"><RiCloseLine size={20} /></button>
            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-4"><span className="text-2xl">🏠</span></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Hipoteca inversa</h3>
            <p className="text-slate-600 leading-relaxed">La hipoteca inversa es un mecanismo que existe en países como Estados Unidos e Inglaterra. Consiste en que un tercero te garantiza una renta vitalicia entregando tu vivienda como colateral. Tú o tu cónyuge fallece y la propiedad pasa a manos de este tercero. La gracia es que te permite vivir en tu propiedad mientras la monetizas. Lo malo es que no la dejas como herencia.</p>
            <button onClick={onClose} className="btn-primary mt-6 w-full">Cerrar</button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
export default HipotecaInversa;
