// src/components/Footer.jsx
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 py-8 mt-20 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-xl font-bold">Music4Lyfe</h3>

        <nav className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#features" className="hover:text-purple-400">Features</a>
          <a href="#download" className="hover:text-purple-400">Download</a>
        </nav>

        <div className="flex space-x-4 text-xl">
          <a href="#" className="hover:text-purple-400"><FaGithub /></a>
          <a href="#" className="hover:text-purple-400"><FaTwitter /></a>
          <a href="#" className="hover:text-purple-400"><FaInstagram /></a>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Music4Lyfe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
