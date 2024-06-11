import styled from "styled-components";
import { Grid } from "@mui/material";
import { device } from "../../utils/device";

export const GridWrapper = styled(Grid)`
  display: flex;
  grid-template-columns: 50% 50%;
  justify-content: center;
  height: inherit;

  @media ${device.mobileOnly} {
    display: block !important;
  }

  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
  }
`;

export const GridImageWrapper = styled(Grid)`
  max-width: 100%;
  height: auto;
`;
export const GridUpperTextWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;

  @media ${device.mobileOnly} {
    display: block !important;
  }
`;
export const GridTextWrapper = styled(Grid)`
  padding: 80px;

  @media ${device.mobileOnly} {
    padding: 0px;
  }
`;
