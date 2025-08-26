"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface CallToActionProps {
  title: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  variant?: "red" | "white"
}

export function CallToAction({ 
  title, 
  description, 
  primaryCta, 
  secondaryCta,
  variant = "red"
}: CallToActionProps) {
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

  const bgClass = variant === "red" 
    ? "bg-gradient-to-r from-red-600 to-red-700" 
    : "bg-gray-950"

  const buttonClass = variant === "red"
    ? "bg-white text-red-600 hover:bg-gray-100"
    : "bg-red-600 hover:bg-red-700 text-white"

  const secondaryButtonClass = variant === "red"
    ? "border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
    : "border-gray-600 text-white hover:bg-gray-800 bg-transparent"

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" variants={fadeInUp}>
            {title}
          </motion.h2>
          <motion.p className={`text-xl mb-12 leading-relaxed ${variant === "red" ? "text-red-100" : "text-gray-300"}`} variants={fadeInUp}>
            {description}
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={fadeInUp}>
            <Link href={primaryCta.href}>
              <Button size="lg" className={`${buttonClass} font-bold px-12 py-4 text-lg`}>
                {primaryCta.text} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className={`${secondaryButtonClass} px-12 py-4 text-lg`}
                >
                  {secondaryCta.text}
                </Button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 