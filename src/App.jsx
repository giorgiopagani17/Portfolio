import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './pages/elements/Navbar.jsx';

function App() {
  return (
    <div>
      <Router>
        <Navbar /> {/* Navbar will always be displayed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
