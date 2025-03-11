import React from "react";
import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import FAQSection from "../components/FAQPage";

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
    <div className="bg-black min-h-screen flex flex-col-reverse md:flex-row px-4 sm:px-10">
      <div className="bg-[#28292a] text-white w-full md:w-[25%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[70vh] flex flex-col items-center">
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

      <div className="md:ml-[40%] mr-[20%] mt-15 lg:ml-[38%] w-full md:w-[55%] py-10 overflow-y-auto">
        <h1 className="text-6xl sm:text-6xl text-white font-bold text-center mt-10">
          Over 12 Years of <span className="text-purple-500">Design Expertise</span>
        </h1>

        <div className="flex flex-col gap-6 mt-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg transition duration-300 relative group hover:bg-purple-600"
            >
              <h3 className="text-white text-xl font-semibold">{exp.company}</h3>
              <p className="text-[#d1d5db] mt-3">{exp.role}</p>
              <p className="text-[#d1d5db] mt-6">{exp.duration}</p>

              <button className="absolute top-4 right-4 p-3 rounded-full bg-purple-600 transition duration-300 group-hover:bg-white">
                <ArrowUpRight className="text-white transition duration-300 group-hover:text-purple-600" />
              </button>
            </div>
          ))}
        </div>
        <FAQSection />
      </div>
    </div>
  );
};

export default Experience;

