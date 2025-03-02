import React from "react";
import Profileimg from "./Profileimg";

// Thoughts data
const thoughtsData = [
  {
    date: "Apr 8, 2022",
    title: "Starting and Growing a Career in Web Design",
    image: "webdesign.png",
  },
  {
    date: "Mar 15, 2022",
    title: "Create a Landing Page That Performs Great",
    image: "landingpage.png",
  },
  {
    date: "Feb 28, 2022",
    title: "How Can Designers Prepare for the Future?",
    image: "futuredesigner.png",
  },
  {
    date: "Jan 12, 2022",
    title: "How to Create an Effective Design Portfolio",
    image: "portfolio.png",
  },
];

const Thoughts = () => {
  return (
    <>
      {/* Container for left (fixed) and right (scrollable) sections */}
      <div className="bg-black min-h-screen flex">
        {/* Profile Image Section (fixed on left side) */}
        <div className="w-2/5 fixed top-0 left-0 h-full bg-black flex items-center justify-center z-10">
          <Profileimg />
        </div>

        {/* Content Section (scrollable) */}
        <div className="w-full ml-[40%] mr-[20%] pl-6 pr-6 pt-32 pb-6 overflow-auto">
          <h1 className="text-6xl text-white font-bold text-left mb-8">
            Design Thoughts and <span className="text-purple-500">Perspectives</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {thoughtsData.map((thought, index) => (
              <div key={index} className="bg-[#28292a] text-white rounded-xl overflow-hidden">
                <img
                  src={thought.image}
                  alt={thought.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-white-400 text-sm">{thought.date}</p>
                  <h2 className="text-2xl font-semibold mt-2">{thought.title}</h2>
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

export default Thoughts;
