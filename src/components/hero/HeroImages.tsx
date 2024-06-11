import React, { useState } from "react";
import { GridImages, GridImagesWrapper, mainText } from "./Hero.styled";
// import heroImage from "../../assets/images/hero/grid/HeroImage.svg";
import useMatchMedia from "../../hooks/useMediaQuery";
import { MainTextStyled } from "../treasurers/heroComponent/HeroComponent.styled";
import AnimationHeroComponent from "./AnimationHeroComponent";

const HeroImages: React.FC = () => {
  const [showControls, setShowControls] = useState(false);
  const { isMobile } = useMatchMedia();

  return (
    <GridImages container>
      <GridImagesWrapper
        onMouseEnter={() => setShowControls(false)}
        onMouseLeave={() => setShowControls(false)}
      >
        {isMobile ? (
          <>
            {/* <img src={heroImage} alt="Main graphics" /> */}
            <AnimationHeroComponent controls={showControls} />
            <MainTextStyled>{mainText}</MainTextStyled>
          </>
        ) : (
          <AnimationHeroComponent controls={showControls} />
        )}
      </GridImagesWrapper>
    </GridImages>
  );
};

export default HeroImages;
