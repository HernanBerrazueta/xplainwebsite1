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
  "Derivatives are complex but they don't have to be opaque. Xplain clarity – and therefore more holdings, whether you work in fund elsewhere.";

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
  width: 100%;

  @media ${device.mobileOnly} {
    height: auto;
  }
`;

export const GridItem = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;

  max-width: 50vw;
  flex-direction: column;

  @media ${device.mobileOnly} {
    display: block;
    padding: 30px 30px 0px;
    max-width: 100vw;
  }
  // @media ${device.smallTablet} {
  //   padding-left: 80px;
  // }
  // @media ${device.desktop} {
  //   padding-left: 120px;
  // }
  // @media ${device.ultraLarge} {
  //   padding-left: 320px;
  // }
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

  margin-top: 0;
  color: #fff;

  @media ${device.mobileOnly} {
    font-size: 24px;
  }
  @media ${device.smallTablet} {
    // max-width: 280px;
    padding: 0 80px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    // max-width: 354px;
  }

  @media ${device.desktop} {
    padding: 0 120px;
  }

  @media ${device.ultraLarge} {
    font-size: 32px;
    padding: 0 320px;
  }
`;

export const HeroMainTitleStyled = styled(MainTitleStyled)`
  @media ${device.smallTablet} {
    padding: 0 80px;
  }
  @media ${device.desktop} {
    padding: 0 120px;
  }
  @media ${device.ultraLarge} {
    padding: 0 320px;
  }
`;
export const HeroMainTextStyled = styled(MainTextStyled)`
  @media ${device.smallTablet} {
    padding: 0 80px;
  }
  @media ${device.desktop} {
    padding: 0 120px;
  }
  @media ${device.ultraLarge} {
    padding: 0 320px;
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
