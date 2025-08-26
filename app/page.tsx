"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Globe,
  Handshake,
  Shield,
  Zap,
  Network,
  TrendingUp,
  Clock,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BackToTop } from "@/components/back-to-top";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
                <Link href="/" className="text-red-600 font-medium">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/solutions"
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  Solutions
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        {/* Background Image with Fade Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home2.jpg"
            alt="Office Background"
            fill
            className="object-cover w-full h-full"
          />
          {/* Smooth gradient overlay that dissolves without dividing lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              variants={fadeInUp}
            >
              Digital Credit <span className="text-red-600">Management</span>
              <br />
              Solutions
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Equals Solutions is a Fintech that provides consumer credit management solutions to financial institutions. We offer comprehensive automated, insight-driven services to help achieve digital transformation of the consumer credit management journey.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              variants={fadeInUp}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
                >
                  Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent backdrop-blur-sm shadow-xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
                >
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>

            {/* Who We Work With - On First Screen */}
            <motion.div variants={fadeInUp} className="mt-12">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
                variants={fadeInUp}
              >
                Who We Work With
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <motion.div variants={fadeInUp} className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/60 transition-all duration-500 h-full transform hover:scale-[1.02] hover:bg-white/15 shadow-2xl hover:shadow-red-500/20">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 mb-6 shadow-lg">
                      <Building2 className="h-10 w-10 text-white mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                      Banks & Financial Institutions
                    </h3>
                    <p className="text-gray-200 group-hover:text-white text-base leading-relaxed">
                      Transform your consumer credit management with our end-to-end automated platform for digital loans, payday loans, and credit cards.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/60 transition-all duration-500 h-full transform hover:scale-[1.02] hover:bg-white/15 shadow-2xl hover:shadow-red-500/20">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 mb-6 shadow-lg">
                      <Globe className="h-10 w-10 text-white mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                      Retailers & Partners
                    </h3>
                    <p className="text-gray-200 group-hover:text-white text-base leading-relaxed">
                      Enable in-store credit solutions and retail credit partnerships through our integrated platform and API services.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-red-400/60 transition-all duration-500 h-full transform hover:scale-[1.02] hover:bg-white/15 shadow-2xl hover:shadow-red-500/20">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 mb-6 shadow-lg">
                      <Handshake className="h-10 w-10 text-white mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                      Employers & Organizations
                    </h3>
                    <p className="text-gray-200 group-hover:text-white text-base leading-relaxed">
                      Provide staff personal loans and payroll-deducted credit solutions with automated eligibility and subsidy calculations.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Equals Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <div className="inline-flex items-center justify-center bg-gray-600 from-red-600 to-red-700 rounded-full px-6 py-3 mb-6">
                <span className="text-white font-bold text-lg">The</span>

                <img
                  src="/cropped-equals-favicon-1.png"
                  alt="Equals"
                  className="h-8 w-auto mr-3 ml-3"
                />
                <span className="text-white font-bold text-lg">Approach</span>
              </div>
              {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The <span className="text-red-500">Equals</span> Way
              </h2> */}
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a B2B Fintech providing Software as a Service (SaaS) solutions. We develop, host and maintain our software, making it available to clients over the internet.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp} className="group">
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-600/30 hover:border-red-400/50 transition-all duration-500 h-full transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/25 shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Network className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-white transition-colors">
                      End-to-End Automation
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed text-lg">
                      Complete automation from application processing to servicing, collection, reporting, risk and compliance management.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-600/30 hover:border-red-400/50 transition-all duration-500 h-full transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/25 shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-white transition-colors">
                      Digital Transformation
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed text-lg">
                      Making every step of the credit lifecycle fully digital, automated, secure, efficient, low-risk and streamlined.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-600/30 hover:border-red-400/50 transition-all duration-500 h-full transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/25 shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-white transition-colors">
                      Borrower Evaluation
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed text-lg">
                      Advanced borrower evaluation and decision management systems for accurate risk assessment and lending decisions.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-600/30 hover:border-red-400/50 transition-all duration-500 h-full transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/25 shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-white transition-colors">
                      Proprietary Technology
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed text-lg">
                      Web-based enterprise platform built on cutting-edge open-source technology with in-house proprietary processes and designs.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-950/20 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
              variants={fadeInUp}
            >
              The <span className="text-red-600">Problem</span> We Solve
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div variants={fadeInUp}>
                <h3 className="text-3xl font-bold mb-8 text-white">
                  Traditional Banking <span className="text-red-600">Challenges</span>
                </h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/30 shadow-xl">
                    <h4 className="text-xl font-bold text-red-400 mb-3">Labor Intensive Process</h4>
                    <p className="text-gray-300">Approving a loan requires on average 6 people with each individual spending at least 30 minutes on an application</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/30 shadow-xl">
                    <h4 className="text-xl font-bold text-red-400 mb-3">Poor Scalability</h4>
                    <p className="text-gray-300">Since processes are labor intensive, scalability mainly requires hiring more people</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/30 shadow-xl">
                    <h4 className="text-xl font-bold text-red-400 mb-3">Slow Turnaround</h4>
                    <p className="text-gray-300">It takes an average of 7 days to get a loan approved and disbursed in an average bank</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-3xl font-bold mb-8 text-white">
                  Our <span className="text-red-600">Solution</span>
                </h3>
                <div className="bg-gradient-to-br from-red-600/10 to-red-600/5 rounded-3xl p-8 border border-red-500/30 shadow-2xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-2 mt-1">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Efficiency & Scalability</h4>
                        <p className="text-gray-300">Provide efficiency and scalability through technology and innovative processes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-2 mt-1">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Fully Digital</h4>
                        <p className="text-gray-300">Make every step fully digital, automated, secure, efficient, low-risk and streamlined</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-2 mt-1">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Complete Lifecycle</h4>
                        <p className="text-gray-300">Application processing, borrower evaluation, decision management, disbursement to servicing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Features & Consulting - Combined Cool Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
              variants={fadeInUp}
            >
              Complete <span className="text-red-600">Lending Ecosystem</span>
            </motion.h2>

            {/* Platform Features */}
            <motion.div variants={fadeInUp} className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white mb-6 px-4 py-2 text-lg font-bold shadow-lg">
                    Intelligent Platform
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Digital Credit Management{" "}
                    <span className="text-red-600">Platform</span>
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Our comprehensive platform provides efficiency and scalability of credit management services through technology and innovative processes. We re-write the rules of engagement in credit management, producing big benefits for lenders and borrowers alike.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300">Application Processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300">Decision Management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300">Disbursement & Servicing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300">Collection & Reporting</span>
                    </div>
                  </div>
                  <Link href="/solutions">
                    <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105">
                      Explore Platform <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-gray-700/50 hover:border-red-500/60 transform hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-red-500/20">
                    <Image
                      src="/images/lending-dashboard.jpeg"
                      alt="Lending platform dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Consulting Services */}
            <motion.div variants={fadeInUp} className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-gray-700/50 hover:border-red-500/60 transform hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-red-500/20">
                    <Image
                      src="/images/analytics-dashboard.jpg"
                      alt="Analytics dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <Badge className="bg-gradient-to-r from-gray-600 to-gray-700 text-white mb-6 px-4 py-2 text-lg font-bold shadow-lg">
                    Value Proposition
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Our Value{" "}
                    <span className="text-red-600">Proposition</span>
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    We provide comprehensive benefits to financial institutions: cost reduction, enhanced digital reputation, improved customer service, revenue maximization, and better loan book quality through our automated solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300">Cost Reduction</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300">Revenue Maximization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300">Digital Reputation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300">Customer Satisfaction</span>
                    </div>
                  </div>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-white/50 text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm shadow-lg hover:shadow-white/20 transition-all duration-300 hover:scale-105"
                    >
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Trust Stats - Redesigned */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-r from-red-600/15 to-red-600/10 rounded-3xl p-16 border border-red-500/30 shadow-2xl backdrop-blur-sm">
                <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                  Proven <span className="text-red-400">Track Record</span>
                </h3>
                <div className="grid md:grid-cols-4 gap-8">
                  <motion.div variants={fadeInUp} className="text-center group">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 mb-4 transform group-hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-red-500/30 border border-white/10 hover:border-red-400/40">
                      <div className="text-5xl md:text-6xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors">
                        2013
                      </div>
                      <p className="text-xl text-gray-200 group-hover:text-white transition-colors font-medium">
                        Since Established
                      </p>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="text-center group">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 mb-4 transform group-hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-red-500/30 border border-white/10 hover:border-red-400/40">
                      <div className="text-5xl md:text-6xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors">
                        99%
                      </div>
                      <p className="text-xl text-gray-200 group-hover:text-white transition-colors font-medium">CABS Credit Book</p>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="text-center group">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 mb-4 transform group-hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-red-500/30 border border-white/10 hover:border-red-400/40">
                      <div className="text-5xl md:text-6xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors">
                        $10M
                      </div>
                      <p className="text-xl text-gray-200 group-hover:text-white transition-colors font-medium">
                        Revenue Target
                      </p>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="text-center group">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 mb-4 transform group-hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-red-500/30 border border-white/10 hover:border-red-400/40">
                      <div className="text-5xl md:text-6xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors">
                        B2B
                      </div>
                      <p className="text-xl text-gray-200 group-hover:text-white transition-colors font-medium">SaaS Solutions</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Customers & Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
              variants={fadeInUp}
            >
              Our <span className="text-red-600">Customers</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <motion.div variants={fadeInUp} className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 hover:border-red-400/50 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 transform hover:scale-[1.02]">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                    CABS
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed">
                    10-year partnership managing 99% of CABS consumer credit book including Flexicredit, School Card, Retail credit, EezyCredit, and Digital Loans.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 hover:border-red-400/50 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 transform hover:scale-[1.02]">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                    AFC Bank & CBZ
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed">
                    Launched digital loan products including payday loans and term loans accessible via USSD for enhanced customer experience.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 hover:border-red-400/50 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 transform hover:scale-[1.02]">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Handshake className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                    Old Mutual
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed">
                    Provided Human Capital team with staff personal loans solution including eligibility assessment, onboarding, and subsidy calculations.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Competitive Advantage */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-r from-red-600/15 to-red-600/10 rounded-3xl p-16 border border-red-500/30 shadow-2xl backdrop-blur-sm">
                <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                  Why Choose <span className="text-red-400">Equals</span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-3xl p-8 transform group-hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-red-500/40 border border-white/20 hover:border-red-400/50">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-3 w-14 h-14 mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">$</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-white">Low Cost</h4>
                      <p className="text-gray-300 group-hover:text-white text-base leading-relaxed">Implementation cost is quite low compared to developing in-house solutions</p>
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-3xl p-8 transform group-hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-red-500/40 border border-white/20 hover:border-red-400/50">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 w-14 h-14 mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <Zap className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-white">First Mover</h4>
                      <p className="text-gray-300 group-hover:text-white text-base leading-relaxed">Our products are the first of its kind in the market</p>
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-3xl p-8 transform group-hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-red-500/40 border border-white/20 hover:border-red-400/50">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-3 w-14 h-14 mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <TrendingUp className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-white">Experience</h4>
                      <p className="text-gray-300 group-hover:text-white text-base leading-relaxed">Partnership with leading Banks in consumer credit for years</p>
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-3xl p-8 transform group-hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-red-500/40 border border-white/20 hover:border-red-400/50">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-3 w-14 h-14 mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <Shield className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-white">Proprietary Tech</h4>
                      <p className="text-gray-300 group-hover:text-white text-base leading-relaxed">Our software is developed in-house and owned by us</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-equals-red to-equals-red-hover">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              variants={fadeInUp}
            >
              Ready to Transform Your Lending Operations?
            </motion.h2>
            <motion.p
              className="text-lg text-red-100 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Join leading financial institutions across Africa who trust Equals
              Solutions to power their lending operations.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-4 text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
                >
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
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p>1st Floor, Block A</p>
                    <p>Emerald Office Park</p>
                    <p>30 The Chase (West)</p>
                    <p>Emerald Hill, Harare</p>
                    <p>Zimbabwe</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Phone</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span>+263 242 332088-9</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span>+263 242 336440-41</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Hours</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <div>
                    <p>Mon - Fri</p>
                    <p>8:00am – 4:30pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              © 2025 Equals Solutions Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
