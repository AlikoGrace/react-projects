const StepperControl = ({ currentStep, setCurrentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <button
        onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
        className="bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold 
      cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
        Back
      </button>

      <button
        onClick={() =>
          setCurrentStep((prev) => Math.min(prev + 1, steps.length))
        }
        className="bg-green-700 text-white uppercase py-2 px-4 rounded-xl font-semibold 
      cursor-pointer border-2   hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
        Next
      </button>
    </div>
  );
};

export default StepperControl;
