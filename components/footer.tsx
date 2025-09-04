"use client"

import { MapPin, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/cropped-equals-favicon-1.png" 
                alt="Equals Solutions Logo" 
                className="h-8 w-auto mr-2"
              />
              <span className="text-2xl font-bold text-white">
                Equals<span className="text-equals-red">Solutions</span>
              </span>
            </div>
                          <p className="text-gray-300 leading-relaxed">
                Empowering financial institutions across Africa with intelligent lending solutions.
              </p>
          </div>
          <div>
                          <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
              <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                                  <MapPin className="h-5 w-5 text-equals-red mt-1 flex-shrink-0" />
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
                  <Phone className="h-5 w-5 text-equals-red" />
                <span>08677004860</span>
              </div>
            </div>
          </div>
          <div>
                          <h3 className="text-lg font-bold text-white mb-6">Hours</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-equals-red" />
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
  )
} 