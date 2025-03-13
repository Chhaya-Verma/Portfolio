// import { Home, Folder, Wrench, Briefcase, Edit, Mail } from "lucide-react";
// import { Link } from "react-router-dom"; // Importing Link from React Router

// const Navbar = () => {
//   return (
//     <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-gray-900 px-4 py-2 flex gap-6 shadow-lg">
//       {/* Home Icon */}
//       <Link to="/" className="group relative p-2 rounded-full text-white hover:bg-purple-600">
//         <Home size={20} />
//         <div className="bg-[#28292a] absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-white text-xs opacity-0 group-hover:opacity-100 group-hover:bottom-[-35px] transition-all">
//           Home
//         </div>
//       </Link>

//       {/* Folder Icon */}
//       <Link to="/projects" className="group relative p-2 rounded-full text-white hover:bg-purple-600">
//         <Folder size={20} />
//         <div className="bg-[#28292a] absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-white text-xs opacity-0 group-hover:opacity-100 group-hover:bottom-[-35px] transition-all">
//           Projects
//         </div>
//       </Link>

//       {/* Wrench Icon */}
//       <Link to="/tools" className="group relative p-2 rounded-full text-white hover:bg-purple-600">
//         <Wrench size={20} />
//         <div className="bg-[#28292a] absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-white text-xs opacity-0 group-hover:opacity-100 group-hover:bottom-[-35px] transition-all">
//           Tools
//         </div>
//       </Link>

//       {/* Briefcase Icon */}
//       <Link to="/experience" className="group relative p-2 rounded-full text-white hover:bg-purple-600">
//         <Briefcase size={20} />
//         <div className="bg-[#28292a] absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-white text-xs opacity-0 group-hover:opacity-100 group-hover:bottom-[-35px] transition-all">
//           Experience
//         </div>
//       </Link>

//       {/* Edit Icon */}
//       <Link to="/thoughts" className="group relative p-2 rounded-full text-white hover:bg-purple-600">
//         <Edit size={20} />
//         <div className="bg-[#28292a] absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-white text-xs opacity-0 group-hover:opacity-100 group-hover:bottom-[-35px] transition-all">
//           Thoughts
//         </div>
//       </Link>

//       {/* Mail Icon */}
//       <Link to="/contact" className="group relative p-2 rounded-full text-white hover:bg-purple-600">
//         <Mail size={20} />
//         <div className="bg-[#28292a] absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-white text-xs opacity-0 group-hover:opacity-100 group-hover:bottom-[-35px] transition-all">
//           Contact
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Navbar;



import { Home, Folder, Wrench, Briefcase, Edit, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get current route

  return (
    <div className="w-full flex justify-center top-0 left-0 z-50 bg-black py-4">
      <div className="bg-[#28292a] px-4 py-2 flex gap-6 shadow-lg rounded-full">
        <NavItem to="/" icon={<Home size={20} />} label="Home" active={location.pathname === "/"} />
        <NavItem to="/projects" icon={<Folder size={20} />} label="Projects" active={location.pathname === "/projects"} />
        <NavItem to="/tools" icon={<Wrench size={20} />} label="Tools" active={location.pathname === "/tools"} />
        <NavItem to="/experience" icon={<Briefcase size={20} />} label="Experience" active={location.pathname === "/experience"} />
        <NavItem to="/thoughts" icon={<Edit size={20} />} label="Thoughts" active={location.pathname === "/thoughts"} />
        <NavItem to="/contact" icon={<Mail size={20} />} label="Contact" active={location.pathname === "/contact"} />
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={`group relative p-2 rounded-full text-white transition-all ${active ? "bg-purple-600" : "hover:bg-purple-600"}`}
  >
    {icon}
    <div className="bg-[#28292a] absolute left-1/2 -translate-x-1/2 bottom-[-30px] text-white text-xs opacity-0 group-hover:opacity-100 group-hover:bottom-[-35px] transition-all px-2 py-1 rounded">
      {label}
    </div>
  </Link>
);

export default Navbar;
