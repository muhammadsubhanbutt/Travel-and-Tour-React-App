import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import MenuItems from "./menuItems";
import Destination from "../Destination/Destination";
function Navbar() {
  const [hamburger, setHambyrger] = useState(false);

  const handleClick = () => {
    setHambyrger(!hamburger);
  };
  return (
    <div className="navContainer">
      <header>
        <nav>
          <div className="logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>Trippy</p>
            </Link>
          </div>
          <div className="hamburger">
            <i
              className={hamburger ? "fa-solid fa-x" : "fas fa-bars"}
              onClick={handleClick}
            ></i>
          </div>
          <div className="nav-menu">
            <ul className={` ${hamburger ? "active" : ""}`}>
              {MenuItems.map((menu, idx) => (
                <li key={idx}>
                  <NavLink className={menu.className} to={menu.url}>
                    <i className={menu.icon}></i>
                    {menu.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      
    </div>
  );
}

export default Navbar;
