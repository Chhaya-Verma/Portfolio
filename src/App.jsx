import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import LandingPage from "./LandingPage";
import Projects from './Projects'; // Importing Projects page component
import Tools from './Tools'; // Importing Tools page component
import Experience from './Experience'; // Importing Experience page component
import Thoughts from './Thoughts'; // Importing Thoughts page component
import Contact from './Contact'; // Importing Contact page component
import Faq from "./Faq";
import Footer from "./Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Faq />
      <Footer />
    </Router>
  );
};

export default App;
