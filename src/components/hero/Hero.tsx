import React, { useEffect } from "react";
import useMatchMedia from "../../hooks/useMediaQuery";
import theme from "../../theme";
import HeroImages from "./HeroImages";
import {
  Container,
  SecondaryTitleStyled,
  GridItem,
  SectionStyle,
  FadeInAnimation,
  mainText,
  mainTitle,
  secondaryTitle,
  HeroMainTitleStyled,
  HeroMainTextStyled,
} from "./Hero.styled";
import { GridItemStyled } from "../treasurers/heroComponent/HeroComponent.styled";

const Hero: React.FC = () => {
  const { isMobile, isUltraLarge } = useMatchMedia();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionStyle>
      <Container>
        <GridItem
          style={{
            alignItems: "center",
            maxWidth: isMobile ? "100%" : "50vw",
          }}
        >
          <GridItemStyled
            item
            style={{
              padding: isMobile ? 0 : 80,
              gap: 50,
            }}
          >
            <FadeInAnimation
              $delay="0s"
              style={{ maxWidth: isUltraLarge ? 700 : 600 }}
            >
              <SecondaryTitleStyled
                style={{ color: theme.palette.text.primary }}
              >
                {secondaryTitle}
              </SecondaryTitleStyled>
            </FadeInAnimation>
            <FadeInAnimation
              $delay="0.1s"
              style={{ maxWidth: isUltraLarge ? 500 : 600 }}
            >
              <HeroMainTitleStyled>{mainTitle}</HeroMainTitleStyled>
            </FadeInAnimation>
            {!isMobile && (
              <FadeInAnimation
                $delay="0.2s"
                style={{ maxWidth: isUltraLarge ? 700 : 600 }}
              >
                <HeroMainTextStyled>{mainText}</HeroMainTextStyled>
              </FadeInAnimation>
            )}
          </GridItemStyled>
        </GridItem>
        <HeroImages />
      </Container>
    </SectionStyle>
  );
};

export default Hero;
