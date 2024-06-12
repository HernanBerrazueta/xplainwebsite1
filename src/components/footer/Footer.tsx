import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Box } from "@mui/material";
import logo from "../../assets/logos/xplain.svg";
import linkedinLogo from "../../assets/logos/linkedin.svg";
import {
  FooterContainer,
  LogoImage,
  LinkStyled,
  Paragraph,
  ProductParagraph,
  ButtonStyled,
  BoxStyled,
  AddressWrapper,
  SpanStyled,
  LinksWrapper,
  LinkedInLogoImage,
  footerText,
  productText,
} from "./Footer.styled";
import { linkData, addressData } from "./data";
import Copyright from "./copyright/Copyright";
import useMatchMedia from "../../hooks/useMediaQuery";

const Footer: React.FC = () => {
  const { isMobile, isTablet, isLaptop } = useMatchMedia();

  return (
    <>
      <FooterContainer>
        <Toolbar
          style={{
            display: isMobile ? "block" : "flex",
            alignItems: "flex-start",
            maxWidth: "2788px",
            margin: "0 auto",
          }}
        >
          <BoxStyled style={{ minWidth: 125 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LogoImage src={logo} alt="Footer Logo" />
            </Link>
            <Link
              to="https://solum-financial.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <ProductParagraph variant="body2" style={{ maxWidth: 145 }}>
                {productText}
              </ProductParagraph>
            </Link>
          </BoxStyled>
          <LinksWrapper>
            {!isMobile &&
              linkData.map(({ to, text }) => (
                <LinkStyled key={to} to={to}>
                  {text}
                </LinkStyled>
              ))}
          </LinksWrapper>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: isMobile ? 0 : isTablet ? 10 : 65,
              marginTop: isMobile ? 50 : 0,
              gap: 20,
            }}
          >
            <Paragraph
              style={{
                maxWidth: isTablet ? 150 : isLaptop ? undefined : 380,
                fontSize: isMobile ? "18px" : undefined,
              }}
              variant="body2"
            >
              {footerText}
            </Paragraph>
            <Link to="/contact-us">
              <ButtonStyled variant="contained" color="secondary">
                <SpanStyled>Subscribe</SpanStyled>
              </ButtonStyled>
            </Link>
            <Link
              to="https://www.linkedin.com/company/solum-financial-partners-llp/"
              target="_blank"
            >
              <LinkedInLogoImage src={linkedinLogo} alt="LinkedIn Logo" />
            </Link>
          </Box>
          <AddressWrapper>
            {addressData.map(({ text, marginBottom }) => (
              <Paragraph
                key={text}
                variant="body2"
                sx={{ marginBottom: marginBottom || 0 }}
              >
                {text}
              </Paragraph>
            ))}
          </AddressWrapper>
        </Toolbar>
      </FooterContainer>
      <Copyright />
    </>
  );
};

export default Footer;
