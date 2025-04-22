type ProgressbarProps = {
  currentStep: number
};

const steps = ["First", "Second", "Third", "Final"];

const Progressbar: React.FC<ProgressbarProps> = ({ currentStep }) => {

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        {steps.map((step, index) => {
          const isActive = index + 1 <= currentStep;
          return (
            <div key={step} className="flex flex-col items-center flex-1">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-bold transition
                  ${isActive ? "bg-blue-600" : "bg-gray-300"}`}
              >
                {index + 1}
              </div>
              <span className={`mt-2 text-xs ${isActive ? "text-blue-600" : "text-gray-400"}`}>{step}</span>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Progressbar;
