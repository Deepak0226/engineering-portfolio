'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-dark-secondary border-t border-dark-tertiary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">Get In Touch</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8">
            <a
              href="mailto:deepaksetti2006@gmail.com"
              className="text-gray-300 hover:text-accent transition text-lg"
            >
              📧 deepaksetti2006@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-sethi-53a190369"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition text-lg"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/Deepak0226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition text-lg"
            >
              👨‍💻 GitHub
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dark-tertiary mb-8"></div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm"
        >
          <p className="mb-2">
            © {currentYear} Deepak Kumar Sethi. All rights reserved.
          </p>
          <p className="text-gray-600">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
