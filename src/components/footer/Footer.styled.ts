import styled from "styled-components";
import { Typography, Button, Box } from "@mui/material";
import theme from "../../theme";
import { device } from "../../utils/device";
import { Link } from "react-router-dom";

export const productText = "A Solum Financial Product";
export const footerText =
  "We'd like to stay in touch by email to let you know about events, product launches and to share insights into the changing derivatives landscape.";

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  background-color: ${theme.palette.primary.main};
  padding: 50px 0;

  @media ${device.mobileOnly} {
    padding: 30px 14px;
  }
`;

export const LogoImage = styled.img`
  height: 25px;
  margin-bottom: 10px;

  @media ${device.mobileOnly} {
    height: 20px;
  }
`;

export const LinkedInLogoImage = styled.img`
  height: 25px;
`;

export const LinkStyled = styled(Link)`
  color: #805cdd;
  font-family: "CircularXXWeb-Regular", sans-serif !important;
  font-size: 14px;

  text-decoration: none;
  margin-bottom: 25px;

  @media ${device.mobileOnly} {
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const Paragraph = styled(Typography)`
  font-family: "CircularXXWeb-Regular", sans-serif !important;

  font-size: 17px;
  color: ${theme.palette.text.secondary};
  margin-bottom: 5px;
  max-width: 250px;

  @media ${device.smallTablet} {
    font-size: 16px !important;
  }

  @media ${device.tablet} {
    max-width: 300px;
  }
`;

export const ProductParagraph = styled(Paragraph)`
  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonStyled = styled(Button)`
  font-family: "CircularXXWeb-Regular", sans-serif !important;
  background-color: #805cdd;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 20px;

  @media ${device.mobileOnly} {
    font-size: 14px;
  }
`;

export const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media ${device.mobileOnly} {
    margin-left: 0px;
  }

  @media ${device.smallTablet} {
    margin-left: 0px;
  }

  @media ${device.desktop} {
    margin-left: 50px;
  }
`;

export const AddressWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  margin-right: 10px;

  @media ${device.mobileOnly} {
    margin-top: 30px;
    align-items: flex-start;
  }
`;

export const SpanStyled = styled.span`
  text-transform: capitalize;
`;

export const LinksWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 200px;
  max-width: 250px;
  margin-left: 50px;

  @media ${device.desktop} {
    margin-left: 80px;
  }

  @media ${device.smallTablet} {
    margin-left: 40px;
  }

  @media ${device.desktop} {
    margin-left: 80px;
  }
`;
