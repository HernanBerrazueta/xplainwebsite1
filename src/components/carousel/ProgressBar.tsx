import React, { useEffect, useState } from "react";
import {
  ActiveStepLabel,
  ProgressBar,
  ProgressContainer,
  Step,
  // StepLabel,
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
      <ActiveStepLabel key={currentStep}>
        {/*steps[activeStep]*/}
      </ActiveStepLabel>
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

// const VerticalProgressBar: React.FC<ProgressStepsProps> = ({
//   steps,
//   activeStep,
//   onStepClick,
// }) => {
//   const totalSteps = steps.length;

//   return (
//     <ProgressBar>
//       {steps.map((step, index) => (
//         <div key={index}>
//           <Step
//             step={index}
//             $totalsteps={totalSteps}
//             $isactive={index === activeStep}
//             $islaststep={index === totalSteps - 1}
//           >
//             <StepLabel
//               $isactive={index === activeStep}
//               style={{ width: 500 }}
//               onClick={() => onStepClick(index)}
//             >
//               {step}
//             </StepLabel>
//           </Step>
//         </div>
//       ))}
//     </ProgressBar>
//   );
// };

// export default VerticalProgressBar;
