"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          main: "#b1dc40",
          dark: "#94b735",
          light: "#bee260",
          contrastText: "#080808",
        },
        secondary: {
          main: "#AAD400",
          dark: "#718d00",
          light: "#c6e255",
          contrastText: "#080808",
        },
        background: {
          default: "#fafafa",
          paper: "#d9d9d9",
        },
        text: {
          primary: "#080808",
          secondary: "#1d1d1d",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#ccff00",
          dark: "#aad500",
          light: "#ddff55",
          contrastText: "#080808",
        },
        secondary: {
          main: "#aad400",
          dark: "#86a700",
          light: "#ccee33",
          contrastText: "#ffffff",
        },
        background: {
          default: "#080808", // Default background color
          paper: "#1D1D1D", // Background color for paper components
        },
        text: {
          primary: "#fafafa", // Primary text color
          secondary: "#b0b0b0", // Secondary text color
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-plus-jakarta-sans)",
    h1: {
      fontFamily: "var(--font-plus-jakarta-sans)",
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontFamily: "var(--font-plus-jakarta-sans)",
      fontWeight: 700,
      fontSize: "2rem",
    },
    h3: {
      fontFamily: "var(--font-plus-jakarta-sans)",
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "var(--font-plus-jakarta-sans)",
      fontWeight: 700,
      fontSize: "2rem",
    },
    h5: {
      fontFamily: "var(--font-plus-jakarta-sans)",
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    h6: {
      fontFamily: "var(--font-archivo)",
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    body1: {
      fontFamily: "var(--font-archivo)",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5",
      letterSpacing: "0.00938em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: "10px",
          fontWeight: 500,
          padding: "5px 32px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          maxWidth: "min(100% - 20px, 1200px)",
          boxShadow: "none",

          borderRadius: "10px",
          margin: "20px auto",
          padding: "0 10px",
        },
      },
    },
  },
});

export default theme;
