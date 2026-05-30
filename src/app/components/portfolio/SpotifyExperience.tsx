const experiences = [
  {
    date: "Aug 2025 – Present",
    role: "Research Data Scientist",
    org: "LUMS Learning Institute",
    description: "Applied Propensity Score Matching (ML-based) to evaluate the causal impact of attendance on student performance across a university-wide initiative.",
    color: "from-purple-500 to-pink-500"
  },
  {
    date: "Jun 2025 – Aug 2025",
    role: "Data Scientist",
    org: "CERP – EdTech Hub (RCT, 560 Schools)",
    description: "Large-scale RCT collaboration with Prof. Christina Brown (University of Chicago). Raised pipeline merge rate from 47% to 95%; applied DML for causal inference.",
    color: "from-green-500 to-teal-500"
  },
  {
    date: "Jan 2025 – Jul 2025",
    role: "Teaching Assistant – Data Science",
    org: "Lahore University of Management Sciences",
    description: "Delivered Python-based data analysis training to 100+ undergraduates (pandas, scikit-learn, statsmodels). Created problem sets on real-world ML.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    date: "Jun 2024 – Sep 2024",
    role: "Data Analyst – WASH & Impact Evaluation",
    org: "Tayaba Organization (with Reckitt)",
    description: "Led impact evaluation for humanitarian emergency response reaching 3,986 beneficiaries. Co-authored proposal recognised at COP28 and awarded Impact Hero 2025.",
    color: "from-orange-500 to-red-500"
  },
  {
    date: "Aug 2023 – Nov 2023",
    role: "Research Assistant",
    org: "University of Lahore, Dept. of Economics",
    description: "Analysed survey data from 11,650+ respondents. Applied linear regression to identify determinants of women's earnings; co-authored published policy brief.",
    color: "from-yellow-500 to-orange-500"
  }
];

export function SpotifyExperience() {
  return (
    <div id="experience" className="bg-[#0d0d0d] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl font-bold mb-8">Experience</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-[#181818] hover:bg-[#282828] rounded-lg p-6 transition-all cursor-pointer"
            >
              {/* Color bar */}
              <div className={`w-full h-1 bg-gradient-to-r ${exp.color} rounded-full mb-4`}></div>

              <div className="text-[#1ed760] text-xs font-bold mb-2 uppercase tracking-wider">
                {exp.date}
              </div>

              <h3 className="text-white text-lg font-bold mb-1 group-hover:text-[#1ed760] transition-colors">
                {exp.role}
              </h3>

              <p className="text-[#b3b3b3] text-sm font-medium mb-3">
                {exp.org}
              </p>

              <p className="text-[#b3b3b3] text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
