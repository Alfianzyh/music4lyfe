import React from "react";
import SocialIcons from "./SocialIcons";
import Logo from "./Logo"; 

const Footer = () => {
  const linkSections = [
    {
      title: "Company",
      links: ["About", "Jobs", "For the Record", "Partners", "Newsroom"],
    },
    {
      title: "Communities",
      links: ["For Artists", "Developers", "Advertising", "Investors", "Vendors"],
    },
    {
      title: "Useful Links",
      links: ["Support", "Web Player", "Free Mobile App", "Privacy Policy", "Terms & Conditions"],
    },
  ];

  return (
    <footer className="border-t border-white/10 py-12 px-6 bg-black/0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Logo size={8} textSize="text-2xl" />
          </div>
          <p className="text-white/70 text-base">Enjoy the beat, Live the moment</p>
            <SocialIcons />
        </div>

        {/* Link Sections */}
        {linkSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i} className="text-white/70 hover:text-white transition text-base cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="mt-11 -mb-7 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © 2025 Music4Lyfe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

