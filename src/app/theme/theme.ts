"use client"

import { createTheme } from "@mui/material";
import { lightGreen, grey } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: lightGreen,
    secondary: grey,
  },
});
