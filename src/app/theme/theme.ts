"use client"

import { createTheme } from "@mui/material";
import { lime } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    mode: "light",
    primary: lime,
  },
});
