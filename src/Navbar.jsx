import { Home, Folder, Wrench, Briefcase, Edit, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-gray-900 px-4 py-2 rounded-full flex gap-4 shadow-lg">
      <button className="p-2 rounded-full bg-purple-600 text-white">
        <Home size={20} />
      </button>
      <button className="p-2 rounded-full text-white hover:bg-gray-700">
        <Folder size={20} />
      </button>
      <button className="p-2 rounded-full text-white hover:bg-gray-700">
        <Wrench size={20} />
      </button>
      <button className="p-2 rounded-full text-white hover:bg-gray-700">
        <Briefcase size={20} />
      </button>
      <button className="p-2 rounded-full text-white hover:bg-gray-700">
        <Edit size={20} />
      </button>
      <button className="p-2 rounded-full text-white hover:bg-gray-700">
        <Mail size={20} />
      </button>
    </div>
  );
};

export default Navbar;
