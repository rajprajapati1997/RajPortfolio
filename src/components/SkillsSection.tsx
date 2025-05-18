'use client'

import { motion } from 'framer-motion'
import { FaCode, FaBug, FaRobot, FaDatabase, FaServer, FaTools } from 'react-icons/fa'

const SkillsSection = () => {
  const skills = [
    {
      category: 'Testing',
      items: [
        { name: 'Manual Testing', level: 95 },
        { name: 'Selenium', level: 90 },
        { name: 'Cypress', level: 85 },
        { name: 'TestNG', level: 85 },
      ],
      icon: <FaBug className="w-6 h-6" />
    },
    {
      category: 'Programming',
      items: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'TypeScript', level: 70 },
      ],
      icon: <FaCode className="w-6 h-6" />
    },
    {
      category: 'Automation',
      items: [
        { name: 'Test Automation', level: 90 },
        { name: 'CI/CD', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'Docker', level: 75 },
      ],
      icon: <FaRobot className="w-6 h-6" />
    },
    {
      category: 'Database',
      items: [
        { name: 'SQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Oracle', level: 70 },
      ],
      icon: <FaDatabase className="w-6 h-6" />
    },
    {
      category: 'API Testing',
      items: [
        { name: 'Postman', level: 90 },
        { name: 'REST Assured', level: 85 },
        { name: 'SoapUI', level: 80 },
        { name: 'Swagger', level: 75 },
      ],
      icon: <FaServer className="w-6 h-6" />
    },
    {
      category: 'Tools',
      items: [
        { name: 'Jira', level: 90 },
        { name: 'Git', level: 85 },
        { name: 'Maven', level: 80 },
        { name: 'Gradle', level: 75 },
      ],
      icon: <FaTools className="w-6 h-6" />
    },
  ]

  return (
    <section id="skills" className="section-padding bg-neutral">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-neutral-100 text-center mb-12">Technical Skills</h2>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various QA tools and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 rgba(0, 230, 184, 0.25)" }}
              className="relative group bg-white/60 dark:bg-[#1e293b]/70 backdrop-blur-md border border-gradient-to-br from-secondary/60 to-accent/30 rounded-2xl p-8 shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* Animated gradient border effect */}
              <div className="absolute -inset-0.5 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-secondary/60 via-accent/40 to-white/10 blur-xl z-0" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary via-accent to-primary shadow-md text-white text-2xl">
                  {skillGroup.icon}
                </div>
                <h3 className="text-2xl font-poppins font-bold text-neutral-900 drop-shadow">{skillGroup.category}</h3>
              </div>
              <div className="space-y-6 relative z-10">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-neutral-800">{skill.name}</span>
                      <span className="text-secondary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gradient-to-r from-gray-200 via-white to-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-secondary via-accent to-primary rounded-full shadow-sm"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.1, delay: index * 0.15 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
