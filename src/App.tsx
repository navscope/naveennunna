import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ChevronDown, Camera, Code, Brush, ShieldCheck, Layers } from "lucide-react";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <>
      <div className="min-h-screen relative">
        {/* Full-screen background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://media-hosting.imagekit.io//41663c5c9451432e/nav22.png?Expires=1834987340&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vXhi8QBBIROOfE~U741eLWJ4xkOMZrgEsz~m~2aNKeDuVdA8aQDphW98en76kdf5VY-PZDD7fUzS72O3FvkWptGvMgw~1JjKehXaSQB-MBLlL5G9z6gnOGKFqaXbVPMeEn~t9pkUVfiat-vxytrUgqD3vCmPq0g06sLle~IlXBORH-GkcmQjAJh~l27XQOueu5bWUajbe6p85Pqjmk8Xq8xPsGl~5UwMWUKXTG7MV79rbSTzjtWsLCzUq-WwfQyWrUFLfuvvzbpjTIEYf6CRL3WvDDs1vmmfTwewuuAVhG-UWyA6wjrZlZou~7ivpM0~3y-d5lkS42HZrQkmRPYDLg__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="App.tsx" className="text-2xl font-bold text-white">Nav_Scope.</a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-white/80 font-medium"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="work.html"
                  className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
                >
                  Get Started
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-white/80">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="work.html"
                  className="block w-full text-left px-3 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 backdrop-blur-sm border border-white/20"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Transform Your Vision Into Reality
                </h1>
                <p className="mt-6 text-xl text-white/90">
                  Create stunning experiences that captivate your audience and drive results. Let's build something amazing together.
                </p>
                <div className="mt-10 flex items-center space-x-4">
                  <a
                    href="work.html"
                    className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20 flex items-center group"
                  >
                    Get Started
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                  <a
                    href="portfolio.html"
                    className="bg-transparent text-white px-8 py-3 rounded-full border-2 border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    Know More
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://media-hosting.imagekit.io//cd4790cdf8774bf9/nav333-removebg-preview.png?Expires=1834987440&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OhwZkaudPdi7shLhGWDmebYQa6cLjqJzKxZhjKP3EQwXZVLj1qy4PgD9NxtoYrN3VCxQJVGEhMU3xcLls1w9Mnzrvv6pqZMk9Lh87S8kviwnB74sJ-UR38PmX59U0mF0dWALDEQ~EHoGwTTs0XYQCJo9b7TJdoof6ddTFFXHsUUoHZi1ZLliQqlI3NVhSmDpyxMdTG4UBo57dh2937BOGitCmKyU6KrgBpOVTikGOeAo7mTHIxU~N7Y-LNHqi24X6mr1PjPgC1SrOJUWs17WuraKiJacBpyKKvJEJB7vMRHyqAx0sCvTVm2x4zPGIevKbnoL3O7Az61ZoyjR3S0fvA__"
                  alt="Hero"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} className="hover:text-white/80 transition-colors" />
          </button>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-black">
        {/* Noise Effect for Depth */}
        <div className="absolute inset-0 bg-noise opacity-10"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text animate-pulse">
              Who Am I ?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              I craft exceptional digital experiences by merging creativity and technology to bring your vision to life.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] mx-auto mt-4"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                At my core, I am passionate about storytelling through design and innovation. Our team transforms ideas into reality, creating meaningful and impactful digital solutions.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Whether it’s crafting immersive visuals or engineering seamless user experiences, I push boundaries to redefine creativity.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-[#d1dd5d]/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#d1dd5d]/20 rounded-full">
                    <Camera className="text-[#d1dd5d]" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
                    Creative Vision
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Capturing the essence of your brand through innovative storytelling and visual excellence.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-[#d1dd5d]/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#d1dd5d]/20 rounded-full">
                    <Code className="text-[#d1dd5d]" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
                    Technical Excellence
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Harnessing cutting-edge technology to build scalable, high-performance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section id="services" className="relative py-24 bg-black">
  {/* Noise Effect */}
  <div
    className="absolute inset-0 bg-noise opacity-10"
    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/navy.png')" }}
  ></div>

  <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text animate-pulse">
         Services
      </h2>
      <p className="text-lg text-white/70 max-w-2xl mx-auto">
        I specialize in creating stunning visuals and designs that bring your ideas to life.
      </p>
      <div className="w-32 h-1 bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] mx-auto mt-4"></div>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Videography */}
      <div className="p-8 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-[#d1dd5d]/40">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-4 bg-[#d1dd5d]/20 rounded-full">
            <Camera className="text-[#d1dd5d]" size={36} />
          </div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
            Videos
          </h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          Capturing your story in motion with high-quality video production and editing.
        </p>
      </div>

      {/* Graphic Design */}
      <div className="p-8 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-[#d1dd5d]/40">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-4 bg-[#d1dd5d]/20 rounded-full">
            <Brush className="text-[#d1dd5d]" size={36} />
          </div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
            Graphic Design
          </h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          Creating visually stunning designs for branding, marketing, and more.
        </p>
      </div>

      {/* Logo Design */}
      <div className="p-8 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-[#d1dd5d]/40">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-4 bg-[#d1dd5d]/20 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d1dd5d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pen-tool"
            >
              <path d="m12 19 7-7 3 3-7 7-3-3z" />
              <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="m2 2 7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
            Logo Design
          </h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          Crafting unique and memorable logos that represent your brand identity.
        </p>
      </div>

      {/* Photography */}
      <div className="p-8 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-[#d1dd5d]/40">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-4 bg-[#d1dd5d]/20 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d1dd5d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-camera"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
            Photos
          </h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          Capturing moments with professional photography for events, products, and more.
        </p>
      </div>
    </div>
  </div>
</section>

     {/* Gallery Section */}
<section id="gallery" className="py-24 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#d1dd5d] mb-4">Our Gallery</h2>
      <p className="text-lg text-white/80 max-w-2xl mx-auto">
        Explore our creative work and see how we bring ideas to life.
      </p>
      <div className="w-24 h-1 bg-[#d1dd5d] mx-auto mt-4"></div>
    </div>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Large Image (Top Left) */}
      <div className="relative group overflow-hidden rounded-lg col-span-2 row-span-2 transform hover:scale-105 transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Gallery 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href="/gallery"
            className="bg-white/10 text-white px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Medium Image (Top Right) */}
      <div className="relative group overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Gallery 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href="/gallery"
            className="bg-white/10 text-white px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Small Image (Middle Right) */}
      <div className="relative group overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Gallery 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href="/gallery"
            className="bg-white/10 text-white px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Medium Image (Bottom Left) */}
      <div className="relative group overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Gallery 4"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href="/gallery"
            className="bg-white/10 text-white px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Large Image (Bottom Right) */}
      <div className="relative group overflow-hidden rounded-lg col-span-2 row-span-2 transform hover:scale-105 transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Gallery 5"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href="/gallery"
            className="bg-white/10 text-white px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Contact Section */}
<section id="contact" className="py-24 bg-gray-900 relative">
  {/* Background Image */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.2, // Subtle overlay effect
    }}
  ></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#d1dd5d] mb-4">Get In Touch</h2>
      <p className="text-lg text-white/80 max-w-2xl mx-auto">
        Have a project in mind or just want to say hello? We'd love to hear from you!
      </p>
      <div className="w-24 h-1 bg-[#d1dd5d] mx-auto mt-4"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Contact Form */}
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-[#d1dd5d]/20">
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/5 border border-[#d1dd5d]/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d1dd5d]/50"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/5 border border-[#d1dd5d]/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d1dd5d]/50"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-[#d1dd5d]/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d1dd5d]/50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#d1dd5d] text-black px-8 py-3 rounded-full hover:bg-[#aabb44] transition-colors font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Contact Us"
          className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="bg-black py-12 relative">
  {/* Background Noise Effect */}
  <div
    className="absolute inset-0 bg-noise opacity-10"
    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/navy.png')" }}
  ></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* About Section */}
      <div>
        <h3 className="text-xl font-bold text-[#d1dd5d] mb-4">About Us</h3>
        <p className="text-white/70">
          We are a creative agency dedicated to building innovative digital solutions that transform businesses.
        </p>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-white/70 hover:text-[#d1dd5d] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" className="text-white/70 hover:text-[#d1dd5d] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" className="text-white/70 hover:text-[#d1dd5d] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-bold text-[#d1dd5d] mb-4">Quick Links</h3>
        <ul className="space-y-2">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-[#d1dd5d] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-bold text-[#d1dd5d] mb-4">Contact Info</h3>
        <ul className="space-y-2">
          <li className="text-white/70">Email: info@navscope.com</li>
          <li className="text-white/70">Phone: +1 (123) 456-7890</li>
          <li className="text-white/70">Address: 123 Creative St, Tech City</li>
        </ul>
      </div>

      {/* Newsletter Subscription */}
      <div>
        <h3 className="text-xl font-bold text-[#d1dd5d] mb-4">Subscribe</h3>
        <p className="text-white/70 mb-4">
          Stay updated with our latest news and offers.
        </p>
        <form className="flex items-center">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 bg-white/5 border border-[#d1dd5d]/20 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d1dd5d]/50"
          />
          <button
            type="submit"
            className="bg-[#d1dd5d] text-black px-4 py-2 rounded-r-lg hover:bg-[#aabb44] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="border-t border-[#d1dd5d]/20 mt-8 pt-8 text-center">
      <p className="text-white/70">
        &copy; 2023 Nav_Scope. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </>
  );
}

export default App;