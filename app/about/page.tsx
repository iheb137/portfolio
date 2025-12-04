"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Calendar, GraduationCap, Target, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">About Me</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover my background, passions, and what drives me in the DevOps field
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Photo and main info */}
          <div className="lg:col-span-1">
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
              <div className="text-center space-y-6">
                <div className="relative group mx-auto w-fit">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <img
                    src="/iheb.jpg"
                    alt="IHEBEDDINE SAAFI"
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-gray-700 shadow-2xl"
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-100">IHEBEDDINE SAAFI</h2>
                  <p className="text-blue-400 font-medium">DevOps Engineering Student</p>

                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <span>Tunisia</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Calendar className="h-5 w-5 text-blue-400" />
                      <span>Currently studying</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <GraduationCap className="h-5 w-5 text-blue-400" />
                      <span>TEK-UP University</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="h-5 w-5 text-blue-400" />
                      <span className="text-sm">iheb.saafigroup@tek-up.de</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <Target className="h-6 w-6 text-blue-400 mr-3" />
                My Introduction
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm <span className="font-semibold text-blue-400">IHEBEDDINE SAAFI</span>, a passionate DevOps engineering student with a strong background in full-stack development.
                </p>
                <p>
                  My passion lies in optimizing the software development lifecycle through automation, continuous integration/deployment (CI/CD), and cloud infrastructure solutions.
                </p>
                <p>
                  I thrive on building high-performance, scalable web applications using cutting-edge technologies, bridging the gap between development and operations to deliver efficient and innovative solutions.
                </p>
              </div>
            </Card>

            {/* Goals */}
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">My Professional Goals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-blue-400">Short Term</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Master advanced DevOps tools</li>
                    <li>• Earn cloud certifications</li>
                    <li>• Contribute to open source projects</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-blue-400">Long Term</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Become a senior DevOps Engineer</li>
                    <li>• Design cloud architecture solutions</li>
                    <li>• Mentor young developers</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Values */}
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">My Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold text-gray-100">Innovation</h4>
                  <p className="text-sm text-gray-400">Always looking for new solutions</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold text-gray-100">Collaboration</h4>
                  <p className="text-sm text-gray-400">Teamwork makes the dream work</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="font-semibold text-gray-100">Continuous Learning</h4>
                  <p className="text-sm text-gray-400">Always improving and growing</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
