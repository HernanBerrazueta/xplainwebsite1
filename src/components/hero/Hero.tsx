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

const Hero: React.FC = () => {
  const { isMobile } = useMatchMedia();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionStyle>
      <Container>
        <GridItem>
          <FadeInAnimation $delay="0s" style={{ marginBottom: 60 }}>
            <SecondaryTitleStyled
              style={{ color: theme.palette.primary.light }}
            >
              {secondaryTitle}
            </SecondaryTitleStyled>
          </FadeInAnimation>
          <FadeInAnimation $delay="0.1s">
            <HeroMainTitleStyled>{mainTitle}</HeroMainTitleStyled>
          </FadeInAnimation>
          {!isMobile && (
            <FadeInAnimation $delay="0.2s">
              <HeroMainTextStyled>{mainText}</HeroMainTextStyled>
            </FadeInAnimation>
          )}
        </GridItem>
        <HeroImages />
      </Container>
    </SectionStyle>
  );
};

export default Hero;
