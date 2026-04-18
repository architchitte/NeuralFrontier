import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Markets from './pages/Markets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/predictions" element={<Dashboard />} />
        <Route path="/markets" element={<Markets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
