const Navbar = () => {
  return (
    <header className="w-full px-6 py-4 fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Music4Lyfe</h1>
        <nav className="hidden md:flex space-x-8 text-white">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#features" className="hover:text-purple-400 transition">Features</a>
          <a href="#download" className="hover:text-purple-400 transition">Download</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
