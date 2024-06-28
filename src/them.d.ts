import { PaletteOptions, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    githubCustom: {
      navBarHeght: string;
    };
  }

  interface ThemeOptions {
    githubCustom?: {
      navBarHeght?: string;
    };
  }

  interface PaletteOptions {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
  }
}
