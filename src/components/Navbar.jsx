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
        <nav className="hidden md:flex space-x-9 ml-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white/80 text-medium font-medium hover:text-white transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Sign In Button */}
          <div
            data-property-1="Default"
            className="w-[90px] h-[35px] flex items-center justify-center bg-white/10 rounded-full outline outline-1 outline-purple-600 cursor-pointer hover:bg-white/20 transition"
          >
            <span className="text-white text-[17px] font-medium">Sign In</span>
          </div>

          {/* Sign Up Button */}
          <div
            data-property-1="Default"
            className="w-[90px] h-[35px] flex items-center justify-center bg-purple-600 text-white font-medium rounded-full cursor-pointer hover:bg-purple-700 transition"
          >
            <span className="text-[17px] font-medium">Sign Up</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
