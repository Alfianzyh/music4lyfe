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
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo + Description + Socials */}
        <div className="space-y-4">
          <Logo size={8} textSize="text-2xl" />
          <p className="text-white/70 text-sm sm:text-base">
            Enjoy the beat, Live the moment
          </p>
          <SocialIcons />
        </div>

        {/* Links */}
        {linkSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-white font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="text-white/70 hover:text-white transition text-sm sm:text-base cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs sm:text-sm text-white/50">
        © 2025 Music4Lyfe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
