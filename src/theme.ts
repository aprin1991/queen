import { createTheme } from "@mui/material";
const baseTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "yekan",
    fontSize: 12,
  },
});
const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#0f161f",
      dark: "#0f161f",
      light: "#0f161f",
    },
    secondary: {
      main: "#0f161f",
    },
  },
  typography: {
    fontFamily: "yekan",
    fontSize: 12,
    h6: {
      color: "#fff",
      fontSize: 12,
    },
  },
});
const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#e6e6e6",
    },
    secondary: {
      main: "#26a27b",
    },
  },
  typography: {
    fontFamily: "yekan",
    fontSize: 12,
    h6: {
      color: "#fff",
      fontSize: 12,
    },
  },
});
export { darkTheme, lightTheme };
