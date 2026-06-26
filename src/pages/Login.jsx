import { Box, Button, Card, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

function Login() {
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
        justifyContent: "flex-start",
        pl: 8,
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 550,
          p: 5,
          background: "rgba(10, 15, 35, 0.85)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          color: "white",
          boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
        }}
      >
        {/* Logo */}
        <Box mb={4}>
          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: "18px",
              background:
                "linear-gradient(135deg,#4f46e5,#7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              mb: 2,
            }}
          >
            <LockOutlinedIcon fontSize="large" />
          </Box>

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#818cf8" }}
          >
            HoloInteract
          </Typography>

          <Typography
            sx={{
              color: "#cbd5e1",
              mb: 4,
            }}
          >
            One Screen. Infinite Connections.
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: "white" }}
          >
            Welcome Back!
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#cbd5e1",
            }}
          >
            Sign in to access your dashboard and manage your smart devices.
          </Typography>
        </Box>

        {/* Email */}
        <Typography
          sx={{
            color: "white",
            mb: 1,
            fontWeight: 600,
          }}
        >
          Email Address
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter your email"
          margin="normal"
          variant="outlined"
          InputProps={{
            sx: {
              color: "white",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "12px",
            },
          }}
        />

        {/* Password */}
        <Typography
          sx={{
            color: "white",
            mt: 2,
            mb: 1,
            fontWeight: 600,
          }}
        >
          Password
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter your password"
          type="password"
          margin="normal"
          variant="outlined"
          InputProps={{
            sx: {
              color: "white",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "12px",
            },
          }}
        />

        <Typography
          sx={{
            textAlign: "right",
            color: "#818cf8",
            mt: 1,
            cursor: "pointer",
          }}
        >
          Forgot Password?
        </Typography>

        {/* Login Button */}
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{
            mt: 4,
            py: 1.6,
            fontWeight: 700,
            fontSize: "18px",
            borderRadius: "14px",
            background:
              "linear-gradient(90deg,#4f46e5,#6366f1)",
          }}
          onClick={() => navigate("/devices")}
        >
          Login
        </Button>
      </Card>
    </Box>
  );
}

export default Login;