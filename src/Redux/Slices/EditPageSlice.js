import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorNav: "green",
  colorBG: "white",
  icon: "",
  textInfo:
    "โปรดตรวจสอบความถูกต้องข้อความยืนยันส่วนตัวของท่าน จากนั้นระบุรหัสผ่าน OTP เพื่อเพิ่มความปลอดภัยในการทำรายการ",
  textInfoEn:
    "please verify your Personal Message and submit your OTP password. You need to enter your OTP password in order to compleate the transaction.",
  TextAdvice: `กรุณากดปุ่ม "Request OTP" เพื่อรับรหัสรักษาความปลอดภัย OTP`,
  TextAdviceEn: `Please click "Request OTP" to receive OTP Password`,
  TextCard: "กรุณาระบุรหัสรักษาความปลอดภัย OTP ที่ได้รับ",
  TextCardEn: "Please input OTP password",
  TextWarning: `การลงทะเบียนขอรับ OTP ทางเราจะส่ง OTP (One-Time-Password) ไปยัง SMS หรือ Email ที่ท่านได้ให้ไว้กับระบบ กรณีที่ท่านต้องการเปลี่ยนหมายเลขโทรศัพท์ หรือ Email ที่รับรหัสผ่านแบบ OTP กรุณาติดต่อที่ ServiceName Center โทร. 02-22222222`,
  TextWarningEn: `For OTP registration , We will send OTP (One-Time-Password) via SMS or Email . if  you would like to change your mobile number to receive OTP , please contact ServiceName Center tel. 02-22222222`,
  ServiceName: "AIS",
};

export const editPageSlice = createSlice({
  name: "editpage",
  initialState,
  reducers: {
    editInfoText: (state, action) => {
      state[4].value = action.payload;
    },
  },
});

export const { editInfoText } = editPageSlice.actions;
export default editPageSlice.reducer;
