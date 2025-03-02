import React from "react";
import Profileimg from "./Profileimg";


// Projects data
const projects = [
  { name: "Revo", category: "SaaS Framer Template", image: "Revo.png" },
  { name: "NajmAI", category: "Modern Framer Template", image: "NajmAI.png" },
  { name: "Stabraq", category: "Portfolio Framer Template", image: "Stabraq.png" },
  { name: "TaskAI", category: "SaaS Framer Template", image: "TaskAI.png" },
  { name: "Ruya", category: "SaaS Framer Template", image: "Ruya.png" },
  { name: "Lines", category: "SaaS Framer Template", image: "Lines.png" },
];

const Projects = () => {
  return (
    <>
      {/* Container for the left (fixed) and right (scrollable) sections */}
      <div className="bg-black min-h-screen flex">
        {/* Profile Image Section (fixed on left side) */}
        <div className="w-2/5 fixed top-0 left-0 h-full bg-black flex items-center justify-center z-10">
          <Profileimg />
        </div>

        {/* Content Section (scrollable) */}
        <div className="w-full ml-[40%] mr-[20%]  pl-6 pr-6 pt-32 pb-6 overflow-auto">
          <h1 className="text-6xl text-white font-bold text-left">
            Recent Projects
            <span className="text-purple-500"> and Achievements</span>
          </h1>
          <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto mt-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-[#28292a] rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover" // Increased height for image
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#28292a] bg-opacity-70">
                  <h3 className="text-white text-3xl font-bold">{project.name}</h3>
                  <p className="text-white mt-3 text-lg">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Projects;

