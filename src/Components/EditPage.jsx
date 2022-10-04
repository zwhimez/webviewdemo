import React from "react";
import { TextField, Button, Input, FilledInput } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { editInfoText } from "../Redux/Slices/EditPageSlice";

export default function EditPage() {
  // const infoEn = useSelector((state) => state.editpage[4].value);
  const data = useSelector((state) => state.editpage);
  const dispatch = useDispatch();

  const handleChange = (e) => {};

  return (
    <div>
      {/* <h1>{infoEn}</h1> */}
      <TextField multiline maxRows={5} sx={{ width: '50ch' }}>
        1
      </TextField>
      {/* {data.map((data) => (
        <Input
          fullWidth
          key={data.id}
          {...data}
          margin="normal"
          onChange={(e) => dispatch(editInfoText(e.target.value))}
        />
      ))} */}
    </div>
  );
}
