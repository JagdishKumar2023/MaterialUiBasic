import {
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

export const Dialog = () => {
  return (
    <>
      <Dialog open={true}>
        <DialogTitle>Are Your Sure</DialogTitle>

        <DialogContentText>
          Are you sure to delete this product ?
        </DialogContentText>

        <DialogActions>
          <Button>cancel</Button>
          <Button>delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
