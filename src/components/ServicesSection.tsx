'use client'

import { motion } from 'framer-motion'
import { FaCode, FaBug, FaRobot, FaFileAlt } from 'react-icons/fa'

const ServicesSection = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Test Automation",
      description: "End-to-end automation solutions using modern frameworks like Playwright, Selenium, and custom tools.",
      features: [
        "Web application testing",
        "API automation",
        "Cross-browser testing",
        "Performance testing"
      ]
    },
    {
      icon: <FaBug />,
      title: "Manual Testing",
      description: "Comprehensive manual testing services to ensure the highest quality of your software.",
      features: [
        "Functional testing",
        "Usability testing",
        "Regression testing",
        "Bug tracking and reporting"
      ]
    },
    {
      icon: <FaRobot />,
      title: "AI-Powered Testing",
      description: "Leveraging artificial intelligence and machine learning for smarter test automation.",
      features: [
        "AI-driven test generation",
        "Smart test maintenance",
        "Visual regression testing",
        "Automated bug detection"
      ]
    },
    {
      icon: <FaFileAlt />,
      title: "QA Consultation",
      description: "Expert advice on QA strategy, tools, and best practices for your team.",
      features: [
        "QA process optimization",
        "Tool selection guidance",
        "Team training",
        "Quality metrics setup"
      ]
    }
  ]

  return (
    <section id="services" className="section-padding bg-neutral">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">Services Offered</h2>
          <p className="text-xl text-white">
            Comprehensive QA solutions to ensure your software meets the highest standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 rgba(0, 230, 184, 0.25)" }}
              className="relative group bg-white/60 dark:bg-[#1e293b]/70 backdrop-blur-md border border-gradient-to-br from-secondary/60 to-accent/30 rounded-2xl p-8 shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* Animated gradient border effect */}
              <div className="absolute -inset-0.5 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-secondary/60 via-accent/40 to-white/10 blur-xl z-0" />
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary via-accent to-primary shadow-md text-white text-3xl mr-4 animate-bounce">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-poppins font-bold text-neutral-900 drop-shadow">{service.title}</h3>
              </div>
              <p className="text-neutral-200 mb-6 relative z-10">{service.description}</p>
              <ul className="space-y-3 relative z-10">
                {service.features.map((feature, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: idx * 0.1 + i * 0.07 }} className="flex items-center text-neutral-200">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
