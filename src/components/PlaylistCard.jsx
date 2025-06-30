import React from "react";

const PlaylistCard = ({ title, tracks, image }) => {
  return (
    <div className="bg-white/10 rounded-xl outline outline-1 outline-white/20 overflow-hidden relative group cursor-pointer transition transform hover:scale-[1.015]">
      {/* Gambar playlist */}
      <img src={image} alt={`Cover of ${title}`} className="w-full h-48 object-cover sm:h-52 md:h-56 lg:h-48" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent hover:bg-black/25 p-4 flex flex-col justify-end transition duration-300">
        <h3 className="text-white font-semibold text-lg sm:text-base">{title}</h3>
        <p className="text-white/70 text-sm">{tracks} tracks</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
