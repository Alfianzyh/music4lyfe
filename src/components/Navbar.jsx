import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="w-full px-6 py-4 fixed top-0 left-0 z-50 bg-black/25 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Reusable Logo */}
        <Logo size={8} textSize="text-2xl" />

        {/* Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-white/80 text-base hover:text-white transition">Features</a>
          <a href="#discover" className="text-white/80 text-base hover:text-white transition">Discover</a>
          <a href="#premium" className="text-white/80 text-base hover:text-white transition">Premium</a>
          <a href="#download" className="text-white/80 text-base hover:text-white transition">Download</a>
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
