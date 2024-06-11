import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // main: "#302353", //genuine color as per design
      // main: "#2e1a53", //color corresponds to old animation
      main: "#302253", //color corresponds to new animation
      light: "#805CDD",
    },
    secondary: {
      main: "#805CDD",
      light: "#03ff00",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#E6E6E6",
    },
  },
});

export default theme;
