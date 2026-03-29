import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Briefcase, Layers, Cpu, MessageSquare } from 'lucide-react';
import { Dock } from './components/UIComponents';

// Pages
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';
import ComponentsDemo from './pages/ComponentsDemo';
import Contact from './pages/Contact';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Dock 
      items={[
        { icon: <HomeIcon />, label: 'Home', onClick: () => navigate('/') },
        { icon: <Briefcase />, label: 'Work', onClick: () => navigate('/portfolio') },
        { icon: <Cpu />, label: 'Builder', onClick: () => navigate('/components') },
        { icon: <MessageSquare />, label: 'Contact', onClick: () => navigate('/contact') },
      ]} 
    />
  );
};

export default function App() {
  return (
    <Router>
      <main className="bg-[#030014] min-h-screen text-white selection:bg-purple-500 selection:text-white scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/components" element={<ComponentsDemo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navigation />
      </main>
    </Router>
  );
}