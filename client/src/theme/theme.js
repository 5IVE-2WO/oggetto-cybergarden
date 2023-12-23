import { createTheme } from "@mui/material/styles";
import OpenSans from "../fonts/OpenSans/OpenSans-VariableFont_wdth,wght.ttf";
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
  },
  typography: {
    fontFamily: "Montserat, Medium",
    addition: {
      fontFamily: "Open Sans, Regular",
    },
  },
});

export default theme;
