// import React, { useState } from "react";
// import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
// import { ChevronDown } from "lucide-react";
// import { ArrowLeft, ArrowRight,  ArrowUpRight} from "lucide-react";
// import HoverButton from "../components/HoverButton";


// // Tools data
// const tools = [
//   { name: "SiteFlow", description: "Website Builder", image: "siteflow.png" },
//   { name: "Pixelo", description: "Design Tool", image: "pixelo.png" },
//   { name: "JuiceBox", description: "Payment Provider", image: "juicebox.png" },
//   { name: "TalkAI", description: "AI Assistant", image: "talkai.png" },
//   { name: "NoteSpace", description: "Productivity Tool", image: "notespace.png" },
//   { name: "WebCraft", description: "React framework", image: "webcraft.png" },
// ];

// // Projects data
// const projects = [
//   { name: "Revo", category: "SaaS Framer Template", image: "Revo.png" },
//   { name: "NajmAI", category: "Modern Framer Template", image: "NajmAI.png" },
//   { name: "Stabraq", category: "Portfolio Framer Template", image: "Stabraq.png" },
//   { name: "TaskAI", category: "SaaS Framer Template", image: "TaskAI.png" },
// ];

// const testimonials = [
//   {
//     id: 1,
//     name: "William M.",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     feedback:
//       "John expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!",
//   },
// ];

// const thoughts = [
//   { date: "Apr 8, 2022", title: "Starting and Growing a Career in Web Design", image: "webdesign.png" },
//   { date: "Mar 15, 2022", title: "Create a Landing Page That Performs Great", image: "landingpage.png" },
//   { date: "Feb 28, 2022", title: "How Can Designers Prepare for the Future?", image: "futuredesigner.png" },
//   { date: "Jan 12, 2022", title: "How to Create an Effective Design Portfolio", image: "portfolio.png" },
// ];

// const faqs = [
//   { question: "What services do you offer?", answer: "We offer UI/UX design, web development, and branding services." },
//   { question: "What is your design process?", answer: "Our process includes research, wireframing, prototyping, and user testing." },
//   { question: "How do you handle project timelines?", answer: "We follow an agile approach to ensure timely delivery with flexibility." },
//   { question: "Can you work with existing teams?", answer: "Yes, we collaborate with teams to enhance and refine existing projects." },
//   { question: "What tools do you use?", answer: "We use Figma, React, Tailwind CSS, and other modern design & development tools." },
// ];

// const logos = [

//   "logoipsum2.png",
//   "logoipsum3.png",

//   "logoipsum4.png",
//   "logoipsum3.png",
//   "logoipsum5.png",
// ]; 

// const LandingPage = () => {
//   const [index, setIndex] = useState(0);
//   const [openIndex, setOpenIndex] = useState(null);

//   const prevTestimonial = () => {
//     setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
//   };

//   const nextTestimonial = () => {
//     setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
//   };

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-black min-h-screen flex flex-col md:flex-row px-4 sm:px-10">
//       {/* Profile Section */}
//       <div className="bg-[#28292a] text-white w-full md:w-[23%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[80vh] flex flex-col items-center">
//         <img
//           src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png"
//           alt="Profile"
//           className="rounded-lg w-68 h-68 mx-auto"
//         />
//         <h2 className="text-4xl text-center font-bold mt-9">Aabraham James</h2>
//         <p className="text-[#d1d5db] mt-5">Product Designer & Developer</p>
//         <p className="text-[#d1d5db] ">Istanbul, Turkey</p>

//         <div className="flex justify-center gap-4 mt-6">
//           <FaDribbble className="text-white text-xl" />
//           <FaTwitter className="text-white text-xl" />
//           <FaGithub className="text-white text-xl" />
//           <FaInstagram className="text-white text-xl" />
//           <FaEnvelope className="text-white text-xl" />
//         </div>
//         {/* <button className="mt-15 bg-purple-600 px-10 py-2 rounded text-white hover:bg-purple-700">
//         <HoverButton showTalk={true} showWork={false} />
//  </button> */}

// <HoverButton showTalk={true} showWork={false} />
//       </div>

