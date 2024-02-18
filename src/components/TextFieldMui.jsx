import React from "react";
import { TextField, Button } from "@mui/material";

export const TextFieldMui = () => {
  return (
    <div className="textContainer">
      <TextField variant="outlined" label="enter your name" type="text" />
      <TextField
        variant="standard"
        type="email"
        placeholder="enter your email"
      />
      <TextField
        variant="filled"
        type="password"
        placeholder="enter password"
      />
      <Button variant="contained">Submit</Button>
    </div>
  );
};
