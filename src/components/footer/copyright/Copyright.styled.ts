import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const policies = [
  { title: "Privacy Policy", to: "/privacy_policy" },
  { title: "Data Protection Policy", to: "/data_protection" },
  { title: "Cookies Policy", to: "/cookies" },
  { title: "ESG Commitment", to: "/esg_commitment" },
  { title: "Diversity and Inclusion", to: "/diversity_inclusion" },
];
export const office =
  "Registered office: 43-45 Dorset Street, 2F, London, W1U 7NA";

export const copyright =
  "Copyright \u00A9 2024 Solum Financial Limited | All Rights Reserved.";

export const CopyrightWrapper = styled(Grid)`
  background-color: ${theme.palette.primary.main};
  color: #e6e6e6;
  font-size: 12px;
  align-items: center;
  max-width: 2788px;
  margin: 0 auto;

  @media ${device.smallTablet} {
    height: 50px;

    justify-content: space-evenly;
    padding: 0px 24px;
    margin-top: 50px;
  }

  @media ${device.tablet} {
    flex-wrap: nowrap !important;
    justify-content: space-between;
  }
  @media ${device.desktop} {
  }
`;

export const SpanWrapper = styled.div`
  background-color: ${theme.palette.primary.main};
  display: inline-block;

  @media ${device.mobileOnly} {
    padding: 16px 16px 0;
    width: 100%;
  }
  @media ${device.smallTablet} {
    padding: 0 30px;
  }
  @media ${device.tablet} {
    padding: 0;
  }
`;

export const PoliciesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background-color: ${theme.palette.primary.main};

  @media ${device.mobileOnly} {
    display: block;
    padding: 16px 16px 0;
  }

  @media ${device.desktop} {
    width: auto;
  }
  @media ${device.ultraLarge} {
    gap: 100px;
  }
`;

export const PolicyLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }

  @media ${device.mobileOnly} {
    display: block;
    text-decoration: underline;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;
