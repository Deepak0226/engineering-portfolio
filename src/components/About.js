'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-dark-tertiary p-8 rounded-lg border border-dark-tertiary/50 hover:border-accent/30 transition"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm a 2nd year Mechanical Engineering student at NIT Jamshedpur with a strong passion for design and analysis. 
            My expertise lies in CAD modeling and FEA simulation, where I focus on design validation and structural analysis.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Proficient in industry-standard tools including ANSYS, SolidWorks, CATIA, and HYPERMESH. I combine technical knowledge 
            with creative problem-solving to develop innovative engineering solutions.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Through my projects, I've developed a comprehensive understanding of the design-to-analysis workflow, 
            enabling me to create efficient and optimized mechanical systems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
