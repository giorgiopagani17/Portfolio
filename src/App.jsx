import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/elements/Navbar.jsx';
import Computer from './Computer/ComputerGraphic.jsx';

function App() {
  return (
    <div>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Computer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
