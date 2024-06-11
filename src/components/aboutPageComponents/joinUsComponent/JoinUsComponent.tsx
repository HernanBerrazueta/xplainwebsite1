import React from "react";
import Grid from "@mui/material/Grid";
import { sectionStyle, container, flex } from "./JoinUsComponent.styled";
import TextButton from "./TextButton";
import HeaderColumn from "./HeaderColumn";

const JoinUsComponent: React.FC = () => {
  return (
    <section style={sectionStyle}>
      <Grid container style={{ ...container, padding: "80px 0" }}>
        <Grid item xs={12} md={4}>
          <HeaderColumn title="Join Us" />
        </Grid>
        <Grid item xs={6} md={4} style={flex}>
          <TextButton
            title="Position Available 1"
            text="Lorem ipsum dolor sit amet, consectetur adiniscina alit. Ouisque lorem ex. tincidunt eu efficitur vitae, blandit a lectus. Integer dictum varius magna, rhoncus consequat dur euismod nec."
          />
        </Grid>
        <Grid item xs={6} md={4} style={flex}>
          <TextButton
            title="Position Available 2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lorem ex, tincidunt eu efficitur vitae, blandit a lectus. Integer dictum varius magna, rhoncus consequat du euismod nec. Integer dictum varius magna,rhoncus consequat du euismod nec."
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default JoinUsComponent;
