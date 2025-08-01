"use client"

import { Card } from "@/components/ui/card"
import { Award, Plus, Briefcase, Calendar, Building2 } from "lucide-react"

export default function CertificationsPage() {
  const internships = [
    {
      title: "DevOps Internship",
      company: "BIAT-IT",
      logo: "/biat-logo.png", // Ajoutez le logo dans public/
      duration: "August 1, 2025 - Septembre 30, 2025",
      period: "2 months",
      description:
        "DevOps engineering internship focusing on CI/CD pipelines, containerization, and cloud infrastructure automation.",
      technologies: ["Docker", "Kubernetes", "OvTools", "Jira", "Git"],
      status: "upcoming", // upcoming, current, completed
    },
    // Vous pouvez ajouter d'autres stages ici
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "from-blue-600 to-cyan-600"
      case "current":
        return "from-green-600 to-emerald-600"
      case "completed":
        return "from-purple-600 to-pink-600"
      default:
        return "from-gray-600 to-gray-700"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Upcoming"
      case "current":
        return "In Progress"
      case "completed":
        return "Completed"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Certifications & Internships</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional qualifications, certifications, and internship experiences
          </p>
        </div>

        <div className="space-y-12">
          {/* Section Certifications */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-100">Professional Certifications</h2>
                <p className="text-gray-400">Industry-recognized qualifications</p>
              </div>
            </div>

            <Card className="p-12 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 text-center">
              <div className="space-y-8">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-12 w-12 text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-100">Upcoming Certifications</h3>
                  <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    I am currently working on obtaining professional certifications in DevOps and cloud computing. This
                    section will be updated with my future certifications.
                  </p>
                </div>

                {/* Objectifs de certification */}
                <div className="bg-gray-800/50 p-6 rounded-lg max-w-2xl mx-auto">
                  <h4 className="text-xl font-semibold text-orange-400 mb-4">🎯 2024-2025 Goals</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300">AWS Certified Solutions Architect</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300">Docker Certified Associate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300">Kubernetes Administrator (CKA)</span>
                    </div>
                  </div>
                </div>

                {/* Structure pour futures certifications */}
                <div className="pt-8 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-100 mb-4">Future Certifications Structure</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Template de certification */}
                    <div className="bg-gray-800/30 border-2 border-dashed border-gray-600 p-6 rounded-lg">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gray-700/50 rounded-full">
                          <Plus className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h5 className="text-lg font-semibold text-gray-500">Certification Name</h5>
                          <p className="text-gray-600">Organization - Date</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">Certification description...</p>
                    </div>

                    <div className="bg-gray-800/30 border-2 border-dashed border-gray-600 p-6 rounded-lg">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gray-700/50 rounded-full">
                          <Plus className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h5 className="text-lg font-semibold text-gray-500">Certification Name</h5>
                          <p className="text-gray-600">Organization - Date</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">Certification description...</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Section Stages Professionnels */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-100">Professional Internships</h2>
                <p className="text-gray-400">Hands-on experience in the industry</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {internships.map((internship, index) => (
                <Card
                  key={index}
                  className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-blue-600/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                    {/* Informations principales */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start space-x-4">
                        {/* Logo de l'entreprise */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gray-800 rounded-lg border-2 border-gray-600 flex items-center justify-center overflow-hidden">
                            <img
                              src={internship.logo || "/placeholder.svg"}
                              alt={`${internship.company} logo`}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg?height=64&width=64"
                                e.currentTarget.alt = "Company logo"
                              }}
                            />
                          </div>
                        </div>

                        {/* Détails du stage */}
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-100">{internship.title}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Building2 className="h-4 w-4 text-blue-400" />
                              <span className="text-lg text-blue-400 font-medium">{internship.company}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-gray-300">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-green-400" />
                              <span className="text-sm">{internship.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                              <span className="text-sm font-medium">{internship.period}</span>
                            </div>
                          </div>

                          <p className="text-gray-400 leading-relaxed">{internship.description}</p>

                          {/* Technologies */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-100">Key Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {internship.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-800/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Badge de statut */}
                    <div className="flex-shrink-0">
                      <div
                        className={`px-6 py-3 bg-gradient-to-r ${getStatusColor(internship.status)} rounded-full text-center`}
                      >
                        <span className="text-white font-bold text-sm">{getStatusText(internship.status)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Placeholder pour futurs stages */}
              <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-dashed border-gray-600">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto">
                    <Briefcase className="h-8 w-8 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-500">Future Internships</h3>
                    <p className="text-gray-600 text-sm">Additional internship opportunities will be added here</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
