import { DialogProps } from "@mui/material";
import React from "react";

interface ModalProps extends Omit<DialogProps, "open" | "onClose"> {
  open: boolean;
  onClose: () => void;
  icon?: React.ReactNode;
  title: string;
  variant?: "primary" | "success" | "error" | "default";
  renderButton?: () => React.ReactNode;
}

export default ModalProps;
