import React from "react";
import { Link } from "react-router-dom";
import {
  ContentStyled,
  TitleStyled,
  PaperStyled,
  TextStyled,
  ButtonStyled,
  ButtonWrapper,
  GridContentItem,
} from "./TwoColumnsComponent.styled";
import useMatchMedia from "../../../hooks/useMediaQuery";

interface ContentColumnProps {
  data: {
    title: string;
    text: string;
    secondaryText: string;
    link: string;
    logo: string;
  };
}

const ContentColumnComponent: React.FC<ContentColumnProps> = ({ data }) => {
  const { isMobile, isUltraLarge } = useMatchMedia();
  const { title, text, link, secondaryText, logo } = data;

  return (
    <GridContentItem>
      <PaperStyled
        style={{
          padding: isMobile ? "50px 30px" : "50px 70px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContentStyled key={link}>
          <img
            alt={link}
            src={logo}
            style={{ width: isUltraLarge ? "350px" : "auto" }}
          />
          <TitleStyled
            style={{
              marginBottom: 30,
            }}
          >
            {title}
          </TitleStyled>
          <TextStyled
            style={{
              fontFamily: "CircularXXWeb-Bold, sans-serif",
              marginBottom: 30,
            }}
          >
            {text}
          </TextStyled>
          <TextStyled style={{ marginBottom: 30 }}>{secondaryText}</TextStyled>
          <ButtonWrapper>
            <Link to={`/${link}`}>
              <ButtonStyled variant="contained" color="primary">
                <span style={{ textTransform: "capitalize" }}>Learn More</span>
              </ButtonStyled>
            </Link>
          </ButtonWrapper>
        </ContentStyled>
      </PaperStyled>
    </GridContentItem>
  );
};

export default ContentColumnComponent;
