import React from "react";
import PlaylistCard from "./PlaylistCard";
import Electronic from "../assets/Electronic.png";
import Lofi from "../assets/Lofi.png";
import Ambient from "../assets/Ambient.png";
import Indie from "../assets/Indie.png";

const DiscoverSection = () => {
  const playlists = [
    { title: "Electronic Vibes", tracks: 42, image: Electronic },
    { title: "Lo-Fi Beats", tracks: 95, image: Lofi },
    { title: "Ambient Chill", tracks: 37, image: Ambient },
    { title: "Indie Discoveries", tracks: 68, image: Indie },
  ];

  return (
    <section
      id="discover"
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/0 to-black/50"
    >
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Discover New Music
        </h2>
        <p className="text-white/70 text-base sm:text-lg">
          Explore curated playlists and trending tracks from around the world.
        </p>
      </div>

      {/* Playlist Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {playlists.map((p, i) => (
          <PlaylistCard
            key={i}
            title={p.title}
            tracks={p.tracks}
            image={p.image}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <button className="px-6 py-3 bg-white/10 text-white rounded-full outline outline-1 outline-white/20 font-medium hover:bg-white/20 transition">
          Explore All Playlists
        </button>
      </div>
    </section>
  );
};

export default DiscoverSection;
