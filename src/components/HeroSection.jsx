import React from "react";
import PrimaryButton from "./PrimaryButton";
import GhostButton from "./GhostButton";
import NowPlaying from "../assets/NowPlaying.png";
import { FaPlay, FaPause } from "react-icons/fa";
import {
  TbPlayerSkipBackFilled,
  TbPlayerTrackPrevFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-black py-24 px-6 sm:py-32 font-Poppins">
      {/* Background Elements with Animations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute w-20 h-20 top-36 left-10 bg-white/10 border border-white/20 rounded-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute w-16 h-16 bottom-10 right-10 bg-white/10 border border-white/20 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute w-12 h-12 top-52 right-32 bg-white/10 border border-white/20 rounded-lg"
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Text with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Feel The Beat,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Live The Moment
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Built for music lovers, by music lovers. Stream, explore, and
            express yourself through sound. Because music isn’t just something
            you hear, it’s something you live.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <PrimaryButton>Start Free Trial</PrimaryButton>
            <GhostButton>Download App</GhostButton>
          </div>
        </motion.div>

        {/* Right: Player Mockup with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Decorative circles behind the player */}
          <div className="absolute w-64 h-64 -top-11 -left-10 bg-purple-600 rounded-full opacity-40"></div>
          <div className="absolute w-72 h-72 top-72 left-44 bg-blue-600 rounded-full opacity-30"></div>

          {/* Player UI */}
          <div className="relative w-full max-w-[306px] bg-white/10 rounded-2xl shadow-xl backdrop-blur-md outline outline-1 outline-white/20 p-6 z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex justify-center items-center">
                <FaPlay className="text-white w-4 h-4" />
              </div>
              <div>
                <p className="text-base text-white font-semibold">Now Playing</p>
                <p className="text-sm text-white/70">From Lo-Fi Playlist</p>
              </div>
              <BsThreeDotsVertical className="ml-auto text-white/70 w-6 h-6" />
            </div>

            <div className="relative">
              <img
                src={NowPlaying}
                alt="Better Days by Purple Cat"
                className="rounded-xl w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/30 rounded-b-xl p-4">
                <p className="text-xl font-bold text-white">Better Days</p>
                <p className="text-sm text-white/70">Purple Cat</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 flex justify-between text-sm text-white/70">
              <span>0:51</span>
              <span>2:37</span>
            </div>
            <div className="mt-1 mb-6 w-full h-1 bg-white rounded-full">
              <div className="w-1/3 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <TbPlayerSkipBackFilled className="w-6 h-6 text-white/70" />
              <TbPlayerTrackPrevFilled className="w-7 h-7 text-white/70" />
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex justify-center items-center">
                <FaPause className="w-5 h-5 text-white" />
              </div>
              <TbPlayerTrackNextFilled className="w-7 h-7 text-white/70" />
              <TbPlayerSkipForwardFilled className="w-6 h-6 text-white/70" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
