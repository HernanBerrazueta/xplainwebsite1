import styled, { keyframes } from "styled-components";
import theme from "../../theme";
// import { MainTextStyled } from "../treasurers/heroComponent/HeroComponent.styled";

interface StepProps {
  $isactive: boolean;
}

export const luminaSteps = [
  "Core Functions",
  "We integrate core functions",
  "Bring valuation in-house",
  "Pricing Feature",
  "Valuation Feature",
  "XM Feature",
  "Xplain Lumina",
];

export const prismaSteps = [
  "Core Functions",
  "We integrate core functions",
  "Bring valuation in-house",
  "Pricing Feature",
  "Valuation Feature",
  "XM Feature",
  "Xplain Prisma",
];

export const aureaSteps = [
  "Core Functions",
  "We integrate core functions",
  "Bring valuation in-house",
  "Pricing Feature",
  "Valuation Feature",
  "XM Feature",
  "Xplain Aurea",
];

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 1px;
  width: 100%;
  background-color: ${theme.palette.primary.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const Step = styled.div<StepProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $isactive }) =>
    $isactive ? theme.palette.primary.light : theme.palette.primary.main};
  cursor: pointer;

  &:hover {
    background-color: ${theme.palette.primary.light};
  }
`;

const simpleFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ActiveStepLabel = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  color: ${theme.palette.primary.main};
  text-align: center;
  white-space: nowrap;
  animation: ${simpleFadeIn} 0.08s ease-in-out;
`;

// Vertical ProgressBar styles ---->

// export const ProgressBar = styled.div`
//   position: relative;
//   width: 1px;
//   height: 60vh;
//   background-color: ${theme.palette.primary.main};
// `;

// interface StepProps {
//   $isactive: boolean;
//   $islaststep: boolean;
//   $totalsteps: number;
//   step: number;
// }

// export const Step = styled.div<StepProps>`
//   position: absolute;

//   top: ${({ $islaststep, step, $totalsteps }) =>
//     $islaststep ? "100%" : `${step * (100 / $totalsteps + 2.5)}%`};
//   left: 50%;
//   transform: translateX(-50%);
//   width: 15px;
//   height: 15px;
//   border-radius: 50%;
//   background-color: ${({ $isactive }) =>
//     $isactive ? theme.palette.primary.light : theme.palette.primary.main};
// `;

// export const StepLabel = styled(MainTextStyled)<{ $isactive: boolean }>`
//   position: absolute;
//   left: 40px;
//   top: 50%;
//   transform: translateY(-50%);

//   cursor: pointer;
//   margin: 0;
//   padding: 10px 0;
//   font-weight: bold;
//   max-width: 250px;
//   color: ${({ $isactive }) =>
//     $isactive ? theme.palette.primary.light : theme.palette.primary.main};
// `;
