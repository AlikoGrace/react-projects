const StepperControl = ({
  currentStep,
  setCurrentStep,
  validationTrigger,
  steps,
}) => {
  const handleNext = async () => {
    const isValid = await validationTrigger(); //  Validate before moving
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/*  Always show "Back" button but disable it on Step 1 */}
      <button
        onClick={() => currentStep > 1 && setCurrentStep((prev) => prev - 1)}
        disabled={currentStep === 1}
        className={`uppercase py-2 px-4 rounded-xl font-semibold border-2 transition duration-200 ease-in-out
          ${
            currentStep === 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed border-gray-300"
              : "bg-white text-slate-400 cursor-pointer border-slate-300 hover:bg-slate-700 hover:text-white"
          }`}>
        Back
      </button>

      {/*  Validate before allowing user to move forward */}
      {currentStep < steps.length && (
        <button
          onClick={handleNext}
          className="bg-green-700 text-white uppercase py-2 px-4 rounded-xl font-semibold 
          cursor-pointer border-2 hover:bg-green-800 transition duration-200 ease-in-out">
          Next
        </button>
      )}
    </div>
  );
};

export default StepperControl;
