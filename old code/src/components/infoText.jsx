import { Typography, Box, Stack } from "@mui/material";
import React, { useState } from "react";

export default function infoText(props) {
  const [state, setState] = useState({
    text: props.value
  })
  return (
    <Box>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography>
            {state.text}
          </Typography>
          <br />
        </Stack>
      </Box>
  )
}
