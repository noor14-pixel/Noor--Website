import { Play, Download } from "lucide-react";

export function SpotifyHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#1ed760] to-[#0d0d0d] pt-[60px]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-end gap-8">
          {/* Profile Image */}
          <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#1DB954] to-[#1ed760] shadow-2xl flex items-center justify-center flex-shrink-0">
            <div className="text-8xl font-bold text-black">NS</div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 pb-6">
            <div className="text-sm font-bold text-black mb-2 uppercase tracking-wider">Profile</div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              Noor Syed
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Data Scientist · Causal Inference · Machine Learning
            </p>
            <div className="flex items-center gap-6 text-white/80 text-sm">
              <span>6 Featured Projects</span>
              <span>•</span>
              <span>5 Experience Roles</span>
              <span>•</span>
              <span>80,000+ Research Participants</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <a
            href="#projects"
            className="w-14 h-14 rounded-full bg-[#1ed760] hover:scale-105 transition-transform flex items-center justify-center shadow-lg"
          >
            <Play className="w-6 h-6 text-black fill-black ml-1" />
          </a>
          <a
            href="/documents/Noor_Syed_Spotify.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-bold text-sm hover:border-white hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/noor-syed-336909253/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-bold text-sm hover:border-white hover:scale-105 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/noor14-pixel?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-bold text-sm hover:border-white hover:scale-105 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none"></div>
    </div>
  );
}
