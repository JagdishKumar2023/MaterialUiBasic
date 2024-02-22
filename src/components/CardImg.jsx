import { Card, CardMedia } from "@mui/material";

import React from "react";

export const CardImg = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg"
        />
      </Card>
    </div>
  );
};
