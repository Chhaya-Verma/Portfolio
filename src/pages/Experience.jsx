import React from "react";
import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

// Experience data
const experiences = [
  {
    company: "PixelForge Studios",
    role: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    duration: "Jan 2020 - Present",
  },
  {
    company: "BlueWave Innovators",
    role: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    duration: "Jun 2017 - Dec 2019",
  },
  {
    company: "TrendCraft Solutions",
    role: "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
    duration: "Mar 2015 - May 2017",
  },
  {
    company: "Visionary Labs",
    role: "Assisted in the creation of wireframes and prototypes for various digital products, contributed to user research and testing.",
    duration: "Sep 2013 - Feb 2015",
  },
];

const Experience = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row px-4 sm:px-10">
      {/* Profile Section */}
      <div className="bg-[#28292a] text-white w-full md:w-[25%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[80vh] flex flex-col items-center">
        <img
          src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=600"
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

      {/* Experience Section */}
      <div className="md:ml-[40%] lg:ml-[38%] w-full md:w-[55%] py-10 overflow-y-auto">
        <h1 className="text-4xl sm:text-5xl text-white font-bold text-center mt-10">
          Over 12 Years of <span className="text-purple-500">Design Expertise</span>
        </h1>
        
        <div className="flex flex-col gap-6 mt-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg hover:bg-purple-900 transition duration-300">
              <h3 className="text-white text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-400 mt-2">{exp.role}</p>
              <p className="text-gray-500 mt-1">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
