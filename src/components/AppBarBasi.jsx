import { Typography, AppBar, Toolbar, Tab, Tabs } from "@mui/material";
import { useState } from "react";

export const AppBarBasi = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Navbar</Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="HOME" />
            <Tab label="ABOUT" />
            <Tab label="CONTACT" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
