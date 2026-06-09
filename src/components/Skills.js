'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'CAD Software',
      skills: ['SolidWorks', 'CATIA', 'Fusion 360', 'AutoCAD'],
    },
    {
      category: 'FEA & Analysis',
      skills: ['ANSYS', 'HYPERMESH', 'Structural Analysis', 'Thermal Analysis'],
    },
    {
      category: 'Technical Skills',
      skills: ['Design Validation', 'Stress Analysis', 'CFD Basics', 'Model Optimization'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['MATLAB', 'Microsoft Office', 'Git', 'Technical Writing'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-dark-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark p-6 rounded-lg border border-dark-tertiary hover:border-accent/30 transition"
            >
              <h3 className="text-xl font-bold text-accent mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-dark-tertiary text-gray-300 rounded-full border border-dark-tertiary hover:border-accent/50 transition cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
