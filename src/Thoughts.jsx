import React from "react";

const thoughtsData = [
  {
    date: "Apr 8, 2022",
    title: "Starting and Growing a Career in Web Design",
    image: "webdesign.png",
  },
  {
    date: "Mar 15, 2022",
    title: "Create a Landing Page That Performs Great",
    image: "landingpage.png",
  },
  {
    date: "Feb 28, 2022",
    title: "How Can Designers Prepare for the Future?",
    image: "futuredesigner.png",
  },
  {
    date: "Jan 12, 2022",
    title: "How to Create an Effective Design Portfolio",
    image: "portfolio.png",
  },
];

const Thoughts = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white">
        Design Thoughts and <span className="text-purple-500">Perspectives</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {thoughtsData.map((thought, index) => (
          <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
            <img
              src={thought.image}
              alt={thought.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-400">{thought.date}</p>
              <h2 className="text-lg font-semibold mt-2">{thought.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thoughts;
