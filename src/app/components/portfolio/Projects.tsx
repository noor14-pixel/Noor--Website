const projects = [
  {
    number: "01",
    date: "Jun – Aug 2025",
    title: "Large-Scale RCT: EdTech Impact Across 560 Schools",
    context: "CERP – EdTech Hub · University of Chicago Collaboration",
    description: "Evaluated a tech-supported foundational learning programme across 560 schools and 80,000+ student observations in collaboration with Prof. Christina Brown. The key engineering challenge: a dataset merge rate of just 47% threatened to discard more than half the longitudinal data before any analysis could begin.",
    highlights: [
      "Engineered a probabilistic matching pipeline in Python that raised the merge rate from 47% to 95%",
      "Applied Double Machine Learning (DRLearner / Random Forests) to estimate Average Treatment Effects while controlling for teacher fixed effects",
      "Conducted heterogeneity analysis by performance quartile, gender, and class level using Bonferroni-corrected regressions",
      "Implemented K-Means clustering for student segmentation; translated profiles into targeted intervention recommendations",
      "Built interactive Power BI dashboards communicating causal findings to non-technical government stakeholders"
    ],
    tags: ["Python", "Double ML", "Random Forests", "RCT Design", "K-Means", "Power BI", "Panel Data"]
  },
  {
    number: "02",
    date: "Aug – Dec 2025",
    title: "Discipline & Human Capital Formation",
    context: "Senior Thesis · LUMS Economics · CGPA 3.9 Semester",
    description: "A hybrid econometric–ML study examining how household disciplinary practices shape early childhood literacy and numeracy outcomes among 15,590 children in Punjab, using UNICEF MICS 2017–18 data.",
    highlights: [
      "Constructed a composite Learning Index (0–3) from UNICEF ECDI indicators (Cronbach's α = 0.81); used ordered logit with average marginal effects",
      "Ran Brant test for proportional odds violations; extended to Generalized Ordered Logit as robustness check",
      "Trained 11 one-vs-rest Random Forest classifiers on disciplinary outcomes; applied SMOTE for class imbalance",
      "Validated feature importance via permutation importance and LOCO ablation",
      "Non-violent discipline reduced probability of zero learning skills by 3.9pp (p<0.01)"
    ],
    tags: ["Ordered Logit", "Random Forest", "SMOTE", "LOCO", "STATA", "scikit-learn", "UNICEF MICS"]
  },
  {
    number: "03",
    date: "Aug – Dec 2025",
    title: "Is Pakistan Realizing its Demographic Dividend?",
    context: "Econometrics II · Time-Series Analysis · R",
    description: "A time-series investigation into whether Pakistan's fertility decline has translated into meaningful economic growth through savings and capital formation channels — using 34 years of World Bank data (1990–2023).",
    highlights: [
      "Identified a structural break in fertility data at 1990 via visual inspection and ADF diagnostics",
      "Applied VECM to model long-run equilibrium relationships between savings, capital formation, demographic structure, and GDP",
      "Bootstrapped Impulse Response Functions for robustness in small samples (n=34)",
      "Built a mediation model to test the working-age population → capital formation → GDP growth channel",
      "Forecasted demographic-economic dynamics through the country's demographic window (to 2045)"
    ],
    tags: ["R", "VECM", "Mediation Analysis", "Bootstrapped IRF", "ADF Test", "Time Series"]
  },
  {
    number: "04",
    date: "Aug – Nov 2023",
    title: "Women in Informal Economy: Earnings Determinants in Punjab",
    context: "Research Assistantship · University of Lahore · Published Policy Brief",
    description: "A comparative econometric study of female home-based workers across Upper and Lower Punjab, drawing on 11,650 survey respondents from the SRGP 2022 Project.",
    highlights: [
      "Managed and cleaned survey data from 11,650 female home-based workers across Punjab",
      "Estimated four earnings regression models (OLS/log-linear) across Upper and Lower Punjab",
      "Identified education, health, and microfinance knowledge as the most consistent determinants",
      "Co-authored policy brief connecting findings to SDG 5 recommendations for government and NGO stakeholders"
    ],
    tags: ["STATA", "Python", "Regression Analysis", "Survey Data", "Policy Brief", "SDG 5"]
  },
  {
    number: "05",
    date: "Spring 2026",
    title: "Can Audiences Tell the Difference? AI vs Human Screenwriting",
    context: "Film & Media Studies · Quantitative Experiment · n=100",
    description: "A blind within-subjects experiment asking whether audiences can distinguish AI-rewritten dialogue from professional screenwriters across five Hollywood films and five genres.",
    highlights: [
      "Designed a structured amplification-model prompt for ChatGPT-4 preserving scene intent while generating fresh dialogue",
      "Recruited 100 participants via convenience sampling; administered blind paired-comparison survey across 5 genres",
      "Applied mixed logistic regression to model correct attribution",
      "Participants rated AI dialogue higher on all six quality metrics (p<0.001, d=0.37–0.53) while correctly identifying it only 40% of the time"
    ],
    tags: ["Experimental Design", "Logistic Regression", "Thematic Analysis", "Survey Research", "AI/LLMs"]
  }
];

export function Projects() {
  return (
    <div className="max-w-[900px] mx-auto px-6">
      <section id="projects" className="py-[100px]">
        <div className="flex items-center gap-3 text-[#1DB954] text-xs tracking-[0.14em] uppercase mb-4 font-mono">
          Work
          <span className="flex-1 h-[1px] bg-white/10 max-w-[200px]"></span>
        </div>
        <h2 className="text-5xl font-serif text-[#e8e4dc] mb-2 leading-tight">Research & Projects</h2>
        <p className="text-[#8a8680] mb-12 max-w-[560px]">
          A selection of research papers, econometric studies, and ML projects —
          each combining rigorous methodology with real-world data at scale.
        </p>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div
              key={project.number}
              className="bg-[#161616] border border-white/10 rounded-lg p-8 md:p-10 hover:border-[rgba(29,185,84,0.25)] hover:bg-[#1a1a1a] transition-all cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1DB954] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>

              <div className="flex justify-between items-start gap-4 mb-3">
                <span className="text-[#5a5652] text-xs tracking-wider font-mono">{project.number}</span>
                <span className="text-[#5a5652] text-xs font-mono whitespace-nowrap">{project.date}</span>
              </div>

              <h3 className="text-2xl font-serif text-[#e8e4dc] mb-2 leading-tight">{project.title}</h3>
              <div className="text-[#1DB954] text-sm font-mono tracking-wide mb-3">{project.context}</div>

              <p className="text-[#8a8680] text-[15px] leading-relaxed mb-5">{project.description}</p>

              <ul className="mb-5 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-[#8a8680] text-sm leading-relaxed pl-5 relative">
                    <span className="absolute left-0 top-1 text-[#1DB954] text-xs">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-[#1f2e22] text-[#5dba78] font-mono text-xs px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
