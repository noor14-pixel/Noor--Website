export function Hero() {
  return (
    <div className="max-w-[900px] mx-auto px-6">
      <section className="min-h-screen flex flex-col justify-center py-[100px] relative overflow-hidden">
        <div className="absolute top-[-40%] right-[-20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(29,185,84,0.06)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="eyebrow flex items-center gap-3 text-[#1DB954] text-xs tracking-[0.12em] uppercase mb-6 font-mono animate-[fadeUp_0.7s_ease_both]">
          <span className="w-7 h-[1px] bg-[#1DB954]"></span>
          Data Scientist · Lahore, Pakistan
        </div>

        <h1 className="text-7xl md:text-8xl leading-tight text-[#e8e4dc] mb-2 font-serif animate-[fadeUp_0.7s_0.15s_ease_both]">
          Noor<br />
          <em className="italic text-[#8a8680]">Syed.</em>
        </h1>

        <p className="text-lg md:text-xl text-[#8a8680] max-w-[560px] my-6 leading-relaxed animate-[fadeUp_0.7s_0.3s_ease_both]">
          Causal inference, experimentation, and end-to-end data pipelines.
          I turn messy, large-scale data into growth strategy —
          from RCTs across 560 schools to subscriber segmentation models.
        </p>

        <div className="flex gap-4 flex-wrap animate-[fadeUp_0.7s_0.45s_ease_both]">
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] text-black text-sm font-medium rounded hover:bg-[#17a348] transition-colors">
            View Projects ↓
          </a>
          <a
            href="https://www.linkedin.com/in/noor-syed-336909253/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#e8e4dc] text-sm font-medium rounded border border-white/10 hover:border-[#1DB954] hover:text-[#1DB954] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/noor14-pixel?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#e8e4dc] text-sm font-medium rounded border border-white/10 hover:border-[#1DB954] hover:text-[#1DB954] transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </section>
    </div>
  );
}
