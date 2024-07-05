import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MainTitleStyled,
  MainTextStyled,
  SectionBackGroundStyled,
  ReverseButtonStyle,
} from "../../components/treasurers/heroComponent/HeroComponent.styled";
import { HeroImgStyled } from "../../components/fundAdmins/HeroAdmins.styled";
import { data } from "./data";
import {
  GridImageWrapper,
  GridTextWrapper,
  GridUpperTextWrapper,
  GridWrapper,
} from "./Story.styled";
import useMatchMedia from "../../hooks/useMediaQuery";
import { size } from "../../utils/device";
import theme from "../../theme";

interface StoryProps {
  index: number;
}

const Story: React.FC<StoryProps> = ({ index }) => {
  const { isMobile, isUltraLarge } = useMatchMedia();
  const { image, title, text, logo, logoAlt } = data[index];

  const [height, setHeight] = useState(window.innerHeight);
  const maxHeight = parseInt(size.maxHeight.replace("px", ""));
  const imageHeight = isMobile || height > maxHeight ? "100%" : "100vh";

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isEven = index % 2 === 0;

  return (
    <SectionBackGroundStyled
      style={{
        height: imageHeight,
        backgroundColor: !isEven
          ? theme.palette.primary.main
          : theme.palette.text.primary,
      }}
    >
      <GridWrapper container>
        {isEven ? (
          <>
            <GridImageWrapper item xs={isMobile ? 12 : 6}>
              {isMobile && (
                <MainTitleStyled
                  style={{
                    padding: "0px 30px 50px",
                    color: isEven
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  }}
                >
                  {title}
                </MainTitleStyled>
              )}
              <HeroImgStyled
                style={{ height: imageHeight }}
                src={image}
                alt="Perspective view"
              />
            </GridImageWrapper>
            <GridUpperTextWrapper item xs={isMobile ? 12 : 6}>
              <GridTextWrapper>
                {!isMobile && (
                  <MainTitleStyled
                    style={{
                      maxWidth: isUltraLarge ? 900 : undefined,
                      color: isEven
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    }}
                  >
                    {title}
                  </MainTitleStyled>
                )}
                <MainTextStyled
                  style={{
                    maxWidth: isUltraLarge ? 900 : undefined,
                    color: isEven
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  }}
                >
                  {text}
                </MainTextStyled>
                {logo && (
                  <img src={logo} alt={logoAlt} style={{ maxWidth: "250px" }} />
                )}
              </GridTextWrapper>
            </GridUpperTextWrapper>
          </>
        ) : (
          <>
            <GridUpperTextWrapper item xs={isMobile ? 12 : 6}>
              <GridTextWrapper>
                {!isMobile && (
                  <MainTitleStyled
                    style={{ maxWidth: isUltraLarge ? 900 : undefined }}
                  >
                    {title}
                  </MainTitleStyled>
                )}
                <MainTextStyled
                  style={{ maxWidth: isUltraLarge ? 900 : undefined }}
                >
                  {text}
                </MainTextStyled>
                {logo && (
                  <img src={logo} alt={logoAlt} style={{ maxWidth: "250px" }} />
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    paddingTop: "20px",
                    marginTop: "20px",
                  }}
                >
                  <Link to="/contact-us">
                    <ReverseButtonStyle variant="contained" color="secondary">
                      See More
                    </ReverseButtonStyle>
                  </Link>
                </div>
              </GridTextWrapper>
            </GridUpperTextWrapper>
            <GridImageWrapper item xs={isMobile ? 12 : 6}>
              {isMobile && (
                <MainTitleStyled style={{ padding: "0px 30px 50px" }}>
                  {title}
                </MainTitleStyled>
              )}
              <HeroImgStyled
                style={{ height: imageHeight }}
                src={image}
                alt="Perspective view"
              />
            </GridImageWrapper>
          </>
        )}
      </GridWrapper>
    </SectionBackGroundStyled>
  );
};

export default Story;
