// import React from "react";
// import ProfileProjects from "./pages/Projects";
// import Tools from "./pages/Tools";
// import Experience from "./pages/Experience";
// import Thoughts from "./pages/Thoughts";
// import ContactPage from "./pages/Contact";
// import LandingPage from "./pages/LandingPage";
// function App() {
//   // return <ProfileProjects />;
//   // return <Tools />;
//   // return <Experience />;
// //  return <Thoughts />;
// // return <ContactPage />;
// return <LandingPage />;
 
// }
// export default App;




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProfileProjects from "./pages/Projects";
import Tools from "./pages/Tools";
import Experience from "./pages/Experience";
import Thoughts from "./pages/Thoughts";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProfileProjects />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
