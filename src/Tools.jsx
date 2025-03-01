import React from "react";

const tools = [
  { name: "SiteFlow", description: "Website Builder", image: "siteflow.png" },
  { name: "Pixelo", description: "Design Tool", image: "pixelo.png" },
  { name: "JuiceBox", description: "Payment Provider", image: "juicebox.png" },
  { name: "TalkAI", description: "AI Assistant", image: "talkai.png" },
  { name: "NoteSpace", description: "Productivity Tool", image: "notespace.png" },
  { name: "WebCraft", description: "React framework", image: "webcraft.png" },
];

const Tools = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center">
        Top-Tier Tools for Exceptional <span className="text-purple-500">Results</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
        {tools.map((tool, index) => (
          <div key={index} className="bg-gray-900 p-4 flex items-center rounded-lg shadow-md">
            <img src={tool.image} alt={tool.name} className="w-12 h-12 mr-4" />
            <div>
              <h2 className="text-lg font-semibold">{tool.name}</h2>
              <p className="text-sm text-gray-400">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
