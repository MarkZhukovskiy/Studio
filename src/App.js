import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import './App.css';

function ProjectCasePage() {
  return <div style={{padding: 40, textAlign: 'center'}}>Project Case Page (деталка проекта)</div>;
}

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/uslugi" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<ProjectCasePage />} />
          </Routes>
        </div>
      </Router>
      <ScrollToTopButton />
    </>
  );
}

export default App; 