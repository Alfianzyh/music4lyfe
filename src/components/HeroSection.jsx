import PrimaryButton from "./PrimaryButton";
import GhostButton from "./GhostButton";
import { FaPlay, FaPause } from "react-icons/fa";
import { TbPlayerSkipBackFilled, TbPlayerTrackPrevFilled, TbPlayerSkipForwardFilled, TbPlayerTrackNextFilled } from "react-icons/tb";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-black border-gray-200 font-Poppins py-40 px-6">
      {/* Background circles */}
      <div className="absolute w-20 h-20 top-36 left-10 bg-white/10 border border-white/20 rounded-2xl"></div>
      <div className="absolute w-16 h-16 bottom-10 right-10 bg-white/10 border border-white/20 rounded-full"></div>
      <div className="absolute w-12 h-12 top-52 right-32 bg-white/10 border border-white/20 rounded-lg"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 z-10 relative">
        {/* Left Side: Text & CTA */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-white">
            Feel The Beat{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              <br></br>Live The Moment
            </span>
          </h1>
          <p className="text-white/80 text-lg">
            Built for music lovers, by music lovers. Stream, explore, and express yourself through sound. Because music isn’t just something you hear, it’s something you live.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <PrimaryButton>Start Free Trial</PrimaryButton>
            <GhostButton>Download App</GhostButton>
          </div>
        </div>

        {/* Right Side: Player Mockup */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-64 h-64 -top-20 -left-10 bg-purple-600 rounded-full opacity-40"></div>
          <div className="absolute w-72 h-72 top-72 left-44 bg-blue-600 rounded-full opacity-30"></div>

          <div className="w-[306px] bg-white/10 rounded-2xl shadow-xl backdrop-blur-md outline outline-1 outline-white/20 p-6 z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex justify-center items-center">
                <FaPlay className="pl-0.5 w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-base text-white font-semibold">Now Playing</p>
                <p className="text-sm text-white/70">From your favorites</p>
              </div>
            </div>

            <div className="relative">
              <img
                src="./public/NowPlaying.png"
                alt="Now Playing"
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/30 rounded-b-xl p-4">
                <p className="text-xl text-white font-bold">Better Dayas</p>
                <p className="text-sm text-white/70">Purple Cat</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 text-sm text-white/70 flex justify-between">
              <span>0:51</span>
              <span>2:37</span>
            </div>
            <div className="w-full h-1 bg-white/20 rounded-full mt-1 mb-6">
              <div className="w-1/3 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <TbPlayerSkipBackFilled className="w-6 h-6 text-white/70 rounded-sm" />
              <TbPlayerTrackPrevFilled className="w-7 h-7 text-white/70 rounded-sm" />
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex justify-center items-center">
                <FaPause className="w-5 h-5 text-white rounded-sm" />
              </div>
              <TbPlayerTrackNextFilled className="w-7 h-7 text-white/70 rounded-sm" />
              <TbPlayerSkipForwardFilled className="w-6 h-6 text-white/70 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
