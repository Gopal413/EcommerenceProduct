// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import SideNavBar from './SideNavBar';

// function Layout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="w-20 min-h-screen bg-blue-500">
//       {/* SideNavBar - passes no props, self-contained */}
//       <SideNavBar />
      
//       {/* Main Content Area */}
//       <div className="ml-0 md:ml-64 transition-all duration-300 min-h-screen">
//         {/* Top Navbar - Optional */}
//         <div className="bg-white shadow-sm border-b border-gray-200 p-4 md:p-6 sticky top-0 z-30">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">AJ</div>
//               <span className="text-sm text-gray-500 hidden md:block">Alexe Jordan</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Outlet - Child routes render here */}
//         <main className="p-6 md:p-8">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Layout;

// import React, { useState } from 'react';
// import { Outlet, NavLink } from 'react-router-dom';
// import SideNavBar from './SideNavBar';

// function Layout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(prev => !prev);
//   const closeSidebar = () => setSidebarOpen(false);

//   return (
//   <div className="flex">
//       {showSidebar && <SideNavBar />}  {/* Toggle with state */}
      
//       <main className={showSidebar ? 'ml-64' : ''}>
//         <button onClick={() => setShowSidebar(!showSidebar)}>
//           📂 Menu
//         </button>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default Layout;

// import React, { useState } from 'react';
// import { Outlet, NavLink, Link } from 'react-router-dom';
// import SideNavBar from './SideNavBar';  // Your fixed component
// //import { ProductProvider } from '../UserContext/ProductProvider';

// function Layout() {
//   // DECLARE STATE HERE - Fixes error!
//   const [showSidebar, setShowSidebar] = useState(false);

//   const toggleSidebar = () => {
//     setShowSidebar(prev => !prev);  // Toggle show/hide
//   };
//   console.log("showsidebar",showSidebar)
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       {/* Top Header */}
//       <header className="bg-white shadow-sm border-b z-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           {/* MENU BUTTON - Controls sidebar */}
//           <button
//             onClick={toggleSidebar}
//             className={`p-2 rounded-lg text-white transition-all shadow-md flex items-center space-x-2 px-4 py-2 font-medium text-sm ${
//               showSidebar 
//                 ? 'bg-red-500 hover:bg-red-600' 
//                 : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             <span>{showSidebar ? '✕ Close' : '📂 Menu'}</span>
//           </button>

//           {/* Top NavLinks */}
//           <div className="hidden md:flex items-center space-x-8">
//             <NavLink 
//               to="/dashboard" 
//               className={({ isActive }) => 
//                 `px-4 py-2 rounded-lg font-medium transition-all ${
//                   isActive 
//                     ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500 shadow-sm' 
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
//                 }`
//               }
//             >
//               Dashboard
//             </NavLink>
//             <NavLink 
//               to="/" 
//               className={({ isActive }) => 
//                 `px-4 py-2 rounded-lg font-medium transition-all ${
//                   isActive 
//                     ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500 shadow-sm' 
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
//                 }`
//               }
//             >
//               Products
//             </NavLink>
//             <NavLink 
//               to="/purchases" 
//               className={({ isActive }) => 
//                 `px-4 py-2 rounded-lg font-medium transition-all ${
//                   isActive 
//                     ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500 shadow-sm' 
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
//                 }`
//               }
//             >
//               Purchases
//             </NavLink>
//           </div>

//           {/* Profile */}
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
//               AJ
//             </div>
//             <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg font-medium transition shadow-sm">
//              <Link to="/login">Logout</Link>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar - Renders ONLY when showSidebar=true */}
//         {showSidebar && <SideNavBar  isOpen={showSidebar} onClose={setShowSidebar}/>}
        
//         {/* Content - Auto-adjusts */}
//         <main 
//           className={`
//             flex-1 overflow-y-auto p-6 transition-all duration-300 ease-in-out
//             ${showSidebar ? 'md:ml-64 lg:ml-72' : ''}
//           `}
//         >
         
//           <Outlet />  {/* Dashboard/Products/etc. */}
         
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Layout;

import React, { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import SideNavBar from "./SideNavBar";

function Layout() {

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
     

      {/* Body */}
      <div className="flex flex-1 relative">
        {/* Sidebar */}
          <SideNavBar />
        {/* Content */}
        <main
          className={`
            flex-1 overflow-y-auto p-4 md:p-6
            transition-all duration-300 ease-in-out
           
          `}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
