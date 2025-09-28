import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/events/EventsPage";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import RegisterPage from "./pages/auth/RegisterPage";

// ✅ import admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageEvents from "./pages/admin/ManageEvents";
import ManageUsers from "./pages/admin/ManageUsers";
import UserProfile from "./pages/admin/UserProfile";  // ใช้ component จริง
import Registrations from "./pages/admin/Registrations";
import Reports from "./pages/admin/Reports";

import "./styles/globals.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public / Auth */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/events" element={<EventsPage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/manage-events" element={<ManageEvents />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/user/:id" element={<UserProfile />} />
        <Route path="/admin/registrations" element={<Registrations />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
