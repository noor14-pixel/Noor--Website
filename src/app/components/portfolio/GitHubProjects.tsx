const githubProjects = [
  {
    title: "Transformers: Language Modeling & Vision",
    description: "Transformer-based language model + Vision Transformer (ViT) built from scratch. Covers attention mechanisms, positional encoding, and image patch embeddings.",
    url: "https://github.com/noor14-pixel/Transformers-Language-Modeling-Vision"
  },
  {
    title: "Diffusion Models from Scratch",
    description: "Complete implementation of DDPM → DDIM → Latent Diffusion with classifier-free guidance and adaptive trajectory correction. No diffusion libraries.",
    url: "https://github.com/noor14-pixel/Diffusion-Models-from-Scratch-DDPM-DDIM-Latent-Diffusion"
  },
  {
    title: "Federated Learning: Heterogeneity & Fairness",
    description: "FedAvg, FedProx, client drift analysis, real-world deployment on distracted driver detection, and a custom fairness-aware aggregation algorithm.",
    url: "https://github.com/noor14-pixel/Federated-Learning-Infrastructure-Heterogeneity-Fairness"
  },
  {
    title: "CNNs from Scratch + GradCAM",
    description: "CNN implementation with NumPy, GradCAM interpretability, and PCA-CNN analysis on CIFAR-10 and Fashion-MNIST — 82.38% accuracy under 1M parameter budget.",
    url: "https://github.com/noor14-pixel/Convolutional-Neural-Networks"
  },
  {
    title: "Autoencoders to U-Net",
    description: "Autoencoders for reconstruction/denoising; progression to U-Net for liver/tumor segmentation (LiTS17). Skip connections boost Dice from 0.676 to 0.820.",
    url: "https://github.com/noor14-pixel/From-Autoencoders-to-U-Net"
  }
];

export function GitHubProjects() {
  return (
    <div className="max-w-[900px] mx-auto px-6">
      <section id="code" className="py-[100px]">
        <div className="flex items-center gap-3 text-[#1DB954] text-xs tracking-[0.14em] uppercase mb-4 font-mono">
          Code
          <span className="flex-1 h-[1px] bg-white/10 max-w-[200px]"></span>
        </div>
        <h2 className="text-5xl font-serif text-[#e8e4dc] mb-2 leading-tight">GitHub Projects</h2>
        <p className="text-[#8a8680] mb-12 max-w-[560px]">
          Deep learning implementations, from-scratch architectures, and applied ML work.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {githubProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#161616] border border-white/10 rounded-lg p-6 hover:border-[rgba(29,185,84,0.25)] transition-colors flex flex-col gap-2 group"
            >
              <h3 className="text-sm font-semibold text-[#e8e4dc] leading-tight group-hover:text-[#1DB954] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-[#8a8680] leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex items-center gap-2 text-[#5a5652] font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-[#f6e05e]"></span>
                Jupyter Notebook
              </div>
            </a>
          ))}

          <a
            href="https://github.com/noor14-pixel?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#161616] border border-dashed border-white/10 rounded-lg p-6 hover:border-[rgba(29,185,84,0.25)] transition-colors flex items-center justify-center min-h-[120px]"
          >
            <div className="text-center text-[#5a5652] text-sm">View all repos on GitHub ↗</div>
          </a>
        </div>
      </section>
    </div>
  );
}
