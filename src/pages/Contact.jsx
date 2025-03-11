// import React from "react";
// import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
// import FAQSection from "../components/FAQPage";

// const ContactPage = () => {
//   return (
//     <div className="bg-black min-h-screen flex flex-col md:flex-row px-4 sm:px-10">
//       {/* Profile Section */}
//       <div className="bg-[#28292a] text-white w-full md:w-[25%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[80vh] flex flex-col items-center">
//         <img
//           src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=600"
//           alt="Profile"
//           className="rounded-lg w-72 h-72 mx-auto"
//         />
//         <h2 className="text-2xl font-bold mt-4">Aabraham James</h2>
//         <p className="text-gray-400">Product Designer & Developer</p>
//         <p className="text-gray-500">Istanbul, Turkey</p>

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

//       {/* Contact Form Section */}
//       <div className="md:ml-[40%] lg:ml-[38%] w-full md:w-[55%] py-10">
//         <h1 className="text-4xl sm:text-5xl text-white font-bold text-center mt-10">
//           Let's Create Something <span className="text-purple-500">Amazing</span>
//         </h1>

//         <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg mt-8">
//           <label className="block text-white mb-2">Name</label>
//           <input type="text" placeholder="Your Name" className="w-full p-3 bg-[#28292a] text-white rounded-lg outline-none" />

//           <label className="block text-white mt-4 mb-2">Email</label>
//           <input type="email" placeholder="Your@email.com" className="w-full p-3 bg-[#28292a] text-white rounded-lg outline-none" />

//           <label className="block text-white mt-4 mb-2">Message</label>
//           <textarea placeholder="Your Message" className="w-full p-3 bg-[#28292a] text-white rounded-lg outline-none h-32"></textarea>

//           <button className="w-full mt-6 bg-purple-600 px-4 py-3 rounded-lg text-white hover:bg-purple-700">
//             Send
//           </button>
//         </div>
// <FAQSection />
       
//       </div>

//     </div>

    
//   );
// };

// export default ContactPage;

import React from "react";
import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import FAQSection from "../components/FAQPage";

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col-reverse md:flex-row px-4 sm:px-10">
      {/* Profile Section */}
       <div className="bg-[#28292a] text-white w-full md:w-[25%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[70vh] flex flex-col items-center">
                              <img
                                src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png?scale-down-to=600"
                                alt="Profile"
                                className="rounded-lg w-67 h-80 mx-auto mt-5"
                              />
                              <h2 className="text-4xl font-bold mt-4">Aabraham James</h2>
                              <p className="text-[#d1d5db] text-xl mt-4">Product Designer & Developer</p>
                              <p className="text-[#d1d5db] mt-2">Istanbul, Turkey</p>
                      
                              <div className="flex justify-center gap-4 mt-6">
                                <FaDribbble className="text-white text-2xl" />
                                <FaTwitter className="text-white text-xl" />
                                <FaGithub className="text-white text-xl" />
                                <FaInstagram className="text-white text-xl" />
                                <FaEnvelope className="text-white text-xl" />
                              </div>
                              <button className="mt-15 bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700">
                                Let's Talk
                              </button>
                            
                      </div>
      {/* Contact Form Section */}
      <div className="md:ml-[40%] mr-[20%] lg-mr-[20%] mt-15 lg:ml-[38%] w-full md:w-[55%] py-10">
        <h1 className="text-6xl sm:text-6xl text-white font-bold text-center mt-10">
          Let's Create Something <span className="text-purple-500">Amazing</span>
        </h1>

        <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-lg mt-8">
          <label className="block text-white mb-2">Name</label>
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-[#28292a] text-white rounded-lg outline-none" />

          <label className="block text-white mt-4 mb-2">Email</label>
          <input type="email" placeholder="Your@email.com" className="w-full p-3 bg-[#28292a] text-white rounded-lg outline-none" />

          <label className="block text-white mt-4 mb-2">Message</label>
          <textarea placeholder="Your Message" className="w-full p-3 bg-[#28292a] text-white rounded-lg outline-none h-32"></textarea>

          <button className="w-full mt-6 bg-purple-600 px-4 py-3 rounded-lg text-white hover:bg-purple-700">
            Send
          </button>
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </div>
  );
};

export default ContactPage;




