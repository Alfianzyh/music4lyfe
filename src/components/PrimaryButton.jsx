import React from "react";

const PrimaryButton = ({ children }) => (
  <button className="px-8 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition">
    {children}
  </button>
);

export default PrimaryButton;
