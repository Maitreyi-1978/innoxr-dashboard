import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#10b981",
    },
    background: {
      default: "#f5f7fb",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  shape: {
    borderRadius: 14,
  },
});

export default theme;