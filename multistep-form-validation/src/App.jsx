import StepperControl from "./components/StepperControl";
import Personal from "./components/steps/Personal";
import Stepper from "./components/Stepper";
import Contact from "./components/steps/Contact";
import { useEffect, useState } from "react";
import Review from "./components/steps/Review";

const steps = ["Personal", "contact", "review"];

const App = () => {
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? JSON.parse(savedStep) : 1;

    // check if localStorage has a savedStep return
    // it in a parse form of json if not return 1 (the fisrt step)
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  });

  const [validationTrigger, setValidationTrigger] = useState(
    () => async () => true
    // if trigger hasn't been set yet then this will make sure the app doesn't break
  );

  useEffect(() => {
    localStorage.setItem("currentStep", JSON.stringify(currentStep));
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [currentStep, formData]);

  function displaySteps(steps) {
    switch (steps) {
      case 1:
        return (
          <Personal
            setValidationTrigger={setValidationTrigger}
            setFormData={setFormData}
            formData={formData}
          />
        );
      case 2:
        return (
          <Contact
            setValidationTrigger={setValidationTrigger}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return <Review formData={formData} />;
      default:
        <Personal
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setFormData={setCurrentStep}
          formData={formData}
        />;
    }
  }

  return (
    <div className="md:w-1/2 mx-auto min-h-screen justify-center shadow-xl rounded 2xl pb-2 bg-white flex flex-col items-center">
      <div className=" container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      {displaySteps(currentStep)}
      <StepperControl
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        steps={steps}
        validationTrigger={validationTrigger}
      />
    </div>
  );
};

export default App;
