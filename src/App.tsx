import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Technology from './components/Technology';
import TechDeepDive from './components/TechDeepDive';
import UseCaseDemos from './components/UseCaseDemos';
import VisualSolutions from './components/VisualSolutions';
import ProvenResults from './components/ProvenResults';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'CoTech: High-Precision BLE Location Tracking (RTLS)';
  }, []);

  return (
    <div className="text-gray-100 overflow-x-hidden">
      <Header />
      <Hero />
      <Technology />
      <TechDeepDive />
      <UseCaseDemos />
      <VisualSolutions />
      <ProvenResults />
      <Contact />
      <Footer />
      <StickyCTA />
      </div>
  );
}

export default App;
