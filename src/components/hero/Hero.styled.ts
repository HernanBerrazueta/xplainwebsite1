import styled, { keyframes } from "styled-components";
import { Grid } from "@mui/material";
import theme from "../../theme";
import { device } from "../../utils/device";
import {
  MainTextStyled,
  MainTitleStyled,
} from "../treasurers/heroComponent/HeroComponent.styled";

export const secondaryTitle = "Dedicated to derivatives";
export const mainTitle = "Clarity and control – without the cost";
export const mainText =
  "Derivatives are complex but they don’t have to be opaque. Xplain is dedicated to giving you greater clarity – and therefore more control – over your derivatives holdings, whether you work in fund administration, corporate treasury or elsewhere.";

export const SectionStyle = styled.section`
  background-color: ${theme.palette.primary.main};

  @media ${device.ultraLarge} {
    width: 100%;
  }
`;

export const Container = styled(Grid)`
  display: flex;

  @media ${device.mobileOnly} {
    display: block;
  }

  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
  }
`;
export const VideoStyled = styled.video`
  width: auto;
  max-width: 100%;
  max-height: 1440px;

  @media ${device.mobileOnly} {
    height: auto;
  }
  @media ${device.ultraLarge} {
    height: 1440px;
  }
`;

export const GridItem = styled.div`
  flex: 1 1 0%;
  display: flex;
  // justify-content: space-evenly;
  justify-content: center;
  // flex-direction: column;

  @media ${device.mobileOnly} {
    display: block;
    padding: 30px 30px 0px;
    max-width: 100vw;
  }
`;

export const GridImagesWrapper = styled(Grid)`
  width: 100%;
`;

export const GridImages = styled(Grid)`
  flex: 1 1 0%;
  width: 100%;

  @media ${device.mobileOnly} {
    display: block;
  }
`;

export const SecondaryTitleStyled = styled.p`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-size: 18px;
  max-width: 100%;
  // padding: 0 80px;

  margin-top: 0;
  color: #fff;

  @media ${device.mobileOnly} {
    font-size: 24px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    // max-width: 354px;
  }

  @media ${device.ultraLarge} {
    // padding: 0 280px;
    font-size: 36px;
  }
`;

export const HeroMainTitleStyled = styled(MainTitleStyled)`
  // padding: 0 80px;
  color: #805cdd;
  margin-bottom: 0;

  @media ${device.desktop} {
    font-size: 28px;
  }
  @media ${device.ultraLarge} {
    // padding: 0 280px;
    font-size: 36px;
  }
`;

export const HeroMainTextStyled = styled(MainTextStyled)`
  font-size: 22px;
  // padding: 0 80px;
  margin-bottom: 0;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.smallTablet} {
    font-size: 22px;
  }

  @media ${device.ultraLarge} {
    // padding: 0 280px;
    font-size: 23px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FadeInAnimation = styled.div<{ $delay: string }>`
  animation: ${fadeIn} 0.3s ease-in-out forwards;
  opacity: 0;
  animation-delay: ${({ $delay }) => $delay};
`;

const moveRightToLeft = keyframes`
   0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const MoveRightToLeftAnimation = styled.div`
  animation: ${moveRightToLeft} 0.8s ease-in-out forwards;
`;

const moveLeftToRight = keyframes`
  from {
    transform: translateX(-30%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MoveLeftToRightAnimation = styled.div`
  animation: ${moveLeftToRight} 0.4s ease-in-out forwards;
`;

const moveUpToDown = keyframes`
  from {
    transform: translateY(-20%);
  }
  to {
    transform: translateY(0);
  }
`;

export const MoveUpToDownAnimation = styled.div`
  animation: ${moveUpToDown} 0.4s ease-in-out forwards;
`;

export const NoView = styled.div`
  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
  }
`;
