import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const navLinks = [
  { name: "About",    path: "/about"    },
  { name: "Work",     path: "/work"     },
  { name: "Services", path: "/services" },
  { name: "Jobs",     path: "/jobs", badge: 2 },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
        
      <div className="container navbar-wrapper">

        {/* Logo */}
<div className="logo">
  <img src={logo} alt="folio" />
  <span className="logo-text">folio<span className="logo-dot">.</span></span>
</div>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              {item.name}
              {item.badge && (
                <span className="nav-badge">{item.badge}</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Contact Button */}
        <button className="contact-btn">Contact Us</button>

        {/* Mobile Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
              {item.badge && (
                <span className="nav-badge">{item.badge}</span>
              )}
            </NavLink>
          ))}
          <button className="contact-btn mobile-btn">Contact Us</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;