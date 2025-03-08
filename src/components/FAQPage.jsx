import React, { useState } from "react";
import { FaArrowUpRight } from "react-icons/fa6";

const faqs = [
  { question: "What services do you offer?", answer: "We offer web design, development, and branding services." },
  { question: "What is your design process?", answer: "Our process includes research, wireframing, prototyping, and testing." },
  { question: "How do you handle project timelines?", answer: "We break projects into milestones and ensure timely delivery." },
  { question: "Can you work with existing teams?", answer: "Yes, we can collaborate with your team to enhance the project." },
  { question: "What tools do you use?", answer: "We use Figma, Tailwind CSS, React, and modern development tools." },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 md:px-16 py-12">
      {/* FAQ Section */}
      <h1 className="text-4xl md:text-5xl font-bold">
        Frequently Asked <span className="text-purple-500">Questions</span>
      </h1>

      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#28292a] p-4 rounded-lg cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p className="mt-2 text-gray-300">{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Collaboration Section */}
      <div className="bg-[#28292a] p-6 rounded-lg mt-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            Let’s <span className="text-purple-500">collaborate</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Unlock the potential of your product with expert design and development services. Let's collaborate to create
            user-centered solutions that not only meet your goals but also delight your users.
          </p>
        </div>
        <button className="bg-purple-500 text-white p-3 rounded-full text-xl">
          <FaArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default FAQPage;
