'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectsSection = () => {
  const projects = [
    {
      title: "MS Teams Data Migration Testing",
      description: "Led the QA effort for a critical data migration project, ensuring zero data loss during the transition of enterprise-level Teams data.",
      tech: ["PowerShell", "Pester", "Azure DevOps"],
      highlights: [
        "Automated validation of 100K+ records",
        "Reduced testing time by 70%",
        "Zero data loss achievement"
      ]
    },
    {
      title: "Playwright PoC with TypeScript",
      description: "Developed a proof of concept for modern web testing using Playwright, demonstrating superior performance over legacy frameworks.",
      tech: ["Playwright", "TypeScript", "GitHub Actions"],
      highlights: [
        "Cross-browser testing",
        "Parallel execution",
        "CI/CD integration"
      ]
    },
    {
      title: "API Testing Framework",
      description: "Built a comprehensive API testing framework supporting REST endpoints with extensive reporting capabilities.",
      tech: ["RestAssured", "Java", "TestNG"],
      highlights: [
        "Data-driven testing",
        "Automated reporting",
        "95% test coverage"
      ]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-neutral">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Featured Projects</h2>
          <p className="text-xl text-white">
            Showcasing some of my most impactful work in test automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 rgba(0, 230, 184, 0.25)" }}
              className="relative group bg-white/60 dark:bg-[#1e293b]/70 backdrop-blur-md border border-gradient-to-br from-secondary/60 to-accent/30 rounded-2xl p-8 shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* Animated gradient border effect */}
              <div className="absolute -inset-0.5 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-secondary/60 via-accent/40 to-white/10 blur-xl z-0" />
              <h3 className="text-2xl font-poppins font-bold text-white mb-4 drop-shadow relative z-10">{project.title}</h3>
              <p className="text-neutral-200 mb-4 relative z-10">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-secondary bg-opacity-20 text-secondary px-3 py-1 rounded-full text-sm font-semibold shadow-sm">{tech}</span>
                ))}
              </div>
              <ul className="list-disc list-inside space-y-2 text-neutral-200 mb-4 relative z-10">
                {project.highlights.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: idx * 0.1 + i * 0.07 }}>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="flex space-x-4 relative z-10">
                <button className="text-secondary hover:text-accent transition-colors duration-300 scale-100 hover:scale-110">
                  <FaGithub className="w-6 h-6" />
                </button>
                <button className="text-secondary hover:text-accent transition-colors duration-300 scale-100 hover:scale-110">
                  <FaExternalLinkAlt className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
