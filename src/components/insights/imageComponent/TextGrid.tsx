import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import theme from "../../../theme";
import {
  mainTitle1,
  gridItem1,
  mainText,
  anchor,
} from "../../treasurers/videoComponent/VideoComponent.styled";

const TextGrid = () => {
  return (
    <Grid item xs={6} style={gridItem1}>
      <h1 style={{ ...mainTitle1, maxWidth: 320 }}>
        How we're helping BNYM sell their process to new clients
      </h1>
      <p style={{ ...mainText, color: theme.palette.text.primary }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lorem
        ex, tincidunt eu efficitur vitae, blandit a lectus. Integer dictum
        varius magna, rhoncus consequat dui euismod nec.
      </p>
      <Link to="/article/1001" style={anchor}>
        <p>See more</p>
      </Link>
    </Grid>
  );
};

export default TextGrid;
