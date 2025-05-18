'use client'

import { motion } from 'framer-motion'

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Cybage Software",
      period: "2021 - Present",
      role: "Senior QA Engineer",
      achievements: [
        "Built automation frameworks for UI/API with Pester, Selenium, PowerShell",
        "Led QA efforts in Microsoft Teams data migration project",
        "Integrated QA into DevOps pipelines using Azure",
        "Explored and implemented AI-driven automation enhancements"
      ]
    },
    {
      company: "SCIKEY",
      period: "2019 - 2021",
      role: "QA Engineer",
      achievements: [
        "Developed Selenium test suites using Java and Serenity",
        "Contributed to backend automation with RestAssured and JMeter",
        "Recognized with Xtra Mile Award and Applause Award",
        "Improved test coverage by 40% through automated regression suites"
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-[#232336] via-[#18181B] to-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6 text-neutral-100">Professional Experience</h2>
          <p className="text-xl text-neutral-200">
            My journey in quality assurance and test automation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`relative mb-16 ${
                idx % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="bg-neutral p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-poppins font-semibold text-gradient">{exp.company}</h3>
                  <span className="text-secondary font-medium">{exp.period}</span>
                </div>
                <h4 className="text-lg font-medium text-neutral-200 mb-4">{exp.role}</h4>
                <ul className="list-disc list-inside space-y-2 text-neutral-200">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {/* Timeline dot */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
