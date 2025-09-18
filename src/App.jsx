import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EventsPage from "./pages/events/EventsPage";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import "./styles/globals.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* หน้าแรกให้ไป login */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
