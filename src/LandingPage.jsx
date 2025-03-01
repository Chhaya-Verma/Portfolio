import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-8">
        {/* Content Section */}
        <div>
          <h1 className="text-7xl font-bold">
            Transforming Your Ideas into <span className="text-purple-500">Reality</span>
          </h1>
          <p className="text-white-400 mt-2">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>

          <div className="flex gap-8 mt-6">
            <div>
              <h3 className="text-6xl font-bold">+12</h3>
              <p className="text-gray-400 text-lg">YEARS OF EXPERIENCE</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold">+46</h3>
              <p className="text-gray-400 text-lg">PROJECTS COMPLETED</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold">+20</h3>
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
            <div className="flex animate-scroll gap-6 infinite loop text-4xl font-bold">
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
    </div>
  );
};

export default LandingPage;
