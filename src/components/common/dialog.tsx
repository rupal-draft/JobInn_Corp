import React from "react";
import {
  Dialog as CustomDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  element: JSX.Element;
  action?: string;
}

const Dialog: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  element,
  action,
}) => {
  return (
    <CustomDialog open={open} onClose={onClose}>
      <DialogTitle>
        {title}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{element}</DialogContent>
    </CustomDialog>
  );
};

export default Dialog;
