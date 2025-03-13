// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const HoverButton = () => {
//   const [hovered, setHovered] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="flex gap-4">
//       {/* Let's Talk Button */}
//       <button
//         className="relative overflow-hidden bg-purple-600 w-40 h-14 px-10 py-2 rounded text-white hover:bg-purple-700"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         onClick={() => navigate("/contact")}
//       >
//         <span
//           className={`absolute left-0 right-0 transition-transform duration-500 ${
//             hovered ? "translate-y-full" : "translate-y-0"
//           }`}
//         >
//           Let's Talk
//         </span>
//         <span
//           className={`absolute left-0 right-0 transition-transform duration-500 ${
//             hovered ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           Let's Talk
//         </span>
//       </button>

//       {/* My Work Button */}
//       <button
//         className="relative flex items-center gap-2 bg-gray-900 w-40 h-14 px-6 py-2 rounded text-white hover:bg-gray-800 transition-all"
//         onClick={() => navigate("/projects")}
//       >
//         My Work
//         <span className="transition-colors duration-300 group-hover:text-purple-500">
//           →
//         </span>
//       </button>
//     </div>
//   );
// };

// export default HoverButton;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HoverButton = ({ showTalk = true, showWork = true }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 mt-7">
      {/* Let's Talk Button */}
      {showTalk && (
        <button
          className="relative overflow-hidden bg-violet-500 px-12 py-3 text-lg rounded text-white hover:bg-purple-700 h-12 w-34 flex justify-center items-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => navigate("/contact")}
        >
          {/* Current visible text */}
          <span
            className={`absolute transition-transform duration-500 ${
              hovered ? "translate-y-10" : "translate-y-0"
            }`}
          >
            Let's Talk
          </span>
          {/* Hidden text which appears on hover */}
          <span
            className={`absolute transition-transform duration-500 ${
              hovered ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            Let's Talk
          </span>
        </button>
      )}

      {/* My Work Button */}
      {showWork && (
        <button
          className="relative flex items-center overflow-hidden px-12 py-3 text-lg rounded text-white  h-12 w-49 group"
          onClick={() => navigate("/projects")}
        >
          <span className="mr-2">My Work</span>
          <span className="transition-colors duration-300 group-hover:text-purple-600">
            →
          </span>
        </button>
      )}
    </div>
  );
};

export default HoverButton;
