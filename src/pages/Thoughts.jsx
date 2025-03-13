import React from "react";
import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import FAQSection from "../components/FAQPage";
// Thoughts data
const thoughts = [
  { date: "Apr 8, 2022", title: "Starting and Growing a Career in Web Design", image: "webdesign.png" },
  { date: "Mar 15, 2022", title: "Create a Landing Page That Performs Great", image: "landingpage.png" },
  { date: "Feb 28, 2022", title: "How Can Designers Prepare for the Future?", image: "futuredesigner.png" },
  { date: "Jan 12, 2022", title: "How to Create an Effective Design Portfolio", image: "portfolio.png" },
];

const Thoughts = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col-reverse md:flex-row px-4 sm:px-10">
      {/* Profile Section */}
      <div className="bg-[#28292a] text-white mt-7 w-full md:w-[25%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[70vh] flex flex-col items-center">
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

      {/* Thoughts Section */}
      <div className="md:ml-[40%] mr-[20%] mt-7  lg:ml-[38%] w-full md:w-[55%] py-10 overflow-y-auto">
        <h1 className="text-6xl sm:text-6xl text-white font-bold text-center mt-10">
          Design Thoughts and <span className="text-purple-500">Perspectives</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {thoughts.map((thought, index) => (
            <div key={index} className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg hover:bg-[#28292a] transition">
              <img src={thought.image} alt={thought.title} className="w-full h-40 object-cover rounded-lg" />
              <p className="text-gray-400 mt-2">{thought.date}</p>
              <h3 className="text-white text-lg font-semibold mt-1">{thought.title}</h3>
            </div>
          ))}
        </div>
        <FAQSection />
      </div>
    </div>
  );
};

export default Thoughts;
