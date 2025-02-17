import React, { useEffect, useState } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newSteps, setNewSteps] = useState([]);

  useEffect(() => {
    updateStep(currentStep - 1);
  }, [currentStep]);

  const updateStep = (stepNumber) => {
    const updatedSteps = steps.map((step, index) => ({
      description: step,
      completed: index < stepNumber,
      highlighed: index === stepNumber,
      selected: index === stepNumber,
    }));
    setNewSteps(updatedSteps);
  };

  return (
    <div className="flex justify-between mx-4 p-4 items-center">
      {newSteps.map((step, index) => (
        <div key={index} className="flex items-center w-full">
          <div className="relative flex flex-col items-center text-teal-950">
            <div
              className={`rounded-full w-12 h-12 border-2 border-gray-300 flex items-center justify-center py-3 transition duration-500 ${
                step.selected
                  ? "bg-green-600 text-white font-bold border-green-600"
                  : "border-gray-300"
              }`}>
              {step.completed ? (
                <span className="text-white font-bold text-xl">&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div className="absolute top-0 text-center mt-12 w-32 text-xs font-medium uppercase">
              {step.description}
            </div>
          </div>
          {/* connector line */}
          {index !== newSteps.length - 1 && (
            <div className="flex-auto border-t-2 border-gray-200 transition duration-500 ease-in-out"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
