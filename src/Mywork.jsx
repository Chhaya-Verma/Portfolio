import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div className="text-white py-12 px-6">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center">
        What Clients Say About My <span className="text-purple-500">Work</span>
      </h2>

      {/* Testimonial Card */}
      <div className="mt-8 p-6 bg-[#28292a] rounded-lg w-full max-w-4xl mx-auto shadow-lg">
        <div className="flex items-center space-x-4">
          {/* Profile Image */}
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Client"
            className="w-18 h-18 rounded-full border-2 border-gray-500"
          />
          <h3 className="font-semibold text-2xl">William M.</h3>
        </div>
        {/* Testimonial Text */}
        <p className="mt-4 text-gray-300 text-lg">
          John expertly blends design with functionality, transforming our product into a sleek, 
          user-friendly experience that our customers love!
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-6 justify-center">
        <button className="bg-purple-500 p-3 rounded-full hover:bg-purple-600 transition">
          <FaArrowLeft size={20} />
        </button>
        <button className="bg-purple-500 p-3 rounded-full hover:bg-purple-600 transition">
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default MyWork;
