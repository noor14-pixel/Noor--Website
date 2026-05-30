import { motion } from "motion/react";
import { ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "Spotify Data Analysis",
    description: "Comprehensive analysis of Spotify listening patterns and trends using advanced data analytics techniques.",
    tags: ["Data Analysis", "Visualization", "Python"],
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3ODAwNjY1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/documents/Noor_Syed_Spotify.pdf"
  },
  {
    title: "UOL Policy Brief",
    description: "In-depth policy research and analysis focusing on key legislative and regulatory issues.",
    tags: ["Policy Research", "Analysis", "Writing"],
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3ODAwNjY1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/documents/UOL-policy-brief-2__1_.pdf"
  },
  {
    title: "Absenteeism Study",
    description: "Statistical analysis examining patterns and factors contributing to workplace absenteeism.",
    tags: ["Statistics", "Research", "Data Science"],
    image: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3ODAwNjY1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/documents/Final_Presentation_-_Absenteeism__1_.pdf"
  },
  {
    title: "ETH Internship Project",
    description: "Research and analysis project completed during internship focusing on data-driven insights.",
    tags: ["Internship", "Research", "Analytics"],
    image: "https://images.unsplash.com/photo-1575318633968-0383e7d07ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3ODAwNjY1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/documents/ETH_Internship_-_Noor_Kiersten__3_.pdf"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600">Explore my recent work and research</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <FileText className="w-5 h-5" />
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
