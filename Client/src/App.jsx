import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Elements/Navbar.jsx';
import Portfolio from './Portfolio.jsx';

function App() {
  return (
    <div>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

//npm run dev -- --host 0.0.0.0 --port 3000

export default App;
