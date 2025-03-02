
import React from "react";
import Profileimg from "./Profileimg";

const Contact = () => {
  return (
    <>
      {/* Container for left (fixed) and right (scrollable) sections */}
      <div className="bg-black min-h-screen flex">
        {/* Profile Image Section (fixed on left side) */}
        <div className="w-2/5 fixed top-0 left-0 h-full bg-black flex items-center justify-center z-10">
          <Profileimg />
        </div>

        {/* Content Section (scrollable) */}
        <div className="w-full ml-[40%] mr-[20%] mt-[5%] pl-6 pr-6 pt-32 pb-6 overflow-auto">
          <div className="w-full max-w-lg text-center mx-auto">
            <h1 className="text-6xl text-left font-bold text-white">
              Let’s Create <br /> Something <span className="text-purple-500">Amazing</span>
            </h1>
            <div className="mt-6 bg-[#28292a] p-6 rounded-lg shadow-lg">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-400 text-lg  mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-md bg-gray-800 text-gray-200 outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-lg  mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your@email.com"
                    className="w-full p-3 rounded-md bg-gray-800 text-gray-200 outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-lg mb-2">Message</label>
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-3 rounded-md bg-gray-800 text-gray-200 outline-none h-32 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 rounded-md text-lg  bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
    
    </>
  );
};

export default Contact;
