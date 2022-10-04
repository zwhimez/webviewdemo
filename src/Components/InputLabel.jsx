import React from "react";
import { TextField, InputBase, styled, alpha, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { editInfoText } from "../Redux/Slices/EditPageSlice";

export default function InputLabel() {
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TextField
        size="small"
        sx={{ width: "20ch" }}
        label="Service Name..."
        value={serviceName}
        onInput={(e) => dispatch(editInfoText(e.target.value))}
      />
    </Box>
  );
}
