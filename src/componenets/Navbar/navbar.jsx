import React, { useState } from 'react'
import './navbar.css'
import {Menu, X} from 'lucide-react'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    setMenu(id);
    setIsMenuOpen(false);

    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = window.innerWidth <= 768 ? 72 : 84;
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="navbar">
      <div className="logo">⌘ Ayush</div>
      <div onClick={toggleMenu} className={`menu ${isMenuOpen ? 'menu-hidden' : ''}`}><Menu /></div>
      <div onClick={closeMenu} className={`close ${isMenuOpen ? 'close-visible' : ''}`}><X /></div>

      <div className={`mobile-overlay ${isMenuOpen ? 'mobile-overlay-open' : ''}`} onClick={closeMenu} />

      <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
        <li onClick={() => scrollToSection("home")} className={menu === "home" ? 'nav-item-active' : ''}>
          Home
        </li>

        <li onClick={() => scrollToSection("about")} className={menu === "about" ? 'nav-item-active' : ''}>
          About me
        </li>

        <li onClick={() => scrollToSection("services")} className={menu === "services" ? 'nav-item-active' : ''}>
          Services
        </li>

        <li onClick={() => scrollToSection("mywork")} className={menu === "mywork" ? 'nav-item-active' : ''}>
          Portfolio
        </li>

        <li onClick={() => scrollToSection("contact")} className={menu === "contact" ? 'nav-item-active' : ''}>
          Contact
        </li>

      </ul>

      <div className="nav-connect" onClick={() => scrollToSection("contact")}>
        Connect with Me</div>
    </div>
  );
};

export default Navbar;