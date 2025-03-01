// import React from "react";
// import Navbar from "./Navbar";
// import LandingPage from "./LandingPage";
// import Projects from "./Projects";
// import Tools from "./Tools";
// import Thoughts from "./Thoughts";
// import Profileimg from "./Profileimg";

// const App = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-900">
//       {/* Left Sidebar */}
//       <div className="w-64 fixed top-0 left-0 bottom-0 bg-black text-white p-6">
//         {/* Your Navbar or Sidebar content */}
//         <Profileimg /> 
//         <Navbar />
//       </div>

//       {/* Right Content Area */}
//       <div className="ml-64 w-full overflow-y-auto">
//         <LandingPage />
//         <Projects />
//         <Tools />
//         <Thoughts />
//       </div>
//     </div>
//   );
// };

// export default App;



import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Tools from "./Tools";
import Thoughts from "./Thoughts";
import Profileimg from "./Profileimg";
import MyWork from "./Mywork";

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Fixed Sidebar */}
      <div className="w-155 fixed top-0 left-0 bottom-0 bg-black text-white p-6 flex flex-col items-center">
        {/* Add margin to shift profile image towards the left */}
        <div className="mb-6" style={{ marginLeft: '20%' }}>
          <Profileimg />
        </div>
        <Navbar />
      </div>

      {/* Scrollable Content Area */}
      <div className="ml-64 w-full overflow-y-auto p-6">
        <LandingPage />
        <Projects />
        <Tools />
        <MyWork />
        <Thoughts />

       
      </div>
    </div>
  );
};

export default App;
