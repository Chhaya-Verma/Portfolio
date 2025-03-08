// import React from "react";
// import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

// const ProfileProjects = () => {
//   const projects = [
//     { name: "Revo", category: "SaaS Framer Template", image: "Revo.png" },
//     { name: "NajmAI", category: "Modern Framer Template", image: "NajmAI.png" },
//     { name: "Stabraq", category: "Portfolio Framer Template", image: "Stabraq.png" },
//     { name: "TaskAI", category: "SaaS Framer Template", image: "TaskAI.png" },
//     { name: "Ruya", category: "SaaS Framer Template", image: "Ruya.png" },
//     { name: "Lines", category: "SaaS Framer Template", image: "Lines.png" },
//   ];

//   return (
//     <div className="bg-black min-h-screen flex flex-col items-center py-10 px-4 sm:px-10">
//       {/* Profile Card */}
//       <div className="bg-[#28292a] w-full max-w-md p-6 rounded-lg shadow-lg text-center text-white">
//         <img
//           src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=430"
//           alt="Profile"
//           className="rounded-lg w-32 h-32 mx-auto"
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

//       {/* Projects Section */}
//       <h1 className="text-4xl sm:text-5xl text-white font-bold text-center mt-10">
//         Recent Projects <span className="text-purple-500">and Achievements</span>
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="relative bg-[#28292a] rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
//           >
//             <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
//             <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#28292a] bg-opacity-80">
//               <h3 className="text-white text-xl font-bold">{project.name}</h3>
//               <p className="text-white mt-1 text-sm">{project.category}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfileProjects;




import React from "react";
import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import FAQSection from "../components/FAQPage";

const ProfileProjects = () => {
  const projects = [
    { name: "Revo", category: "SaaS Framer Template", image: "Revo.png" },
    { name: "NajmAI", category: "Modern Framer Template", image: "NajmAI.png" },
    { name: "Stabraq", category: "Portfolio Framer Template", image: "Stabraq.png" },
    { name: "TaskAI", category: "SaaS Framer Template", image: "TaskAI.png" },
    { name: "Ruya", category: "SaaS Framer Template", image: "Ruya.png" },
    { name: "Lines", category: "SaaS Framer Template", image: "Lines.png" },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row px-4 sm:px-10">
      {/* Projects Section */}
      <div className="md:ml-[40%] mt-15 lg:ml-[38%] w-full md:w-[55%] py-10 overflow-y-auto">
        <h1 className="text-6xl sm:text-6xl text-white font-bold text-center mt-10">
          Recent Projects <span className="text-purple-500">and Achievements</span>
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#28292a] rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#28292a] bg-opacity-80">
                <h3 className="text-white text-xl font-bold">{project.name}</h3>
                <p className="text-white mt-1 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        <FAQSection />
      </div>

      {/* Profile Section */}
      <div className="bg-[#28292a] text-white w-full md:w-[23%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[70vh] flex flex-col items-center order-last md:order-first">
        <img
          src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png"
          alt="Profile"
          className="rounded-lg w-68 h-68 mx-auto"
        />
        <h2 className="text-4xl text-center font-bold mt-9">Aabraham James</h2>
        <p className="text-[#d1d5db] mt-5">Product Designer & Developer</p>
        <p className="text-[#d1d5db]">Istanbul, Turkey</p>

        <div className="flex justify-center gap-4 mt-6">
          <FaDribbble className="text-white text-xl" />
          <FaTwitter className="text-white text-xl" />
          <FaGithub className="text-white text-xl" />
          <FaInstagram className="text-white text-xl" />
          <FaEnvelope className="text-white text-xl" />
        </div>
        <button className="mt-15 bg-purple-600 px-10 py-2 rounded text-white hover:bg-purple-700">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default ProfileProjects;
