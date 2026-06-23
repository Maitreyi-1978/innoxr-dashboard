import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import StatCard from "../components/StatCard";
import { analyticsData } from "../data/mockData";

function AnalyticsDashboard() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 4,
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Analytics Dashboard
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/devices")}
        >
          Dashboard
        </Button>
      </Box>

      {/* KPI Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <StatCard title="Total Devices" value="25" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Active Devices" value="20" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Interactions" value="15000" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Campaign Performance" value="85%" />
        </Grid>
      </Grid>

      {/* Chart */}
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography
          variant="h6"
          sx={{ mb: 3 }}
        >
          Monthly Interactions
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={analyticsData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="interactions"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      {/* Bonus Features */}
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
        >
          Bonus Features
        </Typography>

        <Typography sx={{ mt: 2 }}>
          🚨 Offline Alerts - Notify administrators when a device goes offline.
        </Typography>

        <Typography sx={{ mt: 2 }}>
          📤 Remote Content Push - Update content on all deployed devices remotely.
        </Typography>

        <Typography sx={{ mt: 2 }}>
          💻 Device Health Monitoring - Monitor storage, memory usage and overall device health.
        </Typography>
      </Paper>
    </Box>
  );
}

export default AnalyticsDashboard;