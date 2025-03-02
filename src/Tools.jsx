import React from "react";
import Profileimg from "./Profileimg";


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
    <>
      {/* Container for the left (fixed) and right (scrollable) sections */}
      <div className="bg-black min-h-screen flex">
        {/* Profile Image Section (fixed on left side) */}
        <div className="w-2/5 fixed top-0 left-0 h-full bg-black flex items-center justify-center z-10">
          <Profileimg />
        </div>

        {/* Content Section (scrollable) */}
        <div className="w-full ml-[40%] mr-[20%] pl-6 pr-6 pt-32 pb-6 overflow-auto">
          <h1 className="text-7xl text-white font-bold text-left">
            Top-Tier Tools for{" "}
            <span className="text-purple-500">Exceptional Results</span>
          </h1>
          <div className="grid grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">

            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#28292a] p-4 flex items-center rounded-lg shadow-md hover:bg-purple-600"
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-17 h-17 mr-4" // Adjusted the image size to fit
                />
                <div>
                  <h2 className="text-3xl text-white font-semibold">{tool.name}</h2>
                  <p className="text-1xl text-white">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

   
    </>
  );
};

export default Tools;
