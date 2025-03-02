import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Profileimg from "./Profileimg";

const Faq = () => {
  const faqs = [
    { question: "What services do you offer?", answer: "We provide web design and development services tailored to your needs." },
    { question: "What is your design process?", answer: "Our design process includes research, wireframing, prototyping, and user testing." },
    { question: "How do you handle project timelines?", answer: "We follow an agile approach to ensure timely delivery." },
    { question: "Can you work with existing teams?", answer: "Yes, we integrate seamlessly with your existing development teams." },
    { question: "What tools do you use?", answer: "We use Figma, React, Tailwind CSS, and other modern technologies." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Container for left (fixed) and right (scrollable) sections */}
      <div className="bg-black min-h-screen flex">
        {/* Profile Image Section (fixed on left side) */}
        <div className="w-2/5 fixed top-0 left-0 h-full bg-black flex items-center justify-center z-10">
          <Profileimg />
        </div>

        {/* Content Section (scrollable) */}
        <div className="w-full ml-[40%] mr-[20%] mt-[-5%] pl-6 pr-6 pt-32 pb-6 overflow-auto">
          {/* FAQ Heading */}
          <h2 className="text-6xl font-bold text-white">
            Frequently <span className="text-purple-500">Asked Questions</span>
          </h2>

          {/* FAQ Items */}
          <div className="mt-8 text-white text-2xl space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#28292a] rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span>{openIndex === index ? "-" : "^"}</span>
                </button>
                {openIndex === index && (
                  <p className="px-6 py-4 text-gray-300">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Collaboration Section */}
          <div className="mt-12 bg-[#28292a] p-6 rounded-xl relative  hover:bg-purple-600">
            <h2 className="text-6xl font-bold text-white">Let’s </h2>
            <h1 className="text-6xl font-bold text-white">
              <span className="text-purple-500">collaborate</span>
            </h1>
            <p className="text-white text-lg mt-2">
              Unlock the potential of your product with expert design and development services. Let’s collaborate to create user-centered solutions that not only meet your goals but also delight your users.
            </p>
            <div className="absolute top-4 right-4 text-purple-500 bg-gray-800 p-3 rounded-full">
              <FaArrowUp size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
