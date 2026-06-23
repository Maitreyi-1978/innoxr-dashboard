import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        background: "#1e293b",
        color: "white",
        p: 3,
      }}
    >
      {/* Logo */}
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mb: 5 }}
      >
        HoloInteract
      </Typography>

      {/* Menu */}
      <List>
        <ListItemButton
          onClick={() => navigate("/devices")}
          sx={{
            borderRadius: 2,
            mb: 1,
          }}
        >
          <ListItemText primary="🏠 Dashboard" />
        </ListItemButton>

        <ListItemButton
          onClick={() => navigate("/analytics")}
          sx={{
            borderRadius: 2,
            mb: 1,
          }}
        >
          <ListItemText primary="📊 Analytics" />
        </ListItemButton>

        <ListItemButton
          onClick={() => navigate("/settings")}
          sx={{
            borderRadius: 2,
            mb: 1,
          }}
        >
          <ListItemText primary="⚙️ Settings" />
        </ListItemButton>

        <ListItemButton
          onClick={() => navigate("/login")}
          sx={{
            borderRadius: 2,
            mt: 4,
          }}
        >
          <ListItemText primary="🚪 Logout" />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default Sidebar;