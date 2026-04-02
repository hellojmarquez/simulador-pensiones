import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';

type ModalProps = { isOpen: boolean; onClose: () => void };

function Terms({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="relative z-10 bg-white rounded-3xl shadow-elevated max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7 md:p-10" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors text-slate-500"><RiCloseLine size={20} /></button>
            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-6"><span className="text-2xl">⚖️</span></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Términos y Condiciones</h3>
            
            <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
              </p>
              
              <h4 className="font-bold text-slate-800 text-base mt-8 mb-3">1. Uso del Servicio</h4>
              <p>
                Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.
              </p>
              
              <h4 className="font-bold text-slate-800 text-base mt-8 mb-3">2. Responsabilidad</h4>
              <p>
                In hac habitasse platea dictumst. Mauris rutrum enim vitae mauris. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
              </p>
              
              <h4 className="font-bold text-slate-800 text-base mt-8 mb-3">3. Licencia</h4>
              <p>
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              </p>
            </div>

            <button onClick={onClose} className="btn-primary mt-8 w-full">Aceptar y Cerrar</button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
export default Terms;
