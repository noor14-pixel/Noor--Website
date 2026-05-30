import { Mail, Linkedin, Github, Phone } from "lucide-react";

export function SpotifyContact() {
  return (
    <div id="contact" className="bg-gradient-to-b from-[#0d0d0d] to-[#121212] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
            Let's Work Together
          </h2>
          <p className="text-[#b3b3b3] text-lg">
            Open to data science roles and research collaborations in growth analytics, experimentation, and applied causal inference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <a
            href="mailto:noornsyed.14@gmail.com"
            className="group bg-[#181818] hover:bg-[#282828] rounded-lg p-6 flex items-center gap-4 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#1ed760] flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <div className="text-[#b3b3b3] text-xs uppercase tracking-wider mb-1">Email</div>
              <div className="text-white font-medium group-hover:text-[#1ed760] transition-colors">
                noornsyed.14@gmail.com
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/noor-syed-336909253/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#181818] hover:bg-[#282828] rounded-lg p-6 flex items-center gap-4 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#0a66c2] flex items-center justify-center flex-shrink-0">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-[#b3b3b3] text-xs uppercase tracking-wider mb-1">LinkedIn</div>
              <div className="text-white font-medium group-hover:text-[#1ed760] transition-colors">
                /in/noor-syed-336909253
              </div>
            </div>
          </a>

          <a
            href="https://github.com/noor14-pixel?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#181818] hover:bg-[#282828] rounded-lg p-6 flex items-center gap-4 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center flex-shrink-0">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-[#b3b3b3] text-xs uppercase tracking-wider mb-1">GitHub</div>
              <div className="text-white font-medium group-hover:text-[#1ed760] transition-colors">
                /noor14-pixel
              </div>
            </div>
          </a>

          <a
            href="tel:+923334898696"
            className="group bg-[#181818] hover:bg-[#282828] rounded-lg p-6 flex items-center gap-4 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#1ed760] flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <div className="text-[#b3b3b3] text-xs uppercase tracking-wider mb-1">Phone</div>
              <div className="text-white font-medium group-hover:text-[#1ed760] transition-colors">
                +92 333 4898696
              </div>
            </div>
          </a>
        </div>

        <div className="text-center">
          <p className="text-[#b3b3b3] text-sm">
            Lahore, Pakistan · Available for remote opportunities
          </p>
        </div>
      </div>
    </div>
  );
}
