import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const StyledCarousel = styled.div`
  background-color: ${theme.palette.primary.light};
`;

export const CarouselWrapper = styled.div`
  max-width: 2788px;
  margin: 0 auto;
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
    font-size: 22px;
    padding: 20px 60px;
  }
  @media ${device.smallTablet} {
    padding: 10px 110px;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
  @media ${device.desktop} {
    padding: 0px 170px;
  }
  @media ${device.ultraLarge} {
    font-size: 24px;
    padding: 0px 300px;
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
