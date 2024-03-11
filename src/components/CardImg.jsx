import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

export const CardImg = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg"
        />

        <CardContent>
          <Typography gutterBottom varient="h5" component="div">
            Save Population
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, neque!
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={() => setOpen(true)}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are Your Sure</DialogTitle>

        <DialogContentText>are you sure to delete products ?</DialogContentText>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button onClick={() => setOpen(false)}>delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
