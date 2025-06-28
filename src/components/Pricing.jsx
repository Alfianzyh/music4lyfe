// src/components/CTASection.jsx
const CTASection = () => {
  return (
    <section id="download" className="py-20 px-6 bg-black flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl text-center max-w-2xl shadow-xl text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to feel the beat?</h2>
        <p className="text-gray-300 mb-6">
          Join thousands of music lovers today. Download Music4Lyfe and start your journey.
        </p>
        <a
          href="#"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition duration-300"
        >
          Download Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
