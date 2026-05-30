import { SpotifyNav } from "./components/portfolio/SpotifyNav";
import { SpotifyHero } from "./components/portfolio/SpotifyHero";
import { SpotifyProjects } from "./components/portfolio/SpotifyProjects";
import { SpotifyGitHub } from "./components/portfolio/SpotifyGitHub";
import { SpotifyExperience } from "./components/portfolio/SpotifyExperience";
import { SpotifyAbout } from "./components/portfolio/SpotifyAbout";
import { SpotifyContact } from "./components/portfolio/SpotifyContact";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <SpotifyNav />
      <SpotifyHero />
      <SpotifyProjects />
      <SpotifyGitHub />
      <SpotifyExperience />
      <SpotifyAbout />
      <SpotifyContact />

      <footer className="bg-black border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#b3b3b3] text-sm">
            <p>© 2026 Noor Syed. Data Scientist · Lahore, Pakistan</p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/noor-syed-336909253/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/noor14-pixel?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="mailto:noornsyed.14@gmail.com" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}