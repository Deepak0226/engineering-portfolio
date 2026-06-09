'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}
