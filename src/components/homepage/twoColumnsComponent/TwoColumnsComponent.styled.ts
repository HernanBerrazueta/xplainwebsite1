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

export const GridContentItem = styled.div`
  padding: 0 !important;

  @media ${device.smallTablet} {
    flex: 1 1 0;
  }
`;

export const GridImageItem = styled(GridContentItem)<{ $isodd: string }>`
  @media ${device.smallTablet} {
    flex: 1 1 0;
    max-width: ${({ $isodd }) => $isodd === "true" && "60% !important"};
  }
`;

export const GridStyled = styled(Grid)`
  margin: 0;
  width: 100%;

  @media ${device.smallTablet} {
    display: flex;
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
  text-align: left;
`;
export const TitleStyled = styled.div`
  font-family: "CircularXXWeb-Medium", sans-serif;
  font-size: 22px;
  text-align: left;
  font-weight: bold;
  margin-top: 50px;
  color: #7f60d5;

  @media ${device.ultraLarge} {
    max-width: 700px;
    font-size: 36px;
  }
`;

export const ParagraphStyled = styled.p`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
  color: ${theme.palette.primary.main};

  @media ${device.mobileOnly} {
    margin: 50px 30px 0;
  }

  @media screen and (min-width: 600px) {
    margin: 50px auto;
    max-width: 90%;
  }

  @media ${device.tablet} {
    max-width: 95%;
    font-size: 36px;
  }

  @media ${device.desktop} {
    max-width: 1000px;
    font-size: 36px;
  }
`;

export const TextStyled = styled.p`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 22px;
  text-align: left;
  margin-top: 10px;
  word-spacing: -1px;
  letter-spacing: -0.5px;
  color: ${theme.palette.primary.main};

  @media ${device.tablet} {
    max-width: 400px;
  }
  @media ${device.desktop} {
    max-width: 600px;
  }
  @media ${device.ultraLarge} {
    max-width: 700px;
    font-size: 23px;
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
