import { Home, Search, Library } from "lucide-react";

export function SpotifyNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1ed760] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">NS</span>
            </div>
            <span className="text-white font-bold text-lg hidden md:block">Noor Syed</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 text-white hover:text-[#1ed760] transition-colors">
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </a>
            <a href="#projects" className="flex items-center gap-2 text-[#b3b3b3] hover:text-white transition-colors scroll-smooth">
              <Search className="w-5 h-5" />
              <span className="font-medium">Projects</span>
            </a>
            <a href="#experience" className="flex items-center gap-2 text-[#b3b3b3] hover:text-white transition-colors scroll-smooth">
              <Library className="w-5 h-5" />
              <span className="font-medium">Experience</span>
            </a>
            <a href="#about" className="flex items-center gap-2 text-[#b3b3b3] hover:text-white transition-colors scroll-smooth">
              <Library className="w-5 h-5" />
              <span className="font-medium">About</span>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/noor-syed-336909253/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white hover:scale-105 text-black font-bold rounded-full text-sm transition-transform"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
