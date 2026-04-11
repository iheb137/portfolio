"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, Calendar, Building2, Shield, Clock, CheckCircle2, BookOpen, ExternalLink } from "lucide-react"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 py-16">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Experience & Certifications
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real-world internships and the certifications I'm actively working toward
          </p>
        </div>

        {/* ── INTERNSHIPS ── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-blue-600/20 rounded-xl border border-blue-500/30">
              <Briefcase className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-100">Professional Internships</h2>
              <p className="text-sm text-gray-500">Hands-on industry experience</p>
            </div>
          </div>

          {/* BIAT Card — featured */}
          <div className="relative rounded-2xl border border-blue-500/30 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950/40 p-8 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row gap-8">
              {/* Left — logo + status */}
              <div className="flex flex-col items-center lg:items-start gap-4 lg:w-48 shrink-0">
                <div className="w-20 h-20 rounded-2xl border-2 border-gray-700 bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/biat-logo.jpg"
                    alt="BIAT logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold text-blue-400">B</span>'
                    }}
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Upcoming
                </span>
              </div>

              {/* Right — details */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">DevOps Internship</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Building2 className="h-4 w-4 text-blue-400" />
                    <span className="text-blue-400 font-semibold text-lg">BIAT – IT Department</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-green-400" />
                    <span>August 1 – September 30, 2025</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-purple-400" />
                    <span>2 months</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  DevOps engineering internship at one of Tunisia's leading banks, focusing on CI/CD pipeline automation,
                  containerization with Docker & Kubernetes, and cloud infrastructure management.
                </p>

                {/* Technologies */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "Kubernetes", "OvTools", "Jira", "Git", "CI/CD"].map((tech) => (
                      <span
                        key={tech}
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

          {/* Summer 2026 internship search */}
          <div className="mt-4 rounded-2xl border border-dashed border-green-500/30 bg-green-950/10 p-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <div>
                <p className="text-green-400 font-semibold text-sm">Open to Opportunities</p>
                <p className="text-gray-400 text-sm mt-0.5">
                  Actively seeking a <span className="text-white font-medium">2-month internship for July – August 2026</span> (2nd year GLSI).
                  Open to DevOps, Cloud, or Full-Stack roles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-purple-600/20 rounded-xl border border-purple-500/30">
              <Shield className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-100">Certifications</h2>
              <p className="text-sm text-gray-500">Industry-recognized qualifications</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* CKA — In Progress (featured) */}
            <div className="md:col-span-2 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-gray-900 to-purple-950/30 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* CKA logo area */}
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center">
                  <span className="text-white text-2xl font-black tracking-tight">CKA</span>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-100">Certified Kubernetes Administrator</h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">
                      <BookOpen className="h-3 w-3" />
                      Preparing
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">
                    <span className="text-gray-300 font-medium">Linux Foundation</span> · Cloud Native Computing Foundation (CNCF)
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Hands-on exam validating skills in Kubernetes cluster administration, workload management,
                    networking, storage, and security. Actively studying and practicing on real clusters.
                  </p>

                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                      <span>Preparation progress</span>
                      <span className="text-purple-400 font-medium">In progress</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                        style={{ width: '45%' }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Kubernetes", "kubectl", "RBAC", "Networking", "Storage", "Security"].map((topic) => (
                      <span key={topic} className="px-2.5 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-800/40">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>



          </div>
        </section>

      </div>
    </div>
  )
}
