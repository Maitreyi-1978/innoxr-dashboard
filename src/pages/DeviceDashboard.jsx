import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { devices } from "../data/mockData";

function DeviceDashboard() {
  const navigate = useNavigate();

  const totalDevices = devices.length;

  const onlineDevices = devices.filter(
    (device) => device.status === "Online"
  ).length;

  const offlineDevices = totalDevices - onlineDevices;

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f7fb",
      }}
    >
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          p: 4,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold">
              HoloInteract Device Dashboard
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Monitor and manage all deployed devices
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/analytics")}
          >
            📊 View Analytics
          </Button>
        </Box>

        {/* KPI Cards */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={4}>
            <StatCard
              title="🖥 Total Devices"
              value={totalDevices}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <StatCard
              title="🟢 Online Devices"
              value={onlineDevices}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <StatCard
              title="🔴 Offline Devices"
              value={offlineDevices}
            />
          </Grid>
        </Grid>

        {/* Device Table */}
        <Paper
          elevation={3}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    background: "#eef2ff",
                  }}
                >
                  <TableCell>
                    <strong>Device Name</strong>
                  </TableCell>

                  <TableCell>
                    <strong>Location</strong>
                  </TableCell>

                  <TableCell>
                    <strong>Status</strong>
                  </TableCell>

                  <TableCell>
                    <strong>Last Active</strong>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {devices.map((device) => (
                  <TableRow key={device.id}>
                    <TableCell>{device.name}</TableCell>

                    <TableCell>{device.location}</TableCell>

                    <TableCell>
                      <Chip
                        label={device.status}
                        color={
                          device.status === "Online"
                            ? "success"
                            : "error"
                        }
                      />
                    </TableCell>

                    <TableCell>{device.lastActive}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Footer */}
        <Typography
          align="center"
          color="text.secondary"
          sx={{ mt: 4 }}
        >
          Last Updated: June 2026 • Powered by InnoXR
        </Typography>
      </Box>
    </Box>
  );
}

export default DeviceDashboard;