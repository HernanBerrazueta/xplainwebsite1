import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {
  StyledCarousel,
  CarouselWrapper,
  SlideContent,
  Paragraph,
  Quote,
} from "./Testimonials.styled";
import useMatchMedia from "../../../hooks/useMediaQuery";

interface SlideData {
  content: string;
  signature: string;
}

interface Data {
  data: SlideData[];
}

const Testimonials: React.FC<Data> = ({ data }) => {
  const { isMobile } = useMatchMedia();
  const splideRef = useRef<Splide | null>(null);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(0);
    }
  }, []);

  const splideOptions = {
    type: "fade",
    rewind: false,
    height: isMobile ? "480px" : "380px",
    gap: "10px",
    pagination: false,
    arrows: data.length > 1,
  };

  return (
    <StyledCarousel>
      <CarouselWrapper>
        <Splide options={splideOptions} ref={splideRef}>
          {data.map((slide, index) => (
            <SplideSlide key={index}>
              <SlideContent>
                <Quote>{slide.content}</Quote>
                <Paragraph>{slide.signature}</Paragraph>
              </SlideContent>
            </SplideSlide>
          ))}
        </Splide>
      </CarouselWrapper>
    </StyledCarousel>
  );
};

export default Testimonials;
