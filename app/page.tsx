"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, User, FileText, Award, Code, Calendar, Briefcase, Mail, MapPin, ExternalLink } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const navigationCards = [
  { title: "About Me", description: "Background, values, and what drives my passion for DevOps", href: "/about", icon: User, accent: "#3b82f6", tag: "Who I am" },
  { title: "My Resume", description: "Full academic and professional background in one place", href: "/cv", icon: FileText, accent: "#10b981", tag: "Download PDF" },
  { title: "Certifications", description: "CKA in progress — internship at BIAT · IT", href: "/certifications", icon: Award, accent: "#a855f7", tag: "In progress" },
  { title: "Skills", description: "Docker, Kubernetes, CI/CD, AWS, Linux and more", href: "/skills", icon: Code, accent: "#f59e0b", tag: "DevOps stack" },
  { title: "Events", description: "IEEE Vice-Chairman · Securinets · tech events", href: "/events", icon: Calendar, accent: "#06b6d4", tag: "Community" },
  { title: "Projects", description: "LLM chatbot, car rental platform and more", href: "/projects", icon: Briefcase, accent: "#f43f5e", tag: "See work" },
]

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let animId: number
    let frame = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const keywords = [
      "docker run", "kubectl apply", "git push", "CI/CD", "terraform",
      "ansible", "helm upgrade", "nginx", "prometheus", "grafana",
      "pipeline", "deploy", "k8s", "aws s3", "linux", "bash",
      "yaml", "Dockerfile", "jenkins", "ArgoCD", "redis", "vault",
      "npm build", "python", "curl -X POST", "ssh root@", "chmod 755",
      "git commit", "docker-compose", "kubectl get pods",
    ]

    const words = Array.from({ length: 24 }, () => ({
      text: keywords[Math.floor(Math.random() * keywords.length)],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vy: -(0.25 + Math.random() * 0.55),
      opacity: 0.07 + Math.random() * 0.15,
      color: Math.random() > 0.5 ? "#3b82f6" : "#06b6d4",
    }))

    const nodes = Array.from({ length: 45 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: 1.5 + Math.random() * 2,
      pulse: Math.random() * Math.PI * 2,
    }))

    const matrixChars = "01アイウエオ∑λ∇∂∫≈{}[]()<>/\\"
    const colWidth = 26
    const cols = Math.ceil(window.innerWidth / colWidth)
    const drops = Array.from({ length: cols }, () => Math.random() * -60)

    const draw = () => {
      frame++
      const w = canvas.width
      const h = canvas.height

      ctx.fillStyle = "rgba(8,12,20,0.15)"
      ctx.fillRect(0, 0, w, h)

      // Matrix rain
      ctx.font = "12px monospace"
      for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        const y = drops[i] * colWidth
        ctx.fillStyle = "rgba(6,182,212,0.6)"
        ctx.fillText(char, i * colWidth, y)
        ctx.fillStyle = "rgba(59,130,246,0.15)"
        ctx.fillText(matrixChars[Math.floor(Math.random() * matrixChars.length)], i * colWidth, y - colWidth)
        drops[i] += 0.2
        if (drops[i] * colWidth > h && Math.random() > 0.972) drops[i] = 0
      }

      // Network nodes
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy; n.pulse += 0.025
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.strokeStyle = `rgba(59,130,246,${(1 - dist / 150) * 0.3})`
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      nodes.forEach((n) => {
        const p = 0.5 + 0.5 * Math.abs(Math.sin(n.pulse))
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * p, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59,130,246,${0.55 * p})`
        ctx.fill()
      })

      // Floating keywords
      ctx.font = "bold 11px monospace"
      words.forEach((wd) => {
        wd.y += wd.vy
        if (wd.y < -30) {
          wd.y = h + 10
          wd.x = Math.random() * w
          wd.text = keywords[Math.floor(Math.random() * keywords.length)]
        }
        ctx.globalAlpha = wd.opacity * (0.6 + 0.4 * Math.sin(frame * 0.018 + wd.x))
        ctx.fillStyle = wd.color
        ctx.fillText(wd.text, wd.x, wd.y)
      })
      ctx.globalAlpha = 1

      // Scan line
      const scanY = ((frame * 0.5) % (h + 80)) - 40
      const scanGrad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30)
      scanGrad.addColorStop(0, "transparent")
      scanGrad.addColorStop(0.5, "rgba(59,130,246,0.05)")
      scanGrad.addColorStop(1, "transparent")
      ctx.fillStyle = scanGrad
      ctx.fillRect(0, scanY - 30, w, 60)

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: "block" }} />
}

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
      if (i <= fullText.length) { setTypedText(fullText.slice(0, i)); i++ }
      else clearInterval(interval)
    }, 40)
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouse)
    return () => { clearInterval(interval); window.removeEventListener("mousemove", handleMouse) }
  }, [])

  return (
    <div className="min-h-screen bg-[#080c14] text-gray-100 overflow-x-hidden">

      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{ background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.06), transparent 70%)` }}
      />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080c14]">

        <AnimatedBackground />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14]/50 via-transparent to-[#080c14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/60 via-transparent to-[#080c14]/60" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 45% at 50% 50%, transparent 0%, rgba(8,12,20,0.6) 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Status badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Open to internship · July – August 2026
              </div>
            </div>

            {/* Profile photo */}
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 opacity-60 blur-sm" />
                <img src="/iheb.jpg" alt="Ihebeddine Saafi" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-800" />
              </div>
            </div>

            <div className="text-center space-y-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-blue-400/70 uppercase mb-3">Portfolio</p>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">IHEBEDDINE</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">SAAFI</span>
                </h1>
              </div>
              <div className="h-8 flex items-center justify-center">
                <p className="text-base md:text-lg text-gray-400 font-mono tracking-wide">
                  {typedText}<span className="animate-pulse text-blue-400">_</span>
                </p>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-gray-500 text-sm">
                <MapPin className="h-3.5 w-3.5" />
                <span>Tunis, Tunisia · TEK-UP University</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Link href="/about">
                  <Button className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-2.5 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20">
                    <User className="mr-2 h-4 w-4" />View profile
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="group border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-800/60 px-8 py-2.5 rounded-xl font-medium transition-all duration-200 backdrop-blur-sm">
                    <Mail className="mr-2 h-4 w-4" />Contact me
                  </Button>
                </Link>
                <Link href="/cv">
                  <Button variant="outline" className="group border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-800/60 px-8 py-2.5 rounded-xl font-medium transition-all duration-200 backdrop-blur-sm">
                    <FileText className="mr-2 h-4 w-4" />Resume
                    <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-50" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 z-10">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* ── STATS ── */}
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
                <p className="text-2xl md:text-3xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">{stat.value}</p>
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
            <p className="text-gray-500 mt-2 max-w-lg">Everything about my skills, experience, and work — organized and accessible.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {navigationCards.map((card) => {
              const Icon = card.icon
              return (
                <Link key={card.title} href={card.href}>
                  <div className="group relative rounded-2xl border border-gray-800 bg-gray-900/40 p-6 hover:border-gray-700 hover:bg-gray-900/80 transition-all duration-300 cursor-pointer overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background: `radial-gradient(400px circle at 50% 0%, ${card.accent}08, transparent 70%)` }} />
                    <div className="relative space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${card.accent}15`, border: `1px solid ${card.accent}25` }}>
                          <Icon className="h-5 w-5" style={{ color: card.accent }} />
                        </div>
                        <span className="text-xs text-gray-600 border border-gray-800 rounded-full px-2.5 py-1 group-hover:border-gray-700 transition-colors">{card.tag}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-100 group-hover:text-white transition-colors mb-1.5">{card.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{card.description}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium" style={{ color: card.accent }}>
                        <span>Explore</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: card.accent, opacity: 0.4 }} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative z-10 border-t border-gray-800/60">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-medium tracking-wide uppercase">
            Available · July – August 2026
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Looking for a DevOps intern?</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            2nd-year GLSI student seeking a 2-month internship in DevOps, Cloud, or Full-Stack. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/contact">
              <Button className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20">
                <Mail className="mr-2 h-4 w-4" />Get in touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Link href="/cv">
              <Button variant="outline" className="border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-800/60 px-8 py-3 rounded-xl font-medium transition-all duration-200">
                <FileText className="mr-2 h-4 w-4" />View resume
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
