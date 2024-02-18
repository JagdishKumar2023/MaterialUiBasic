import { Typography } from "@mui/material";

export const TypographyMui = () => {
  return (
    <div>
      {/* component are not be important */}
      <Typography variant="h1" component={"h1"} sx={{ color: "Green" }}>
        Material UI
      </Typography>
      <Typography variant="h4" component={"h4"} sx={{ color: "yellowgreen" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis
        atque iste earum doloremque eos iusto labore ipsum non doloribus.
      </Typography>
      <Typography variant="h2" component={"h2"} sx={{ color: "blue" }}>
        Hello Materail ui
      </Typography>
      <Typography variant="h3" sx={{ color: "red" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex hic
        exercitationem?
      </Typography>
    </div>
  );
};
