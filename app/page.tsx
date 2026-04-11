"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, User, FileText, Award, Code, Calendar, Briefcase, Mail, MapPin, ExternalLink } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const navigationCards = [
  {
    title: "About Me",
    description: "Background, values, and what drives my passion for DevOps",
    href: "/about",
    icon: User,
    accent: "#3b82f6",
    tag: "Who I am",
  },
  {
    title: "My Resume",
    description: "Full academic and professional background in one place",
    href: "/cv",
    icon: FileText,
    accent: "#10b981",
    tag: "Download PDF",
  },
  {
    title: "Certifications",
    description: "CKA in progress — internship at BIAT · IT",
    href: "/certifications",
    icon: Award,
    accent: "#a855f7",
    tag: "In progress",
  },
  {
    title: "Skills",
    description: "Docker, Kubernetes, CI/CD, AWS, Linux and more",
    href: "/skills",
    icon: Code,
    accent: "#f59e0b",
    tag: "DevOps stack",
  },
  {
    title: "Events",
    description: "IEEE Vice-Chairman · Securinets · tech events",
    href: "/events",
    icon: Calendar,
    accent: "#06b6d4",
    tag: "Community",
  },
  {
    title: "Projects",
    description: "LLM chatbot, car rental platform and more",
    href: "/projects",
    icon: Briefcase,
    accent: "#f43f5e",
    tag: "See work",
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const fullText = "DevOps Engineer Student · Automation · Cloud Infrastructure"

  useEffect(() => {
    setMounted(true)

    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 40)

    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouse)

    return () => {
      clearInterval(interval)
      window.removeEventListener("mousemove", handleMouse)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#080c14] text-gray-100 overflow-x-hidden">

      {/* ── CURSOR GLOW ── */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.04), transparent 70%)`,
        }}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#080c14]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080c14]" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Status badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Open to internship · July – August 2026
              </div>
            </div>

            {/* Profile */}
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 opacity-60 blur-sm" />
                <img
                  src="/iheb.jpg"
                  alt="Ihebeddine Saafi"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-800"
                />
              </div>
            </div>

            {/* Name */}
            <div className="text-center space-y-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-blue-400/70 uppercase mb-3">
                  Portfolio
                </p>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    IHEBEDDINE
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                    SAAFI
                  </span>
                </h1>
              </div>

              {/* Typed subtitle */}
              <div className="h-8 flex items-center justify-center">
                <p className="text-base md:text-lg text-gray-400 font-mono tracking-wide">
                  {typedText}
                  <span className="animate-pulse text-blue-400">_</span>
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center gap-1.5 text-gray-500 text-sm">
                <MapPin className="h-3.5 w-3.5" />
                <span>Tunis, Tunisia · TEK-UP University</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Link href="/about">
                  <Button className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-2.5 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20">
                    <User className="mr-2 h-4 w-4" />
                    View profile
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="group border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-800/60 px-8 py-2.5 rounded-xl font-medium transition-all duration-200 backdrop-blur-sm"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact me
                  </Button>
                </Link>
                <Link href="/cv">
                  <Button
                    variant="outline"
                    className="group border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-800/60 px-8 py-2.5 rounded-xl font-medium transition-all duration-200 backdrop-blur-sm"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                    <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-50" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <section className="relative z-10 py-16 border-y border-gray-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-800/40 rounded-2xl overflow-hidden">
            {[
              { value: "2nd", label: "Year GLSI", sub: "TEK-UP University" },
              { value: "CKA", label: "Certification", sub: "In preparation" },
              { value: "BIAT", label: "Internship", sub: "Aug – Sep 2025" },
              { value: "IEEE", label: "Vice-Chairman", sub: "TEK-UP Student Branch" },
            ].map((stat) => (
              <div key={stat.value} className="bg-[#080c14] px-6 py-8 text-center group hover:bg-gray-900/60 transition-colors">
                <p className="text-2xl md:text-3xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-gray-300">{stat.label}</p>
                <p className="text-xs text-gray-600 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NAVIGATION CARDS ── */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] text-blue-400/70 uppercase mb-3">Explore</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">My portfolio</h2>
            <p className="text-gray-500 mt-2 max-w-lg">
              Everything about my skills, experience, and work — organized and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {navigationCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Link key={card.title} href={card.href}>
                  <div
                    className="group relative rounded-2xl border border-gray-800 bg-gray-900/40 p-6 hover:border-gray-700 hover:bg-gray-900/80 transition-all duration-300 cursor-pointer overflow-hidden h-full"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{
                        background: `radial-gradient(400px circle at 50% 0%, ${card.accent}08, transparent 70%)`,
                      }}
                    />

                    <div className="relative space-y-4">
                      <div className="flex items-start justify-between">
                        <div
                          className="p-2.5 rounded-xl"
                          style={{ backgroundColor: `${card.accent}15`, border: `1px solid ${card.accent}25` }}
                        >
                          <Icon className="h-5 w-5" style={{ color: card.accent }} />
                        </div>
                        <span className="text-xs text-gray-600 border border-gray-800 rounded-full px-2.5 py-1 group-hover:border-gray-700 transition-colors">
                          {card.tag}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-gray-100 group-hover:text-white transition-colors mb-1.5">
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                          {card.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-medium transition-colors" style={{ color: card.accent }}>
                        <span>Explore</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: card.accent, opacity: 0.4 }}
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section className="py-20 relative z-10 border-t border-gray-800/60">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium tracking-wide uppercase">
            Available · July – August 2026
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Looking for a DevOps intern?
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            2nd-year GLSI student seeking a 2-month internship in DevOps, Cloud, or Full-Stack.
            Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/contact">
              <Button className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20">
                <Mail className="mr-2 h-4 w-4" />
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Link href="/cv">
              <Button
                variant="outline"
                className="border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-800/60 px-8 py-3 rounded-xl font-medium transition-all duration-200"
              >
                <FileText className="mr-2 h-4 w-4" />
                View resume
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
