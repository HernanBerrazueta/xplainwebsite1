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

const Story: React.FC = () => {
  const { isMobile } = useMatchMedia();
  const { image, title, text } = data[0];

  const [height, setHeight] = useState(window.innerHeight);
  const maxHeight = parseInt(size.maxHeight.replace("px", ""));
  const imageHeight = isMobile || height > maxHeight ? "100%" : "100vh";

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SectionBackGroundStyled style={{ height: imageHeight }}>
      <GridWrapper container>
        <GridImageWrapper item xs={isMobile ? 12 : 6}>
          {isMobile && (
            <MainTitleStyled style={{ padding: "0px 30px 50px" }}>
              {title}
            </MainTitleStyled>
          )}
          <HeroImgStyled
            style={{
              height: imageHeight,
            }}
            src={image}
            alt="Perspective view"
          />
        </GridImageWrapper>
        <GridUpperTextWrapper item xs={isMobile ? 12 : 6}>
          <GridTextWrapper>
            {!isMobile && <MainTitleStyled>{title}</MainTitleStyled>}
            <MainTextStyled>{text}</MainTextStyled>
          </GridTextWrapper>
        </GridUpperTextWrapper>
      </GridWrapper>
    </SectionBackGroundStyled>
  );
};

export default Story;
