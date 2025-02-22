import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import LiveFeed from './pages/LiveFeed';
import Path from './pages/Path';
import Analytics from './pages/Analytics';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-feed" element={<LiveFeed />} />
          <Route path="/path-visualization" element={<Path />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;