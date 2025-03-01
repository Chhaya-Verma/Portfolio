import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-8">
        {/* Profile Card */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center md:text-left">
          <img
            src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=1024"
            alt="Profile"
            className="rounded-lg mx-auto md:mx-0"
          />
          <h2 className="text-2xl font-bold mt-4">Aabraham James</h2>
          <p className="text-gray-400">Product Designer & Developer</p>
          <p className="text-gray-500">Istanbul, Turkey</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <i className="fab fa-dribbble text-xl"></i>
            <i className="fab fa-twitter text-xl"></i>
            <i className="fab fa-github text-xl"></i>
            <i className="fab fa-instagram text-xl"></i>
          </div>
          <button className="mt-4 bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700">
            Let's Talk
          </button>
        </div>

        {/* Content Section */}
        <div>
          <h1 className="text-6xl font-bold">
            Transforming Your Ideas into <span className="text-purple-500">Reality</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>

          <div className="flex gap-8 mt-6">
            <div>
              <h3 className="text-5xl font-bold">+12</h3>
              <p className="text-gray-400 text-sm">YEARS OF EXPERIENCE</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">+46</h3>
              <p className="text-gray-400 text-sm">PROJECTS COMPLETED</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">+20</h3>
              <p className="text-gray-400 text-sm">WORLDWIDE CLIENTS</p>
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

          <p className="text-gray-500 mt-8">Relied on by companies near, far, and worldwide</p>
          <div className="flex gap-6 mt-2">
            <span className="text-gray-400 text-lg">Logoipsum</span>
            <span className="text-gray-400 text-lg">Logoipsum</span>
            <span className="text-gray-400 text-lg">Logo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
