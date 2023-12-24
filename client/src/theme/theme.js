import { createTheme } from "@mui/material/styles";
import Georgia from "../fonts/georgia/georgia.ttf";
import Montserat from "../fonts/montserrat/Montserrat-VariableFont_wght.ttf";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF343",
      light: "#FFF5B5",
      dark: "#FFB042",
      black: "#1A1A1A",
      white: "#F4FFEE",
    },
    secondary: {
      main: "#1A1A1A",
    }
  },
  typography: {
    fontFamily: "Montserat, Medium",
    addition: {
      fontFamily: "Georgia, Regular",
    },
  },
});

export default theme;
