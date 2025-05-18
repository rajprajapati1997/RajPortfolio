'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-neutral">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center rounded-2xl shadow-lg backdrop-blur-xl bg-neutral/90">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-8 p-8"
        >
          <h2 className="heading-secondary mb-2">Let's Connect</h2>
          <div className="flex flex-col gap-4 w-full">
            <a
              href="mailto:prajapatirajpr@gmail.com"
              className="flex items-center gap-3 text-text-primary hover:text-accent transition-colors text-lg justify-center"
            >
              <FaEnvelope className="w-6 h-6 text-accent" /> prajapatirajpr@gmail.com
            </a>
            <div className="flex flex-col items-center gap-1">
              <span className="flex items-center gap-3 text-text-primary text-lg">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"/><path d="M16 2v4H8V2"/></svg> +919099248869 <span className="text-xs flex items-center gap-1"><svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16.7 13.3c-1.2 1.2-2.6 2.1-4.2 2.1-1.6 0-3-0.9-4.2-2.1-1.2-1.2-2.1-2.6-2.1-4.2 0-1.6 0.9-3 2.1-4.2 1.2-1.2 2.6-2.1 4.2-2.1 1.6 0 3 0.9 4.2 2.1 1.2 1.2 2.1 2.6 2.1 4.2 0 1.6-0.9 3-2.1 4.2z"/></svg>WhatsApp</span>
              </span>
              <span className="flex items-center gap-3 text-text-primary text-lg">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"/><path d="M16 2v4H8V2"/></svg> +917990413553 <span className="text-xs flex items-center gap-1"><svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.91-.27c1.01.22 2.09.34 3.18.34a1 1 0 011 1v3.18a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.18a1 1 0 011 1c0 1.09.12 2.17.34 3.18a1 1 0 01-.27.91l-2.2 2.2z"/></svg>Call</span>
              </span>
            </div>
            <a
              href="https://linkedin.com/in/raj-prajapati-20b36a121/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-primary hover:text-accent transition-colors text-lg justify-center"
            >
              <FaLinkedin className="w-6 h-6 text-accent" /> LinkedIn
            </a>
            <a
              href="https://github.com/rajprajapati1997"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-primary hover:text-accent transition-colors text-lg justify-center"
            >
              <FaGithub className="w-6 h-6 text-accent" /> GitHub
            </a>
          </div>
        </motion.div>
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-neutral-light rounded-2xl p-8 shadow-inner"
        >
          <h3 className="text-xl font-poppins font-semibold text-text-primary mb-6">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="input resize-none"
            ></textarea>
            <button
              type="submit"
              className="btn-secondary w-full mt-2"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
