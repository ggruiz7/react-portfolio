import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer.js";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import About from "./components/About/About";

function App() {
  return (
    <div class="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div class="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
