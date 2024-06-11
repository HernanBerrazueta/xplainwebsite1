import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { paragraph, twoColumnData } from "./data";
import {
  ContentStyled,
  TitleStyled,
  ParagraphStyled,
  PaperStyled,
  TextStyled,
  ButtonStyled,
  ButtonWrapper,
} from "./TwoColumnsComponent.styled";
import useMatchMedia from "../../../hooks/useMediaQuery";

const ContentColumnComponent: React.FC = () => {
  const { isMobile, isUltraLarge } = useMatchMedia();

  return (
    <Grid item xs={12} sm={6} style={{ padding: 0 }}>
      <PaperStyled
        style={{
          padding: isMobile ? "50px 30px" : "50px 70px",
          alignItems: isUltraLarge ? "center" : undefined,
          justifyContent: isUltraLarge ? "center" : undefined,
        }}
      >
        <ContentStyled>
          <ParagraphStyled>{paragraph}</ParagraphStyled>
        </ContentStyled>
        {Object.values(twoColumnData).map(
          ({ title, link, text, secondaryText }) => (
            <ContentStyled key={link}>
              <TitleStyled>{title}</TitleStyled>
              <TextStyled style={{ fontWeight: "bold" }}>{text}</TextStyled>
              <TextStyled>{secondaryText}</TextStyled>
              <ButtonWrapper>
                <Link to={`/${link}`}>
                  <ButtonStyled variant="contained" color="secondary">
                    <span style={{ textTransform: "capitalize" }}>
                      Learn More
                    </span>
                  </ButtonStyled>
                </Link>
              </ButtonWrapper>
            </ContentStyled>
          )
        )}
      </PaperStyled>
    </Grid>
  );
};

export default ContentColumnComponent;
