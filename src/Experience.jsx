import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Profileimg from "./Profileimg";


// Experience data
const experiences = [
  {
    title: "PixelForge Studios",
    description:
      "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    date: "Jan 2020 - Present",
  },
  {
    title: "BlueWave Innovators",
    description:
      "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    date: "Jun 2017 - Dec 2019",
  },
  {
    title: "TrendCraft Solutions",
    description:
      "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
    date: "Mar 2015 - May 2017",
  },
  {
    title: "Visionary Labs",
    description:
      "Assisted in the creation of wireframes and prototypes for various digital products, contributed to user research and testing.",
    date: "Sep 2013 - Feb 2015",
  },
];

const Experience = () => {
  return (
    <>
      {/* Container for the left (fixed) and right (scrollable) sections */}
      <div className="bg-black min-h-screen flex">
        {/* Profile Image Section (fixed on left side) */}
        <div className="w-2/5 fixed top-0 left-0 h-full bg-black flex items-center justify-center z-10">
          <Profileimg />
        </div>

        {/* Content Section (scrollable) */}
        <div className="w-full ml-[40%] mr-[20%] pl-6 pr-6 pt-32 pb-6 overflow-auto">
          <h1 className="text-5xl text-white font-bold text-center mb-10">
            Over 12 Years of Design <span className="text-purple-500">Expertise</span>
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[#28292a] p-6 rounded-xl flex justify-between items-start shadow-md"
              >
                <div>
                  <h3 className="text-lg text-white font-semibold">{exp.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{exp.description}</p>
                  <p className="text-gray-500 text-xs mt-2">{exp.date}</p>
                </div>
                <div className="text-purple-500 bg-gray-800 p-3 rounded-full">
                  <FaArrowUpRightFromSquare size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
     
    </>
  );
};

export default Experience;
