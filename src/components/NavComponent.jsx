import * as React from "react";
import CartWidget from "./CartWidget";
import NavItemComponent from "./NavItemComponent";

export default function NavComponent() {
  const navRoutes = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
  ];

  const navStyle = {
    backgroundColor: "#84996a",
  };

  return (
    <>
      <nav className="d-flex align-items-center p-2" style={navStyle}>
        <div className="flex-grow-1 d-flex align-items-center">
          <h2>Second Hand</h2>
          <div className="d-flex px-4">
            {navRoutes.map((route) => (
              <NavItemComponent route={route} />
            ))}
          </div>
        </div>
        <div className="flex-grow-1 d-flex justify-content-end">
          <CartWidget />
        </div>
      </nav>
    </>
  );
}
