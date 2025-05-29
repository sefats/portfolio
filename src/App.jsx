import Navbar from './components/Navbar';
import Sefa from './sections/Sefa';
import About from './sections/About'
import Parcours from './sections/Parcours';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <Sefa />
      <About />
      <Parcours />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
