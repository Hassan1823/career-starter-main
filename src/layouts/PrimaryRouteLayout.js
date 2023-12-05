import { Outlet } from "react-router-dom";
import React from "react";
import PrimaryNavbar from "./components/Navbar/PrimaryNavbar";

function PrimaryRouteLayout() {
  return (
    <>
      <>
        <PrimaryNavbar />
      </>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default PrimaryRouteLayout;
