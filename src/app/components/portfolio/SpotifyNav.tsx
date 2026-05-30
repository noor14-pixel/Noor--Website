import { useState } from "react";
import { Home, Search, Library, Menu, X } from "lucide-react";

export function SpotifyNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1ed760] rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">NS</span>
          </div>
          <span className="text-white font-bold text-lg">Noor Syed</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 text-white hover:text-[#1ed760] transition-colors">
            <Home className="w-5 h-5" /><span className="font-medium">Home</span>
          </a>
          <a href="#projects" className="flex items-center gap-2 text-[#b3b3b3] hover:text-white transition-colors">
            <Search className="w-5 h-5" /><span className="font-medium">Projects</span>
          </a>
          <a href="#experience" className="flex items-center gap-2 text-[#b3b3b3] hover:text-white transition-colors">
            <Library className="w-5 h-5" /><span className="font-medium">Experience</span>
          </a>
          <a href="#about" className="flex items-center gap-2 text-[#b3b3b3] hover:text-white transition-colors">
            <Library className="w-5 h-5" /><span className="font-medium">About</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/noor-syed-336909253/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 bg-white hover:scale-105 text-black font-bold rounded-full text-sm transition-transform"
          >
            Connect
          </a>
          {/* Mobile hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a href="#" onClick={() => setIsOpen(false)} className="text-white hover:text-[#1ed760] transition-colors py-2">Home</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-[#b3b3b3] hover:text-white transition-colors py-2">Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-[#b3b3b3] hover:text-white transition-colors py-2">Experience</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-[#b3b3b3] hover:text-white transition-colors py-2">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#b3b3b3] hover:text-white transition-colors py-2">Contact</a>
          <a
            href="https://www.linkedin.com/in/noor-syed-336909253/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm text-center"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
