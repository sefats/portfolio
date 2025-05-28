import React from 'react';
import Navbar from './components/Navbar';
import Sefa from './sections/Sefa';
import About from './sections/About'
import Parcours from './sections/Parcours';
import Skills from './sections/Skills';
import Projects from './sections/Projects';


const App = () => {
  return (
    <div>
      <Navbar />
      <Sefa />
      <About />
      <Parcours />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
