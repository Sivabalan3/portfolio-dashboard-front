import React from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <main
        id="dashboard-main"
        className="h-[calc(100vh-10rem)] overflow-auto px-4 py-10"
      >
        <main />
        <h1 className="text-2xl font-black text-gray-800">Good Morning!</h1>
        <p className="mb-6 text-gray-600">
          Here's an overview of your monthly transactions.
        </p>

        <Outlet />
      </main>
    </>
  );
}

export default Layout;
