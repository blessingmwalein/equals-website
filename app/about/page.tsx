"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Target, 
  Shield, 
  Zap, 
  TrendingUp, 
  Globe, 
  Award, 
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BackToTop } from "@/components/back-to-top"

export default function AboutPage() {
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

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We are a collaborative team. We achieve remarkable results when we work together for a common purpose to achieve business goals."
    },
    {
      icon: Shield,
      title: "Ownership",
      description: "We are Equals and Equals is us. The success of Equals is our success. We take full accountability for our actions and their outcomes with a deep sense of duty, pride."
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "We are high achievers. We drive to meet and exceed our customer needs and our own internal goals. Our teams deliver on their targets and commitments."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We are disruptive pacesetters – we continuously generate and implement ideas that result in the introduction of new services or improvement in our services offering."
    }
  ]

  const timeline = [
    {
      year: "2013",
      title: "Foundation",
      description: "Equals Solutions was established and signed partnership with CABS."
    },
    {
      year: "2014",
      title: "Retail Credit Launch",
      description: "Launched Truworths Retail Credit Card and GTel Credit Facility."
    },
    {
      year: "2015",
      title: "Credit Innovation",
      description: "Introduced credit vetting and launched Flexicredit Lite."
    },
    {
      year: "2016",
      title: "Product Expansion",
      description: "Launched Flexicredit Card and CABS School Card."
    },
    {
      year: "2017",
      title: "Service Growth",
      description: "Introduced non-payroll loans with CABS and launched NSSA Scheme."
    },
    {
      year: "2018",
      title: "Mobile Integration",
      description: "Introduced mobile-based loans with CABS and launched EezyCredit."
    },
    {
      year: "2019",
      title: "Strategic Expansion",
      description: "Signed Old Mutual Finance and removed exclusivity clause with CABS."
    },
    {
      year: "2020",
      title: "Digital Evolution",
      description: "Launched ZWD EezyCredit and introduced Mobile Credit Service."
    },
    {
      year: "2021",
      title: "Educational Solutions",
      description: "Launched SchoolPay solution."
    },
    {
      year: "2022",
      title: "Banking Partnerships",
      description: "Signed up AFC Bank and launched Digital Credit."
    },
    {
      year: "2023",
      title: "Market Leadership",
      description: "Signed up CBZ and continued expanding our client base."
    }
  ]

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
                <Link href="/about" className="text-red-600 font-medium">
                  About
                </Link>
                <Link href="/solutions" className="text-gray-700 hover:text-red-600 transition-colors">
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" variants={fadeInUp}>
              Our <span className="text-equals-red">Story</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Equals was established in 2013 and has been offering consumer credit management services for 10 years. Our aspiration is to become the leading African consumer credit solutions provider that is used globally.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white mb-6 px-4 py-2 text-lg font-bold shadow-lg">Our Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Transforming <span className="text-equals-red">Lending</span> in Africa
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Financial institutions were using legacy systems and processes that couldn't meet ever-changing stakeholder expectations. The current credit journey for traditional "brick and mortar" financial institutions was costly, not scalable, cumbersome, inconvenient and inefficient.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We set out to provide efficiency and scalability of credit management services through technology and innovative processes. Our aspiration is to become the leading African consumer credit solutions provider that is used globally.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">2013</div>
                  <div className="text-gray-300">Since Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">+$3M</div>
                  <div className="text-gray-300">Revenue</div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/team-meeting.png"
                  alt="Equals Solutions team collaborating on innovative solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16" variants={fadeInUp}>
              Mission & <span className="text-red-600">Values</span>
            </motion.h2>
            
            {/* Mission */}
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-white">Our Vision & Mission</h3>
                <div className="text-xl text-gray-300 leading-relaxed space-y-4">
                  <p><strong className="text-white">Vision:</strong> To become the leading African consumer credit solutions provider that is used globally</p>
                  <p><strong className="text-white">Mission:</strong> To make more possible through credit solutions, transforming the consumer credit journey and leading the digital transformation of the credit management journey in Africa.</p>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 h-full shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl transform hover:scale-[1.02]">
                    <CardContent className="p-10 text-center">
                      <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-5 w-20 h-20 mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-white transition-colors">{value.title}</h3>
                      <p className="text-gray-300 group-hover:text-gray-100 leading-relaxed text-lg">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16" variants={fadeInUp}>
              Our <span className="text-red-600">Journey</span>
            </motion.h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-800"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-black"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl group transform hover:scale-[1.02]">
                        <CardContent className="p-8">
                          <div className="flex items-center justify-between mb-6">
                            <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 text-xl font-bold shadow-lg">{item.year}</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">{item.title}</h3>
                          <p className="text-gray-300 group-hover:text-gray-100 text-lg leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16" variants={fadeInUp}>
              Leadership <span className="text-red-600">Team</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="group">
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl transform hover:scale-[1.02]">
                  <CardContent className="p-10 text-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-14 w-14 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">Experienced Leadership</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 mb-6 text-lg leading-relaxed">
                      Our team brings decades of combined experience in financial technology, 
                      risk management, and African markets.
                    </p>
                    <div className="text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                      Deep expertise in lending operations, regulatory compliance, and digital transformation
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="group">
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl transform hover:scale-[1.02]">
                  <CardContent className="p-10 text-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-14 w-14 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-white transition-colors">Munyaradzi Mushangazhike</h3>
                    <div className="text-red-400 font-semibold mb-4">Chief Executive Officer</div>
                    <p className="text-gray-300 group-hover:text-gray-100 mb-6 text-lg leading-relaxed">
                      CEO of Equals Solutions Pvt Ltd. Leads strategy, partnerships, and delivery of our digital credit platform across Africa.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} className="group">
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl transform hover:scale-[1.02]">
                  <CardContent className="p-10 text-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-14 w-14 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">Local Expertise</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 mb-6 text-lg leading-relaxed">
                      Deep understanding of African markets, regulatory environments, and cultural nuances.
                    </p>
                    <div className="text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                      Regional knowledge that ensures solutions are tailored to local needs and challenges
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="group">
                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-700/50 hover:border-red-500/60 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 backdrop-blur-xl transform hover:scale-[1.02]">
                  <CardContent className="p-10 text-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-14 w-14 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">+$3M Revenue</h3>
                    <p className="text-gray-300 group-hover:text-gray-100 mb-6 text-lg leading-relaxed">
                      Successfully delivered solutions to leading financial institutions across the continent.
                    </p>
                    <div className="text-base text-gray-400 group-hover:text-gray-200 transition-colors">
                      Demonstrated results in improving efficiency, reducing risk, and driving growth
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" variants={fadeInUp}>
              Ready to Partner with Us?
            </motion.h2>
            <motion.p className="text-xl text-red-100 mb-12 leading-relaxed" variants={fadeInUp}>
              Join the growing network of financial institutions that trust Equals Solutions to transform 
              their lending operations and drive sustainable growth.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-4 text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105">
                  Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
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
                  <span>08677004860</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Hours</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-red-600" />
                  <div>
                    <p>Mon - Fri</p>
                    <p>8:00am – 4:30pm</p>
                  </div>
                </div>
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