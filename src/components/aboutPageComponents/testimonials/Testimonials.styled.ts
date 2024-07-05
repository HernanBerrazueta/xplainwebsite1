import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const StyledCarousel = styled.div`
  max-width: 100vw;
`;

export const CarouselWrapper = styled.div`
  background-color: ${theme.palette.primary.light};
  position: relative;
  text-align: center;
  width: 100%;

  .splide__arrow--prev {
    margin-left: 50px;

    @media ${device.mobileOnly} {
      margin-left: 0px;
    }
    @media ${device.smallTablet} {
      margin-left: 30px;
    }
  }

  .splide__arrow--next {
    margin-right: 50px;

    @media ${device.mobileOnly} {
      margin-right: 0px;
    }
    @media ${device.smallTablet} {
      margin-right: 30px;
    }
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.text.primary};
  width: 100%;
  height: 100%;
  padding: 100px 150px;
  margin: 0 auto;

  @media ${device.mobileOnly} {
    font-size: 12px;
    padding: 20px 60px;
  }
  @media ${device.smallTablet} {
    padding: 10px 110px;
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
  @media ${device.ultraLarge} {
    font-size: 24px;
  }

  & > :nth-child(2) {
    color: ${theme.palette.text.secondary};
  }
`;

export const Quote = styled.q`
  font-family: "CircularXXWeb-Medium", sans-serif;
`;

export const Paragraph = styled.p`
  margin: 25px 0;
`;
