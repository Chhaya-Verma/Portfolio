import React from "react";
import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import FAQSection from "../components/FAQPage";

// Tools data
const tools = [
  { name: "SiteFlow", description: "Website Builder", image: "siteflow.png" },
  { name: "Pixelo", description: "Design Tool", image: "pixelo.png" },
  { name: "JuiceBox", description: "Payment Provider", image: "juicebox.png" },
  { name: "TalkAI", description: "AI Assistant", image: "talkai.png" },
  { name: "NoteSpace", description: "Productivity Tool", image: "notespace.png" },
  { name: "WebCraft", description: "React framework", image: "webcraft.png" },
];

const Tools = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row px-4 sm:px-10">
      {/* Tools Section (Updated UI) */}
      <div className="md:ml-[40%] mr-[20%] mt-15 lg:ml-[38%] w-full md:w-[55%] py-10 overflow-y-auto order-first sm:order-first">
        <h1 className="text-6xl sm:text-6xl text-white font-bold text-left mt-7">
          Top-Tier Tools for <span className="text-purple-500">Exceptional Results</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg flex items-center gap-4  transition hover:bg-purple-600">
              <div className="w-20 h-12 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-gray-900">
                <img src={tool.image} alt={tool.name} className="w-20 h-15" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
        <FAQSection />
      </div>

      {/* Profile Section (No changes) */}
      <div className="bg-[#28292a] text-white w-full mt-7 md:w-[25%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[70vh] flex flex-col items-center">
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

export default Tools;
