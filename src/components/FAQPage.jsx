// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "What services do you offer?",
//       answer:
//         "I provide a range of services, including product design, web development, and user experience (UX) consulting, tailored to meet your project needs.",
//     },
//     {
//       question: "What is your design process?",
//       answer:
//         "My design process involves understanding client goals, conducting user research, creating wireframes and prototypes, and iterating based on feedback to ensure the final product meets user needs.",
//     },
//     {
//       question: "How do you handle project timelines?",
//       answer: "I follow agile methodologies to ensure timely delivery of projects.",
//     },
//     { question: "Can you work with existing teams?", answer: "Yes, we collaborate with teams to enhance and refine existing projects." },
//   { question: "What tools do you use?", answer: "We use Figma, React, Tailwind CSS, and other modern design & development tools." },
//   ];

//   return (
//     <div className="mt-16">
//       {/* FAQ Section */}
//       <h2 className="text-white text-6xl font-bold text-center">
//         Frequently Asked <span className="text-purple-500">Questions</span>
//       </h2>
//       <div className="mt-6">
//         {faqs.map((faq, index) => (
//           <div key={index} className="mb-3">
//             <button
//               className="w-full flex justify-between items-center bg-[#28292a] text-white px-5 py-3 rounded-lg text-lg"
//               onClick={() => toggleFAQ(index)}
//             >
//               {faq.question}
//               <ChevronDown
//                 className={`transition-transform duration-300 ${
//                   openIndex === index ? "rotate-180" : ""
//                 }`}
//               />
//             </button>
//             <div
//               className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                 openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
//               }`}
//             >
//               <div className="bg-[#28292a] text-gray-300 p-4 rounded-lg">{faq.answer}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Let's Collaborate Section */}
//       <div className="w-full max-w-2xl mt-10 bg-[#28292a] p-6 rounded-lg flex flex-col md:flex-row items-center hover:bg-purple-600 transition duration-300">
//         <div className="flex-1">
//           <h2 className="text-3xl font-bold text-white">
//             Let’s <span className="text-purple-300">collaborate</span>
//           </h2>
//           <p className="text-gray-400 mt-3">
//             Unlock the potential of your product with expert design and development services. Let’s collaborate to create user-centered solutions that not only meet your goals but also delight your users.
//           </p>
//         </div>
//         <button className="bg-purple-500 p-3 rounded-full ml-4 mt-4 md:mt-0">
//           <ChevronDown className="rotate-45 text-white" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;




// import { useState } from "react";
// import { ChevronDown, ArrowUpRight } from "lucide-react";

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "What services do you offer?",
//       answer:
//         "I provide a range of services, including product design, web development, and user experience (UX) consulting, tailored to meet your project needs.",
//     },
//     {
//       question: "What is your design process?",
//       answer:
//         "My design process involves understanding client goals, conducting user research, creating wireframes and prototypes, and iterating based on feedback to ensure the final product meets user needs.",
//     },
//     {
//       question: "How do you handle project timelines?",
//       answer: "I follow agile methodologies to ensure timely delivery of projects.",
//     },
    
//     {
//       question: "Can you work with existing teams?",
//       answer: "Yes, we collaborate with teams to enhance and refine existing projects.",
//     },
//     {
//       question: "What tools do you use?",
//       answer: "We use Figma, React, Tailwind CSS, and other modern design & development tools.",
//     },
//   ];

//   return (
//     <div className="mt-16 max-w-2xl mx-auto"> 
//   {/* FAQ Section */}
//   <h2 className="text-6xl font-bold text-center">
//     Frequently Asked <span className="text-purple-500">Questions</span>
//   </h2>
//   <div className="mt-6">
//     {faqs.map((faq, index) => (
//       <div key={index} className="mb-3">
//         <button
//           className="w-full flex justify-between items-center bg-[#28292a] text-white px-5 py-3 rounded-lg text-lg"
//           onClick={() => toggleFAQ(index)}
//         >
//           {faq.question}
//           <ChevronDown
//             className={`transition-transform duration-300 ${
//               openIndex === index ? "rotate-180 text-purple-300" : "text-white"
//             }`}
//           />
//         </button>
//         <div
//           className={`overflow-hidden transition-all duration-500 ease-in-out ${
//             openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="bg-[#28292a] text-gray-300 p-4 rounded-lg">{faq.answer}</div>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Let's Collaborate Section */}
//   <div className="mt-10 bg-[#28292a] p-6 rounded-lg flex flex-col md:flex-row items-center group transition duration-300 hover:bg-purple-600">
//     <div className="flex-1">
//       <h2 className="text-5xl font-bold text-white">
//         Let’s <span className="text-purple-500 group-hover:text-white">collaborate</span>
//       </h2>
//       <p className="text-gray-400 mt-3">
//         Unlock the potential of your product with expert design and development services. Let’s collaborate to create user-centered solutions that not only meet your goals but also delight your users.
//       </p>
//     </div>

//     {/* Button with Hover Effect */}
//     <button className="p-3 rounded-full ml-4 mt-4 md:mt-0 transition duration-300 bg-purple-500 group-hover:bg-white">
//       <ArrowUpRight className="text-white group-hover:text-purple-500 transition duration-300" />
//     </button>
//   </div>
// </div>

//   );
// };

// export default FAQSection;





/////////////with scroll animation////////////////
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // State for fade-in effect
  const sectionRef = useRef(null); // Ref for the FAQ section

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I provide a range of services, including product design, web development, and user experience (UX) consulting, tailored to meet your project needs.",
    },
    {
      question: "What is your design process?",
      answer:
        "My design process involves understanding client goals, conducting user research, creating wireframes and prototypes, and iterating based on feedback to ensure the final product meets user needs.",
    },
    {
      question: "How do you handle project timelines?",
      answer: "I follow agile methodologies to ensure timely delivery of projects.",
    },
    {
      question: "Can you work with existing teams?",
      answer: "Yes, we collaborate with teams to enhance and refine existing projects.",
    },
    {
      question: "What tools do you use?",
      answer: "We use Figma, React, Tailwind CSS, and other modern design & development tools.",
    },
  ];

  // Set up the intersection observer to detect when the FAQ section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger fade-in when section enters the viewport
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      {/* FAQ Section */}
      <h2 className="text-6xl text-white font-bold text-center">
        Frequently Asked <span className="text-purple-500">Questions</span>
      </h2>
      <div
        ref={sectionRef}
        className={`mt-6 transform transition-opacity duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3">
            <button
              className="w-full flex justify-between items-center bg-[#28292a] text-white px-5 py-3 rounded-lg text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-purple-300" : "text-white"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-[#28292a] text-gray-300 p-4 rounded-lg">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Let's Collaborate Section */}
      <div className="mt-10 bg-[#28292a] p-6 rounded-lg flex flex-col md:flex-row items-center group transition duration-300 hover:bg-purple-600">
        <div className="flex-1">
          <h2 className="text-5xl font-bold text-white">
            Let’s <span className="text-purple-500 group-hover:text-white">collaborate</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Unlock the potential of your product with expert design and development services. Let’s collaborate to create user-centered solutions that not only meet your goals but also delight your users.
          </p>
        </div>

        {/* Button with Hover Effect */}
        <button className="p-3 rounded-full ml-4 mt-4 md:mt-0 transition duration-300 bg-purple-500 group-hover:bg-white">
          <ArrowUpRight className="text-white group-hover:text-purple-500 transition duration-300" />
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
