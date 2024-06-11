import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Splide from "@splidejs/splide";
import { Link } from "react-router-dom";
import {
  SectionBackGroundStyled,
  MainTitle,
  ButtonContainer,
  LegendContainer,
  ProgressWrapper,
} from "./Carousel.styled";
import { mainTitleText } from "../../components/carousel/data";
import { luminaSteps, prismaSteps, aureaSteps } from "./ProgressBar.styled";
import Slider from "./Slider";
import Button from "@mui/material/Button";
import ProgressSteps from "./ProgressBar";
import { NoView } from "../hero/Hero.styled";
import useMatchMedia from "../../hooks/useMediaQuery";

interface SlidesProps {
  slides: string[];
}

const Carousel: React.FC<SlidesProps> = ({ slides }) => {
  const location = useLocation();
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [splideInstance, setSplideInstance] = useState<Splide | null>(null);

  const handleSlideChange = (newIndex: number) => {
    setActiveSlideIndex(newIndex);
  };

  const { isMobile } = useMatchMedia();
  const isAuditorsPage = location.pathname === "/aurea";
  const isFundAdminsPage = location.pathname === "/lumina";

  useEffect(() => {
    if (splideInstance) {
      splideInstance.on("moved", (newIndex: number) => {
        setActiveSlideIndex(newIndex);
      });
    }
  }, [splideInstance]);

  const handleStepClick = (step: number) => {
    if (splideInstance) {
      splideInstance.go(step);
    }
  };

  return (
    <NoView>
      <SectionBackGroundStyled>
        <MainTitle>{mainTitleText}</MainTitle>
        <LegendContainer>
          <Slider
            slides={slides}
            onSlideChange={handleSlideChange}
            onSplideInstance={setSplideInstance}
          />
          <ProgressWrapper>
            <ProgressSteps
              steps={
                isAuditorsPage
                  ? aureaSteps
                  : isFundAdminsPage
                  ? luminaSteps
                  : prismaSteps
              }
              activeStep={activeSlideIndex}
              onStepClick={handleStepClick}
            />
          </ProgressWrapper>
        </LegendContainer>
        <ButtonContainer style={{ marginTop: isMobile ? 0 : undefined }}>
          <Link to="/contact-us">
            <Button
              variant="contained"
              color="primary"
              style={{
                textTransform: "capitalize",
                fontFamily: "CircularXXWeb-Regular, sans-serif",
              }}
            >
              Enquire
            </Button>
          </Link>
        </ButtonContainer>
      </SectionBackGroundStyled>
    </NoView>
  );
};

export default Carousel;
