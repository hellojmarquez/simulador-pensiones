import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';

type ModalProps = { isOpen: boolean; onClose: () => void };

function Politics({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="relative z-10 bg-white rounded-3xl shadow-elevated max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7 md:p-10" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors text-slate-500"><RiCloseLine size={20} /></button>
            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-6"><span className="text-2xl">🔒</span></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Políticas de Privacidad</h3>
            
            <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h4 className="font-bold text-slate-800 text-base mt-8 mb-3">1. Recopilación de Datos</h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
              </p>
              
              <h4 className="font-bold text-slate-800 text-base mt-8 mb-3">2. Uso de la Información</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
              </p>
              
              <h4 className="font-bold text-slate-800 text-base mt-8 mb-3">3. Compartir con Terceros</h4>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
              </p>
            </div>

            <button onClick={onClose} className="btn-primary mt-8 w-full">Aceptar y Cerrar</button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
export default Politics;
