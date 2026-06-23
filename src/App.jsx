import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import DeviceDashboard from "./pages/DeviceDashboard";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/login" element={<Login />} />

        <Route path="/devices" element={<DeviceDashboard />} />

        <Route path="/analytics" element={<AnalyticsDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;