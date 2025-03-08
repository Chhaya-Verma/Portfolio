// import React from "react";
// import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

// // Tools data
// const tools = [
//   { name: "SiteFlow", description: "Website Builder", image: "siteflow.png" },
//   { name: "Pixelo", description: "Design Tool", image: "pixelo.png" },
//   { name: "JuiceBox", description: "Payment Provider", image: "juicebox.png" },
//   { name: "TalkAI", description: "AI Assistant", image: "talkai.png" },
//   { name: "NoteSpace", description: "Productivity Tool", image: "notespace.png" },
//   { name: "WebCraft", description: "React framework", image: "webcraft.png" },
// ];

// const Tools = () => {
//   return (
//     <div className="bg-black min-h-screen flex flex-col md:flex-row px-4 sm:px-10">
//       {/* Profile Section */}
//       <div className="bg-[#28292a] text-white w-full md:w-[25%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[80vh] flex flex-col items-center">
//         {/* Profile Image */}
//         <img
//           src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=600"
//           alt="Profile"
//           className="rounded-lg w-72 h-72 mx-auto"
//         />
//         <h2 className="text-2xl font-bold mt-4">Aabraham James</h2>
//         <p className="text-gray-400">Product Designer & Developer</p>
//         <p className="text-gray-500">Istanbul, Turkey</p>
        
//         {/* Social Icons */}
//         <div className="flex justify-center gap-4 mt-4">
//           <FaDribbble className="text-white text-xl" />
//           <FaTwitter className="text-white text-xl" />
//           <FaGithub className="text-white text-xl" />
//           <FaInstagram className="text-white text-xl" />
//           <FaEnvelope className="text-white text-xl" />
//         </div>
//         <button className="mt-4 bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700">
//           Let's Talk
//         </button>
//       </div>

//       {/* Tools Section */}
//       <div className="md:ml-[40%] lg:ml-[38%] w-full md:w-[55%] py-10 overflow-y-auto">
//         <h1 className="text-4xl sm:text-5xl text-white font-bold text-center mt-10">
//           Top-Tier Tools for{" "}
//           <span className="text-purple-500">Exceptional Results</span>
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
//           {tools.map((tool, index) => (
//             <div
//               key={index}
//               className="relative bg-[#28292a] w-85 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
//             >
//               <img src={tool.image} alt={tool.name} className="w-full h-64 object-cover" />
//               <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#28292a] bg-opacity-80">
//                 <h3 className="text-white text-xl font-bold">{tool.name}</h3>
//                 <p className="text-white mt-1 text-sm">{tool.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tools;



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

const Tools = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row px-4 sm:px-10">
      {/* Profile Section (No changes) */}
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

      {/* Tools Section (Updated UI) */}
      <div className="md:ml-[40%] lg:ml-[38%] w-full md:w-[55%] py-10 overflow-y-auto">
        <h1 className="text-4xl sm:text-5xl text-white font-bold text-center mt-10">
          Top-Tier Tools for <span className="text-purple-500">Exceptional Results</span>
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg flex items-center gap-4 hover:bg-[#28292a] transition">
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
  );
};

export default Tools;
