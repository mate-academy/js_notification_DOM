import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="app">
      {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
