import React from "react";
import { Link } from "react-router-dom";
import {
  ContentStyled,
  TitleStyled,
  ParagraphStyled,
  PaperStyled,
  TextStyled,
  ButtonStyled,
  ButtonWrapper,
  GridContentItem,
} from "./TwoColumnsComponent.styled";
import useMatchMedia from "../../../hooks/useMediaQuery";

interface ContentColumnProps {
  data: {
    paragraph: string;
    title: string;
    text: string;
    secondaryText: string;
    link: string;
    logo: string;
  };
  isOdd: string;
}

const ContentColumnComponent: React.FC<ContentColumnProps> = ({
  data,
  isOdd,
}) => {
  const { isMobile, isUltraLarge } = useMatchMedia();
  const { title, text, link, secondaryText, paragraph, logo } = data;

  return (
    <GridContentItem item xs={12} sm={6} isOdd={isOdd}>
      <PaperStyled
        style={{
          padding: isMobile ? "50px 30px" : "50px 70px",
          alignItems: isUltraLarge ? "center" : undefined,
          justifyContent: "center",
        }}
      >
        <ContentStyled>
          <ParagraphStyled>{paragraph}</ParagraphStyled>
        </ContentStyled>

        <ContentStyled key={link}>
          <img alt={link} src={logo} />
          <TitleStyled
            style={{
              marginBottom: 30,
              textAlign: isMobile ? "left" : "justify",
            }}
          >
            {title}
          </TitleStyled>
          <TextStyled style={{ fontWeight: "bold", marginBottom: 30 }}>
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
