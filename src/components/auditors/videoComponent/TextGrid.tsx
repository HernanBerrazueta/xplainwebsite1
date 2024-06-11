import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import {
  mainTitle1,
  gridItem1,
  mainText,
} from "../../treasurers/videoComponent/VideoComponent.styled";

const TextGrid = () => {
  const theme = useTheme();

  return (
    <Grid item xs={6} style={gridItem1}>
      <h1 style={mainTitle1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <p style={{ ...mainText, color: theme.palette.text.primary }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lorem
        ex, tincidunt eu efficitur vitae, blandit a lectus. Integer dictum
        varius magna, rhoncus consequat dui euismod nec.
      </p>
    </Grid>
  );
};

export default TextGrid;
