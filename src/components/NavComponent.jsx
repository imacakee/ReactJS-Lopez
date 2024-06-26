import * as React from "react";
import CartWidget from "./CartWidget";
import NavItemComponent from "./NavItemComponent";
import NavDropdownComponent from "./NavDropdownComponent";

export default function NavComponent() {
  const navRoutes = [
    { title: "Home", path: "/" },
    {
      title: "Products",
      items: [
        { title: "All", path: "/" },
        { title: "Summer", path: "/?category=summer" },
        { title: "Autumn", path: "/?category=autumn" },
        { title: "Winter", path: "/?category=winter" },
        { title: "Spring", path: "/?category=spring" },
      ],
    },
  ];

  const navStyle = {
    backgroundColor: "#84996a",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1,
  };

  return (
    <>
      <nav className="d-flex align-items-center p-2" style={navStyle}>
        <div className="flex-grow-1 d-flex align-items-center">
          <h2>Second Hand</h2>
          <div className="d-flex px-4">
            {navRoutes.map((route, i) => {
              if (route.items) {
                return (
                  <NavDropdownComponent key={`nav-item-${i}`} route={route} />
                );
              } else {
                return <NavItemComponent key={`nav-item-${i}`} route={route} />;
              }
            })}
          </div>
        </div>
        <div className="flex-grow-1 d-flex justify-content-end">
          <CartWidget />
        </div>
      </nav>
    </>
  );
}
