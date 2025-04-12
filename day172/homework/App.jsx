
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <section id="about" className="pt-20"></section>
      <section id="projects"></section>
      <section id="skills"></section>
      <section id="contact"></section>
    </div>
  );
}

export default App;
