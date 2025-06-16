"use client"

import { Card } from "@/components/ui/card"
import { Mail, Github, Linkedin, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Contact Me</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Feel free to reach out for your projects or opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main contact */}
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 mb-8">
            <div className="space-y-8">
              {/* Primary email */}
              <div className="text-center">
                <a
                  href="mailto:iheb.saafigroup@tek-up.de"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  iheb.saafigroup@tek-up.de
                </a>
              </div>

              {/* Contact information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-100">Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <span>Tunisia</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Clock className="h-5 w-5 text-blue-400" />
                      <span>Available for internships and projects</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-100">Social Media</h3>
                  <div className="space-y-4">
                    <a
                      href="https://github.com/iheb137"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>github.com/iheb137</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/saafi-iheb-8373211b8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>linkedin.com/in/saafi-iheb-8373211b8</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Personal message */}
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-100">Let’s Work Together!</h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Whether it’s for a project, an internship opportunity, or just to chat about DevOps, I’d love to
                connect! I’m always open to new opportunities and meaningful collaborations.
              </p>
              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-500">
                  Guaranteed reply within 24 hours • Available for interviews in French or English
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
