import { SkillsChart } from './SkillsChart';
import { ProjectImpactChart } from './ProjectImpactChart';
import { TimelineChart } from './TimelineChart';

export function SpotifyAbout() {
  return (
    <div id="about" className="bg-[#121212] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-bold mb-8">About</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Bio */}
          <div className="bg-[#181818] rounded-lg p-8">
            <h3 className="text-white text-xl font-bold mb-4">Background</h3>
            <div className="text-[#b3b3b3] space-y-4 leading-relaxed">
              <p>
                Final-year BSc student in <span className="text-white font-semibold">Economics, Mathematics & Computer Science</span> at LUMS (CGPA 3.83, Dean's Honour List), graduating May 2026.
              </p>
              <p>
                My work sits at the intersection of causal inference and machine learning — I care about the difference between correlation and causation, and I've built systems that operationalize that distinction at scale.
              </p>
              <p>
                From randomized controlled trials across hundreds of schools to Double Machine Learning on longitudinal panel data, I turn complex quantitative findings into actionable strategy.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#1ed760] text-lg">🎓</span>
                <span className="text-white font-semibold">Education</span>
              </div>
              <p className="text-[#b3b3b3] text-sm">
                BSc (Hons.) Economics, Mathematics & Computer Science<br />
                LUMS, 2022–2026
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#1ed760] text-lg">🏆</span>
                <span className="text-white font-semibold">Awards</span>
              </div>
              <p className="text-[#b3b3b3] text-sm">
                25 Under 25 (Australian High Commission) · Dean's Honour List
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-4">
            <div className="bg-[#181818] rounded-lg p-6">
              <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Languages & Data</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "R", "SQL", "STATA/SE", "C++"].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#282828] text-[#b3b3b3] hover:bg-[#1ed760] hover:text-black rounded-full text-sm transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#181818] rounded-lg p-6">
              <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Causal Inference</h4>
              <div className="flex flex-wrap gap-2">
                {["A/B Testing", "RCT Design", "DiD", "RDD", "IV", "PSM", "Double ML", "Panel Data"].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#282828] text-[#b3b3b3] hover:bg-[#1ed760] hover:text-black rounded-full text-sm transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#181818] rounded-lg p-6">
              <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">ML & Deep Learning</h4>
              <div className="flex flex-wrap gap-2">
                {["scikit-learn", "XGBoost", "PyTorch", "TensorFlow", "SHAP", "Transformers", "Diffusion Models", "NLP", "Computer Vision", "LLMs"].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#282828] text-[#b3b3b3] hover:bg-[#1ed760] hover:text-black rounded-full text-sm transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#181818] rounded-lg p-6">
              <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Visualization & Cloud</h4>
              <div className="flex flex-wrap gap-2">
                {["Power BI", "Tableau", "Matplotlib", "ggplot2", "QGIS", "GCP", "BigQuery"].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#282828] text-[#b3b3b3] hover:bg-[#1ed760] hover:text-black rounded-full text-sm transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <h3 className="text-white text-2xl font-bold mb-6">Analytics</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#181818] rounded-lg overflow-hidden">
            <SkillsChart />
          </div>
          <div className="bg-[#181818] rounded-lg overflow-hidden">
            <ProjectImpactChart />
          </div>
        </div>
        <div className="bg-[#181818] rounded-lg overflow-hidden">
          <TimelineChart />
        </div>
      </div>
    </div>
  );
}
