"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BackToTop } from "@/components/back-to-top"

export default function ContactPage() {
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
                <Link href="/solutions" className="text-gray-700 hover:text-red-600 transition-colors">
                  Solutions
                </Link>
                <Link href="/contact" className="text-red-600 font-medium">
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" variants={fadeInUp}>
              Get in <span className="text-equals-red">Touch</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Ready to transform your consumer credit management? Let's discuss how our digital credit management solutions can help your financial institution achieve digital transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="group">
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl transform hover:scale-[1.01]">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-white group-hover:text-white transition-colors">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-300">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-300">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-300">
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Financial Institution"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your lending challenges and how we can help..."
                      rows={5}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 text-lg shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Office Address</h3>
                      <p className="text-gray-300 leading-relaxed">
                        1st Floor, Block A<br />
                        Emerald Office Park
                        <br />
                        30 The Chase (West)
                        <br />
                        Emerald Hill, Harare
                        <br />
                        Zimbabwe
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone Numbers</h3>
                      <p className="text-gray-300">+263 242 332088-9</p>
                      <p className="text-gray-300">+263 242 336440-41</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <p className="text-gray-300">info@equalssolutions.co.zw</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday</p>
                      <p className="text-gray-300">8:00am - 4:30pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/office-harare.png"
                  alt="Equals Solutions Office in Harare"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Book Demo CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" variants={fadeInUp}>
              Ready for a Demo?
            </motion.h2>
            <motion.p className="text-xl text-red-100 mb-12 leading-relaxed" variants={fadeInUp}>
              See our platform in action and discover how it can transform your lending operations. Book a personalized demo
              with our experts.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={fadeInUp}>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-4 text-lg shadow-lg hover:shadow-white/20 transition-all duration-300 hover:scale-105">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-12 py-4 text-lg bg-transparent shadow-lg hover:shadow-white/20 transition-all duration-300 hover:scale-105"
              >
                Download Brochure <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16" variants={fadeInUp}>
              Find Us
            </motion.h2>
            <motion.div variants={fadeInUp} className="relative rounded-2xl overflow-hidden h-96 bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <p className="text-white text-lg">Interactive Map</p>
                  <p className="text-gray-300">Emerald Hill, Harare, Zimbabwe</p>
                </div>
              </div>
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
