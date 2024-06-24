import { createTheme } from "@mui/material/styles";
import detectOS from "./utils/detectOS";

const os = detectOS();
const primaryColor = os === "macOS" ? "#36265d" : "#302253";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor, //switching based on OS
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
