"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  showImage?: boolean
  imageSrc?: string
  imageAlt?: string
}

export function Hero({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta, 
  showImage = false,
  imageSrc,
  imageAlt
}: HeroProps) {
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
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center" initial="initial" animate="animate" variants={staggerContainer}>
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" variants={fadeInUp}>
            {title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
          {(primaryCta || secondaryCta) && (
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={fadeInUp}>
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg">
                    {primaryCta.text} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
                  >
                    {secondaryCta.text}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
          {showImage && imageSrc && (
            <motion.div variants={fadeInUp} className="relative max-w-5xl mx-auto mt-12">
              <div className="relative rounded-2xl overflow-hidden border border-gray-800">
                <img
                  src={imageSrc}
                  alt={imageAlt || "Hero image"}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
} 