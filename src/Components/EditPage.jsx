import { useState } from "react";
import {
  Box,
  Stack,
  Button,
  AppBar,
  Typography,
  TextField,
  Card,
  CardContent,
  Toolbar,
} from "@mui/material";
import { ReactComponent as Logo } from "../image/ais_logo.svg";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import InputLabel from "./InputLabel";
import { editInfoText } from "../Redux/Slices/EditPageSlice";

export default function EditPage() {
  const message = useSelector((state) => state.editpage);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    serviceName: "",
    textInfo: "",
    textInfoEn: "",
    TextAdvice: "",
    TextAdviceEn: "",
    TextCard: "",
    TextCardEn: "",
    TextWarning: "",
    TextWarningEn: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(editInfoText(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <AppBar>
            <Toolbar>
              <Logo />
              <Box sx={{ flexGrow: 1 }}>
                <TextField
                  size="small"
                  sx={{ width: "20ch" }}
                  label="Service Name..."
                  onChange={(e) =>
                    setData({
                      ...data.serviceName,
                      serviceName: e.target.value,
                    })
                  }
                />
              </Box>
              <Logo />
            </Toolbar>
          </AppBar>
          <Stack direction="column">
            <Typography>{message.textInfo}</Typography>
            <Typography>{message.textInfoEn}</Typography>
            <br />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Typography>msisdn / email:</Typography>
              <TextField
                variant="outlined"
                size="small"
                sx={{ width: "50ch" }}
                name="msisdn"
                type="text"
                label="Phone No."
              />
            </Stack>
            <br />
            <Typography>{message.TextAdvice}</Typography>
            <Typography>{message.TextAdviceEn}</Typography>
            <br />
            <Card variant="outlined">
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-end"
                  >
                    <Typography>{message.TextCard}</Typography>
                    <Typography>{message.TextCardEn}</Typography>
                  </Stack>
                  <Typography variant="h6">:</Typography>
                  <TextField size="small"></TextField>
                  <Button variant="contained">requestOTP</Button>
                </Stack>
              </CardContent>
            </Card>
            <br />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
            >
              <Button variant="contained">ตกลง / Submit</Button>
              <Button variant="contained">ยกเลิก / Exit</Button>
            </Stack>
            <br />
            <Typography align="left">{message.TextWarning}</Typography>
            <br />
            <Typography align="left">{message.TextWarningEn}</Typography>
          </Stack>
        </Stack>
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
}
