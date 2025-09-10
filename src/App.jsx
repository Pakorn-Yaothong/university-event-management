import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EventsPage from "./pages/EventsPage";
import "./styles/globals.css";
//import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EventsPage />
    </div>
  );
}

export default App;

