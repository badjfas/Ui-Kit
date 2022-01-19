import { Avatar, Box, Dialog } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "../Typography";
import ModalProps from "./types";
import { GetApp } from "@mui/icons-material";
import colorSet from "../../theme/colorSet";

const StyledDialog = styled(Dialog)<ModalProps>(({ theme, variant }) => {
  const iconColor = () => {
    if (variant === "primary") {
      return {
        backgroundColor: colorSet.primary[200],
        "& svg": {
          color: colorSet.primary[500],
          width: 24,
          height: 24,
          [theme.breakpoints.down("sm")]: {
            width: 18,
            height: 18,
          },
        },
      };
    }

    if (variant === "error") {
      return {
        backgroundColor: colorSet.error["background"],
        "& svg": {
          color: colorSet.error["main"],
          width: 24,
          height: 24,
          [theme.breakpoints.down("sm")]: {
            width: 18,
            height: 18,
          },
        },
      };
    }

    if (variant === "success") {
      return {
        backgroundColor: colorSet.success["background"],
        "& svg": {
          color: colorSet.success["main"],
          width: 24,
          height: 24,
          [theme.breakpoints.down("sm")]: {
            width: 18,
            height: 18,
          },
        },
      };
    }

    return {
      backgroundColor: colorSet.primary[200],
      "& svg": {
        color: colorSet.primary[500],
        width: 24,
        height: 24,
        [theme.breakpoints.down("sm")]: {
          width: 18,
          height: 18,
        },
      },
    };
  };

  return {
    "& .MuiPaper-root": {
      maxWidth: 476,
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: 343,
        width: "100%",
      },
      "& .modal__title__section": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "32px 32px 0px 32px",
        [theme.breakpoints.down("sm")]: {
          padding: "24px 24px 0px 24px",
        },
      },
      "& .modal__title": {
        ...theme.typography.h3,
        fontWeight: 700,
        [theme.breakpoints.down("sm")]: {
          ...theme.typography.h4,
          fontWeight: 900,
        },
      },
      "& .modal__title__icon": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 42,
        height: 42,
        borderRadius: 8,
        ...iconColor(),
        marginRight: 16,
        [theme.breakpoints.down("sm")]: {
          width: 32,
          height: 32,
          marginRight: 12,
        },
      },
      "& .modal__dynamic__contents": {
        margin: "32px 0px",
        [theme.breakpoints.down("sm")]: {
          margin: "24px 0px",
        },
      },
      "& .modal__action__buttons": {
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
        padding: "0px 32px 32px 32px",
        [theme.breakpoints.down("sm")]: {
          padding: "0px 24px 24px 24px",
        },
      },
    },
  };
});

const Modal: React.FC<ModalProps> = ({
  variant = "default",
  children,
  renderButton,
  ...rest
}) => {
  return (
    <StyledDialog {...rest} keepMounted={false} variant={variant}>
      <Box className="modal__title__section">
        {true && (
          <Box className="modal__title__icon">
            <GetApp />
          </Box>
        )}
        <Typography className="modal__title">Title</Typography>
      </Box>
      <Box className="modal__dynamic__contents">{children}</Box>

      {renderButton && (
        <Box className="modal__action__buttons">{renderButton()}</Box>
      )}
    </StyledDialog>
  );
};

export default Modal;
