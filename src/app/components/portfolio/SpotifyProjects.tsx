import { FileText, Download, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Large-Scale RCT: EdTech Impact Across 560 Schools",
    artist: "CERP – EdTech Hub · University of Chicago",
    duration: "Jun – Aug 2025",
    description: "Evaluated a tech-supported foundational learning programme across 560 schools and 80,000+ student observations in collaboration with Prof. Christina Brown.",
    tracks: [
      "Probabilistic matching pipeline: 47% → 95% merge rate",
      "Double Machine Learning for causal inference",
      "K-Means clustering for student segmentation",
      "Interactive Power BI dashboards for government stakeholders"
    ],
    tags: ["Python", "Double ML", "Random Forests", "RCT Design", "K-Means", "Power BI"],
    color: "from-purple-600 to-blue-600",
    document: null
  },
  {
    number: "02",
    title: "Reversing the Slide: Absenteeism at LUMS",
    artist: "LUMS Learning Institute · Research Data Scientist",
    duration: "Aug 2025 – May 2026",
    description: "University-wide causal study investigating drivers, patterns, and interventions for in-person class absenteeism across 5,000+ students, 24 courses, and 26,340 observations.",
    tracks: [
      "Propensity Score Matching (PSM) to evaluate causal impact of attendance on grades",
      "OLS & ordered logit regression across 6 thematic clusters of absenteeism drivers",
      "ANOVA & heterogeneity analysis by school, gender, and motivation level",
      "Interactive dashboards communicating findings to academic stakeholders"
    ],
    tags: ["Python", "STATA", "Causal Inference", "PSM", "Regression", "Power BI", "Survey Design"],
    color: "from-indigo-600 to-violet-600",
    document: "/documents/LLI_Absenteeism.pdf"
  },
  {
    number: "03",
    title: "Discipline & Human Capital Formation",
    artist: "Senior Thesis · LUMS Economics",
    duration: "Aug – Dec 2025",
    description: "Hybrid econometric–ML study examining household disciplinary practices and early childhood literacy outcomes among 15,590 children using UNICEF MICS 2017–18 data.",
    tracks: [
      "Constructed Learning Index (Cronbach's α = 0.81)",
      "Ordered logit with average marginal effects",
      "Random Forest classifiers with SMOTE for class imbalance",
      "Non-violent discipline reduced zero learning skills by 3.9pp (p<0.01)"
    ],
    tags: ["Ordered Logit", "Random Forest", "SMOTE", "STATA", "scikit-learn"],
    color: "from-green-600 to-teal-600",
    document: "/documents/Research_paper__1_.pdf"
  },
  {
    number: "04",
    title: "Is Pakistan Realizing its Demographic Dividend?",
    artist: "Econometrics II · Time-Series Analysis",
    duration: "Aug – Dec 2025",
    description: "Time-series investigation into Pakistan's fertility decline and economic growth using 34 years of World Bank data (1990–2023).",
    tracks: [
      "Structural break analysis with ADF diagnostics",
      "VECM for long-run equilibrium relationships",
      "Bootstrapped Impulse Response Functions",
      "Forecasted dynamics through demographic window to 2045"
    ],
    tags: ["R", "VECM", "Mediation Analysis", "Bootstrapped IRF", "Time Series"],
    color: "from-orange-600 to-red-600",
    document: "/documents/Project_Submission_-_Econometrics_II__Stationary_Minds___1_.pdf"
  },
  {
    number: "05",
    title: "Women in Informal Economy: Earnings Determinants",
    artist: "Research Assistantship · University of Lahore",
    duration: "Aug – Nov 2023",
    description: "Comparative econometric study of female home-based workers across Punjab with 11,650 survey respondents from the SRGP 2022 Project.",
    tracks: [
      "Survey data management for 11,650 respondents",
      "OLS/log-linear earnings regression models",
      "Education, health, microfinance as key determinants",
      "Published policy brief linked to SDG 5"
    ],
    tags: ["STATA", "Python", "Regression Analysis", "Policy Brief", "SDG 5"],
    color: "from-pink-600 to-rose-600",
    document: "/documents/UOL-policy-brief-2__1_.pdf"
  },
  {
    number: "06",
    title: "Can Audiences Tell the Difference? AI vs Human Screenwriting",
    artist: "Film & Media Studies · Quantitative Experiment",
    duration: "Spring 2026",
    description: "Blind within-subjects experiment testing whether audiences can distinguish AI-rewritten dialogue from professional screenwriters across five genres.",
    tracks: [
      "Structured ChatGPT-4 prompt design",
      "100 participants, 5 genres, paired-comparison survey",
      "Mixed logistic regression for attribution modeling",
      "AI rated higher on all metrics (p<0.001), identified 40% of time"
    ],
    tags: ["Experimental Design", "Logistic Regression", "Survey Research", "AI/LLMs"],
    color: "from-blue-600 to-cyan-600",
    document: "/documents/CLCA_Project_26020390.pdf"
  }
];

export function SpotifyProjects() {
  return (
    <div id="projects" className="bg-[#121212] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-white text-2xl font-bold mb-6">Featured Projects</h2>

        <div className="space-y-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#181818] hover:bg-[#282828] rounded-lg p-6 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-6">
                {/* Album Art */}
                <div className={`w-32 h-32 rounded flex-shrink-0 bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-5xl font-black">{project.number}</span>
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-xl font-bold mb-1 group-hover:text-[#1ed760] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#b3b3b3] text-sm mb-3">{project.artist} · {project.duration}</p>
                  <p className="text-[#b3b3b3] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tracks */}
                  <div className="space-y-2 mb-4">
                    {project.tracks.map((track, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-[#b3b3b3] hover:text-white transition-colors">
                        <span className="text-[#1ed760] mt-0.5">▸</span>
                        <span>{track}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-[#2a2a2a] text-[#b3b3b3] rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {project.document && (
                    <div className="flex gap-3">
                      <a
                        href={project.document}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1ed760] hover:bg-[#1fdf64] text-black font-bold rounded-full text-sm transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        View Document
                      </a>
                      <a
                        href={project.document}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white/20 hover:border-white text-white font-bold rounded-full text-sm transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
