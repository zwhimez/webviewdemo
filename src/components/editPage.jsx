import { TextField, Box, Button, styled } from "@mui/material";
import React from "react";
import { handleValue } from "./navbar";
import { useState } from "react";

export default function EditPage(params) {
  const [input, setInput] = useState([
    { id: "1", name: "colorNav", type: "text", label: "Navbar Color" },
    { id: "2", name: "colorBG", type: "text", label: "Background Color" },
    { id: "3", name: "icon", type: "text", label: "Icon" },
    { id: "4", name: "textInfo", type: "text", label: "Text Info" },
    { id: "5", name: "textInfoEn", type: "text", label: "Text Info English" },
    { id: "6", name: "TextAdvice", type: "text", label: "Text Advice" },
    {
      id: "7",
      name: "TextAdviceEn",
      type: "text",
      label: "Text Advice English",
    },
    { id: "8", name: "TextWarning", type: "text", label: "Text Warnign" },
    {
      id: "9",
      name: "TextWarningEn",
      type: "text",
      label: "Text Warning English",
    },
    {
      id: "10",
      name: "ServiceName",
      type: "text",
      label: "Service Name",
      value: "",
    },
  ]);

  const [state, setState] = useState({
    colorNav: "",
    colorBG: "",
    icon: "",
    textInfo: "",
    textInfoEn: "",
    TextAdvice: "",
    TextAdviceEn: "",
    TextWarning: "",
    TextWarningEn: "",
    ServiceName: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    console.log(state.ServiceName);
  };
  const ButtonStyle = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.main,
    margin: 5,
  }));
  console.log(state);
  return (
    <Box>
      <form onSubmit={() => handleValue(state.ServiceName)}>
        {input.map((input) => (
          <TextField
            key={input.id}
            {...input}
            value={state.name}
            onChange={handleChange}
          />
        ))}
        <ButtonStyle type="submit">Submit</ButtonStyle>
      </form>
    </Box>
  );
}
