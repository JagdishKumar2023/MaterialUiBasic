import { Typography, Button } from "@mui/material";

export let ButtonMui = () => {
  return (
    <div>
      <Typography variant="h1" component={"h1"} sx={{ color: "red" }}>
        Hello Namste
      </Typography>
      <Button variant="contained" color="success">
        Submit her
      </Button>
      <Button variant="contained" color="success">
        Click me For Alert
      </Button>
      <Button variant="text" disabled>
        Click Me
      </Button>
      <Button variant="outline">Click ME</Button>
      <Button variant="contained">Click her</Button>
    </div>
  );
};
