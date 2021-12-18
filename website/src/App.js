import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Experience from "./components/pages/Experience";
import NavBar from "./components/Navbar";
import Education from "./components/pages/Education";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
