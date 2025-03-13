import React from "react";
import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import FAQSection from "../components/FAQPage";

const ProfileProjects = () => {
  const projects = [
    { name: "Revo", category: "SaaS Framer Template", image: "Revo.png" },
    { name: "NajmAI", category: "Modern Framer Template", image: "NajmAI.png" },
    { name: "Stabraq", category: "Portfolio Framer Template", image: "Stabraq.png" },
    { name: "TaskAI", category: "SaaS Framer Template", image: "TaskAI.png" },
    { name: "Ruya", category: "SaaS Framer Template", image: "Ruya.png" },
    { name: "Lines", category: "SaaS Framer Template", image: "Lines.png" },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row px-4 sm:px-10">
      {/* Projects Section */}
      <div className="md:ml-[40%] mr-[20%] mt-15 lg:ml-[38%] w-full md:w-[55%] py-10 overflow-y-auto">
        <h1 className="text-6xl sm:text-6xl text-white font-bold text-center mt-7">
          Recent Projects <span className="text-purple-500">and Achievements</span>
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#28292a] rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#28292a] bg-opacity-80">
                <h3 className="text-white text-xl font-bold">{project.name}</h3>
                <p className="text-white mt-1 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        <FAQSection />
      </div>

      {/* Profile Section */}
      <div className="bg-[#28292a] mt-7 text-white w-full md:w-[25%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[70vh] flex flex-col items-center">
        <img
          src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=600"
          alt="Profile"
          className="rounded-lg w-67 h-80 mx-auto mt-5"
        />
        <h2 className="text-4xl font-bold mt-4">Aabraham James</h2>
        <p className="text-[#d1d5db] text-xl mt-4">Product Designer & Developer</p>
        <p className="text-[#d1d5db] mt-2">Istanbul, Turkey</p>

        <div className="flex justify-center gap-4 mt-6">
          <FaDribbble className="text-white text-2xl" />
          <FaTwitter className="text-white text-xl" />
          <FaGithub className="text-white text-xl" />
          <FaInstagram className="text-white text-xl" />
          <FaEnvelope className="text-white text-xl" />
        </div>
        <button className="mt-15 bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700">
          Let's Talk
        </button>

      </div>
    </div>
  );
};

export default ProfileProjects;
