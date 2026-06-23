import { Box, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Card
        sx={{
          maxWidth: 760,
          p: 6,
          textAlign: "center",
          background: "rgba(10, 15, 35, 0.85)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "28px",
          color: "white",
          boxShadow: "0 25px 60px rgba(0,0,0,0.55)",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ mb: 2, color: "#818cf8" }}
        >
          Welcome to HoloInteract
        </Typography>

        <Typography
          variant="h5"
          sx={{ mb: 3, color: "#e5e7eb" }}
        >
          Smart Device Monitoring & Analytics Platform
        </Typography>

        <Typography
          sx={{
            color: "#cbd5e1",
            fontSize: "18px",
            lineHeight: 1.8,
            mb: 5,
          }}
        >
          HoloInteract helps business owners monitor connected devices across
          multiple locations, track online and offline status, view user
          interactions, analyze campaign performance, and manage smart display
          experiences from one simple dashboard.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            px: 6,
            py: 1.6,
            fontSize: "18px",
            fontWeight: 700,
            borderRadius: "14px",
            background: "linear-gradient(90deg,#4f46e5,#6366f1)",
          }}
          onClick={() => navigate("/login")}
        >
          Get Started
        </Button>
      </Card>
    </Box>
  );
}

export default Welcome;