//       {/* Main Content Section */}
//       <div className="md:ml-[40%] lg:ml-[38%] w-full md:w-[55%]  py-18 overflow-y-auto text-white mr-[20%]">
//         <h1 className="text-7xl sm:text-6xl font-bold text-left mt-10">
//           Transforming Your Ideas into <span className="text-purple-500">Reality</span>
//         </h1>
//         <p className="text-[#d1d5db] text-lg  text-left mt-4">
//           Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
//         </p>

//         {/* Experience and Stats */}
//         <div className="flex justify-left gap-15 mt-8 text-left">
//           <div>
//             <h2 className="text-7xl font-bold">+12</h2>
//             <p className="text-[#d1d5db] text-lg">Years of Experience</p>
//           </div>
//           <div>
//             <h2 className="text-7xl font-bold">+46</h2>
//             <p className="text-[#d1d5db] text-lg">Projects Completed</p>
//           </div>
//           <div>
//             <h2 className="text-7xl font-bold">+20</h2>
//             <p className="text-[#d1d5db] text-lg">Worldwide Clients</p>
//           </div>
//         </div>



//         <div className="flex justify-left gap-4 mt-6">
//         <HoverButton showTalk={true} showWork={false} />
//         <HoverButton showTalk={false} showWork={true} />

//           {/* <button className="bg-purple-600 px-4 py-2 rounded text-[#d1d5db] hover:bg-purple-700">
//             Let's Talk
//           </button>
//           <button className="text-[#d1d5db]  px-4 py-2 rounded hover:bg-white hover:text-black">
//             My Work →
//           </button> */}
//         </div>

//         <p className="text-[#d1d5db] text-left text-lg mt-8">Relied on by companies near, far, and worldwide</p>

//       {/* Moving Logos with Company Name */}
//       <div className="relative overflow-hidden w-full mt-6">
//         <div className="flex space-x-10 animate-scroll">
//           {logos.concat(logos).map((logo, index) => (
//             <div key={index} className="flex items-center space-x-4">
//             <img src={logo} alt="Company Logo" className="h-12" />
//             <p className="text-white text-3xl font-semibold">LogoIpsum</p>
//           </div>

//           ))}
//         </div>
//       </div>

//         {/* Recent Projects */}
//         <div className="mt-20">
//           <h2 className="text-7xl font-bold text-left">Recent Projects <span className="text-purple-500">and Achievements</span></h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-[#18191a] p-4 rounded-lg shadow-lg text-center">
//                 <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-40 object-cover" />
//                 <h3 className="text-2xl text-left">{project.name}</h3>
//                 <p className="text-[#d1d5db] mt-2 text-l text-left">{project.category}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Tools Section */}
//         <div className="mt-25">
//           <h2 className="text-6xl text-left">
//             Top-Tier Tools for <span className="text-purple-500">Exceptional Results</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
//             {tools.map((tool, index) => (
//               <div
//                 key={index}
//                 className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg flex items-center gap-4 hover:bg-purple-600 transition"
//               >
//                 <div className="w-20 h-12 flex items-center justify-center  rounded-lg">
//                   <img src={tool.image} alt={tool.name} className="w-15 h-12" />
//                 </div>
//                 <div>
//                   <h3 className="text-white text-xl font-bold-800">{tool.name}</h3>
//                   <p className="text-[#d1d5db] text-sm">{tool.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* What Clients Say About My Work */}
//         <div className="col-span-1 sm:col-span-1 mt-25 bg-black text-white p-6 rounded-lg shadow-lg">
//   <h2 className="text-6xl text-left mb-2">
//     What Clients Say About My <span className="text-purple-500">Work</span>
//   </h2>

//   {/* Navigation Arrows (Now Positioned Below Heading) */}
//   <div className="flex justify-end gap-4 mb-6">
//     <button onClick={prevTestimonial} className="bg-purple-500 p-2 rounded-full text-white">
//       <ArrowLeft />
//     </button>
//     <button onClick={nextTestimonial} className="bg-purple-500 p-2 rounded-full text-white">
//       <ArrowRight />
//     </button>
//   </div>

