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

  
  const [collapsed, setCollapsed] = useState(true);

  const labelClass = collapsed
    ? "opacity-0 pointer-events-none w-0"
    : "opacity-100 ml-3";

  const toggleSection = (section) => {
  
    if (collapsed) setCollapsed(false);
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleAvatarClick = () => {
    setCollapsed((prev) => !prev);
  };

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

      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
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

      <div className="group">
  <NavLink
    to={totalcart>0 ? "/addtocart" :"/noproduct"}
    onClick={() => {
      toggleSection("orders");
      ensureExpanded();
    }}
    className="w-full flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-gray-800/70 transition-all duration-200"
  >
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

    <span
      className={`text-sm font-medium text-gray-100 transition-all duration-200 ${labelClass}`}
    >
      Orders
    </span>
  </NavLink>
</div>

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
