import React from "react";
import PremiumPlanCard from "./PremiumPlanCard";

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
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-white">Upgrade to Premium</h2>
          <p className="text-white/70">
            Unlock the full potential of GlassBeats with our Premium subscription. Enjoy ad-free listening,
            offline downloads, and exclusive content.
          </p>
          <ul className="space-y-3 text-white/70 text-base">
            <li className="flex gap-2 items-start">
              <span className="mt-1 w-2.5 h-2.5 bg-purple-400 rounded-full" />
              Ad-free, uninterrupted listening experience
            </li>
            <li className="flex gap-2 items-start">
              <span className="mt-1 w-2.5 h-2.5 bg-purple-400 rounded-full" />
              Download unlimited songs for offline enjoyment
            </li>
            <li className="flex gap-2 items-start">
              <span className="mt-1 w-2.5 h-2.5 bg-purple-400 rounded-full" />
              Access to exclusive artist content and early releases
            </li>
            <li className="flex gap-2 items-start">
              <span className="mt-1 w-2.5 h-2.5 bg-purple-400 rounded-full" />
              Higher audio quality with lossless streaming
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition">
            Get Premium Now
          </button>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, idx) => (
            <PremiumPlanCard key={idx} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
