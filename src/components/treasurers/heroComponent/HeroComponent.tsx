import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMatchMedia from "../../../hooks/useMediaQuery";
import { device } from "../../../utils/device";
import {
  SectionBackGroundStyled,
  ContainerStyled,
} from "./HeroComponent.styled";
import Image from "./Image";
import TextButton from "./TextButton";

const HeroComponent: React.FC = () => {
  const { innerHeight: height } = window;
  const { isMobile } = useMatchMedia();
  const location = useLocation();
  const isInsightsPage = location.pathname === "/insights";

  let sectionHeight;
  if (height < parseInt(device.minHeight)) {
    sectionHeight = "100%";
  } else if (height > parseInt(device.maxHeight)) {
    sectionHeight = "auto";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionBackGroundStyled
      style={{
        height: sectionHeight,
      }}
    >
      <ContainerStyled container>
        {!isMobile ? (
          isInsightsPage ? (
            <>
              <TextButton />
              <Image />
            </>
          ) : (
            <>
              <Image />
              <TextButton />
            </>
          )
        ) : (
          <TextButton />
        )}
      </ContainerStyled>
    </SectionBackGroundStyled>
  );
};

export default HeroComponent;
