import React from "react";
import { motion } from "framer-motion";
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
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-white/10 py-12 px-6 bg-black/0"
    >
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo + Description + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          <Logo size={8} textSize="text-2xl" />
          <p className="text-white/70 text-sm sm:text-base">
            Enjoy the beat, Live the moment
          </p>
          <SocialIcons />
        </motion.div>

        {/* Links */}
        {linkSections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
          >
            <h3 className="text-white font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-white/70 hover:text-white transition text-sm sm:text-base cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 border-t border-white/10 pt-6 text-center text-xs sm:text-sm text-white/50"
      >
        © 2025 Music4Lyfe. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
