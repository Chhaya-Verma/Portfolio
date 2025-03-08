import React from "react";
import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

// Tools data
const tools = [
  { name: "SiteFlow", description: "Website Builder", image: "siteflow.png" },
  { name: "Pixelo", description: "Design Tool", image: "pixelo.png" },
  { name: "JuiceBox", description: "Payment Provider", image: "juicebox.png" },
  { name: "TalkAI", description: "AI Assistant", image: "talkai.png" },
  { name: "NoteSpace", description: "Productivity Tool", image: "notespace.png" },
  { name: "WebCraft", description: "React framework", image: "webcraft.png" },
];

// Projects data
const projects = [
  {
    name: "Revo",
    category: "SaaS Framer Template",
    image: "Revo.png", // Replace with your actual image link
  },
  {
    name: "NajmAI",
    category: "Modern Framer Template",
    image: "NajmAI.png",
  },
  {
    name: "Stabraq",
    category: "Portfolio Framer Template",
    image: "Stabraq.png",
  },
  {
    name: "TaskAI",
    category: "SaaS Framer Template",
    image: "TaskAI.png",
  },
];

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row px-4 sm:px-10">
      {/* Profile Section */}
      <div className="bg-[#28292a] text-white w-full md:w-[25%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[80vh] flex flex-col items-center">
        <img
          src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png"
          alt="Profile"
          className="rounded-lg w-72 h-72 mx-auto"
        />
        <h2 className="text-2xl font-bold mt-4">Aabraham James</h2>
        <p className="text-gray-400">Product Designer & Developer</p>
        <p className="text-gray-500">Istanbul, Turkey</p>

        <div className="flex justify-center gap-4 mt-4">
          <FaDribbble className="text-white text-xl" />
          <FaTwitter className="text-white text-xl" />
          <FaGithub className="text-white text-xl" />
          <FaInstagram className="text-white text-xl" />
          <FaEnvelope className="text-white text-xl" />
        </div>
        <button className="mt-4 bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700">
          Let's Talk
        </button>
      </div>

      {/* Main Content Section */}
      <div className="md:ml-[40%] lg:ml-[38%] w-full md:w-[55%] py-10 overflow-y-auto text-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mt-10">
          Transforming Your Ideas into <span className="text-purple-500">Reality</span>
        </h1>
        <p className="text-gray-400 text-center mt-4">
          Passionate about creating intuitive and engaging user experiences.
        </p>

        <div className="flex justify-center gap-8 mt-8 text-center">
          <div>
            <h2 className="text-3xl font-bold">+12</h2>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">+46</h2>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">+20</h2>
            <p className="text-gray-400">Worldwide Clients</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700">
            Let's Talk
          </button>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black">
            My Work →
          </button>
        </div>

        <p className="text-gray-400 text-center mt-10">Relied on by companies near, far, and worldwide</p>
        <div className="flex justify-center gap-6 mt-4">
          <img src="logo1.png" alt="Company Logo" className="h-10" />
          <img src="logo2.png" alt="Company Logo" className="h-10" />
          <img src="logo3.png" alt="Company Logo" className="h-10" />
        </div>

        {/* Recent Projects and Achievements Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center">Recent Projects <span className="text-purple-500">and Achievements</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#18191a] p-4 rounded-lg shadow-lg text-center">
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-40 object-cover" />
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-400">{project.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center">
            Top-Tier Tools for <span className="text-purple-500">Exceptional Results</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg flex items-center gap-4 hover:bg-purple-600 transition"
              >
                <div className="w-20 h-12 flex items-center justify-center bg-gray-800 rounded-lg">
                  <img src={tool.image} alt={tool.name} className="w-20 h-15" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
