import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export const Modals = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Model</Button>
      <Modals open={open} onClose={() => setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
          <Typography>This is Model</Typography>
          <Button varient="contained" onClick={() => setOpen(false)}>
            cancel
          </Button>
        </Box>
      </Modals>
    </div>
  );
};
