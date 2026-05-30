import { SkillsChart } from './SkillsChart';
import { ProjectImpactChart } from './ProjectImpactChart';
import { TimelineChart } from './TimelineChart';

const skillGroups = [
  {
    label: "Languages & Data",
    skills: ["Python", "R", "SQL", "STATA/SE", "C++"]
  },
  {
    label: "Causal Inference",
    skills: ["A/B Testing", "RCT Design", "DiD", "RDD", "IV", "PSM", "Double ML", "Panel Data"]
  },
  {
    label: "ML & Deep Learning",
    skills: ["scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "SHAP", "LOCO", "Transformers", "Diffusion Models"]
  },
  {
    label: "Visualization & BI",
    skills: ["Power BI", "Tableau", "Matplotlib", "ggplot2", "QGIS"]
  },
  {
    label: "Cloud & Tools",
    skills: ["GCP / BigQuery", "GitHub Copilot", "Claude", "Excel Advanced"]
  }
];

export function About() {
  return (
    <div className="max-w-[900px] mx-auto px-6">
      <section id="about" className="py-[100px]">
        <div className="flex items-center gap-3 text-[#1DB954] text-xs tracking-[0.14em] uppercase mb-4 font-mono">
          About
          <span className="flex-1 h-[1px] bg-white/10 max-w-[200px]"></span>
        </div>
        <h2 className="text-5xl font-serif text-[#e8e4dc] mb-2 leading-tight">Background</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="text-[#8a8680] text-[15px] leading-loose space-y-4">
            <p>
              I'm a final-year BSc student in <strong className="text-[#e8e4dc] font-semibold">Economics, Mathematics & Computer Science</strong> at LUMS (CGPA 3.83, Dean's Honour List), graduating May 2026.
            </p>
            <p>
              My work sits at the intersection of causal inference and machine learning —
              I care about the difference between correlation and causation, and I've built
              systems that operationalize that distinction at scale: from randomized controlled trials
              across hundreds of schools to Double Machine Learning on longitudinal panel data.
            </p>
            <p>
              I've worked in academic research, government data partnerships, and humanitarian analytics.
              The common thread: turning complex quantitative findings into strategy that non-technical
              stakeholders can actually act on.
            </p>
            <p>
              Outside the data: I'm interested in how AI is reshaping creative industries,
              the political economy of South Asia, and the epistemics of causal claims in
              development economics.
            </p>
            <p className="mt-5">
              <strong className="text-[#e8e4dc] font-semibold">Education:</strong> BSc (Hons.) Economics, Mathematics & Computer Science, LUMS (2022–2026)
            </p>
            <p>
              <strong className="text-[#e8e4dc] font-semibold">Awards:</strong> 25 Under 25 (Australian High Commission) · Dean's Honour List (Top 5%, multiple semesters) · Impact Hero 2025
            </p>
          </div>

          <div>
            {skillGroups.map((group, index) => (
              <div key={index} className="mb-7">
                <div className="text-[#5a5652] text-xs tracking-wider uppercase font-mono mb-2">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span key={i} className="text-sm text-[#8a8680] bg-white/5 border border-white/10 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <SkillsChart />
          <ProjectImpactChart />
        </div>

        <div className="mt-6">
          <TimelineChart />
        </div>
      </section>
    </div>
  );
}
