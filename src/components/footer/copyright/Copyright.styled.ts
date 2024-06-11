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
  "Registered office: 43-45 DORSET STREET, 2F, London, W1U 7NA";

export const copyright =
  "Copyright \u00A9 2024 Solum Financial Limited | All Rights Reserved.";

export const CopyrightWrapper = styled(Grid)`
  background-color: ${theme.palette.primary.main};
  height: 50px;
  color: #e6e6e6;
  font-size: 12px;
  justify-content: space-around;
  align-items: center;
`;

export const SpanWrapper = styled.div`
  background-color: ${theme.palette.primary.main};
  display: inline-block;

  @media ${device.mobileOnly} {
    padding: 0 30px;
    width: 100%;
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
    padding: 16px 30px;
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
