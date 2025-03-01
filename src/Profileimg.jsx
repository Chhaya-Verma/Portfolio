// import React from "react";

// const Profileimg = () => {
//   return (
//     <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center md:text-left">
//       <img
//         src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=1024"
//         alt="Profile"
//         className="rounded-lg mx-auto md:mx-0"
//       />
//       <h2 className="text-2xl font-bold mt-4">Aabraham James</h2>
//       <p className="text-gray-400">Product Designer & Developer</p>
//       <p className="text-gray-500">Istanbul, Turkey</p>
//       <div className="flex justify-center md:justify-start gap-4 mt-4">
//         <i className="fab fa-dribbble text-xl"></i>
//         <i className="fab fa-twitter text-xl"></i>
//         <i className="fab fa-github text-xl"></i>
//         <i className="fab fa-instagram text-xl"></i>
//       </div>
//       <button className="mt-4 bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700">
//         Let's Talk
//       </button>
//     </div>
//   );
// };

// export default Profileimg;


import React from "react";

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
      <div className="flex justify-center md:justify-start gap-4 mt-4">
        <i className="fab fa-dribbble text-xl text-white"></i>
        <i className="fab fa-twitter text-xl text-white"></i>
        <i className="fab fa-github text-xl text-white"></i>
        <i className="fab fa-instagram text-xl text-white"></i>
      </div>
      <button className="mt-4 bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700">
        Let's Talk
      </button>
    </div>
  );
};

export default Profileimg;
