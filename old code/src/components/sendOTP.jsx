import {
  Button,
  Box,
  Typography,
  styled,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
// import axios from "axios"

export default function SendOTP() {
  const [state, setState] = useState({
    msisdn: "",
    otpChannel: "sms",
    service: "MYAIS",
    accountType: "all",
    lifeTimeoutMins: "2",
    waitDR: "false",
    otpDigit: "4",
    refDigit: "4",
  })

  const handleOnChange = (e) => {
    this.setState({ ...this.state, msisdn: e.target.value });
    console.log(this.state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    const sendOneTimePW = { sendOneTimePW: this.state };
    console.log(sendOneTimePW);

    // const options = {
    //   url: `http://10.137.19.77:7001/api/v1/gsso/sendOneTimePW.json`,
    //   method: "POST",
    //   withCredentials: false,
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   data: { sendOneTimePW } ,
    // };

    // axios(options).then((res) => {
    //   console.log(res);
    //   console.log(res.data)
    // });
  };

  const ButtonStyle = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.main,
    margin: 5,
  }));

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography>msisdn / email:</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleOnChange}
            key="1"
            name="msisdn"
            type="text"
            label="Phone No."
            variant="outlined"
            value={state.msisdn}
          />
          <ButtonStyle type="submit">requestOTP</ButtonStyle>
        </form>
      </Stack>
    </Box>
  );
}
