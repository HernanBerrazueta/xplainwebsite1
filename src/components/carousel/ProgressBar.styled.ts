import styled, { keyframes } from "styled-components";
import theme from "../../theme";

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
