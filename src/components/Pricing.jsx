import React from "react";
import PremiumPlanCard from "./PremiumPlanCard";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  const plans = [
    {
      title: "Monthly",
      price: "$4.99",
      period: "/month",
      benefits: [
        "Ad-free music",
        "Download 10,000 songs",
        "Cancel anytime",
      ],
    },
    {
      title: "Annual",
      price: "$49.99",
      period: "/year",
      benefits: [
        "Ad-free music",
        "Unlimited downloads",
        "Exclusive content",
        "Family sharing",
      ],
      highlight: true,
      badge: "BEST VALUE",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left: Info & CTA */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-white">
            Upgrade to Premium
          </h2>
          <p className="text-white/70 text-base max-w-lg mx-auto lg:mx-0">
            Unlock the full potential of Music4Lyfe with our Premium subscription. Enjoy ad-free listening,
            offline downloads, and exclusive content.
          </p>
          <ul className="space-y-3 text-white/80 text-base max-w-md mx-auto lg:mx-0">
            {[
              "Ad-free, uninterrupted listening experience",
              "Download unlimited songs for offline enjoyment",
              "Access to exclusive artist content and early releases",
              "Higher audio quality with lossless streaming",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheck className="text-purple-400 w-5 h-5 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <div>
            <button className="mt-6 px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition">
              Get Premium Now
            </button>
          </div>
        </div>

        {/* Right: Plan Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {plans.map((plan, idx) => (
            <PremiumPlanCard key={idx} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
