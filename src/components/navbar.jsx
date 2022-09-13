import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React, { Component } from "react";
import { ReactComponent as Logo } from "../../src/image/ais_logo.svg";

class Navbar extends Component {
  state = {
    text: this.props.value,
  };

  

  render() {
    return (
      <AppBar position="static" sx={{ boxShadow: 0 }} color="AIS">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          <Typography sx={{ flexGrow: 1 }}>{this.state.text}</Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Logo />
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
