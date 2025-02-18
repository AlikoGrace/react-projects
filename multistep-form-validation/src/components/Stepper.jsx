import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newSteps, setNewSteps] = useState([]);
  const stepRef = useRef([]);

  useEffect(() => {
    if (stepRef.current.length === 0) {
      stepRef.current = steps.map((step, index) => ({
        description: step,
        completed: false,
        highlighed: index === 0,
        selected: index === 0,
      }));
    }
    updateStep(currentStep - 1);
  }, [currentStep]);

  const updateStep = (stepNumber) => {
    const updatedSteps = stepRef.current.map((step, index) => ({
      ...step,
      completed: index < stepNumber,
      selected: index === stepNumber,
      highlighed: index === stepNumber,
    }));

    setNewSteps(updatedSteps);
  };
  const displaySteps = newSteps.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newSteps.length - 1
            ? "flex items-center w-full"
            : "flex items-center"
        }>
        <div className="relative flex flex-col items-center text-teal-950">
          {/* circle */}
          <div
            className={`rounded-full w-12 h-12 border-2 border-gray-300 flex items-center justify-center py-3 transition duration-500 ${
              step.selected || step.completed
                ? "bg-green-600 text-white font-bold border-green-600"
                : "border-gray-300"
            }`}>
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          {/* description */}
          <div className="absolute top-0 text-center mt-12 w-32 text-xs font-medium uppercase">
            {step.description}
          </div>
        </div>
        {/* connector line */}
        {index !== newSteps.length - 1 && (
          <div className="flex-auto border-t-2 border-gray-200 transition duration-500 ease-in-out"></div>
        )}
      </div>
    );
  });

  return (
    <div className="flex justify-between mx-4 p-4 items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
