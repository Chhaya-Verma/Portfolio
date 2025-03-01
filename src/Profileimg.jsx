import React from "react";
import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Profileimg = () => {
  return (
    <div className="bg-gray-900 mt-40 p-6 rounded-lg shadow-lg text-center md:text-left">
      <img
        src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=300"
        alt="Profile"
        className="rounded-lg mx-auto md:mx-0"
      />
      <h2 className="text-2xl font-bold mt-4 text-white">Aabraham James</h2>
      <p className="text-gray-400">Product Designer & Developer</p>
      <p className="text-gray-500">Istanbul, Turkey</p>
      
      {/* Social Media Links with Icons */}
      <div className="flex justify-center md:justify-start gap-4 mt-4">
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
          <FaDribbble className="text-white text-xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-xl" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-xl" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-xl" />
        </a>
        {/* Gmail Icon */}
        <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-white text-xl" />
        </a>
      </div>

      <button className="mt-4 bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700">
        Let's Talk
      </button>
    </div>
  );
};

export default Profileimg;
