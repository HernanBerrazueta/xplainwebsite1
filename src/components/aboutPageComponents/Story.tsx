import React, { useEffect, useState } from "react";
import {
  MainTitleStyled,
  MainTextStyled,
  SectionBackGroundStyled,
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
import { ButtonStyled } from "../footer/Footer.styled";

interface StoryProps {
  index: number;
}

const Story: React.FC<StoryProps> = ({ index }) => {
  const { isMobile, isUltraLarge } = useMatchMedia();
  const { image, title, text, logo, logoAlt, altText } = data[index];

  const [height, setHeight] = useState(window.innerHeight);
  const [showMore, setShowMore] = useState(false);
  const maxHeight = parseInt(size.maxHeight.replace("px", ""));
  const imageHeight = isMobile || height > maxHeight ? "100%" : "100vh";

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleText = () => {
    setShowMore(!showMore);
  };

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
                    padding: isMobile ? "30px 50px" : "0px 30px 50px",
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
                  {showMore ? altText : text}
                </MainTextStyled>
                {!showMore && logo && (
                  <img
                    src={logo}
                    alt={logoAlt}
                    style={{
                      maxWidth: "250px",
                    }}
                  />
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
                  {showMore ? altText : text}
                </MainTextStyled>
                {!showMore && logo && (
                  <img
                    src={logo}
                    alt={logoAlt}
                    style={{
                      maxWidth: "250px",
                      padding: isMobile ? "0px 30px" : undefined,
                    }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: isMobile ? "40px 30px" : "40px 0 0 0",
                  }}
                >
                  <ButtonStyled
                    variant="contained"
                    color="secondary"
                    onClick={handleToggleText}
                    style={{
                      alignSelf: "flex-start",
                      padding: "6px 12px",
                      fontSize: "14px",
                    }}
                  >
                    {showMore ? "See Less" : "See More"}
                  </ButtonStyled>
                </div>
              </GridTextWrapper>
            </GridUpperTextWrapper>
            <GridImageWrapper item xs={isMobile ? 12 : 6}>
              {isMobile && (
                <MainTitleStyled
                  style={{
                    padding: "0px 30px 50px",
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
          </>
        )}
      </GridWrapper>
    </SectionBackGroundStyled>
  );
};

export default Story;
