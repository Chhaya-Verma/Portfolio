import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold text-white">
          Let’s Create <br /> Something <span className="text-purple-500">Amazing</span>
        </h1>
        <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-800 text-gray-200 outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Your@email.com"
                className="w-full p-3 rounded-md bg-gray-800 text-gray-200 outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-gray-800 text-gray-200 outline-none h-32 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;