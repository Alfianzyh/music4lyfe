import React from "react";
import Logo from "./Logo";

const Navbar = ({ menuItems }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // offset agar tidak tertutup navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="w-full px-6 py-4 fixed top-0 left-0 z-50 bg-black/25 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Reusable Logo */}
        <Logo size={8} textSize="text-2xl" />

        {/* Dynamic Menu */}
        <nav className="hidden md:flex space-x-9 mr-7">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white/80 text-base hover:text-white transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-white/80 text-base hover:text-white">Sign In</button>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
