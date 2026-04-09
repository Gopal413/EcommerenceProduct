//import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'

import React, { useState } from 'react';
import {  } from 'react-router-dom';
import SideNavBar from './SideNavBar';

function OuterHeader() {
  const [status, setStatus] = useState(false);

  const statusFun = () => {
    setStatus(prev => !prev);
    console.log('Menu clicked:', !status);
  };

  return (
    <header className="relative z-20">
      {/* Top bar */}
      <div className="flex items-center justify-between text-base md:text-lg bg-gray-700 h-16 md:h-20 m-2 px-4 md:px-6 rounded-xl text-white shadow-lg">
        {/* Left: Menu button */}
        <button
          onClick={statusFun}
          className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 transition font-semibold"
        >
          ☰ Menu
        </button>

        {/* Center: nav links */}
        <div className="flex items-center gap-3 md:gap-5">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `hover:text-blue-300 transition ${
                isActive
                  ? 'font-semibold text-blue-400 underline underline-offset-4'
                  : ''
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-300 transition ${
                isActive
                  ? 'font-semibold text-blue-400 underline underline-offset-4'
                  : ''
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/purchases"
            className={({ isActive }) =>
              `hover:text-blue-300 transition ${
                isActive
                  ? 'font-semibold text-blue-400 underline underline-offset-4'
                  : ''
              }`
            }
          >
            Purchases
          </NavLink>

          <NavLink
            to="/customers"
            className={({ isActive }) =>
              `hover:text-blue-300 transition ${
                isActive
                  ? 'font-semibold text-blue-400 underline underline-offset-4'
                  : ''
              }`
            }
          >
            Customers
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `hover:text-blue-300 transition ${
                isActive
                  ? 'font-semibold text-blue-400 underline underline-offset-4'
                  : ''
              }`
            }
          >
            Analytics
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `hover:text-blue-300 transition ${
                isActive
                  ? 'font-semibold text-blue-400 underline underline-offset-4'
                  : ''
              }`
            }
          >
            Settings
          </NavLink>
        </div>

        {/* Right: profile + logout */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
            AJ
          </div>
          <button className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-400 text-sm md:text-base transition">
            logout
          </button>
        </div>
      </div>

      {/* Sidebar controlled by status */}
      <SideNavBar isOpen={status} onClose={() => setStatus(false)} />
    </header>
  );
}

export default OuterHeader;

