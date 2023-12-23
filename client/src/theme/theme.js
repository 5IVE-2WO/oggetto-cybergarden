import { createTheme } from "@mui/material/styles";

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
    fontFamily: "Montserat, Regular",
    addition: {
      fontFamily: "Georgia, Regular",
    },
  },
});

export default theme;
