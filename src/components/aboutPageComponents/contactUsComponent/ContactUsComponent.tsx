import React from "react";
import Grid from "@mui/material/Grid";
import { sectionStyle, container } from "./ContactUsComponent.styled";
import HeaderColumn from "./HeaderColumn";
import useMatchMedia from "../../../hooks/useMediaQuery";
import { NoView } from "../../hero/Hero.styled";
import MapComponent from "../map/MapComponent";

const ContactUsComponent: React.FC = () => {
  const { isMobile } = useMatchMedia();
  const { isTablet } = useMatchMedia();

  const address =
    "Gridiron Building,\n1 Pancras Sq,\nLondon,\nN1C 4AG\nPhone: +44 (0) 207 786 9230\nEmail: contact@solum-financial.com";

  const addressLines = address.split("\n").map((line, index) => {
    if (line.includes("Phone") || line.includes("Email")) {
      return (
        <p key={index}>
          <b>{line}</b>
        </p>
      );
    } else {
      return <p key={index}>{line}</p>;
    }
  });

  return (
    <NoView>
      <section style={sectionStyle}>
        <Grid container style={container}>
          <Grid
            item
            xs={12}
            md={4}
            style={{ marginTop: "40px", paddingLeft: isMobile ? "30px" : 0 }}
          >
            <HeaderColumn title="Contact Us" />
          </Grid>
          <Grid
            item
            xs={isMobile ? 12 : 6}
            md={4}
            style={{
              margin: isTablet ? "50px 0 50px 80px" : "50px 0",
              paddingLeft: isMobile ? "30px" : 0,
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
