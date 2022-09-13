import { Typography, Box, Stack } from "@mui/material";
import React, { Component } from "react";

class InfoText extends Component {
  state = {
    text: this.props.value
  }
  render() {
    return (
      <Box>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography>
            {this.state.text}
          </Typography>
          <br />
        </Stack>
      </Box>
    );
  }
}

export default InfoText;
