// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

// function SideNavBar({ isOpen, onClose }) {
//   const [expandedSections, setExpandedSections] = useState({
//     dashboard: false,
//     orders: false,
//     products: false,
//   });

//   // Close on Escape key
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === 'Escape' && isOpen) {
//         onClose?.();
//       }
//     };
//     document.addEventListener('keydown', handleEscape);
//     return () => document.removeEventListener('keydown', handleEscape);
//   }, [isOpen, onClose]);

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
//         onClick={onClose}
//       />

//       {/* Sidebar */}
//       <aside className="fixed left-0 top-0 w-72 h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white z-50 shadow-2xl transform transition-all duration-300 ease-out scale-100 translate-x-0">
//         {/* Header */}
//         <div className="p-6 border-b border-gray-700/50 bg-gray-900/90 backdrop-blur-sm sticky top-0 z-10">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-2xl shadow-lg flex items-center justify-center">
//                 <span className="font-bold text-sm">AJ</span>
//               </div>
//               <div>
//                 <p className="font-semibold text-white text-lg leading-tight">Alexe Jordan</p>
//                 <p className="text-gray-400 text-sm font-medium">Sales Manager</p>
//               </div>
//             </div>
//             <button
//               onClick={()=>onClose(pre=>!pre)}
//               className="p-2 rounded-xl hover:bg-gray-700/50 transition-all duration-200 hover:scale-110 text-xl font-bold"
//               aria-label="Close menu"
//             >
//               ×
//             </button>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="p-4 md:p-6 space-y-1 overflow-y-auto h-[calc(100vh-120px)] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
//           {/* Dashboard Section */}
//           <div className="group">
//             <button
//               onClick={() => toggleSection('dashboard')}
//               className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-200 group-hover:shadow-lg border border-transparent hover:border-gray-600/50 text-left"
//             >
//               <span className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
//                   📊
//                 </div>
//                 <span className="font-semibold text-gray-100 text-lg">Dashboard</span>
//               </span>
//               <span className={`text-xl transition-transform duration-200 ${
//                 expandedSections.dashboard ? 'rotate-180' : ''
//               }`}>
//                 ▼
//               </span>
//             </button>
//             <div className={`ml-4 mt-2 overflow-hidden transition-all duration-300 ${
//               expandedSections.dashboard ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
//             }`}>
//               <div className="space-y-1 text-sm">
//                 <NavLink
//                   to="/dashboard/overview"
//                   className="block p-3 rounded-xl hover:bg-gray-700/50 transition-all border-l-4 border-blue-500/30 text-gray-300 hover:text-white hover:shadow-md"
//                   onClick={onClose}
//                 >
//                   📈 Overview
//                 </NavLink>
//                 <NavLink
//                   to="/dashboard/analytics"
//                   className="block p-3 rounded-xl hover:bg-gray-700/50 transition-all border-l-4 border-blue-500/30 text-gray-300 hover:text-white hover:shadow-md"
//                   onClick={onClose}
//                 >
//                   📊
//                   Analytics
//                 </NavLink>
//               </div>
//             </div>
//           </div>

//           {/* Orders Section */}
//           <div className="group">
//             <button
//               onClick={() => toggleSection('orders')}
//               className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-200 group-hover:shadow-lg border border-transparent hover:border-gray-600/50 text-left"
//             >
//               <span className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
//                   📦
//                 </div>
//                 <span className="font-semibold text-gray-100 text-lg">Orders</span>
//               </span>
//               <span className={`text-xl transition-transform duration-200 ${
//                 expandedSections.orders ? 'rotate-180' : ''
//               }`}>
//                 ▼
//               </span>
//             </button>
//             <div className={`ml-4 mt-2 overflow-hidden transition-all duration-300 ${
//               expandedSections.orders ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
//             }`}>
//               <div className="space-y-1 text-sm">
//                 <NavLink
//                   to="/orders/all"
//                   className="block p-3 rounded-xl hover:bg-gray-700/50 transition-all border-l-4 border-emerald-500/30 text-gray-300 hover:text-white hover:shadow-md"
//                   onClick={onClose}
//                 >
//                   📋 All Orders
//                 </NavLink>
//                 <NavLink
//                   to="/orders/pending"
//                   className="block p-3 rounded-xl hover:bg-gray-700/50 transition-all border-l-4 border-emerald-500/30 text-gray-300 hover:text-white hover:shadow-md"
//                   onClick={onClose}
//                 >
//                   ⏳ Pending
//                 </NavLink>
//               </div>
//             </div>
//           </div>

//           {/* Products Section */}
//           <div className="group">
//             <button
//               onClick={() => toggleSection('products')}
//               className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-200 group-hover:shadow-lg border border-transparent hover:border-gray-600/50 text-left"
//             >
//               <span className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
//                   🛍️
//                 </div>
//                 <span className="font-semibold text-gray-100 text-lg">Products</span>
//               </span>
//               <span className={`text-xl transition-transform duration-200 ${
//                 expandedSections.products ? 'rotate-180' : ''
//               }`}>
//                 ▼
//               </span>
//             </button>
//             <div className={`ml-4 mt-2 overflow-hidden transition-all duration-300 ${
//               expandedSections.products ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
//             }`}>
//               <div className="space-y-1 text-sm">
//                 <NavLink
//                   to="/products/inventory"
//                   className="block p-3 rounded-xl hover:bg-gray-700/50 transition-all border-l-4 border-orange-500/30 text-gray-300 hover:text-white hover:shadow-md"
//                   onClick = {onClose}
//                 >
//                   📊
//                   Inventory
//                 </NavLink>
//                 <NavLink
//                   to="/products/categories"
//                   className="block p-3 rounded-xl hover:bg-gray-700/50 transition-all border-l-4 border-orange-500/30 text-gray-300 hover:text-white hover:shadow-md"
//                   onClick={onClose}
//                 >
//                   🏷️ Categories
//                 </NavLink>
//               </div>
//             </div>
//           </div>

//           {/* Simple Links */}
//           <NavLink
//             to="/customers"
//             className={({ isActive }) =>
//               `flex items-center p-4 rounded-2xl hover:bg-gray-800/50 transition-all duration-200 group ${
//                 isActive 
//                   ? 'bg-blue-500/20 border-2 border-blue-400/50 text-blue-100 shadow-lg' 
//                   : 'text-gray-300 hover:bg-gray-700/50 hover:shadow-md border border-transparent'
//               }`
//             }
//             onClick={onClose}
//           >
//             <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
//               👥
//             </div>
//             <span className="font-semibold">Customers</span>
//           </NavLink>

//           <NavLink
//             to="/analytics"
//             className={({ isActive }) =>
//               `flex items-center p-4 rounded-2xl hover:bg-gray-800/50 transition-all duration-200 group ${
//                 isActive 
//                   ? 'bg-green-500/20 border-2 border-green-400/50 text-green-100 shadow-lg' 
//                   : 'text-gray-300 hover:bg-gray-700/50 hover:shadow-md border border-transparent'
//               }`
//             }
//             onClick={onClose}
//           >
//             <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
//               📈
//             </div>
//             <span className="font-semibold">Analytics</span>
//           </NavLink>

//           {/* Logout */}
//           <button 
//             className="w-full mt-8 p-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-2xl text-white font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] border border-red-500/30"
//             onClick={onClose}
//           >
//             <span className="flex items-center justify-center space-x-3">
//               <span>🔓</span>
//               <span>Log Out</span>
//             </span>
//           </button>
//         </nav>
//       </aside>
//     </>
    
//   );
// }

// export default SideNavBar;

import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../UserContext/ProductProvider";

function SideNavBar() {
   const {cartItems } = useContext(ProductContext);
  const totalcart = cartItems?.length || 0;

  const [expandedSections, setExpandedSections] = useState({
    dashboard: false,
    orders: false,
    products: false,
  });

  // true  = mini (w-16)
  // false = full (w-64)
  const [collapsed, setCollapsed] = useState(true);

  const labelClass = collapsed
    ? "opacity-0 pointer-events-none w-0"
    : "opacity-100 ml-3";

  const toggleSection = (section) => {
    // always expand sidebar when clicking on a section
    if (collapsed) setCollapsed(false);
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Click on AJ avatar → toggle collapse/expand
  const handleAvatarClick = () => {
    setCollapsed((prev) => !prev);
  };

  // Click on any simple nav link → expand if collapsed
  const ensureExpanded = () => {
    if (collapsed) setCollapsed(false);
  };

  return (
    <aside
      className={`
        h-screen
        bg-gradient-to-b from-gray-900 via-gray-800 to-black
        text-white shadow-2xl border-r border-white/5
        flex flex-col
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-4 border-b border-gray-700/40">
        <button
          onClick={handleAvatarClick}
          className="flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-2xl shadow-lg flex items-center justify-center text-xs font-bold">
            AJ
          </div>
          {!collapsed && (
            <div className="transition-opacity duration-200 text-left">
              <p className="font-semibold text-sm leading-tight">
                Alexe Jordan
              </p>
              <p className="text-gray-400 text-xs">Sales Manager</p>
            </div>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {/* Dashboard */}
        <div className="group">
          <button
            onClick={() => toggleSection("dashboard")}
            className="w-full flex items-center justify-between px-2 py-2 rounded-xl hover:bg-gray-800/70 transition-all duration-200"
          >
            <NavLink
                to="/"
                className="block py-1 text-xs text-gray-300 hover:text-white"
                onClick={ensureExpanded}
              >
            <span className="flex items-center">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                📊
              </div>
              <span
                className={`text-sm font-medium text-gray-100 transition-all duration-200 ${labelClass}`}
              >
                Dashboard
              </span>
            </span>
           </NavLink>
          </button>
        </div>

        {/* Orders */}
      <div className="group">
  <NavLink
    to={totalcart>0 ? "/addtocart" :"/noproduct"}
    onClick={() => {
      toggleSection("orders");
      ensureExpanded();
    }}
    className="w-full flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-gray-800/70 transition-all duration-200"
  >
    {/* icon + badge */}
    <div className="relative">
      <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
        📦
      </div>

      {totalcart > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] px-1.5 py-0.5 min-w-[18px] border border-slate-900">
          {totalcart}
        </span>
      )}
    </div>

    {/* label */}
    <span
      className={`text-sm font-medium text-gray-100 transition-all duration-200 ${labelClass}`}
    >
      Orders
    </span>
  </NavLink>
</div>

        {/* Products */}
        <div className="group">
          <button
            onClick={() => toggleSection("products")}
            className="w-full flex items-center justify-between px-2 py-2 rounded-xl hover:bg-gray-800/70 transition-all duration-200"
          >
            <NavLink
                to="/product"
                className="block py-1 text-xs text-gray-300 hover:text-white"
                onClick={ensureExpanded}
              >
            <span className="flex items-center">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                🛍️
              </div>
              <span
                className={`text-sm font-medium text-gray-100 transition-all duration-200 ${labelClass}`}
              >
                Products
              </span>
            </span>
            </NavLink>
           
          </button>

          
           
        </div>

        {/* Simple links */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `
            flex items-center px-2 py-2 rounded-xl mt-2 transition-all duration-200
            ${
              isActive
                ? "bg-blue-500/20 text-blue-100"
                : "text-gray-300 hover:bg-gray-800/70"
            }
          `
          }
          onClick={ensureExpanded}
        >
          <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
            👥
          </div>
          {!collapsed && (
            <span className="ml-3 text-sm font-medium">Customers</span>
          )}
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `
            flex items-center px-2 py-2 rounded-xl transition-all duration-200
            ${
              isActive
                ? "bg-green-500/20 text-green-100"
                : "text-gray-300 hover:bg-gray-800/70"
            }
          `
          }
          onClick={ensureExpanded}
        >
          <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
            📈
          </div>
          {!collapsed && (
            <span className="ml-3 text-sm font-medium">Analytics</span>
          )}
        </NavLink>
      </nav>

      {/* Logout */}
      <Link to="/login">
      <button
        className="m-3 mb-4 px-3 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
        onClick={ensureExpanded}
      >
        🔓
        {!collapsed && <span>Log Out</span>}
      </button>
      </Link>
    </aside>
  );
}

export default SideNavBar;
