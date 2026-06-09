'use client'

import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-dark-secondary rounded-lg overflow-hidden border border-dark-tertiary hover:border-accent/50 transition duration-300"
    >
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-dark-tertiary to-dark-secondary flex items-center justify-center border-b border-dark-tertiary">
        <div className="text-center">
          <p className="text-gray-500 text-sm">Project Image Placeholder</p>
          <p className="text-gray-400 text-xs mt-2">Add your project screenshot here</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-accent">{project.title}</h3>
        
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 bg-dark-tertiary text-accent text-xs rounded-full border border-accent/30"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-dark transition duration-300 font-semibold"
        >
          View Project
        </motion.button>
      </div>
    </motion.div>
  )
}
