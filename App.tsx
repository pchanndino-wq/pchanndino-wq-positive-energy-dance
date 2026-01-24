import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Schedule />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
