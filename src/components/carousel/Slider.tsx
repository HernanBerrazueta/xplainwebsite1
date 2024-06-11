import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { SliderContainer } from "./Carousel.styled";

interface SliderProps {
  onSplideInstance: (splide: Splide) => void;
  onSlideChange: (index: number) => void;
  slides: string[];
}

const Slider: React.FC<SliderProps> = ({
  onSlideChange,
  onSplideInstance,
  slides,
}) => {
  const splideRef = useRef<Splide | null>(null);

  useEffect(() => {
    const splide = new Splide("#image-slider", {
      type: "slide",
      perPage: 1,
    }).mount();

    splide.on("moved", (newIndex) => {
      onSlideChange(newIndex);
    });

    splideRef.current = splide;
    onSplideInstance(splide);

    splide.refresh();

    window.dispatchEvent(new Event("resize"));

    return () => {
      splide.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SliderContainer>
      <div id="image-slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {slides.map((slide, index) => (
              <li className="splide__slide" key={index}>
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  style={{ margin: "0 auto" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SliderContainer>
  );
};

export default Slider;
