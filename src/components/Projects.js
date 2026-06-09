'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'V6 Engine',
      description: 'Add your project description here. Describe the objective, software used, and key results.',
      image: '/placeholder-project-1.jpg',
      tools: ['SolidWorks', 'ANSYS', 'CAD'],
      link: '#',
    },
    {
      id: 2,
      title: 'Nissan GTR Model',
      description: 'Add your project description here. Describe the objective, software used, and key results.',
      image: '/placeholder-project-2.jpg',
      tools: ['SolidWorks', 'CATIA', 'CAD'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg mb-6">
            More projects coming soon! Add your project images and descriptions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
