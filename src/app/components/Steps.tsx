import { FaCheck } from 'react-icons/fa';
import { HiOutlineClipboardDocumentList, HiOutlineChartBar, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

type StepsProps = {
  step: number;
  setStep: (step: number) => void;
};

const stepData = [
  { label: 'Ingresa datos', icon: HiOutlineClipboardDocumentList },
  { label: 'Compara', icon: HiOutlineChartBar },
  { label: 'Opina', icon: HiOutlineChatBubbleLeftRight },
];

export default function Steps({ step, setStep }: StepsProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between">
        {stepData.map((s, i) => {
          const stepNum = i + 1;
          const isActive = step === stepNum;
          const isCompleted = step > stepNum;
          const Icon = s.icon;

          return (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              {/* Step Circle + Label */}
              <button
                onClick={() => {
                  if (isCompleted) setStep(stepNum);
                }}
                className={`flex flex-col items-center gap-2 group ${
                  isCompleted ? 'cursor-pointer' : isActive ? 'cursor-default' : 'cursor-default'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted
                      ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30'
                      : isActive
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-110'
                      : 'bg-slate-100 text-slate-400 border-2 border-slate-200'
                  }`}
                >
                  {isCompleted ? (
                    <FaCheck size={16} />
                  ) : (
                    <Icon size={20} />
                  )}
                </div>
                <span
                  className={`text-xs font-semibold transition-colors duration-200 ${
                    isActive || isCompleted ? 'text-primary-600' : 'text-slate-400'
                  }`}
                >
                  {s.label}
                </span>
              </button>

              {/* Connector Line */}
              {i < stepData.length - 1 && (
                <div className="flex-1 mx-3 h-0.5 rounded-full overflow-hidden bg-slate-200">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      step > stepNum ? 'w-full bg-primary-500' : 'w-0 bg-primary-500'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
