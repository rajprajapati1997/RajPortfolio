'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-neutral-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="heading-secondary text-center text-neutral-100">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/Profile%20Photo.jpg"
                alt="Raj Prajapati Profile"
                className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white bg-white"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-neutral-200">
                With over 5 years of experience in Quality Assurance, I specialize in ensuring software reliability through comprehensive testing strategies and automation frameworks.
              </p>
              <p className="text-lg text-neutral-200">
                My approach combines technical expertise with a deep understanding of user experience, helping teams deliver exceptional software products.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-neutral-100 mb-2">Experience</h3>
                  <ul className="space-y-2 text-neutral-200">
                    <li>Manual Testing</li>
                    <li>Automation Testing</li>
                    <li>API Testing</li>
                    <li>Performance Testing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-100 mb-2">Core Values</h3>
                  <ul className="space-y-2 text-neutral-200">
                    <li>Quality First</li>
                    <li>Continuous Learning</li>
                    <li>Team Collaboration</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
