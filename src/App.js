import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Background from "./img/background.jpg";
import Home from "./components/Home";
import Footer from "./components/Footer.js";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div class="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div class="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
