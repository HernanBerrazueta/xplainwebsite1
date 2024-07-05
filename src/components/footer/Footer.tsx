import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Toolbar, Box } from "@mui/material";
import logo from "../../assets/logos/xplain.svg";
import {
  FooterContainer,
  LogoImage,
  LinkStyled,
  Paragraph,
  ProductParagraph,
  BoxStyled,
  AddressWrapper,
  LinksWrapper,
  footerText,
  productText,
} from "./Footer.styled";
import { linkData, addressData } from "./data";
import Copyright from "./copyright/Copyright";
import useMatchMedia from "../../hooks/useMediaQuery";
import FooterForm from "./FooterForm";
import theme from "../../theme";

const Footer: React.FC = () => {
  const { isMobile, isTablet, isLaptop } = useMatchMedia();
  const footerTextRef = useRef<HTMLParagraphElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(
    undefined
  );
  let bgColor = theme.palette.primary.light;
  let btnColor = theme.palette.text.primary;

  useEffect(() => {
    if (footerTextRef.current) {
      setContainerWidth(footerTextRef.current.offsetWidth);
    }
  }, [isMobile, isTablet, isLaptop]);

  return (
    <FooterContainer>
      <Toolbar
        style={{
          display: isMobile ? "block" : "flex",
          alignItems: "flex-start",
          maxWidth: "2788px",
          margin: "0 auto",
        }}
      >
        <BoxStyled style={{ minWidth: 130 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LogoImage src={logo} alt="Footer Logo" />
          </Link>
          <Link
            to="https://solum-financial.com/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ProductParagraph
              variant="body2"
              style={{
                maxWidth: 145,
              }}
            >
              {productText}
            </ProductParagraph>
          </Link>
        </BoxStyled>
        <LinksWrapper>
          {!isMobile &&
            linkData.map(({ to, text, subText }) => (
              <LinkStyled key={to} to={to}>
                <span style={{ color: "lime" }}>{text}</span>
                {subText}
              </LinkStyled>
            ))}
        </LinksWrapper>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: isMobile ? 0 : isTablet ? 10 : isLaptop ? 50 : 65,
            marginTop: isMobile ? 50 : 0,
            gap: 20,
            maxWidth: containerWidth,
            width: "100%",
          }}
        >
          <Paragraph
            ref={footerTextRef}
            style={{
              maxWidth: isTablet ? 150 : isLaptop ? undefined : 380,
              fontSize: isMobile ? "16px" : undefined,
            }}
            variant="body2"
          >
            {footerText}
          </Paragraph>
          <FooterForm
            containerWidth={containerWidth}
            bgColor={bgColor}
            btnColor={btnColor}
          />
        </Box>
        <AddressWrapper>
          {addressData.map(({ text, marginBottom }) =>
            text.includes("Join") ? (
              <a
                key={text}
                href="https://www.linkedin.com/company/xplainfinancial/about/?viewAsMember=true"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Paragraph
                  key={text}
                  variant="body2"
                  sx={{ marginBottom: marginBottom || 0 }}
                  style={{
                    borderBottom: text.includes("Join")
                      ? "1px solid lime"
                      : "none",
                    display: text.includes("Join") ? "inline-block" : "block",
                  }}
                >
                  {text}
                </Paragraph>
              </a>
            ) : (
              <Paragraph
                key={text}
                variant="body2"
                sx={{ marginBottom: marginBottom || 0 }}
              >
                {text}
              </Paragraph>
            )
          )}
        </AddressWrapper>
      </Toolbar>
      <Copyright />
    </FooterContainer>
  );
};

export default Footer;
