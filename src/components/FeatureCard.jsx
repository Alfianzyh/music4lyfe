import React from "react";

const FeatureCard = ({ icon, title, children }) => {
  return (
    <div className="bg-white/10 rounded-3xl p-6 sm:p-8 outline outline-1 outline-white/20 space-y-5 hover:bg-white/20 transition duration-300">
      {/* Icon Container */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center outline outline-1 outline-white/20">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-white text-lg sm:text-xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="text-white/70 text-sm sm:text-base leading-relaxed">{children}</p>
    </div>
  );
};

export default FeatureCard;
