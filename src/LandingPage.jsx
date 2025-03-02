import React from "react";
import Profileimg from "./Profileimg";
import Projects from "./Projects";
import Tools from "./Tools";
import Thoughts from "./Thoughts";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      {/* Container for the left (fixed) and right (scrollable) sections */}
      <div className="bg-black  min-h-screen flex">
        {/* Profile Image Section (fixed on left side) */}
        <div className="w-2/5 fixed top-0 left-0 h-full bg-black flex items-center justify-center z-10">
          <Profileimg />
        </div>

        {/* Content Section (scrollable) */}
        <div className="w-full ml-[40%] mr-[20%] mt-20  pl-6 pr-6 pt-32 pb-6 overflow-auto">
          <h1 className="text-7xl text-white font-bold">
            Transforming Your Ideas into <span className="text-purple-500">Reality</span>
          </h1>
          <p className="text-white mt-4">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>

          <div className="flex gap-8 mt-6">
            <div>
              <h3 className="text-6xl text-white font-bold">+12</h3>
              <p className="text-gray-400 text-lg">YEARS OF EXPERIENCE</p>
            </div>
            <div>
              <h3 className="text-6xl text-white font-bold">+46</h3>
              <p className="text-gray-400 text-lg">PROJECTS COMPLETED</p>
            </div>
            <div>
              <h3 className="text-6xl text-white  font-bold">+20</h3>
              <p className="text-gray-400 text-lg">WORLDWIDE CLIENTS</p>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700">
              Let's Talk
            </button>
            <button className="text-white border border-gray-400 px-4 py-2 rounded hover:bg-gray-800">
              My Work →
            </button>
          </div>

          <p className="text-white-500 mt-8">Relied on by companies near, far, and worldwide</p>
          <div className="overflow-hidden mt-2">
            {/* Logos Container */}
            <div className="flex animate-scroll text-white gap-6 infinite loop text-4xl font-bold">
              <span>Logoipsum</span>
              <span>Logoipsum</span>
              <span>Logoipsum</span>
              <span>Logoipsum</span>
              <span>Logoipsum</span>
              <span>Logoipsum</span>
            </div>
          </div>
        </div>
      </div>

      {/* Other sections */}
      <Projects />
      <Tools />
      {/* <MyWork /> */}
      <Thoughts />
     
     
    </>
  );
};

export default LandingPage;




