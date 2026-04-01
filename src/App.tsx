import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';


import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import HomePage       from './pages/HomePage';
import AboutPage      from './pages/AboutPage';
import SpeakersPage   from './pages/SpeakersPage';
import HighlightsPage from './pages/HighlightsPage';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop /> 
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"           element={<><HomePage /><Footer /></>} />
          <Route path="/about"      element={<><AboutPage /><Footer /></>} />
          <Route path="/speakers"   element={<><SpeakersPage /><Footer /></>} />
          <Route path="/highlights" element={<><HighlightsPage /><Footer /></>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
