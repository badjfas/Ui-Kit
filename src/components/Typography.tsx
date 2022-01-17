import React from "react";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";
import colorSet from "../theme/colorSet";
export type CapaTypographyColor =
  | "success"
  | "primary"
  | "textPrimary"
  | "textSecondary"
  | "error"
  | "warning"
  | "default";
export type CapaFontWeight = "normal" | "medium" | "bold";
const setFontWeight = (fontWeight?: CapaFontWeight) => {
  switch (fontWeight) {
    case "normal": {
      return "400";
    }
    case "medium": {
      return "500";
    }
    case "bold": {
      return "700";
    }
    default: {
      return "400";
    }
  }
};

const setColor = (color?: CapaTypographyColor) => {
  switch (color) {
    case "success": {
      return colorSet.success["main"];
    }
    case "primary": {
      return colorSet.primary[500];
    }
    case "textSecondary": {
      return colorSet.gray[700];
    }
    case "textPrimary": {
      return colorSet.gray[900];
    }
    case "error": {
      return colorSet.error["main"];
    }
    case "warning": {
      return colorSet.warning["main"];
    }
    default: {
      return colorSet.gray[900];
    }
  }
};

interface CapaTypography extends Omit<TypographyProps, "color" | "fontWeight"> {
  color: CapaTypographyColor | "default";
  fontWeight: CapaFontWeight | "normal";
}

const Typography: React.FC<CapaTypography> = ({
  children,
  color = "default",
  fontWeight = "normal",
  ...rest
}) => {
  const getFontWeight = setFontWeight(fontWeight);
  const getColor = setColor(color);

  return (
    <MuiTypography
      sx={{ ...rest.sx, color: getColor, fontWeight: getFontWeight }}
      {...rest}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
