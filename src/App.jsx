import React from 'react';
import Navbar from './components/Navbar';
import Sefa from './sections/Sefa';
import About from './sections/About'
import Parcours from './sections/Parcours';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sefa />
      <About />
      <Parcours />
    </div>
  );
};

export default App;
