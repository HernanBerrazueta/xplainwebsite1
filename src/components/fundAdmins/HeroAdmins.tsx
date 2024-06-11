import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import useMatchMedia from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import {
  data,
  ContainerStyled,
  GridItemStyled,
  SectionStyled,
  HeroImgStyled,
  LuminaLogoStyled,
} from "./HeroAdmins.styled";
import { MoveLeftToRightAnimation, FadeInAnimation } from "../hero/Hero.styled";
import {
  MainTitleStyled,
  MainTextStyled,
  ReverseButtonStyle,
} from "../treasurers/heroComponent/HeroComponent.styled";
import { adminsData } from "../treasurers/heroComponent/herosData";

const HeroAdmins: React.FC = () => {
  const { isMobile } = useMatchMedia();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { image, text } = data[0];

  return (
    <SectionStyled>
      {isMobile ? (
        <ContainerStyled container>
          <GridItemStyled item xs={6}>
            <FadeInAnimation $delay="0s">
              <LuminaLogoStyled src={adminsData.image} alt={adminsData.alt} />
            </FadeInAnimation>
            <FadeInAnimation $delay="0.1s">
              <MainTitleStyled>{adminsData.title}</MainTitleStyled>
            </FadeInAnimation>
          </GridItemStyled>
          <MoveLeftToRightAnimation>
            <HeroImgStyled src={image} alt={text} />
          </MoveLeftToRightAnimation>
          <MainTextStyled>{adminsData.text}</MainTextStyled>
          <MainTextStyled
            style={{
              paddingTop: "0px",
            }}
          >
            {adminsData.secondaryText}
          </MainTextStyled>
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
        </ContainerStyled>
      ) : (
        <ContainerStyled container>
          <Grid item xs={6} style={{ maxWidth: "100%" }}>
            <MoveLeftToRightAnimation>
              <HeroImgStyled src={image} alt={text} />
            </MoveLeftToRightAnimation>
          </Grid>
          <GridItemStyled item xs={6}>
            <FadeInAnimation $delay="0s">
              <LuminaLogoStyled src={adminsData.image} alt={adminsData.alt} />
            </FadeInAnimation>
            <FadeInAnimation $delay="0.1s">
              <MainTitleStyled>{adminsData.title}</MainTitleStyled>
            </FadeInAnimation>
            <FadeInAnimation $delay="0.2s">
              <MainTextStyled>{adminsData.text}</MainTextStyled>
              <MainTextStyled>{adminsData.secondaryText}</MainTextStyled>
            </FadeInAnimation>
            <FadeInAnimation $delay="0.3s">
              <Link to="/contact-us">
                <ReverseButtonStyle variant="contained" color="primary">
                  Enquire
                </ReverseButtonStyle>
              </Link>
            </FadeInAnimation>
          </GridItemStyled>
        </ContainerStyled>
      )}
    </SectionStyled>
  );
};

export default HeroAdmins;
