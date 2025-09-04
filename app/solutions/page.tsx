"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, TrendingUp, Users, BarChart3, Smartphone, Cloud, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { BackToTop } from "@/components/back-to-top"

export default function SolutionsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const solutions = [
    {
      id: 1,
      image: "/images/solutions/solution1.png",
      title: "Digital Loans",
      description: "End to end automated loans that can be account deducted or payroll deducted, including SSB deducted loans. The Loan Management System automates loan account maintenance from disbursement through to termination.",
      facts: [
        "Account & payroll deducted",
        "SSB deducted loans",
        "Automated maintenance",
        "USD/ZWL support"
      ],
      badge: "Digital Loans"
    },
    {
      id: 2,
      image: "/images/solutions/solution2.png",
      title: "Payday Loans & Credit Cards",
      description: "Instant mobile based short-term credit given to customers earning salaries through the bank. Credit Cards (physical or virtual) given to Financial Institution customers.",
      facts: [
        "Instant mobile credit",
        "Physical & virtual cards",
        "Salary-based eligibility",
        "Revolving credit facility"
      ],
      badge: "Credit Products"
    },
    {
      id: 3,
      image: "/images/solutions/solution3.png",
      title: "In-Store & Retail Credit",
      description: "In-store credit given to customers of retailers that partner with Financial institutions. Includes retail credit cards and SSB-deducted loans in partnership with retailers.",
      facts: [
        "Retailer partnerships",
        "In-store credit cards",
        "School fee payments",
        "Retail credit solutions"
      ],
      badge: "Retail Credit"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solutions.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [solutions.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solutions.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img 
                  src="/cropped-equals-favicon-1.png" 
                  alt="Equals Solutions Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors">
                  About
                </Link>
                <Link href="/solutions" className="text-red-600 font-medium">
                  Solutions
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">Let's Talk</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        {/* Background Image with Fade Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/office-harare.png"
            alt="Office Background"
            fill
            className="object-cover"
          />
          {/* Gradient overlay that fades from top to bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div className="text-center" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" variants={fadeInUp}>
              Our <span className="text-red-600">Products</span>
            </motion.h1>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-200" variants={fadeInUp}>
              Digital Credit <span className="text-red-600">Solutions</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Comprehensive digital credit management solutions including Digital Loans, Payday Loans, Credit Cards, and In-Store Credit - all accessible via digital and physical channels.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105">
                  Let's Talk
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg bg-transparent backdrop-blur-sm shadow-xl hover:shadow-white/20 transition-all duration-300 hover:scale-105">
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>
            
            {/* Solutions Slider */}
            <motion.div variants={fadeInUp} className="relative max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border-2 border-gray-700/50 bg-gradient-to-br from-gray-800/60 to-gray-900/80 shadow-2xl backdrop-blur-xl">
                {/* Slider Container */}
                <div className="relative h-[600px] overflow-hidden">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={solution.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                      }`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ 
                        opacity: index === currentSlide ? 1 : 0,
                        x: index === currentSlide ? 0 : 100
                      }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="relative h-full">
                        {/* Background Image */}
                <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Dark Overlay for Better Text Visibility */}
                        <div className="absolute inset-0 bg-black/60"></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-center">
                          <div className="max-w-2xl mx-auto text-center">
                            <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white mb-6 w-fit px-4 py-2 text-lg font-bold shadow-lg">{solution.badge}</Badge>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                              {solution.title}
                            </h3>
                            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                              {solution.description}
                            </p>
                            
                            {/* Facts */}
                            <div className="space-y-4 mb-8">
                              {solution.facts.map((fact, factIndex) => (
                                <div key={factIndex} className="flex items-center justify-center space-x-3">
                                  <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                                  <span className="text-gray-200">{fact}</span>
                                </div>
                              ))}
                            </div>
                            
                            <Link href="/contact">
                              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105">
                                View More <ArrowRight className="ml-2 h-5 w-5" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                  {solutions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-red-600' : 'bg-gray-400 hover:bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is RCMS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-8" variants={fadeInUp}>
              The Equals <span className="text-red-600">Platform</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" variants={fadeInUp}>
              Our comprehensive platform provides efficiency and scalability of credit management services through technology and innovative processes. We make every step of the credit lifecycle fully digital, automated, secure, efficient, low-risk and streamlined.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Credit Scoring Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white mb-6 px-4 py-2 text-lg font-bold shadow-lg">Key Services</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Key <span className="text-red-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our platform includes eligibility checks, credit bureau checks, blacklist reviews, automated borrower notifications, demand letters, insurance claims, and end-to-end automated reporting.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Eligibility & credit checks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Automated notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">End-to-end reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Onboarding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Arrears Management</span>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/credit-scoring.png"
                  alt="Credit Scoring Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16" variants={fadeInUp}>
              Key Benefits
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp} className="group">
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 h-full shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl transform hover:scale-[1.02]">
                  <CardContent className="p-10 text-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 w-20 h-20 mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-white transition-colors">Application Processing</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed text-lg">
                      Complete application processing with borrower evaluation and decision management for accurate lending decisions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp} className="group">
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 h-full shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl transform hover:scale-[1.02]">
                  <CardContent className="p-10 text-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 w-20 h-20 mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-white transition-colors">Disbursement & Servicing</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed text-lg">
                      Automated disbursement instructions and loan servicing including arrears calculations and borrower notifications.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp} className="group">
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 h-full shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl transform hover:scale-[1.02]">
                  <CardContent className="p-10 text-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 w-20 h-20 mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-white transition-colors">Collection & Reporting</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed text-lg">
                      Comprehensive collection management, demand letters, insurance claims, and automated reporting systems.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeInUp} className="group">
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 h-full shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl transform hover:scale-[1.02]">
                  <CardContent className="p-10 text-center">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 w-20 h-20 mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Cloud className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-white transition-colors">Risk & Compliance</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed text-lg">
                      Risk management and compliance tools ensuring adherence to regulatory requirements and best practices.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile & Analytics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/mobile-lending.png"
                    alt="Mobile Lending Interface"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/analytics-dashboard.png"
                    alt="Analytics Dashboard"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white mb-6 px-4 py-2 text-lg font-bold shadow-lg">Multi-Channel</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Multi-Channel <span className="text-red-600">Access</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                All products can be accessed via digital channels (Mobile & Internet banking, WhatsApp, USSD) and physical channels (Agency, Banking Halls, Approved Employers).
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Mobile & Internet banking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">WhatsApp & USSD access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-red-600" />
                  <span className="text-gray-700">Agency & banking halls</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" variants={fadeInUp}>
              Our <span className="text-red-200">Partners</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-white">CABS</h3>
                  <p className="text-red-100 leading-relaxed">
                    We have been in partnership with CABS for 10 years. 99% of the CABS consumer credit book is managed through our platform including Flexicredit, School Card, Retail credit, EezyCredit, and Digital Loans.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-white">AFC Bank</h3>
                  <p className="text-red-100 leading-relaxed">
                    Launched digital loan products including payday loans and term loans accessible via digital channels for enhanced customer experience.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-white">CBZ</h3>
                  <p className="text-red-100 leading-relaxed">
                    Launched digital loan products including payday loans and term loans accessible via digital channels for enhanced customer experience.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" variants={fadeInUp}>
              Ready to Transform Your Lending?
            </motion.h2>
            <motion.p className="text-xl text-gray-300 mb-12 leading-relaxed" variants={fadeInUp}>
              Discover how our platform can streamline your operations and accelerate growth.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-12 py-4 text-lg shadow-2xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105">
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold text-white mb-6">
                Equals<span className="text-red-600">Solutions</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A Fintech providing consumer credit management solutions to financial institutions. Making more possible through consumer credit solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
              <div className="space-y-3 text-gray-300">
                <p>1st Floor, Block A</p>
                <p>Emerald Office Park</p>
                <p>30 The Chase (West)</p>
                <p>Emerald Hill, Harare</p>
                <p>Zimbabwe</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Phone</h3>
              <div className="space-y-3 text-gray-300">
                <p>+263 242 332088-9</p>
                <p>+263 242 336440-41</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Hours</h3>
              <div className="space-y-3 text-gray-300">
                <p>Mon - Fri</p>
                <p>8:00am – 4:30pm</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">© 2025 Equals Solutions Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}
