import React, { useState } from "react";
import Logo from "./Logo";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); // tutup menu saat di mobile
    }
  };

  return (
    <header className="w-full px-6 py-4 fixed top-0 left-0 z-50 bg-black/25 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div onClick={() => scrollToSection("hero")} className="cursor-pointer">
          <Logo size={60} textSize="text-2xl" />
        </div>

        {/* Desktop Menu */}
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
          <div
            className="w-[90px] h-[35px] flex items-center justify-center bg-white/10 rounded-full outline outline-1 outline-purple-600 cursor-pointer hover:bg-white/20 transition"
          >
            <span className="text-white text-[17px] font-medium">Sign In</span>
          </div>

          <div
            className="w-[90px] h-[35px] flex items-center justify-center bg-purple-600 text-white rounded-full cursor-pointer hover:bg-purple-700 transition"
          >
            <span className="text-[17px] font-medium">Sign Up</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-white/80 text-base font-medium hover:text-white transition"
            >
              {item.label}
            </button>
          ))}

          {/* Auth Buttons in mobile */}
          <div className="flex flex-col space-y-2 pt-4">
            <div className="w-full h-[35px] flex items-center justify-center bg-white/10 rounded-full outline outline-1 outline-purple-600 hover:bg-white/20 transition">
              <span className="text-white text-[17px] font-medium">Sign In</span>
            </div>
            <div className="w-full h-[35px] flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
              <span className="text-[17px] font-medium">Sign Up</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
