import styled from "styled-components";
import { Grid } from "@mui/material";
import theme from "../../../theme";
import { Link } from "react-router-dom";
import { device } from "../../../utils/device";

export const CommentsContainerStyled = styled.section`
  background-color: ${theme.palette.text.secondary};
  padding: 50px;
`;

export const CardStyled = styled(Grid)`
  display: flex;
  gap: 24px;

  @media ${device.mobileOnly} {
    display: block;
  }

  @media ${device.copyright} {
    max-width: 1536px;
    margin: 0 auto;
  }
`;

export const LinkStyled = styled(Link)`
  color: inherit;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: transparent;
    transition: background-color 0.3s ease-out;
  }

  &:hover::after {
    background-color: ${theme.palette.primary.light};
  }
`;

export const InnerCardStyled = styled(Grid)`
  flex: 1;
  background-color: ${theme.palette.text.primary};
  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;

  &: hover {
    box-shadow: 0 2px 4px rgba(40, 41, 61, 0.04),
      0 8px 16px rgba(96, 97, 112, 0.16);
  }

  @media ${device.mobileOnly} {
    &:not(:last-child) {
      margin-bottom: 24px !important;
    }
  }
`;

export const TitleStyled = styled.h3`
  display: inline-block;
  text-align: left;
  font-weight: 500;
  font-size: 14px;

  margin-bottom: 10px;

  color: ${theme.palette.primary.light};
`;

export const TextStyled = styled.p`
  text-align: left;
  line-height: 1.5;
  margin-top: 20px;
`;
