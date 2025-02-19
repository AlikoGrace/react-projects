import StepperControl from "./components/StepperControl";
import Personal from "./components/steps/Personal";
import Stepper from "./components/Stepper";
import Contact from "./components/steps/Contact";
import { useEffect, useState } from "react";

const steps = ["Personal", "contact", "review"];

function displaySteps(steps) {
  switch (steps) {
    case 1:
      return <Personal />;
    case 2:
      return <Contact />;
    case 3:
      return <div>Review Step</div>;
    default:
      <Personal />;
  }
}
const App = () => {
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? JSON.parse(savedStep) : 1;

    // check if localStorage has a savedStep return
    // it in a parse form of json if not return 1 (the fisrt step)
  });

  useEffect(() => {
    localStorage.setItem("currentStep", JSON.stringify(currentStep));
  }, [currentStep]);
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded 2xl pb-2 bg-white">
      <div className=" container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      {displaySteps(currentStep)}
      <StepperControl
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        steps={steps}
      />
    </div>
  );
};

export default App;
