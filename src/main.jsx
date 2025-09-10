import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";          // base styles
import "./styles/globals.css"; // custom utilities

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
