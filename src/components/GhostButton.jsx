import React from "react";
import { FaDownload } from "react-icons/fa";

const GhostButton = ({ children, icon = <FaDownload />, onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-3 border border-white/20 outline outline-1 outline-offset-[-1px] outline-white/20 bg-white/10 text-white rounded-full flex items-center gap-2 hover:bg-white/20 transition"
  >
    {icon}
    {children}
  </button>
);

export default GhostButton;
