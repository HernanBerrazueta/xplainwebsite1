import styled from "styled-components";
import { Grid } from "@mui/material";
import { device } from "../../../utils/device";

export const ColumnStyled = styled(Grid)`
  display: flex;

  @media ${device.mobileOnly} {
    justify-content: center;
  }
`;

export const mainText =
  "Whether you work with funds or in a corporate treasury, Xplain gives ongoing access to valuations and data quality control – so you can make better-informed decisions, faster.";

export const mainTitle =
  "Xplain is dedicated to giving finance professionals greater clarity and control when working with derivatives.";

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
  }
`;
