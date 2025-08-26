"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeaturesProps {
  title: string
  features: Feature[]
  className?: string
  columns?: 2 | 3 | 4
}

export function Features({ title, features, className = "", columns = 4 }: FeaturesProps) {
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

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  }

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16" variants={fadeInUp}>
            {title}
          </motion.h2>
          <div className={`grid ${gridCols[columns]} gap-8`}>
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="bg-red-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 