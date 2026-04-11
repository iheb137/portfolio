"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye, FileText, Briefcase, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

export default function CVPage() {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">My Curriculum Vitae</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover my detailed academic and professional background
          </p>
        </div>

        {/* 🔥 Internship Search Banner */}
        <div className="relative mb-8 rounded-2xl overflow-hidden border border-blue-500/40 bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-purple-950/80 p-[1px]">
          <div className="rounded-2xl bg-gradient-to-r from-blue-950/90 via-indigo-950/90 to-purple-950/90 px-6 py-5">
            {/* Animated ping dot */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-xs font-semibold tracking-wide uppercase">Open to opportunities</span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="p-3 bg-blue-500/20 rounded-xl shrink-0">
                <Briefcase className="h-7 w-7 text-blue-400" />
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-bold text-white mb-1">
                  🎯 Actively Seeking a 2-Month Summer Internship — July & August 2026
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I'm a 2nd-year <span className="text-blue-300 font-medium">GLSI (Computer Science & Information Systems)</span> student at TEK-UP University, 
                  looking for an internship opportunity to apply my skills in <span className="text-purple-300 font-medium">DevOps, Cloud, and Software Development</span>.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-300">
                <Calendar className="h-3.5 w-3.5 text-blue-400" />
                July – August 2026 (2 months)
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-300">
                <MapPin className="h-3.5 w-3.5 text-purple-400" />
                Tunisia · Remote-friendly
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-300">
                <Briefcase className="h-3.5 w-3.5 text-green-400" />
                DevOps · Cloud · Full-Stack
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-gray-400">
                📧 Contact me at{" "}
                <a href="mailto:iheb.saafigroup@tek-up.de" className="text-blue-400 hover:underline">
                  iheb.saafigroup@tek-up.de
                </a>
              </p>
              <a
                href="https://linkedin.com/in/saafi-iheb-8373211b8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-full px-4 py-1.5 font-medium w-fit"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>

        {/* Actions */}
        <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <FileText className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100">CV - IHEBEDDINE SAAFI</h3>
                <p className="text-gray-400">Last updated: April 2026</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={() => setShowPreview(!showPreview)}
                variant="outline"
                className="border-gray-600 text-gray-100 hover:bg-gray-800/50"
              >
                <Eye className="mr-2 h-4 w-4" />
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
              <a href="/cv.pdf" download="CV_IHEBEDDINE_SAAFI.pdf" className="inline-flex">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </a>
            </div>
          </div>
        </Card>

        {/* CV Preview */}
        {showPreview && (
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
            <div className="space-y-8">
              {/* CV Header */}
              <div className="text-center border-b border-gray-700 pb-6">
                <h2 className="text-3xl font-bold text-gray-100 mb-2">IHEBEDDINE SAAFI</h2>
                <p className="text-xl text-blue-400 mb-4">DevOps Engineering Student</p>
                <div className="flex flex-wrap justify-center gap-4 text-gray-300">
                  <span>📧 iheb.saafigroup@tek-up.de</span>
                  <span>🔗 linkedin.com/in/saafi-iheb-8373211b8</span>
                  <span>💻 github.com/iheb137</span>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 border-l-4 border-blue-500 pl-4">Education</h3>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-100">DevOps Engineer</h4>
                    <p className="text-blue-400">TEK-UP University</p>
                    <p className="text-gray-400">Ongoing – Specialization in Automation and Cloud</p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 border-l-4 border-green-500 pl-4">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-100 mb-2">DevOps & Cloud</h4>
                    <p className="text-gray-300 text-sm">Docker, Kubernetes, CI/CD, AWS, Git</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-100 mb-2">Development</h4>
                    <p className="text-gray-300 text-sm">Java, Python, JavaScript, Next.js</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-100 mb-2">Systems</h4>
                    <p className="text-gray-300 text-sm">Linux, Ubuntu, CentOS, SSH</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-100 mb-2">Databases</h4>
                    <p className="text-gray-300 text-sm">MySQL, SQL, XAMPP</p>
                  </div>
                </div>
              </div>

              {/* Main Projects */}
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 border-l-4 border-purple-500 pl-4">
                  Key Projects
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-100">Psychological Chatbot</h4>
                    <p className="text-gray-300 text-sm">Intelligent chatbot based on LLMs and RAG technology</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-100">iHar – Luxury Car Rental</h4>
                    <p className="text-gray-300 text-sm">Management app for luxury car rentals</p>
                  </div>
                </div>
              </div>

              {/* Activities */}
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 border-l-4 border-orange-500 pl-4">
                  Community Involvement
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-100">Vice-Chairman, IEEE TEK-UP SB</h4>
                    <p className="text-gray-300 text-sm">Leadership and coordination of technical activities</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-100">Member, Securinets Tek-UP</h4>
                    <p className="text-gray-300 text-sm">Active participation in cybersecurity events</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Extra info */}
        <div className="mt-8 text-center">
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
            <p className="text-gray-400 mb-4">
              For a complete and detailed version of my CV, please download the PDF file.
            </p>
            <p className="text-sm text-gray-500">
              The CV is regularly updated with my latest experiences and skills.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
