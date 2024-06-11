import { Button, Grid } from "@mui/material";
import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const ContainerStyled = styled.div`
  background-color: ${theme.palette.text.primary};

  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
  }
`;

export const GridContentItem = styled(Grid)<{ isOdd: string }>`
  padding: 0 !important;

  @media ${device.smallTablet} {
    max-width: ${({ isOdd }) => isOdd === "true" && "40% !important"};
  }
`;

export const GridImageItem = styled(GridContentItem)<{ isOdd: string }>`
  @media ${device.smallTablet} {
    max-width: ${({ isOdd }) => isOdd === "true" && "60% !important"};
  }
`;

export const GridStyled = styled(Grid)<{ isOdd: string }>`
  margin: 0 !important;
  width: 100% !important;
  @media ${device.smallTablet} {
    justify-content: ${({ isOdd }) => isOdd === "true" && "center !important"};
  }
`;

export const PaperStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  box-shadow: none;

  position: relative;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SvgOverlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const ContentStyled = styled.div`
  text-align: justify;
`;
export const TitleStyled = styled.div`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 24px;
  text-align: justify;
  font-weight: bold;
  margin-top: 50px;
  color: #7f60d5;
`;

export const ParagraphStyled = styled.p`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: justify;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 450px;
  color: #312253;

  @media ${device.tablet} {
    font-size: 22px;
    max-width: 400px;
    margin-bottom: 50px;
  }

  @media ${device.desktop} {
    font-size: 28px;
    max-width: 600px;
  }
`;

export const TextStyled = styled.p`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 16px;
  text-align: justify;
  margin-top: 10px;
  word-spacing: -1px;
  letter-spacing: -0.5px;
  color: ${theme.palette.primary.main};

  @media ${device.tablet} {
    max-width: 400px;
  }
  @media ${device.desktop} {
    font-size: 22px;
    max-width: 600px;
  }
`;
export const ButtonWrapper = styled.div`
  text-align: left;
  margin-top: 20px;

  @media ${device.mobileOnly} {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonStyled = styled(Button)`
  font-family: "CircularXXWeb-Regular", sans-serif !important;
  font-size: 18px;
  border-radius: 4px;
`;
