"use client";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({
  palette: {
    primary: {
      main: "#F89500",
    },
    secondary: {
      main: "#808B96",
    },
  },
  typography: {
    fontFamily: `${inter.style.fontFamily}`,
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      color: "#808B96",
    },
    body2: {
      color: "#808B96",
    },
  },
});

export default theme;
