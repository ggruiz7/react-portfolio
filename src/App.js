import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./img/background.jpg";
import Home from "./components/Home";

function App() {
  return (
    <div style={{ backgroundImage: `url(${Background})` }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
