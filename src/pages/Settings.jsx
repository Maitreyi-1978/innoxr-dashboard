import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";

import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#f5f7fb" }}>
      <Sidebar />

      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Settings
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
          Manage your account and application preferences.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, borderRadius: 4 }}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                👤 Profile Information
              </Typography>

              <TextField fullWidth label="Full Name" defaultValue="Maitreyi" margin="normal" />
              <TextField fullWidth label="Email Address" defaultValue="maitreyi@example.com" margin="normal" />
              <TextField fullWidth label="Company" defaultValue="InnoXR" margin="normal" />
              <TextField fullWidth label="Phone Number" defaultValue="+91 XXXXX XXXXX" margin="normal" />

              <Button variant="contained" sx={{ mt: 3 }}>
                Save Changes
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, borderRadius: 4 }}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                🔔 Notifications
              </Typography>

              <FormControlLabel control={<Switch defaultChecked />} label="Email Notifications" />
              <FormControlLabel control={<Switch defaultChecked />} label="Device Offline Alerts" />
              <FormControlLabel control={<Switch defaultChecked />} label="Weekly Reports" />
              <FormControlLabel control={<Switch />} label="Campaign Updates" />
            </Paper>

            <Paper sx={{ p: 4, borderRadius: 4, mt: 3 }}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                🔒 Security
              </Typography>

              <TextField fullWidth label="Current Password" type="password" margin="normal" />
              <TextField fullWidth label="New Password" type="password" margin="normal" />
              <TextField fullWidth label="Confirm Password" type="password" margin="normal" />

              <Button variant="contained" sx={{ mt: 3 }}>
                Update Password
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <Paper sx={{ p: 3, borderRadius: 4, mt: 3, textAlign: "center" }}>
          <Typography fontWeight="bold">
            HoloInteract Device Monitoring System
          </Typography>
          <Typography color="text.secondary">
            Version 1.0.0 • Powered by InnoXR Technologies
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default Settings;