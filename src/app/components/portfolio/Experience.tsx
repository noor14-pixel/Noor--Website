const experiences = [
  {
    date: "Aug 2025 – Present",
    role: "Research Data Scientist",
    org: "LUMS Learning Institute",
    description: "Applied Propensity Score Matching (ML-based) to evaluate the causal impact of attendance on student performance across a university-wide initiative. Managed end-to-end data pipeline and built dashboards communicating findings to academic and non-specialist stakeholders."
  },
  {
    date: "Jun 2025 – Aug 2025",
    role: "Data Scientist",
    org: "CERP – EdTech Hub (RCT, 560 Schools)",
    description: "Large-scale RCT collaboration with Prof. Christina Brown (University of Chicago) and provincial government partners. Raised pipeline merge rate from 47% to 95%; applied DML for causal inference; built government-facing analytics dashboards."
  },
  {
    date: "Jan 2025 – Jul 2025",
    role: "Teaching Assistant – Data Science",
    org: "Lahore University of Management Sciences",
    description: "Delivered Python-based data analysis training to 100+ undergraduates (pandas, scikit-learn, statsmodels). Held weekly lab sessions and created problem sets on real-world ML and statistical modeling."
  },
  {
    date: "Jun 2024 – Sep 2024",
    role: "Data Analyst – WASH & Impact Evaluation",
    org: "Tayaba Organization (with Reckitt)",
    description: "Led data collection and impact evaluation for a humanitarian emergency response reaching 3,986 beneficiaries. Built dashboards for decision-makers; co-authored a proposal recognised at COP28 and awarded the Impact Hero 2025 Award."
  },
  {
    date: "Aug 2023 – Nov 2023",
    role: "Research Assistant",
    org: "University of Lahore, Dept. of Economics",
    description: "Analysed survey data from 11,650+ respondents across two HEC-funded projects. Applied linear regression to identify determinants of women's earnings; co-authored a published policy brief linked to SDG 5."
  }
];

export function Experience() {
  return (
    <div className="max-w-[900px] mx-auto px-6">
      <section id="experience" className="py-[100px]">
        <div className="flex items-center gap-3 text-[#1DB954] text-xs tracking-[0.14em] uppercase mb-4 font-mono">
          Experience
          <span className="flex-1 h-[1px] bg-white/10 max-w-[200px]"></span>
        </div>
        <h2 className="text-5xl font-serif text-[#e8e4dc] mb-2 leading-tight">Where I've Worked</h2>
        <p className="text-[#8a8680] mb-12 max-w-[560px]">
          Research positions, data roles, and teaching — all grounded in rigorous quantitative work.
        </p>

        <div className="relative pl-6">
          <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-white/10"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-10">
              <div className="absolute left-[-1.5rem] top-2 w-[7px] h-[7px] rounded-full bg-[#1DB954] shadow-[0_0_0_3px_#0d0d0d,0_0_0_4px_#1DB954]"></div>

              <div className="text-[#5a5652] text-xs tracking-wide font-mono mb-1">{exp.date}</div>
              <div className="text-[#e8e4dc] font-semibold mb-1">{exp.role}</div>
              <div className="text-[#1DB954] text-sm font-mono mb-2">{exp.org}</div>
              <div className="text-[#8a8680] text-sm leading-relaxed">{exp.description}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
