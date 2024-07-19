import styled from "styled-components";
import { device } from "../../utils/device";
import theme from "../../theme";

export const SectionBackGroundStyled = styled.section`
  background-color: ${theme.palette.text.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileOnly} {
    padding: 50px 20px;
  }
  @media ${device.smallTablet} {
    padding: 50px 30px;
  }
  @media ${device.desktop} {
    padding: 50px 80px;
  }
`;

export const MainTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  color: ${theme.palette.primary.main};

  @media ${device.mobileOnly} {
    font-size: 24px;
  }

  @media ${device.desktop} {
    font-size: 30px;
  }

  @media ${device.ultraLarge} {
    font-size: 48px;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    max-width: 100%;
  }

  @media ${device.tablet} {
    max-width: 90%;
    margin: 0 auto;
  }
  @media ${device.desktop} {
    max-width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const LegendContainer = styled.div`
  padding-top: 30px;
`;

export const ProgressWrapper = styled.div`
  width: 70%;
  padding: 50px 0;
  margin: 0 auto;
`;
