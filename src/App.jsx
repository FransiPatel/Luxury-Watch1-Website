import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Craftsmanship from './pages/Craftsmanship';
import GrainOverlay from './components/GrainOverlay';
import CustomCursor from './components/CustomCursor';

// Wrapper to allow useLocation hook
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/craftsmanship" element={<Craftsmanship />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-gray-50 dark:bg-black min-h-screen text-slate-900 dark:text-white scroll-smooth selection:bg-yellow-600 dark:selection:bg-yellow-400 selection:text-white dark:selection:text-black font-sans transition-colors duration-300">
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
