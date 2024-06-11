import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import {
  ColumnStyled,
  mainTitle,
  mainText,
  AboutWrapper,
} from "./HeroAbout.styled";
import {
  SectionStyled,
  GridWrapperStyled,
  GridItemStyled,
  GridImagesStyled,
  MainTextStyled,
  MainTitleStyled,
  ReverseButtonStyle,
} from "../../treasurers/heroComponent/HeroComponent.styled";
import {
  MoveRightToLeftAnimation,
  FadeInAnimation,
} from "../../hero/Hero.styled";
import { image } from "../data";
import useMatchMedia from "../../../hooks/useMediaQuery";
import theme from "../../../theme";
import { size } from "../../../utils/device";

const HeroAbout: React.FC = () => {
  const { isMobile } = useMatchMedia();

  const [height, setHeight] = useState(window.innerHeight);
  const maxHeight = parseInt(size.maxHeight.replace("px", ""));
  const imageHeight = height > maxHeight ? "100%" : "calc(100vh - 104px)";

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionStyled style={{ backgroundColor: theme.palette.primary.main }}>
      {isMobile ? (
        <>
          <GridWrapperStyled container>
            <GridItemStyled
              item
              style={{
                padding: isMobile ? 0 : 60,
              }}
            >
              <FadeInAnimation $delay="0s" style={{ padding: "30px 30px 0" }}>
                <MainTitleStyled>{mainTitle}</MainTitleStyled>
              </FadeInAnimation>
              <Grid>
                <ColumnStyled>
                  <MoveRightToLeftAnimation style={{ animationDelay: "0s" }}>
                    <GridImagesStyled src={image.src} alt={image.alt} />
                  </MoveRightToLeftAnimation>
                </ColumnStyled>
              </Grid>
              <FadeInAnimation $delay="0.1s">
                <MainTextStyled>{mainText}</MainTextStyled>
              </FadeInAnimation>
              <FadeInAnimation $delay="0.2s">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "50px",
                  }}
                >
                  <Link to="/contact-us">
                    <ReverseButtonStyle variant="contained" color="primary">
                      Enquire
                    </ReverseButtonStyle>
                  </Link>
                </div>
              </FadeInAnimation>
            </GridItemStyled>
          </GridWrapperStyled>
        </>
      ) : (
        <AboutWrapper>
          <GridWrapperStyled container>
            <GridItemStyled
              item
              style={{
                padding: isMobile ? 0 : 80,
              }}
            >
              <FadeInAnimation $delay="0s">
                <MainTitleStyled>{mainTitle}</MainTitleStyled>
              </FadeInAnimation>
              <FadeInAnimation $delay="0.1s">
                <MainTextStyled>{mainText}</MainTextStyled>
              </FadeInAnimation>
              <FadeInAnimation $delay="0.2s">
                <Link to="/contact-us">
                  <ReverseButtonStyle variant="contained" color="primary">
                    Enquire
                  </ReverseButtonStyle>
                </Link>
              </FadeInAnimation>
            </GridItemStyled>
          </GridWrapperStyled>
          <Grid style={{ flex: 1 }}>
            <ColumnStyled>
              <MoveRightToLeftAnimation style={{ animationDelay: "0s" }}>
                <GridImagesStyled
                  src={image.src}
                  alt={image.alt}
                  style={{ height: imageHeight }}
                />
              </MoveRightToLeftAnimation>
            </ColumnStyled>
          </Grid>
        </AboutWrapper>
      )}
    </SectionStyled>
  );
};

export default HeroAbout;
