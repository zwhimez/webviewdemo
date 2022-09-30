import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as Logo } from "../../src/image/ais_logo.svg";

export default function Navbar(props) {
  const [state, setState] = useState({ text: props.ServiceName });
  return (
    <div>
      <AppBar position="static" sx={{ boxShadow: 0 }} color="AIS">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          <Typography sx={{ flexGrow: 1 }}>{state.text}</Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Logo />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
