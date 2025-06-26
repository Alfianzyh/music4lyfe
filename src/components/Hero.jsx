// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center px-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-xl text-center max-w-xl text-white shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Music4Lyfe</h1>
        <p className="text-lg mb-6">
          Discover music like never before. Stream, vibe, and feel the beat—anytime, anywhere.
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-full transition">
          Download Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
