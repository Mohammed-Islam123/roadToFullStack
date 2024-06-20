import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Pricing from "./Pricing";
import "./MyNavBar.css";
import About from "./About";
import Home from "./Home";
export default function MyNavBar() {
  return (
    <div>
      <nav className="links-wrapper">
        <Link to="/" end>
          <h1>Site Name</h1>
        </Link>
        <div className="sections">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")} // Use NavLink with className
          >
            About
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? "active" : "")} // Use NavLink with className
          >
            Pricing
          </NavLink>
        </div>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </div>
  );
}
