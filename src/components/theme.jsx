import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        mode: "light",
        primary:{
            main:"#1976d2",
            light:"#42a5f5",
            contrastText:"#fff"
        },
        secondary:{
            main:"#9c27b0",
            light:"#ba68c8",
            contrastText:"#fff"
        },
        AIS:{
            main:"#25584F",
            light:"#ba68c8",
            contrastText:"#fff"
        }
    },
})