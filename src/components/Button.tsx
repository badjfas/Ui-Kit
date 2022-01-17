import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

const Button: React.FC<MuiButtonProps> = ({ children, ...rest }) => {
  return (
    <MuiButton
      {...rest}
      disableElevation
      disableFocusRipple={rest.variant === "text"}
      disableRipple={rest.variant === "text"}
      disableTouchRipple={rest.variant === "text"}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
