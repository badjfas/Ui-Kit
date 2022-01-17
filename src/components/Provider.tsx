import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../theme";
import { Theme } from "@mui/material";
const Provider: React.FC<{ theme?: Theme }> = ({
  theme: muiTheme,
  children,
}) => {
  return (
    <ThemeProvider theme={{ ...muiTheme, ...theme }}>{children}</ThemeProvider>
  );
};
export default Provider;
