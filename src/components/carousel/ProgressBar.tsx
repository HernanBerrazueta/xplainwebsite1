import React, { useEffect, useState } from "react";
import {
  ActiveStepLabel,
  ProgressBar,
  ProgressContainer,
  Step,
} from "./ProgressBar.styled";

interface ProgressStepsProps {
  steps: string[];
  activeStep: number;
  onStepClick: (step: number) => void;
}

const HorizontalProgressBar: React.FC<ProgressStepsProps> = ({
  steps,
  activeStep,
  onStepClick,
}) => {
  const [currentStep, setCurrentStep] = useState(activeStep);

  useEffect(() => {
    setCurrentStep(activeStep);
  }, [activeStep]);

  return (
    <ProgressContainer>
      <ActiveStepLabel key={currentStep}></ActiveStepLabel>
      <ProgressBar>
        {steps.map((_, index) => (
          <Step
            key={index}
            $isactive={index === activeStep}
            onClick={() => onStepClick(index)}
          />
        ))}
      </ProgressBar>
    </ProgressContainer>
  );
};

export default HorizontalProgressBar;
