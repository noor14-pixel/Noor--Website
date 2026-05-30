const githubProjects = [
  {
    title: "Transformers: Language Modeling & Vision",
    description: "Transformer-based language model + Vision Transformer (ViT) built from scratch. Attention mechanisms, positional encoding, image patch embeddings.",
    url: "https://github.com/noor14-pixel/Transformers-Language-Modeling-Vision",
    color: "from-purple-600 to-blue-600"
  },
  {
    title: "Diffusion Models from Scratch",
    description: "Complete DDPM → DDIM → Latent Diffusion implementation with classifier-free guidance and adaptive trajectory correction.",
    url: "https://github.com/noor14-pixel/Diffusion-Models-from-Scratch-DDPM-DDIM-Latent-Diffusion",
    color: "from-pink-600 to-purple-600"
  },
  {
    title: "Federated Learning: Heterogeneity & Fairness",
    description: "FedAvg, FedProx, client drift analysis, distracted driver detection deployment, custom fairness-aware aggregation algorithm.",
    url: "https://github.com/noor14-pixel/Federated-Learning-Infrastructure-Heterogeneity-Fairness",
    color: "from-green-600 to-teal-600"
  },
  {
    title: "CNNs from Scratch + GradCAM",
    description: "CNN with NumPy, GradCAM interpretability, PCA-CNN analysis. 82.38% accuracy under 1M parameter budget on CIFAR-10.",
    url: "https://github.com/noor14-pixel/Convolutional-Neural-Networks",
    color: "from-orange-600 to-red-600"
  },
  {
    title: "Autoencoders to U-Net",
    description: "Autoencoders for reconstruction/denoising; U-Net for liver/tumor segmentation. Skip connections boost Dice from 0.676 to 0.820.",
    url: "https://github.com/noor14-pixel/From-Autoencoders-to-U-Net",
    color: "from-blue-600 to-cyan-600"
  }
];

export function SpotifyGitHub() {
  return (
    <div id="code" className="bg-[#121212] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-3xl font-bold">GitHub Projects</h2>
          <a
            href="https://github.com/noor14-pixel?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b3b3b3] hover:text-white text-sm font-bold transition-colors"
          >
            Show all
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {githubProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#181818] hover:bg-[#282828] rounded-lg p-6 transition-all"
            >
              <div className={`w-full h-40 rounded bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center`}>
                <svg className="w-16 h-16 text-white/50" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>

              <h3 className="text-white font-bold mb-2 group-hover:text-[#1ed760] transition-colors">
                {project.title}
              </h3>

              <p className="text-[#b3b3b3] text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-2 mt-4 text-[#b3b3b3] text-xs">
                <span className="w-3 h-3 rounded-full bg-[#f1e05a]"></span>
                Jupyter Notebook
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
