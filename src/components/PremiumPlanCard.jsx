import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PremiumPlanCard = ({ title, price, period, benefits, highlight, badge }) => {
  return (
    <div className={`relative p-6 rounded-2xl border border-white/20 ${highlight ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30" : "bg-white/10"}`}>
      {badge && (
        <div className="absolute top-1 right-1 bg-white/10 px-3 py-1 rounded-full text-white text-xs font-medium">
          {badge}
        </div>
      )}
      <h3 className="text-xl text-white font-semibold text-center">{title}</h3>
      <div className="flex items-end justify-center mt-2">
        <span className="text-3xl text-white font-bold">{price}</span>
        <span className="ml-1 text-base text-white/70">{period}</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-white/70">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <FaCheckCircle className="mt-0.5 w-4 h-4 text-purple-400 rounded-full" />
            {b}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full bg-white/10 py-2 rounded-full text-white font-medium hover:bg-white/20 transition">
        Choose Plan
      </button>
    </div>
  );
};

export default PremiumPlanCard;
