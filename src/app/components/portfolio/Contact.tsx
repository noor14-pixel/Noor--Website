export function Contact() {
  return (
    <div className="max-w-[900px] mx-auto px-6">
      <section id="contact" className="py-[100px]">
        <div className="flex items-center gap-3 text-[#1DB954] text-xs tracking-[0.14em] uppercase mb-4 font-mono">
          Contact
          <span className="flex-1 h-[1px] bg-white/10 max-w-[200px]"></span>
        </div>
        <h2 className="text-5xl font-serif text-[#e8e4dc] mb-12 leading-tight">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="text-[#8a8680] text-[15px] leading-relaxed space-y-4">
            <p>
              I'm currently open to data science roles and research collaborations —
              particularly in growth analytics, experimentation, and applied causal inference.
            </p>
            <p>
              If you're working on interesting problems at the intersection of data and impact,
              I'd love to talk.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:noornsyed.14@gmail.com"
              className="flex items-center gap-3 text-[#8a8680] hover:text-[#e8e4dc] p-4 bg-[#161616] border border-white/10 hover:border-[rgba(29,185,84,0.3)] rounded-md transition-all group"
            >
              <div className="w-8 h-8 bg-[#1f2e22] rounded flex items-center justify-center text-[#1DB954] flex-shrink-0">
                ✉
              </div>
              <div>
                <div className="text-xs text-[#5a5652]">Email</div>
                <div className="text-sm text-[#e8e4dc]">noornsyed.14@gmail.com</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/noor-syed-336909253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#8a8680] hover:text-[#e8e4dc] p-4 bg-[#161616] border border-white/10 hover:border-[rgba(29,185,84,0.3)] rounded-md transition-all group"
            >
              <div className="w-8 h-8 bg-[#1f2e22] rounded flex items-center justify-center text-[#1DB954] flex-shrink-0 text-sm">
                in
              </div>
              <div>
                <div className="text-xs text-[#5a5652]">LinkedIn</div>
                <div className="text-sm text-[#e8e4dc]">linkedin.com/in/noor-syed-336909253</div>
              </div>
            </a>

            <a
              href="https://github.com/noor14-pixel?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#8a8680] hover:text-[#e8e4dc] p-4 bg-[#161616] border border-white/10 hover:border-[rgba(29,185,84,0.3)] rounded-md transition-all group"
            >
              <div className="w-8 h-8 bg-[#1f2e22] rounded flex items-center justify-center text-[#1DB954] flex-shrink-0 text-sm">
                gh
              </div>
              <div>
                <div className="text-xs text-[#5a5652]">GitHub</div>
                <div className="text-sm text-[#e8e4dc]">github.com/noor14-pixel</div>
              </div>
            </a>

            <a
              href="tel:+923334898696"
              className="flex items-center gap-3 text-[#8a8680] hover:text-[#e8e4dc] p-4 bg-[#161616] border border-white/10 hover:border-[rgba(29,185,84,0.3)] rounded-md transition-all group"
            >
              <div className="w-8 h-8 bg-[#1f2e22] rounded flex items-center justify-center text-[#1DB954] flex-shrink-0">
                ☎
              </div>
              <div>
                <div className="text-xs text-[#5a5652]">Phone</div>
                <div className="text-sm text-[#e8e4dc]">+92 333 4898696</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
