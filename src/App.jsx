import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import DeviceDashboard from "./pages/DeviceDashboard";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Welcome Page */}
        <Route path="/" element={<Welcome />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Device Dashboard */}
        <Route path="/devices" element={<DeviceDashboard />} />

        {/* Analytics Dashboard */}
        <Route path="/analytics" element={<AnalyticsDashboard />} />

        {/* Settings Page */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;