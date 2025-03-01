import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage"; // Import the LandingPage component
import Projects from "./Projects";
const App = () => {
  return (
    <div className="App">
      <Navbar /> {/* Navbar remains here */}
      <LandingPage /> {/* LandingPage is now a separate component */}
      <Projects /> {/* Projects is now a separate component */}
    </div>
  );
};

export default App;
