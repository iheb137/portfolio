"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, User, FileText, Award, Code, Calendar, Briefcase, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

const words = `DevOps Engineer student passionate about automation and cloud solutions`

const navigationCards = [
  {
    title: "About Me",
    description: "Learn about my background and passion for DevOps",
    href: "/about",
    icon: User,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "My Resume",
    description: "View and download my resume",
    href: "/cv",
    icon: FileText,
    gradient: "from-green-600 to-emerald-600",
  },
  {
    title: "Certifications",
    description: "My professional certifications and qualifications",
    href: "/certifications",
    icon: Award,
    gradient: "from-orange-600 to-red-600",
  },
  {
    title: "Skills",
    description: "My technical skills and tools I master",
    href: "/skills",
    icon: Code,
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Events",
    description: "My participation in events and club activities",
    href: "/events",
    icon: Calendar,
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    title: "Projects",
    description: "Explore my work and technical projects",
    href: "/projects",
    icon: Briefcase,
    gradient: "from-teal-600 to-blue-600",
  },
]

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")

  useEffect(() => {
    setIsVisible(true)

    // Typing animation
    const wordsArray = words.split(" ")
    let currentText = ""
    let wordIndex = 0

    const typingInterval = setInterval(() => {
      if (wordIndex < wordsArray.length) {
        currentText += (wordIndex === 0 ? "" : " ") + wordsArray[wordIndex]
        setTypedText(currentText)
        wordIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950">
    <div
  className="min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/background.webp')" }}>
</div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/20"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div
            className={`text-center space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Profile photo */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative">
                  <img
                    src="/iheb.jpg"
                    alt="IHEBEDDINE SAAFI"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-700 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100 mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    IHEBEDDINE SAAFI
                  </span>
                </h1>
                <div className="h-16 flex items-center justify-center">
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about">
                  <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <User className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    View my profile
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="group border-gray-600 text-gray-100 hover:bg-gray-800/50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  >
                    <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Contact me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Explore my portfolio</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover my skills, projects, and experiences through the different sections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navigationCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Link key={card.title} href={card.href}>
                  <Card
                    className="group p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-blue-600/50 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className={`p-4 rounded-full bg-gradient-to-r ${card.gradient}`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">{card.description}</p>
                      </div>

                      <div
                        className={`h-1 bg-gradient-to-r ${card.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                      ></div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100">Ready to collaborate?</h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out to discuss your projects or opportunities
            </p>
            <Link href="/contact">
              <Button className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Contact me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
