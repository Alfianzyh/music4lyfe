import React from "react";
import PlaylistCard from "./PlaylistCard";

const DiscoverSection = () => {
  const playlists = [
    {
      title: "Electronic Vibes",
      tracks: 42,
      image: "https://placehold.co/292x192",
    },
    {
      title: "Lo-Fi Beats",
      tracks: 95,
      image: "https://placehold.co/292x192",
    },
    {
      title: "Ambient Chill",
      tracks: 37,
      image: "https://placehold.co/292x192",
    },
    {
      title: "Indie Discoveries",
      tracks: 68,
      image: "https://placehold.co/292x192",
    },
  ];

  return (
    <section id="discover" className="relative py-12 px-6 bg-gradient-to-r from-black/0 to-black/50">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-bold text-white">Discover New Music</h2>
        <p className="text-white/70">
          Explore curated playlists and trending tracks from around the world.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {playlists.map((p, i) => (
          <PlaylistCard key={i} title={p.title} tracks={p.tracks} image={p.image} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-6 py-3 bg-white/10 text-white rounded-full outline outline-1 outline-white/20 font-medium hover:bg-white/20 transition">
          Explore All Playlists
        </button>
      </div>
    </section>
  );
};

export default DiscoverSection;
