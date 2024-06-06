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

//npm run dev -- --host 0.0.0.0 --port 3000

export default App;
