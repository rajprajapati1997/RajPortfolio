'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa'

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <FaTrophy className="w-12 h-12" />,
      title: "Applause Award",
      year: "2020",
      description: "Recognized for exceptional performance under high-pressure situations and delivering critical projects ahead of schedule."
    },
    {
      icon: <FaMedal className="w-12 h-12" />,
      title: "Xtra Mile Award",
      year: "2019",
      description: "Awarded for going above and beyond in project contributions and mentoring junior team members."
    },
    {
      icon: <FaStar className="w-12 h-12" />,
      title: "Best Team Player",
      year: "2021",
      description: "Acknowledged for fostering collaboration and knowledge sharing within the QA team."
    }
  ]

  return (
    <section id="achievements" className="section-padding bg-neutral-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6 text-neutral-100">Achievements</h2>
          <p className="text-xl text-neutral-200">
            Recognition for excellence in quality assurance and team collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-neutral rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="text-secondary mb-6 inline-block"
              >
                {achievement.icon}
              </motion.div>
              <h3 className="text-xl font-poppins font-semibold text-gradient mb-2">
                {achievement.title}
              </h3>
              <p className="text-secondary font-medium mb-4">{achievement.year}</p>
              <p className="text-neutral-200">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
