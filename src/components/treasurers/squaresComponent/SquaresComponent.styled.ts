import { Grid } from "@mui/material";
import styled from "styled-components";
import { device } from "../../../utils/device";

export const ContainerStyled = styled.div`
  background-color: #fff;
  padding: 24px;

  @media ${device.desktop} {
    padding: 50px;
  }
`;

export const GridWrapper = styled(Grid)`
  margin: 0px !important;
  width: 100% !important;
  gap: 24px;

  @media ${device.smallTablet} {
    height: 300px;
  }
  @media ${device.desktop} {
    height: 450px;
  }
`;

export const GridInner = styled(Grid)`
  padding: 0px !important;
  flex: 1 !important;
`;

export const PaperStyled = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  text-align: center;

  box-shadow: none;
  height: 100%;

  @media ${device.smallTablet} {
    padding: 40px 24px;
  }

  @media ${device.tablet} {
    padding: 60px 40px;
  }

  @media ${device.desktop} {
    padding: 100px 50px;
  }
`;

export const TitleStyled = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  text-align: center;

  @media ${device.smallTablet} {
    font-size: 24px;
    width: 175px;
  }
  @media ${device.tablet} {
    width: 225px;
  }
  @media ${device.desktop} {
    font-size: 32px;
    width: 300px;
  }
`;

export const Line = styled.div`
  width: 120px;
  height: 2px;
  background-color: #00ff00;
`;
