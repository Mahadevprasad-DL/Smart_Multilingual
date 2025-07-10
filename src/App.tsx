import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Features from './pages/Features';
import Scan from './pages/Scan';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/scan" element={<Scan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;