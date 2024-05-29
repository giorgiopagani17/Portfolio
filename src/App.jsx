import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './pages/elements/Navbar.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <div>
      <Router>
        <Navbar /> {/* Navbar will always be displayed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/progetti" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
