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

// import React, { useState } from "react";

// const HoverButton = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <button
//       className="relative overflow-hidden bg-purple-600 px-10 py-2 rounded text-white hover:bg-purple-700"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <span
//         className={`absolute left-0 right-0 transition-transform duration-500 ${
//           hovered ? "translate-y-full" : "translate-y-0"
//         }`}
//       >
//         Let's Talk
//       </span>
//       <span
//         className={`absolute left-0 right-0 transition-transform duration-500 ${
//           hovered ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         Let's Talk
//       </span>
//     </button>
//   );
// };

// export default HoverButton;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const HoverButton = () => {
//   const [hovered, setHovered] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="flex gap-4">
//       {/* Let's Talk Button */}
//       <button
//         className="relative overflow-hidden bg-purple-600 w-40 h-14 px-10 py-2 rounded text-white hover:bg-purple-700"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         onClick={() => navigate("/contact")}
//       >
//         <span
//           className={`absolute left-0 right-0 transition-transform duration-500 ${
//             hovered ? "translate-y-full" : "translate-y-0"
//           }`}
//         >
//           Let's Talk
//         </span>
//         <span
//           className={`absolute left-0 right-0 transition-transform duration-500 ${
//             hovered ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           Let's Talk
//         </span>
//       </button>

//       {/* My Work Button */}
//       <button
//         className="relative flex items-center gap-2 bg-gray-900 w-40 h-14 px-6 py-2 rounded text-white hover:bg-gray-800 transition-all"
//         onClick={() => navigate("/projects")}
//       >
//         My Work
//         <span className="transition-colors duration-300 group-hover:text-purple-500">
//           →
//         </span>
//       </button>
//     </div>
//   );
// };

// export default HoverButton;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
// import LandingPage from "./pages/LandingPage";
// function App() {
//   return (
//     <Router>
//       <Routes>
      
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/projects" element={<Projects />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
