"use client"

import { Card } from "@/components/ui/card"
import { Award, Plus } from 'lucide-react'

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">My Certifications</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My qualifications and professional certifications
          </p>
        </div>

        {/* Empty section with future additions */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 text-center">
            <div className="space-y-8">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-12 w-12 text-white" />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-100">Upcoming Certifications</h2>
                <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  I am currently working on obtaining professional certifications in DevOps and cloud computing.
                  This section will be updated with my future certifications.
                </p>
              </div>

              {/* Certification goals */}
              <div className="bg-gray-800/50 p-6 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">🎯 Goals 2024-2025</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">AWS Certified Solutions Architect</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Docker Certified Associate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Kubernetes Administrator (CKA)</span>
                  </div>
                </div>
              </div>

              {/* Template for future certifications */}
              <div className="pt-8 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Template for Future Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Certification template */}
                  <div className="bg-gray-800/30 border-2 border-dashed border-gray-600 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gray-700/50 rounded-full">
                        <Plus className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-500">Certification Name</h4>
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
                        <h4 className="text-lg font-semibold text-gray-500">Certification Name</h4>
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
      </div>
    </div>
  )
}
