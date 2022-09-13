import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as Logo } from "../../src/image/ais_logo.svg";

const [state,setState] = useState();

export function handleValue(value) {
  setState({ text: value });
}

export default function Navbar() {
  return (
    <div>
      <AppBar position="static" sx={{ boxShadow: 0 }} color="AIS">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          <Typography sx={{ flexGrow: 1 }}>{state}</Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Logo />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}