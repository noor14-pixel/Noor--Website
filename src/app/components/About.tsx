import { motion } from "motion/react";
import { BarChart, Database, Brain, FileText } from "lucide-react";

const skills = [
  {
    icon: BarChart,
    title: "Data Analysis",
    description: "Expert in statistical analysis, data visualization, and deriving actionable insights from complex datasets."
  },
  {
    icon: Database,
    title: "Research",
    description: "Skilled in conducting comprehensive research projects with focus on policy analysis and evidence-based recommendations."
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Strong analytical thinking and ability to break down complex problems into manageable solutions."
  },
  {
    icon: FileText,
    title: "Technical Writing",
    description: "Proficient in creating clear, compelling reports and presentations for diverse audiences."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a data analyst and researcher with a passion for uncovering insights that drive meaningful change.
            My work spans policy research, statistical analysis, and data visualization, always focused on delivering
            actionable recommendations backed by rigorous analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{skill.title}</h3>
                <p className="text-slate-600">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Python", "R", "SQL", "Excel", "Tableau", "Power BI", "SPSS", "Statistical Analysis", "Data Visualization", "Policy Research"].map((tech, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
