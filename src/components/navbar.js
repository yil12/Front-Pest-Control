
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import "../style/css/navbar.css";
import logo from "../style/img/AlphaProLogo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Primary">
      <div className="navbar-container">
        {/* Logo - navega a #home */}
        <HashLink
          smooth
          to="#home"
          className="logo-link"
          onClick={closeMenu}
        >
          <img src={logo} alt="Logo" className="logo-img" />
        </HashLink>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú de navegación */}
        <div
          id="primary-navigation"
          className={`nav-menu ${isMenuOpen ? "open" : ""}`}
        >
          <ul className="nav-links">
            <li>
              <HashLink smooth to="#home" onClick={closeMenu}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#services" onClick={closeMenu}>
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#about" onClick={closeMenu}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#gallery" onClick={closeMenu}>
                Gallery
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Contacto e idioma en escritorio */}
        <div className="nav-contact-desktop">
          <FaEnvelope className="icon" />
          <div className="contact-item">
            
            <HashLink smooth to="#contact" onClick={closeMenu}>
              Contact
            </HashLink>
          </div>
           <IoIosGlobe className="icon" />
          <div className="contact-item language-select">
           
            <select className="language-dropdown" aria-label="Seleccionar idioma">
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
