import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <main>
     <Header />
     <AboutMe />
     <Skills />
     <Projects />
     <Contact />
     <Footer />
    </main>
  );
}

export default App;
