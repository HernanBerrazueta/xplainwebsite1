import styled from "styled-components";
import hero from "../../../assets/images/hero/grid/xplain_hero.svg";
import grid_2 from "../../../assets/images/hero/grid/Xplain_Graphic Patterns-03_Transparent.svg";
import grid_3 from "../../../assets/images/hero/grid/Xplain_Graphic Patterns-02_Transparent.svg";
import grid_4 from "../../../assets/images/hero/grid/Xplain_Graphic Patterns-05_Transparent.svg";
import grid_5 from "../../../assets/images/hero/grid/Xplain_Graphic Patterns-01_Transparent.svg";
import grid_6 from "../../../assets/images/articles/Xplain_Graphic Patterns-04.svg";
import theme from "../../../theme";
import { Button, Grid } from "@mui/material";
import { device } from "../../../utils/device";

interface ColumnData {
  image: string;
  text: string;
  idx: number;
}

export const data: ColumnData[] = [
  {
    image: hero,
    idx: 1,
    text: "Main title",
  },
  {
    image: grid_2,
    idx: 2,
    text: "Prisma title",
  },
  {
    image: grid_3,
    idx: 3,
    text: "Articles title",
  },
  {
    image: grid_4,
    idx: 4,
    text: "Aurea title",
  },
  {
    image: grid_5,
    idx: 5,
    text: "Lumina title",
  },
  {
    image: grid_6,
    idx: 6,
    text: "Insights",
  },
];

export const SectionBackGroundStyled = styled.div`
  background-color: ${theme.palette.primary.main};

  @media ${device.mobileOnly} {
    height: 100%;
  }
`;

export const ContainerStyled = styled(Grid)`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media ${device.mobileOnly} {
    display: block !important;
  }

  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
  }
`;

export const LogoStyled = styled.img`
  height: auto;
`;

export const MainTitleStyled = styled.h3`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-optical-sizing: auto;
  margin-bottom: 30px;

  color: #fff;

  @media ${device.mobileOnly} {
    font-size: 24px;
    line-height: 1.5;
    padding-bottom: 50px;
    margin-bottom: 0px;
  }
  @media ${device.smallTablet} {
    font-size: 24px;
  }
  @media ${device.tablet} {
    font-size: 36px;
  }

  @media ${device.desktop} {
    font-size: 36px;
  }

  @media ${device.ultraLarge} {
    font-size: 36px;
  }
`;

export const MainTextStyled = styled.p`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-optical-sizing: auto;
  font-size: 22px;
  line-height: 1;
  margin-bottom: 30px;
  text-align: left;
  color: ${theme.palette.text.secondary};

  @media ${device.mobileOnly} {
    font-size: 16px;
    padding: 50px 30px;
    margin-bottom: 0px;
  }
  @media ${device.smallTablet} {
    font-size: 14px;
  }

  @media ${device.tablet} {
    font-size: 22px;
  }

  @media ${device.ultraLarge} {
    font-size: 23px;
  }
`;

export const SectionStyled = styled.section`
  @media ${device.mobileOnly} {
    display: block !important;
    max-width: 100% !important;
    height: 100%;
  }
`;
export const GridWrapperStyled = styled(Grid)`
  flex: 1;
  justify-content: center;
  align-items: center;

  @media ${device.mobileOnly} {
    display: block !important;
  }
`;

export const GridItemStyled = styled(Grid)`
  display: flex;
  flex-direction: column !important;
  text-align: left;
`;
export const GridImagesStyled = styled.img`
  object-fit: inherit;
  width: 100vw;
  max-width: 100%;

  @media ${device.mobileOnly} {
    max-height: 375px;
  }
`;

export const ReverseButtonStyle = styled(Button)`
  font-family: "CircularXXWeb-Regular", sans-serif !important;
  font-size: 14px !important;
  color: ${theme.palette.primary.light} !important;
  background-color: ${theme.palette.text.primary} !important;
  text-transform: capitalize !important;
  border-radius: 4px;
`;

export const ButtonStyled = styled(Button)`
  font-family: "CircularXXWeb-Regular", sans-serif !important;
  background-color: #03ff00d4 !important;
  color: ${theme.palette.primary.main} !important;
  text-transform: capitalize !important;
  font-size: 18px !important;
  margin-top: 40px !important;

  &: hover {
    background-color: ${theme.palette.secondary.main} !important;
  }
`;