//   {/* Testimonial Section */}
//   <div className="bg-[#28292a] p-10 rounded-lg flex items-start">
//     <img src={testimonials[index].image} alt={testimonials[index].name} className="w-14 h-14 rounded-full" />
//     <div className="ml-4">
//       <h3 className="text-3xl">{testimonials[index].name}</h3>
//       <p className="text-[#d1d5db] mt-7">{testimonials[index].feedback}</p>
//     </div>
//   </div>
// </div>

//         {/* Thoughts Section */}
//         <div className="mt-25">
//   <h2 className="text-6xl font-semibold text-left">
//     Design Thoughts and <span className="text-purple-500">Perspectives</span>
//   </h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
//     {thoughts.map((thought, index) => (
//       <div 
//         key={index} 
//         className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg hover:bg-[#28292a] transition group"
//       >
//         <img src={thought.image} alt={thought.title} className="w-full h-40 object-cover rounded-lg" />
//         <p className="text-[#d1d5db] mt-2">{thought.date}</p>
//         <h3 className="text-white text-xl font-semibold mt-1 group-hover:text-purple-400">
//           {thought.title}
//         </h3>
//       </div>
//     ))}
//   </div>
// </div>

//         {/* FAQ Section */}
//         <div className="mt-25">
//           <h2 className="text-6xl font-bold text-left">
//             Frequently Asked <span className="text-purple-500">Questions</span>
//           </h2>
//           <div className="mt-6">
//             {faqs.map((faq, index) => (
//               <div key={index} className="mb-3">
//                 <button
//                   className="w-full flex justify-between items-center bg-[#28292a] text-white px-5 py-3 rounded-lg text-lg"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   {faq.question}
//                   <ChevronDown className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
//                 </button>
//                 {openIndex === index && (
//                   <div className="mt-2 bg-[#28292a] text-gray-300 p-4 rounded-lg">{faq.answer}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-10 bg-[#28292a] p-6 rounded-lg flex flex-col md:flex-row items-center group transition duration-300 hover:bg-purple-600">
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
//       </div>
//     </div>
//   );
// };

// export default LandingPage;





















