import React from "react";

const FeatureCard = ({ icon, title, children }) => {
  return (
    <div className="bg-white/10 rounded-3xl p-6 outline outline-1 outline-white/20 space-y-6">
      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center outline outline-1 outline-white/20">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="text-white/70 text-base leading-relaxed">{children}</p>
    </div>
  );
};

export default FeatureCard;
