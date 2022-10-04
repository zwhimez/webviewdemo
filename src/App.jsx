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
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { ReactComponent as Logo } from "./image/ais_logo.svg";
import "./App.css";
import EditPage from "./components/EditPage";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const message = useSelector((state) => state.editpage);
  // const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  if (isEdit) {
    return (
      <div className="App">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isEdit}
                onChange={toggleEdit}
                aria-label="Edit switch"
              />
            }
            label={isEdit ? "Editting" : "Finish"}
          />
        </FormGroup>
        <EditPage />
      </div>
    );
  } else {
    return (
      <div className="App">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isEdit}
                onChange={toggleEdit}
                aria-label="Edit switch"
              />
            }
            label={isEdit ? "Editting" : "Finish"}
          />
        </FormGroup>
        <Box sx={{flexGrow:1}}>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <AppBar>
              <Toolbar>
                <Logo />
                <Typography sx={{ flexGrow: 1 }}>
                  {message.ServiceName}
                </Typography>
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
        </Box>
        {/* <h1>{count}</h1>
        <Button variant="contained" color="success" onClick={() => dispatch(increment())}>+</Button>
        <Button variant="contained" color="error" onClick={() => dispatch(decrement())}>-</Button> */}
      </div>
    );
  }
}

export default App;
