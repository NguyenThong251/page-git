"use client";
import { Roboto } from "next/font/google";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, deepOrange, orange, teal } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = extendTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  githubCustom: {
    navBarHeght: "68px",
  },
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: "#ffffff",
        },
        secondary: {
          main: "#161b22",
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: "#161b22",
        },
        secondary: {
          main: "#ffffff",
        },
      },
    },
  },
});

export default theme;
