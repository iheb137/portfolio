"use client"

import { MapPin, Calendar, GraduationCap, Target, Mail, ArrowRight, Cpu, Globe, Users, BookOpen, Zap, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let animId: number

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener("resize", resize)

    // Floating orbs / blobs
    const orbs = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 180 + Math.random() * 200,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      hue: [220, 240, 200, 260, 210, 190][i],
      phase: Math.random() * Math.PI * 2,
    }))

    // Grid dots
    const spacing = 60
    let frame = 0

    const draw = () => {
      frame++
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      // Draw soft orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx; orb.y += orb.vy; orb.phase += 0.008
        if (orb.x < -orb.r) orb.x = w + orb.r
        if (orb.x > w + orb.r) orb.x = -orb.r
        if (orb.y < -orb.r) orb.y = h + orb.r
        if (orb.y > h + orb.r) orb.y = -orb.r

        const alpha = 0.04 + 0.02 * Math.sin(orb.phase)
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r)
        grad.addColorStop(0, `hsla(${orb.hue}, 80%, 60%, ${alpha})`)
        grad.addColorStop(1, "transparent")
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2)
        ctx.fill()
      })

      // Dot grid
      const cols = Math.ceil(w / spacing)
      const rows = Math.ceil(h / spacing)
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing
          const y = j * spacing
          const wave = Math.sin(frame * 0.015 + i * 0.4 + j * 0.3) * 0.5 + 0.5
          const alpha = 0.04 + wave * 0.08
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(99,179,237,${alpha})`
          ctx.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize) }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
}

export default function AboutPage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const goals = {
    short: ["Master advanced DevOps tooling & practices", "Earn Kubernetes CKA certification", "Contribute to open-source projects"],
    long: ["Become a senior DevOps / Cloud Architect", "Design resilient cloud-native systems", "Mentor the next generation of engineers"],
  }

  const values = [
    { icon: Zap, label: "Automation-first", desc: "If it runs twice, it should be scripted", color: "#f59e0b" },
    { icon: Users, label: "Collaboration", desc: "DevOps is about people as much as tools", color: "#3b82f6" },
    { icon: BookOpen, label: "Lifelong learning", desc: "The stack evolves — so do I", color: "#a855f7" },
    { icon: Shield, label: "Reliability", desc: "Build systems that don't wake you at 3am", color: "#10b981" },
    { icon: Globe, label: "Open source", desc: "Give back to the community", color: "#06b6d4" },
    { icon: Cpu, label: "Performance", desc: "Efficiency at every layer of the stack", color: "#f43f5e" },
  ]

  return (
    <div className="min-h-screen bg-[#080c14] text-gray-100 relative overflow-x-hidden">

      <ParticleBackground />

      {/* Page content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">

        {/* ── HEADER ── */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-400/70 uppercase mb-4">Who I am</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">About</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A DevOps student who turns infrastructure chaos into clean, automated systems.
          </p>
        </div>

        {/* ── HERO ROW ── */}
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10 transition-all duration-1000 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          {/* Profile card */}
          <div className="lg:col-span-2 rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-8 flex flex-col items-center text-center gap-6">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 opacity-50 blur-sm" />
              <img
                src="/iheb.jpg"
                alt="Ihebeddine Saafi"
                className="relative w-40 h-40 rounded-full object-cover border-2 border-gray-800"
              />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tight">IHEBEDDINE SAAFI</h2>
              <p className="text-blue-400 font-medium mt-1 text-sm">DevOps Engineering Student</p>
            </div>

            <div className="w-full space-y-3 text-sm">
              {[
                { icon: MapPin, text: "Tunis, Tunisia" },
                { icon: GraduationCap, text: "TEK-UP University · GLSI 2nd year" },
                { icon: Calendar, text: "Open to internship — Jul/Aug 2026" },
                { icon: Mail, text: "iheb.saafigroup@tek-up.de" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-400 bg-gray-800/40 rounded-xl px-4 py-2.5 border border-gray-700/50">
                  <Icon className="h-4 w-4 text-blue-400 shrink-0" />
                  <span className="text-left">{text}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <Mail className="mr-2 h-4 w-4" />Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Intro + goals */}
          <div className="lg:col-span-3 flex flex-col gap-6">

            {/* Introduction */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-8 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white">My story</h3>
              </div>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  I'm <span className="text-blue-400 font-semibold">Ihebeddine Saafi</span> — a DevOps engineering student at TEK-UP University (GLSI program), passionate about building the invisible backbone that makes software work at scale.
                </p>
                <p>
                  My journey started with full-stack development, but I quickly fell in love with the ops side — the pipelines, the containers, the infrastructure-as-code. Now I sit at the intersection of both worlds.
                </p>
                <p>
                  Beyond the terminal, I lead technical activities as <span className="text-cyan-400 font-medium">Vice-Chairman of IEEE TEK-UP Student Branch</span>, and engage in cybersecurity through <span className="text-purple-400 font-medium">Securinets Tek-UP</span>.
                </p>
                <p>
                  I'm currently preparing for the <span className="text-amber-400 font-medium">CKA certification</span> and actively seeking a <span className="text-green-400 font-medium">2-month internship for Summer 2026</span>.
                </p>
              </div>
            </div>

            {/* Quick tech badges */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6">
              <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-4">Daily stack</p>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "Linux", "Git", "CI/CD", "AWS", "Terraform", "Ansible", "Python", "Next.js", "Prometheus", "Nginx"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-800/80 border border-gray-700 text-gray-300 hover:border-blue-500/40 hover:text-blue-300 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── GOALS ── */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {(["short", "long"] as const).map((term) => (
            <div key={term} className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2 h-6 rounded-full ${term === "short" ? "bg-blue-400" : "bg-purple-400"}`} />
                <h3 className="text-base font-bold text-white capitalize">{term}-term goals</h3>
              </div>
              <ul className="space-y-3">
                {goals[term].map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${term === "short" ? "bg-blue-400" : "bg-purple-400"}`} />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── VALUES ── */}
        <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.3em] text-blue-400/70 uppercase mb-2">What I stand for</p>
            <h2 className="text-2xl font-bold text-white">Core values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {values.map(({ icon: Icon, label, desc, color }) => (
              <div
                key={label}
                className="group rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm p-6 hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300 overflow-hidden relative"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(300px circle at 30% 20%, ${color}08, transparent 70%)` }}
                />
                <div className="relative">
                  <div className="p-2.5 rounded-xl w-fit mb-4" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}>
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <h4 className="font-bold text-gray-100 text-sm mb-1.5 group-hover:text-white transition-colors">{label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">{desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: color, opacity: 0.3 }} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
