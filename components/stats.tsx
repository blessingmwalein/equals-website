"use client"

import { motion } from "framer-motion"

interface Stat {
  value: string
  label: string
}

interface StatsProps {
  title: string
  stats: Stat[]
  className?: string
}

export function Stats({ title, stats, className = "" }: StatsProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16" variants={fadeInUp}>
            {title}
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-red-600 mb-4">{stat.value}</div>
                <p className="text-xl text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 