import React, { useState, useEffect, useRef } from "react";
import { FaDribbble, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import HoverButton from "../components/HoverButton";

// Tools data
const tools = [
  { name: "SiteFlow", description: "Website Builder", image: "siteflow.png" },
  { name: "Pixelo", description: "Design Tool", image: "pixelo.png" },
  { name: "JuiceBox", description: "Payment Provider", image: "juicebox.png" },
  { name: "TalkAI", description: "AI Assistant", image: "talkai.png" },
  { name: "NoteSpace", description: "Productivity Tool", image: "notespace.png" },
  { name: "WebCraft", description: "React framework", image: "webcraft.png" },
];

// Projects data
const projects = [
  { name: "Revo", category: "SaaS Framer Template", image: "Revo.png" },
  { name: "NajmAI", category: "Modern Framer Template", image: "NajmAI.png" },
  { name: "Stabraq", category: "Portfolio Framer Template", image: "Stabraq.png" },
  { name: "TaskAI", category: "SaaS Framer Template", image: "TaskAI.png" },
];

const testimonials = [
  {
    id: 1,
    name: "William M.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback:
      "John expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!",
  },
];

const thoughts = [
  { date: "Apr 8, 2022", title: "Starting and Growing a Career in Web Design", image: "webdesign.png" },
  { date: "Mar 15, 2022", title: "Create a Landing Page That Performs Great", image: "landingpage.png" },
  { date: "Feb 28, 2022", title: "How Can Designers Prepare for the Future?", image: "futuredesigner.png" },
  { date: "Jan 12, 2022", title: "How to Create an Effective Design Portfolio", image: "portfolio.png" },
];

const faqs = [
  { question: "What services do you offer?", answer: "We offer UI/UX design, web development, and branding services." },
  { question: "What is your design process?", answer: "Our process includes research, wireframing, prototyping, and user testing." },
  { question: "How do you handle project timelines?", answer: "We follow an agile approach to ensure timely delivery with flexibility." },
  { question: "Can you work with existing teams?", answer: "Yes, we collaborate with teams to enhance and refine existing projects." },
  { question: "What tools do you use?", answer: "We use Figma, React, Tailwind CSS, and other modern design & development tools." },
];

const logos = [

  "logoipsum2.png",
  "logoipsum3.png",

  "logoipsum4.png",
  "logoipsum3.png",
  "logoipsum5.png",
];

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [isThoughtVisible, setIsThoughtVisible] = useState(false);
  const [isFAQVisible, setIsFAQVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isToolsVisible, setIsToolsVisible] = useState(false);
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);

  const faqRef = useRef(null); // Reference to the FAQ section
  const thoughtsRef = useRef(null); // Reference to the Thought section
  const projectsRef = useRef(null);
  const toolsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  useEffect(() => {
    // Observer for Thoughts Section
    const thoughtObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsThoughtVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (thoughtsRef.current) {
      thoughtObserver.observe(thoughtsRef.current);
    }

    // Observer for FAQ Section
    const faqObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFAQVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (faqRef.current) {
      faqObserver.observe(faqRef.current);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProjectsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    const toolsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsToolsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (toolsRef.current) {
      toolsObserver.observe(toolsRef.current);
    }

    const testimonialsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
    }

    return () => {
      if (thoughtsRef.current) {
        thoughtObserver.unobserve(thoughtsRef.current);
      }

      if (faqRef.current) {
        faqObserver.unobserve(faqRef.current);
      }
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (toolsRef.current) toolsObserver.unobserve(toolsRef.current);
      if (testimonialsRef.current) testimonialsObserver.unobserve(testimonialsRef.current);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row px-4 sm:px-10">
      {/* Profile Section */}
      <div className="bg-[#28292a] text-white w-full md:w-[25%] lg:w-[20%] p-6 rounded-lg shadow-lg md:fixed md:left-[15%] md:top-30 md:h-[70vh] flex flex-col items-center">
        <img
          src="https://framerusercontent.com/images/H3gQyzjQNWcYB4RqhjHgnNIOI.png"
          alt="Profile"
          className="rounded-lg w-67 h-80 mx-auto"
        />
        <h2 className="text-4xl text-center font-bold mt-9">Aabraham James</h2>
        <p className="text-[#d1d5db] mt-5">Product Designer & Developer</p>
        <p className="text-[#d1d5db]">Istanbul, Turkey</p>

        <div className="flex justify-center gap-4 mt-6">
          {/* Dribbble Icon */}
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbble className="text-white text-xl" />
          </a>

          {/* Twitter Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-xl" />
          </a>

          {/* Github Icon */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-xl" />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-xl" />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:example@email.com" // Replace with your actual email address
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-white text-xl" />
          </a>
        </div>

        {/* Your hover button */}
        <HoverButton showTalk={true} showWork={false} />
      </div>

      {/* Main Content Section */}
      <div className="md:ml-[40%] lg:ml-[38%] w-full md:w-[55%]  py-18 overflow-y-auto text-white mr-[20%]">
        <h1 className="text-7xl sm:text-6xl font-bold text-left mt-10">
          Transforming Your Ideas into <span className="text-purple-500">Reality</span>
        </h1>
        <p className="text-[#d1d5db] text-lg  text-left mt-4">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </p>

        {/* Experience and Stats */}
        <div className="flex justify-left gap-15 mt-8 text-left">
          <div>
            <h2 className="text-7xl font-bold">+12</h2>
            <p className="text-[#d1d5db] text-lg">Years of Experience</p>
          </div>
          <div>
            <h2 className="text-7xl font-bold">+46</h2>
            <p className="text-[#d1d5db] text-lg">Projects Completed</p>
          </div>
          <div>
            <h2 className="text-7xl font-bold">+20</h2>
            <p className="text-[#d1d5db] text-lg">Worldwide Clients</p>
          </div>
        </div>



        <div className="flex justify-left gap-4 mt-6">
          <HoverButton showTalk={true} showWork={false} />
          <HoverButton showTalk={false} showWork={true} />

          {/* <button className="bg-purple-600 px-4 py-2 rounded text-[#d1d5db] hover:bg-purple-700">
            Let's Talk
          </button>
          <button className="text-[#d1d5db]  px-4 py-2 rounded hover:bg-white hover:text-black">
            My Work →
          </button> */}
        </div>

        <p className="text-[#d1d5db] text-left text-lg mt-8">Relied on by companies near, far, and worldwide</p>

        {/* Moving Logos with Company Name */}
        <div className="relative overflow-hidden w-full mt-6">
          <div className="flex space-x-10 animate-scroll">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={logo} alt="Company Logo" className="h-12" />
                <p className="text-white text-3xl font-semibold">LogoIpsum</p>
              </div>

            ))}
          </div>
        </div>

        {/* Recent Projects */}
        <div
          ref={projectsRef}
          className={`mt-20 transform transition-opacity duration-700 ease-in-out ${isProjectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-7xl font-bold text-left">Recent Projects <span className="text-purple-500">and Achievements</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#18191a] p-4 rounded-lg shadow-lg text-center">
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-40 object-cover" />
                <h3 className="text-2xl text-left">{project.name}</h3>
                <p className="text-[#d1d5db] mt-2 text-l text-left">{project.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div
          ref={toolsRef}
          className={`mt-25 transform transition-opacity duration-700 ease-in-out ${isToolsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-6xl text-left">
            Top-Tier Tools for <span className="text-purple-500">Exceptional Results</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg flex items-center gap-4 hover:bg-purple-600 transition"
              >
                <div className="w-20 h-12 flex items-center justify-center  rounded-lg">
                  <img src={tool.image} alt={tool.name} className="w-15 h-12" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold-800">{tool.name}</h3>
                  <p className="text-[#d1d5db] text-sm">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Clients Say About My Work */}
        <div className="col-span-1 sm:col-span-1 mt-25 bg-black text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-6xl text-left mb-2">
            What Clients Say About My <span className="text-purple-500">Work</span>
          </h2>

          {/* Navigation Arrows (Now Positioned Below Heading) */}
          <div className="flex justify-end gap-4 mb-6">
            <button onClick={prevTestimonial} className="bg-purple-500 p-2 rounded-full text-white">
              <ArrowLeft />
            </button>
            <button onClick={nextTestimonial} className="bg-purple-500 p-2 rounded-full text-white">
              <ArrowRight />
            </button>
          </div>

          {/* Testimonial Section */}
          <div
            ref={testimonialsRef}
            className={`col-span-1 sm:col-span-1 mt-25 bg-black text-white p-6 rounded-lg shadow-lg transform transition-opacity duration-700 ease-in-out ${isTestimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <img src={testimonials[index].image} alt={testimonials[index].name} className="w-14 h-14 rounded-full" />
            <div className="ml-4">
              <h3 className="text-3xl">{testimonials[index].name}</h3>
              <p className="text-[#d1d5db] mt-7">{testimonials[index].feedback}</p>
            </div>
          </div>
        </div>

        {/* Thoughts Section */}
        <div
          ref={thoughtsRef}
          className={`mt-25 transform transition-opacity duration-700 ease-in-out ${isThoughtVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-6xl font-semibold text-left">
            Design Thoughts and <span className="text-purple-500">Perspectives</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {thoughts.map((thought, index) => (
              <div
                key={index}
                className="bg-[#1e1e1e] p-4 rounded-lg shadow-lg hover:bg-[#28292a] transition group"
              >
                <img src={thought.image} alt={thought.title} className="w-full h-40 object-cover rounded-lg" />
                <p className="text-[#d1d5db] mt-2">{thought.date}</p>
                <h3 className="text-white text-xl font-semibold mt-1 group-hover:text-purple-400">
                  {thought.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div
          ref={faqRef}
          className={`mt-25 transform transition-opacity duration-700 ease-in-out ${isFAQVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-6xl font-bold text-left">
            Frequently Asked <span className="text-purple-500">Questions</span>
          </h2>
          <div className="mt-6">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3">
                <button
                  className="w-full flex justify-between items-center bg-[#28292a] text-white px-5 py-3 rounded-lg text-lg"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <ChevronDown className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                {openIndex === index && (
                  <div className="mt-2 bg-[#28292a] text-gray-300 p-4 rounded-lg">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
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
    </div>
  );
};

export default LandingPage;

























