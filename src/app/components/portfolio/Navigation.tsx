import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    }`}>
      <div className="max-w-[900px] mx-auto px-6 h-[60px] flex items-center justify-between">
        <a href="#" className="text-[#e8e4dc] text-lg font-serif tracking-tight">
          Noor Syed
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#projects" className="text-[#8a8680] text-xs uppercase tracking-wider hover:text-[#1DB954] transition-colors">Projects</a></li>
          <li><a href="#experience" className="text-[#8a8680] text-xs uppercase tracking-wider hover:text-[#1DB954] transition-colors">Experience</a></li>
          <li><a href="#about" className="text-[#8a8680] text-xs uppercase tracking-wider hover:text-[#1DB954] transition-colors">About</a></li>
          <li><a href="#contact" className="text-[#8a8680] text-xs uppercase tracking-wider hover:text-[#1DB954] transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
