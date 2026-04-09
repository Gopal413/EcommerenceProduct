

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
