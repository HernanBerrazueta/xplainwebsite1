import React from "react";
import Grid from "@mui/material/Grid";
import { sectionStyle, container } from "./ContactUsComponent.styled";
import HeaderColumn from "./HeaderColumn";
import useMatchMedia from "../../../hooks/useMediaQuery";
import { NoView } from "../../hero/Hero.styled";
import MapComponent from "../map/MapComponent";
import theme from "../../../theme";
import { addressData, getLinkProps } from "../../footer/data";

const ContactUsComponent: React.FC = () => {
  const { isMobile, isTablet, isUltraLarge } = useMatchMedia();

  const addressLines = addressData.map(({ text, marginBottom }, index) => {
    const linkProps = getLinkProps(text);
    if (linkProps) {
      return (
        <p key={index} style={{ marginBottom: `${marginBottom}rem` }}>
          <b>
            <a {...linkProps}>{text}</a>
          </b>
        </p>
      );
    } else {
      return (
        <p key={index} style={{ marginBottom: `${marginBottom}rem` }}>
          {text}
        </p>
      );
    }
  });

  let fontSize;
  if (isUltraLarge) {
    fontSize = 36;
  } else if (isMobile) {
    fontSize = 22;
  } else {
    fontSize = 22;
  }

  return (
    <NoView>
      <section style={sectionStyle}>
        <Grid container style={container}>
          <Grid
            item
            xs={12}
            md={4}
            style={{ marginTop: "48px", paddingLeft: isMobile ? "30px" : 0 }}
          >
            <HeaderColumn title="Contact Us" />
          </Grid>
          <Grid
            item
            xs={isMobile ? 12 : 6}
            md={4}
            style={{
              color: theme.palette.primary.main,
              margin: isTablet ? "50px 0 50px 80px" : "50px 0",
              paddingLeft: isMobile ? "30px" : 0,
              fontSize: fontSize,
              lineHeight: 1.5,
            }}
          >
            {addressLines}
          </Grid>
          <MapComponent />
        </Grid>
      </section>
    </NoView>
  );
};

export default ContactUsComponent;
