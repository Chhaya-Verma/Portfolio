import React from "react";

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
      {/* Container for projects */}
      <div className="min-h-screen bg-black flex justify-center items-center p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover" // Increased height for image
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70">
                <h3 className="text-white text-lg font-bold">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
