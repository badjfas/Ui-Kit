import { createTheme } from "@mui/material";
import "./index.css";
import ButtonOverridesTheme from "./ButtonOverridesTheme";
import colorSet from "./colorSet";

const theme = createTheme({
  typography: {
    fontFamily: ["Noto Sans KR", "sans-serif"].join(", "),
    body1: {
      fontSize: 16,
      letterSpacing: "-0.1px",
      lineHeight: "150%",
      fontWeight: "normal",
    },
    body2: {
      fontSize: 14,
      letterSpacing: "-0.1px",
      lineHeight: "150%",
      fontWeight: "normal",
    },
    subtitle1: {
      fontSize: 18,
      letterSpacing: "-0.1px",
      lineHeight: "130%",
      fontWeight: "normal",
    },
    subtitle2: {
      fontSize: 13,
      letterSpacing: "-0.1px",
      lineHeight: "138%",
      fontWeight: "normal",
    },
    h1: {
      fontSize: 40,
      letterSpacing: "-0.1px",
      lineHeight: "160%",
      fontWeight: "normal",
    },
    h2: {
      fontSize: 32,
      letterSpacing: "-0.1px",
      lineHeight: "150%",
      fontWeight: "normal",
    },
    h3: {
      fontSize: 25,
      letterSpacing: "-0.1px",
      lineHeight: "160%",
      fontWeight: "normal",
    },
    h4: {
      fontSize: 20,
      letterSpacing: "-0.1px",
      lineHeight: "160%",
      fontWeight: "normal",
    },
    caption: {
      fontSize: 12,
      letterSpacing: "-0.1px",
      lineHeight: "150%",
      fontWeight: "normal",
    },
  },
  palette: {
    common: {
      white: "#fff",
      black: "#000",
    },
    text: {
      primary: "#343A40",
      secondary: "#868E96",
      disabled: "#CED4DA",
    },
    divider: "#F1F3F5",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        ...ButtonOverridesTheme,
      },
    },
  },
});

export default theme;
