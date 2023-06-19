import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { memo } from "react";

const DialogManager = memo(
  ({
    onClose,
    onSubmit,
    open,
    message = " To subscribe to this website, please enter your email address here.We will send updates occasionally.",
    children,
    type = "edit",
  }) => {
    return (
      <Dialog onClose={onClose} open={open}>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button
            onClick={() => {
              onSubmit();
            }}
            color="secondary"
            variant="contained"
          >
            {type === "edit" ? "Editar" : "Crear"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

export default DialogManager;
