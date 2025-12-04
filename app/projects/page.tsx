"use client"

import { Card } from "@/components/ui/card"
import { Code, Github } from "lucide-react"

const projects = [
  {
    title: "Psychological Chatbot",
    description:
      "Dr. Slimen is an intelligent psychologist chatbot, based on LLMs and RAG technology, designed to offer personalized and confidential emotional support.",
    link: "https://github.com/iheb137/chatbot-ai",
  },
  {
    title: "Personal Portfolio",
    description: "Personal portfolio developed with Next.js and Tailwind CSS.",
    link: "https://github.com/iheb137/portfolio",
  },
  {
    title: "iHar - Luxury Car Rental",
    description: "Luxury car rental management application.",
    link: "https://github.com/iheb137/iHar---Luxury-Car-Rental",
  },
  {
    title: "Clinic Management",
    description:
      "Java project for managing a medical clinic, developed with JavaFX for the graphical interface, integrating a database for managing patients, appointments, and medical staff.",
    link: "https://github.com/iheb137/Gestion-de-clinique-",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">My Projects</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Explore my technical achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-blue-600/50 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="p-2 bg-blue-900/30 rounded-full border border-blue-800/50">
                    <Code className="h-5 w-5 text-blue-400" />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
