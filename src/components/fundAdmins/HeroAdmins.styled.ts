import styled from "styled-components";
import { Grid } from "@mui/material";
import theme from "../../theme";
import hero from "../../assets/images/hero/grid/Xplain_Graphic Patterns-01_Transparent.svg";
import { device } from "../../utils/device";

interface ColumnData {
  image: string;
  text: string;
  idx: number;
}

export const data: ColumnData[] = [
  {
    image: hero,
    idx: 1,
    text: "Lumina page theme",
  },
];

export const SectionStyled = styled.section`
  background-color: ${theme.palette.primary.main};
  // height: calc(100vh - 104px);

  @media ${device.mobileOnly} {
    height: auto;
  }

  @media ${device.smallTablet} {
    // height: calc(100vh - 104px);
  }
`;

export const ContainerStyled = styled(Grid)`
  display: grid;
  grid-template-columns: 50% 50%;

  @media ${device.mobileOnly} {
    display: block !important;
  }

  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
  }
`;

export const GridItemStyled = styled(Grid)`
  display: flex;
  flex-direction: column !important;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 100%;

  @media ${device.mobileOnly} {
    display: block !important;
    padding: 30px 30px 0px;
    max-width: 100% !important;
  }
  @media ${device.smallTablet} {
    padding: 24px;
  }

  @media ${device.ultraLarge} {
    padding: 120px;
  }
`;

export const HeroImgStyled = styled.img`
  width: 100%;

  @media ${device.mobileOnly} {
    min-height: 375px;
    max-height: 675px;
    width: 100vw;
  }
`;

export const LuminaLogoStyled = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 25px;
`;
