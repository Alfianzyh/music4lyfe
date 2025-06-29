import React from "react";

const PlaylistCard = ({ title, tracks, image }) => {
  return (
    <div className="bg-white/10 rounded-xl outline outline-1 outline-white/20 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-transparent hover:bg-black/25 p-4">
        <h3 className="text-white font-semibold text-base mt-28">{title}</h3>
        <p className="text-white/70 text-sm">{tracks} tracks</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
