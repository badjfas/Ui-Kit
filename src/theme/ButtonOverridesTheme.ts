import { OverridesStyleRules } from "@mui/material/styles/overrides";
import colorSet from "./colorSet";
import { ButtonClasses } from "@mui/material";

const ButtonOverridesTheme: Partial<OverridesStyleRules<keyof ButtonClasses>> =
  {
    root: {
      fontFamily: ["Noto Sans KR", "sans-serif"].join(", "),
      "&.Mui-disabled": {
        backgroundColor: colorSet.gray[200],
        color: `${colorSet.gray[500]} !important`,
        fontWeight: 500,
      },
    },
    containedSecondary: {
      backgroundColor: colorSet.gray[200],
      color: colorSet.gray[900],
      "&:hover": {
        backgroundColor: colorSet.gray[400],
      },
    },
    containedPrimary: {
      backgroundColor: colorSet.primary[500],
      color: "#fff",
      "&:hover": {
        backgroundColor: colorSet.primary[600],
      },
    },
    containedSuccess: {
      backgroundColor: colorSet.success["main"],
      "&:hover": {
        backgroundColor: colorSet.success["dark"],
      },
    },
    containedError: {
      backgroundColor: colorSet.error["main"],
      "&:hover": {
        backgroundColor: colorSet.error["dark"],
      },
    },
    outlinedPrimary: {
      border: `1px solid ${colorSet.primary[500]}`,
      color: colorSet.primary[500],
      "&:hover": {
        backgroundColor: colorSet.primary[100],
      },
    },
    outlinedSecondary: {
      border: `1px solid ${colorSet.gray[600]}`,
      color: colorSet.gray[900],
      "&:hover": {
        backgroundColor: colorSet.gray[100],
        border: `1px solid ${colorSet.gray[600]}`,
      },
    },
    outlinedSuccess: {
      border: `1px solid ${colorSet.success["main"]}`,
      color: colorSet.success["main"],
      "&:hover": {
        backgroundColor: colorSet.success["background"],
        border: `1px solid ${colorSet.success["main"]}`,
      },
    },
    outlinedError: {
      border: `1px solid ${colorSet.error["main"]}`,
      color: colorSet.error["main"],
      "&:hover": {
        backgroundColor: colorSet.error["background"],
        border: `1px solid ${colorSet.error["main"]}`,
      },
    },
    sizeLarge: {
      height: 48,
      padding: "12px 16px",
      fontSize: 16,
    },
    sizeMedium: { height: 40, padding: "10px 16px", fontSize: 14 },
    sizeSmall: {
      height: 32,
      padding: "6px 9px",
      fontSize: 14,
    },
    text: {
      padding: 0,
      fontSize: 16,
      lineHeight: "150%",
      fontWeight: 500,
      color: colorSet.gray[900],
      "&:hover": {
        backgroundColor: `#fff !important`,
      },
    },
    textSizeLarge: {
      height: 24,
      padding: 0,
      fontSize: 16,
      lineHeight: "150%",
      fontWeight: 500,
    },
    textSizeMedium: {
      height: 24,
      padding: 0,
      fontSize: 16,
      lineHeight: "150%",
      fontWeight: 500,
    },
    textSizeSmall: {
      height: 20,
      padding: 0,
      fontSize: 14,
      lineHeight: "143%",
      fontWeight: 500,
      color: colorSet.gray[900],
    },
    startIcon: {
      width: 20,
      height: 20,
      marginRight: 4,
      "& svg": {
        width: "100%",
        height: "100%",
      },
    },
    endIcon: {
      width: 20,
      height: 20,
      marginLeft: 4,
      "& svg": {
        width: "100%",
        height: "100%",
      },
    },
  };

export default ButtonOverridesTheme;
