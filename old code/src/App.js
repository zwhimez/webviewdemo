import { Box, Stack } from "@mui/material";
import SendOTP from "./components/sendOTP";
import Navbar from "./components/navbar";
import InfoText from "./components/infoText";
import ConfirmOTP from "./components/confirmOTP";
import EditPage from "./components/editPage";
import React from "react";

function App() {
  // const inputNavbar = [
  //   {
  //     id: 1,
  //     name: "PartnerName",
  //     type: "text",
  //     value: "Service name or PartnerName",
  //   },
  // ];
  const infoText1 = [
    {
      id: 1,
      name: "TH",
      type: "text",
      value:
        "โปรดตรวจสอบความถูกต้องข้อความยืนยันส่วนตัวของท่าน จากนั้นระบุรหัสผ่าน OTP เพื่อเพิ่มความปลอดภัยในการทำรายการ",
    },
    {
      id: 2,
      name: "EN",
      type: "text",
      value:
        "please verify your Personal Message and submit your OTP password. You need to enter your OTP password in order to compleate the transaction.",
    },
  ];
  const infoText2 = [
    {
      id: 1,
      name: "th",
      type: "text",
      value: `กรุณากดปุ่ม "Request OTP" เพื่อรับรหัสรักษาความปลอดภัย OTP`,
    },
    {
      id: 2,
      name: "en",
      type: "text",
      value: `Please click "Request OTP" to receive OTP Password`,
    },
  ];
  const infoText3 = [
    {
      id: 1,
      name: "th",
      type: "text",
      value: `การลงทะเบียนขอรับ OTP ทางเราจะส่ง OTP (One-Time-Password) ไปยัง SMS หรือ Email ที่ท่านได้ให้ไว้กับระบบ กรณีที่ท่านต้องการเปลี่ยนหมายเลขโทรศัพท์ หรือ Email ที่รับรหัสผ่านแบบ OTP กรุณาติดต่อที่ ServiceName Center โทร. 02-22222222`,
    },
    {
      id: 2,
      name: "en",
      type: "text",
      value: `For OTP registration , We will send OTP (One-Time-Password) via SMS or Email . if  you would like to change your mobile number to receive OTP , please contact ServiceName Center tel. 02-22222222`,
    },
  ];
  return (
    <div>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box sx={{ flexGrow: 1 }}>
            <EditPage />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="column" spacing={2} justifyContent="space-evenly">
              {/* {inputNavbar.map((inputNavbar) => (
                <Navbar key={inputNavbar.id} value={inputNavbar.value} />
              ))} */}
              <Navbar/>
              {infoText1.map((infoText1) => (
                <InfoText
                  key={infoText1.id}
                  {...infoText1}
                  value={infoText1.value}
                />
              ))}
              <SendOTP />
              {infoText2.map((infoText2) => (
                <InfoText
                  key={infoText2.id}
                  {...infoText2}
                  value={infoText2.value}
                />
              ))}
              <ConfirmOTP />
              {infoText3.map((infoText3) => (
                <InfoText
                  key={infoText3.id}
                  {...infoText3}
                  value={infoText3.value}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
