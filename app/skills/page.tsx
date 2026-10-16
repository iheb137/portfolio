"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react"
import {
  ArrowRight,
  Award,
  Boxes,
  Brain,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Languages,
  LayoutGrid,
  Mail,
  Monitor,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react"

/* ─────────────────────────────────────────────────────────────
   Langue : clé partagée "portfolio-lang" (accueil, À propos…).
   ───────────────────────────────────────────────────────────── */
type Lang = "fr" | "en"
const LANG_KEY = "portfolio-lang"

function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>("fr")
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY)
      if (saved === "fr" || saved === "en") setLang(saved)
    } catch {}
  }, [])
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  const update = (l: Lang) => {
    setLang(l)
    try {
      localStorage.setItem(LANG_KEY, l)
    } catch {}
  }
  return [lang, update]
}

/* ─────────────────────────────────────────────────────────────
   Preuves : chaque compétence renvoie vers un dépôt ou un stage.
   ───────────────────────────────────────────────────────────── */
type Proof = { label: { fr: string; en: string }; href: string; internal?: boolean }
const GH = "https://github.com/iheb137"
const P: Record<string, Proof> = {
  fraud: { label: { fr: "Détection de fraude", en: "Fraud detection" }, href: `${GH}/fraud-detection-platform` },
  meca: { label: { fr: "MecaManage", en: "MecaManage" }, href: `${GH}/MECAMANAGE` },
  hotel: { label: { fr: "IH-AR DevOps", en: "IH-AR DevOps" }, href: `${GH}/hotel-management` },
  career: { label: { fr: "Smart Career Hub", en: "Smart Career Hub" }, href: `${GH}/Smart-career-hub` },
  ihar: { label: { fr: "iHar", en: "iHar" }, href: `${GH}/iHar---Luxury-Car-Rental` },
  chatbot: { label: { fr: "Chatbot RAG", en: "RAG chatbot" }, href: `${GH}/chatbot-ai` },
  portfolio: { label: { fr: "Ce portfolio", en: "This portfolio" }, href: `${GH}/portfolio` },
  clinic: { label: { fr: "Clinique JavaFX", en: "JavaFX clinic" }, href: `${GH}/Gestion-de-clinique-` },
  biat: { label: { fr: "Stage BIAT", en: "BIAT internship" }, href: "/certifications", internal: true },
  tt: { label: { fr: "Stage Tunisie Telecom", en: "Tunisie Telecom internship" }, href: "/certifications", internal: true },
}

type CatId = "devops" | "cloud" | "backend" | "frontend" | "data" | "ai" | "quality"
type Skill = { name: string; cat: CatId; proofs: string[]; note?: { fr: string; en: string } }

const CATS: { id: CatId; icon: LucideIcon; label: { fr: string; en: string } }[] = [
  { id: "devops", icon: Workflow, label: { fr: "DevOps et CI/CD", en: "DevOps and CI/CD" } },
  { id: "cloud", icon: Boxes, label: { fr: "Conteneurs et infra", en: "Containers and infra" } },
  { id: "backend", icon: Server, label: { fr: "Backend", en: "Backend" } },
  { id: "frontend", icon: Monitor, label: { fr: "Frontend", en: "Frontend" } },
  { id: "data", icon: Database, label: { fr: "Données", en: "Data" } },
  { id: "ai", icon: Brain, label: { fr: "IA et ML", en: "AI and ML" } },
  { id: "quality", icon: ShieldCheck, label: { fr: "Tests et qualité", en: "Testing and quality" } },
]

const SKILLS: Skill[] = [
  { name: "Docker", cat: "devops", proofs: ["fraud", "hotel", "ihar", "biat"], note: { fr: "Images multi-étapes, non-root, publiées sur Docker Hub", en: "Multi-stage, non-root images published to Docker Hub" } },
  { name: "GitHub Actions", cat: "devops", proofs: ["fraud", "portfolio"], note: { fr: "Tests, rapports, build et publication d'images à chaque push", en: "Tests, reports, image build and publishing on every push" } },
  { name: "GitLab CI", cat: "devops", proofs: ["hotel"], note: { fr: "Pipeline en 4 étapes : validate, test, analyze, build", en: "Four-stage pipeline: validate, test, analyze, build" } },
  { name: "Jenkins", cat: "devops", proofs: ["ihar", "biat"], note: { fr: "Build, push et mise à jour du déploiement Kubernetes", en: "Build, push and Kubernetes rollout" } },
  { name: "SonarCloud", cat: "devops", proofs: ["fraud", "hotel"], note: { fr: "Analyse continue et couverture de code", en: "Continuous analysis and code coverage" } },
  { name: "Bash", cat: "devops", proofs: ["biat"], note: { fr: "Automatisation de tâches d'exploitation", en: "Operations task automation" } },
  { name: "Kubernetes", cat: "cloud", proofs: ["fraud", "ihar", "biat"], note: { fr: "StatefulSets, PVC, probes, HPA, Secrets", en: "StatefulSets, PVCs, probes, HPA, Secrets" } },
  { name: "Kafka", cat: "cloud", proofs: ["fraud"], note: { fr: "Ingestion temps réel, consumer idempotent", en: "Real-time ingestion, idempotent consumer" } },
  { name: "nginx", cat: "cloud", proofs: ["fraud", "hotel"], note: { fr: "Reverse proxy et service des frontends", en: "Reverse proxy and frontend serving" } },
  { name: "Linux", cat: "cloud", proofs: ["biat"], note: { fr: "Environnement des serveurs et des conteneurs, SSH", en: "Server and container environment, SSH" } },
  { name: "Vercel", cat: "cloud", proofs: ["portfolio", "fraud"], note: { fr: "Déploiement continu des frontends", en: "Continuous frontend deployment" } },
  { name: "Java · Spring Boot", cat: "backend", proofs: ["fraud", "career"], note: { fr: "API REST, sécurité JWT, consumer Kafka", en: "REST APIs, JWT security, Kafka consumer" } },
  { name: "C# · .NET", cat: "backend", proofs: ["meca"], note: { fr: "Clean Architecture, EF Core, refresh tokens", en: "Clean Architecture, EF Core, refresh tokens" } },
  { name: "Python · FastAPI", cat: "backend", proofs: ["fraud", "career"], note: { fr: "Services de scoring ML et d'IA", en: "ML scoring and AI services" } },
  { name: "PHP", cat: "backend", proofs: ["ihar"], note: { fr: "Application web conteneurisée sous Apache", en: "Containerized web application on Apache" } },
  { name: "REST · OpenAPI · JWT · RBAC", cat: "backend", proofs: ["fraud", "meca", "career"] },
  { name: "Angular", cat: "frontend", proofs: ["fraud", "career"], note: { fr: "Tableaux de bord par rôle", en: "Role-based dashboards" } },
  { name: "React · Next.js", cat: "frontend", proofs: ["portfolio", "chatbot"] },
  { name: "TypeScript", cat: "frontend", proofs: ["fraud", "portfolio", "chatbot"] },
  { name: "PostgreSQL", cat: "data", proofs: ["fraud", "career"] },
  { name: "MySQL · MariaDB", cat: "data", proofs: ["hotel", "ihar", "clinic"] },
  { name: "MongoDB", cat: "data", proofs: ["career"] },
  { name: "scikit-learn", cat: "ai", proofs: ["fraud"], note: { fr: "Random Forest, 22 variables", en: "Random Forest, 22 features" } },
  { name: "MLOps", cat: "ai", proofs: ["fraud"], note: { fr: "Réentraînement, comparaison, promotion manuelle", en: "Retraining, comparison, manual promotion" } },
  { name: "LLM", cat: "ai", proofs: ["career", "chatbot"], note: { fr: "LLaMA 3, Ollama, API OpenAI", en: "LLaMA 3, Ollama, OpenAI API" } },
  { name: "RAG", cat: "ai", proofs: ["chatbot"] },
  { name: "JUnit 5 · Mockito", cat: "quality", proofs: ["fraud"], note: { fr: "19 tests exécutés en CI", en: "19 tests run in CI" } },
  { name: "xUnit · Moq", cat: "quality", proofs: ["meca"] },
  { name: "pytest", cat: "quality", proofs: ["fraud"] },
  { name: "PHPUnit · PHPStan", cat: "quality", proofs: ["hotel"] },
  { name: "Vitest · Playwright", cat: "quality", proofs: ["portfolio"] },
]

const ORBIT = [
  ["Docker", "Kubernetes", "Kafka", "Jenkins"],
  ["Spring Boot", "Angular", "FastAPI", ".NET", "Next.js"],
  ["GitHub Actions", "GitLab CI", "PostgreSQL", "scikit-learn", "SonarCloud", "pytest"],
]

const T = {
  fr: {
    kicker: "Compétences",
    title: "Ce que je sais faire, et où je l'ai fait",
    intro: "Uniquement des outils utilisés dans un projet ou un stage. Chaque carte renvoie vers le code ou l'expérience qui le prouve.",
    all: "Tout",
    count: (n: number) => `${n} compétence${n > 1 ? "s" : ""}`,
    usedIn: "Utilisé dans",
    filterLabel: "Filtrer par domaine",
    toolsTitle: "Méthodes et outils",
    tools: [
      { name: "Git, GitHub, GitLab", text: "Branches de fonctionnalité, pull requests relues, historique propre.", proof: "MecaManage, tous mes dépôts" },
      { name: "Agile / Scrum", text: "Développement en sprints de deux semaines, livraison incrémentale.", proof: "MecaManage" },
      { name: "Jira", text: "Suivi des tâches pendant le stage DevOps.", proof: "Stage BIAT" },
      { name: "Cahier des charges", text: "Spécification technique rédigée avant le développement.", proof: "Stage Tunisie Telecom" },
    ],
    langsTitle: "Langages de programmation",
    certTitle: "Certification",
    cert: "Certified Kubernetes Administrator (CKA)",
    certStatus: "En préparation, non obtenue à ce jour",
    spokenTitle: "Langues",
    spoken: [
      ["Arabe", "Langue maternelle"],
      ["Français", "Bilingue"],
      ["Anglais", "Courant"],
    ],
    ctaTitle: "Envie de voir ces compétences en action ?",
    ctaText: "Les projets détaillent l'architecture, les tests et les pipelines de chacun.",
    projects: "Voir mes projets",
    contact: "Me contacter",
    langLabel: "English",
  },
  en: {
    kicker: "Skills",
    title: "What I can do, and where I did it",
    intro: "Only tools used in a project or an internship. Each card links to the code or experience that proves it.",
    all: "All",
    count: (n: number) => `${n} skill${n > 1 ? "s" : ""}`,
    usedIn: "Used in",
    filterLabel: "Filter by area",
    toolsTitle: "Methods and tools",
    tools: [
      { name: "Git, GitHub, GitLab", text: "Feature branches, reviewed pull requests, clean history.", proof: "MecaManage, all my repositories" },
      { name: "Agile / Scrum", text: "Two-week sprints, incremental delivery.", proof: "MecaManage" },
      { name: "Jira", text: "Task tracking during the DevOps internship.", proof: "BIAT internship" },
      { name: "Technical specification", text: "Specification written before development.", proof: "Tunisie Telecom internship" },
    ],
    langsTitle: "Programming languages",
    certTitle: "Certification",
    cert: "Certified Kubernetes Administrator (CKA)",
    certStatus: "In preparation, not yet obtained",
    spokenTitle: "Languages",
    spoken: [
      ["Arabic", "Native"],
      ["French", "Bilingual"],
      ["English", "Fluent"],
    ],
    ctaTitle: "Want to see these skills in action?",
    ctaText: "The projects detail the architecture, tests and pipelines of each one.",
    projects: "See my projects",
    contact: "Contact me",
    langLabel: "Français",
  },
} as const

const PROG = ["Java", "Python", "TypeScript", "JavaScript", "C#", "PHP", "Bash", "SQL"]

/* ─────────────────────────────────────────────────────────────
   Fond animé : réseau de nœuds traversé par des impulsions.
   ───────────────────────────────────────────────────────────── */
function NetworkBackground() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    type N = { x: number; y: number; vx: number; vy: number; glow: number }
    type P = { a: number; b: number; t: number; speed: number; color: string }
    let nodes: N[] = []
    let pulses: P[] = []
    let w = 0
    let h = 0
    let raf = 0
    let last = performance.now()
    let spawn = 0
    const mouse = { x: -9999, y: -9999 }
    const LINK = 150

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(70, Math.max(28, (w * h) / 26000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        glow: 0,
      }))
      pulses = []
    }

    const neighbours = (i: number) => {
      const out: number[] = []
      for (let j = 0; j < nodes.length; j++) {
        if (j === i) continue
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        if (dx * dx + dy * dy < LINK * LINK) out.push(j)
      }
      return out
    }

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, w, h)

      // Liens
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(129,140,248,${(1 - d / LINK) * 0.16})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Impulsions qui voyagent de nœud en nœud
      for (const p of pulses) {
        const a = nodes[p.a]
        const b = nodes[p.b]
        const x = a.x + (b.x - a.x) * p.t
        const y = a.y + (b.y - a.y) * p.t
        const g = ctx.createRadialGradient(x, y, 0, x, y, 10)
        g.addColorStop(0, p.color)
        g.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, 10, 0, Math.PI * 2)
        ctx.fill()
      }

      // Nœuds
      for (const n of nodes) {
        n.glow = Math.max(0, n.glow - dt * 1.2)
        const dx = n.x - mouse.x
        const dy = n.y - mouse.y
        const near = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 180)
        const light = Math.max(n.glow, near)
        ctx.fillStyle = `rgba(45,212,191,${0.35 + light * 0.65})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6 + light * 2.2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      }
      spawn -= dt
      if (spawn <= 0 && pulses.length < 14) {
        const a = Math.floor(Math.random() * nodes.length)
        const nb = neighbours(a)
        if (nb.length) {
          const r = Math.random()
          pulses.push({
            a,
            b: nb[Math.floor(Math.random() * nb.length)],
            t: 0,
            speed: 0.6 + Math.random() * 0.6,
            color: r < 0.7 ? "rgba(45,212,191,0.95)" : r < 0.92 ? "rgba(129,140,248,0.95)" : "rgba(251,191,36,0.95)",
          })
          nodes[a].glow = 1
        }
        spawn = 0.25 + Math.random() * 0.3
      }
      const next: P[] = []
      for (const p of pulses) {
        p.t += dt * p.speed
        if (p.t < 1) {
          next.push(p)
          continue
        }
        nodes[p.b].glow = 1
        const nb = neighbours(p.b).filter((j) => j !== p.a)
        if (nb.length && Math.random() < 0.75) next.push({ ...p, a: p.b, b: nb[Math.floor(Math.random() * nb.length)], t: 0 })
      }
      pulses = next
      draw(dt)
      raf = requestAnimationFrame(step)
    }

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden && !reduced) {
        last = performance.now()
        raf = requestAnimationFrame(step)
      }
    }

    resize()
    if (reduced) draw(0)
    else raf = requestAnimationFrame(step)
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
}


/* ─────────────────────────────────────────────────────────────
   Effets
   ───────────────────────────────────────────────────────────── */
function useReveal(dep: unknown) {
  useEffect(() => {
    document.getElementById("skills-root")?.classList.add("sk-js")
    const items = Array.from(document.querySelectorAll<HTMLElement>("#skills-root [data-reveal]:not([data-visible])"))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}

function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>(".sk-spot")
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty("--mx", `${e.clientX - r.left}px`)
      card.style.setProperty("--my", `${e.clientY - r.top}px`)
    }
    document.addEventListener("pointermove", onMove, { passive: true })
    return () => document.removeEventListener("pointermove", onMove)
  }, [])
}

/** Orbites : trois anneaux de technologies qui tournent autour d'un noyau. */
function Orbit() {
  const sizes = [46, 72, 96] // % du conteneur
  const durations = [28, 40, 54]
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[460px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.14),transparent_60%)]" />
      <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-teal-300/40 bg-[#0c1324] shadow-[0_0_60px_-10px_rgba(45,212,191,0.6)]">
        <Code2 className="h-9 w-9 text-teal-300" />
        <span className="sk-ping absolute inset-0 rounded-full border border-teal-300/50" />
      </div>
      {ORBIT.map((ring, ri) => {
        const size = sizes[ri]
        const dur = durations[ri]
        return (
          <div
            key={ri}
            className={`sk-ring absolute left-1/2 top-1/2 rounded-full border border-slate-500/20 ${ri === 2 ? "hidden sm:block" : ""}`}
            style={{ width: `${size}%`, height: `${size}%`, animationDuration: `${dur}s`, animationDirection: ri % 2 ? "reverse" : "normal" } as CSSProperties}
          >
            {ring.map((name, i) => {
              const a = ((360 / ring.length) * i + [0, 36, 15][ri]) * (Math.PI / 180)
              const left = 50 + 50 * Math.sin(a)
              const top = 50 - 50 * Math.cos(a)
              return (
                <span key={name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${left}%`, top: `${top}%` }}>
                  <span
                    className="sk-ring-label block whitespace-nowrap rounded-full border border-slate-500/25 bg-[#0c1324]/90 px-3 py-1 font-mono text-[11px] text-slate-200 shadow-[0_0_20px_-8px_rgba(45,212,191,0.6)]"
                    style={{ animationDuration: `${dur}s`, animationDirection: ri % 2 ? "reverse" : "normal" }}
                  >
                    {name}
                  </span>
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function SkillsPage() {
  const [lang, setLang] = useLang()
  const [cat, setCat] = useState<CatId | "all">("all")
  const t = T[lang]
  useReveal(lang)
  useSpotlight()

  const list = useMemo(() => (cat === "all" ? SKILLS : SKILLS.filter((s) => s.cat === cat)), [cat])
  const catOf = (id: CatId) => CATS.find((c) => c.id === id)!

  return (
    <div id="skills-root" className="relative min-h-screen overflow-x-clip bg-[#070c18] text-slate-200">
      <NetworkBackground />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="sk-drift absolute -left-[15%] -top-[20%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.12),transparent_60%)] blur-2xl" />
        <div className="sk-drift-2 absolute -right-[20%] top-[25%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.15),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* ── EN-TÊTE ───────────────────────────────────────── */}
        <section aria-labelledby="skills-title" className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:pt-20">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              lang={lang === "fr" ? "en" : "fr"}
              className="rounded-full border border-slate-500/30 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur transition-colors hover:border-teal-300 hover:text-teal-300"
            >
              {t.langLabel}
            </button>
          </div>
          <div className="mt-4 grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <p className="sk-in text-sm font-medium text-teal-300" style={delay(0)}>
                {t.kicker}
              </p>
              <h1 id="skills-title" className="sk-in mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl" style={delay(100)}>
                <span className="sk-sheen">{t.title}</span>
              </h1>
              <p className="sk-in mt-6 max-w-xl text-lg leading-relaxed text-slate-400" style={delay(200)}>
                {t.intro}
              </p>
              <dl className="sk-in mt-8 flex flex-wrap gap-3" style={delay(300)}>
                {[
                  [SKILLS.length, lang === "fr" ? "compétences" : "skills"],
                  [Object.keys(P).length - 2, lang === "fr" ? "projets" : "projects"],
                  [2, lang === "fr" ? "stages" : "internships"],
                ].map(([v, l]) => (
                  <div key={String(l)} className="flex flex-col-reverse rounded-2xl border border-slate-500/20 bg-[#0c1324]/70 px-5 py-3 backdrop-blur">
                    <dt className="text-xs text-slate-400">{l}</dt>
                    <dd className="bg-gradient-to-br from-teal-300 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="sk-in" style={delay(250)}>
              <Orbit />
            </div>
          </div>
        </section>

        {/* ── FILTRES + GRILLE ──────────────────────────────── */}
        <section aria-label={t.kicker} className="mx-auto max-w-6xl px-5 pb-20">
          <div data-reveal className="sticky top-20 z-20 -mx-5 border-y border-slate-500/10 bg-[#070c18]/85 px-5 py-3 backdrop-blur-lg">
            <div role="group" aria-label={t.filterLabel} className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:flex-wrap lg:overflow-visible">
              {[{ id: "all" as const, icon: LayoutGrid, label: { fr: t.all, en: t.all } }, ...CATS].map((c) => {
                const active = cat === c.id
                const Icon = c.icon
                const n = c.id === "all" ? SKILLS.length : SKILLS.filter((s) => s.cat === c.id).length
                return (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCat(c.id)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
                      active
                        ? "border-teal-300 bg-teal-300 text-[#070c18] shadow-[0_8px_24px_-10px_rgba(45,212,191,0.8)]"
                        : "border-slate-500/25 bg-white/[0.03] text-slate-300 hover:border-teal-300/60 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {c.label[lang]}
                    <span className={`rounded-full px-1.5 text-xs ${active ? "bg-[#070c18]/15" : "bg-white/10"}`}>{n}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-400" aria-live="polite">
            {t.count(list.length)}
          </p>

          <ul key={cat} className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => {
              const c = catOf(s.cat)
              const Icon = c.icon
              return (
                <li
                  key={s.name}
                  className="sk-pop sk-spot group relative flex flex-col rounded-2xl border border-slate-500/20 bg-[#0c1324]/75 p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${Math.min(i, 12) * 45}ms` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-teal-300/25 bg-teal-300/10 text-teal-300 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{c.label[lang]}</p>
                  {s.note && <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.note[lang]}</p>}
                  <div className="mt-auto pt-4">
                    <p className="mb-2 text-xs text-slate-400">{t.usedIn}</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {s.proofs.map((id) => {
                        const p = P[id]
                        const cls =
                          "inline-flex items-center gap-1 rounded-md border border-slate-500/25 bg-[#070c18]/70 px-2 py-0.5 text-xs text-slate-300 transition-colors hover:border-teal-300/70 hover:text-teal-300"
                        return (
                          <li key={id}>
                            {p.internal ? (
                              <Link href={p.href} className={cls}>
                                {p.label[lang]}
                              </Link>
                            ) : (
                              <a href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>
                                {p.label[lang]}
                                <ExternalLink className="h-3 w-3" aria-hidden="true" />
                              </a>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

        {/* ── MÉTHODES ──────────────────────────────────────── */}
        <section aria-labelledby="tools-title" className="relative border-y border-slate-500/10 bg-[#0c1324]/70 py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-5">
            <div data-reveal className="mb-10">
              <h2 id="tools-title" className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {t.toolsTitle}
              </h2>
              <span aria-hidden="true" className="sk-bar mt-4 block h-[3px] w-16 rounded-full bg-gradient-to-r from-teal-300 via-indigo-400 to-transparent" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.tools.map((tool, i) => (
                <div key={tool.name} data-reveal style={delay(i * 100)} className="sk-spot relative rounded-2xl border border-slate-500/20 bg-[#070c18]/70 p-5">
                  <p className="font-semibold text-white">{tool.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{tool.text}</p>
                  <p className="mt-4 flex items-center gap-2 border-t border-slate-500/15 pt-3 text-xs text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal-300" aria-hidden="true" />
                    {tool.proof}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LANGAGES, CERTIFICATION, LANGUES ──────────────── */}
        <section className="mx-auto grid max-w-6xl gap-5 px-5 py-20 md:grid-cols-3">
          <div data-reveal className="sk-spot relative rounded-2xl border border-slate-500/20 bg-[#0c1324]/75 p-6 backdrop-blur-sm">
            <h2 className="flex items-center gap-3 text-lg font-semibold text-white">
              <Code2 className="h-5 w-5 text-teal-300" aria-hidden="true" />
              {t.langsTitle}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {PROG.map((l) => (
                <li key={l} className="rounded-lg border border-slate-500/25 bg-white/[0.03] px-3 py-1.5 font-mono text-sm text-slate-200 transition-colors hover:border-teal-300/60 hover:text-teal-300">
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={delay(100)} className="sk-spot relative rounded-2xl border border-slate-500/20 bg-[#0c1324]/75 p-6 backdrop-blur-sm">
            <h2 className="flex items-center gap-3 text-lg font-semibold text-white">
              <Award className="h-5 w-5 text-amber-300" aria-hidden="true" />
              {t.certTitle}
            </h2>
            <p className="mt-5 font-medium text-white">{t.cert}</p>
            <p className="text-sm text-slate-400">Linux Foundation / CNCF</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs text-amber-300">
              <span aria-hidden="true" className="sk-blink h-1.5 w-1.5 rounded-full bg-amber-300" />
              {t.certStatus}
            </p>
          </div>
          <div data-reveal style={delay(200)} className="sk-spot relative rounded-2xl border border-slate-500/20 bg-[#0c1324]/75 p-6 backdrop-blur-sm">
            <h2 className="flex items-center gap-3 text-lg font-semibold text-white">
              <Languages className="h-5 w-5 text-indigo-400" aria-hidden="true" />
              {t.spokenTitle}
            </h2>
            <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
              {t.spoken.map(([name, level]) => (
                <div key={name} className="contents">
                  <dt className="font-medium text-white">{name}</dt>
                  <dd className="text-slate-400">{level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── APPEL À L'ACTION ──────────────────────────────── */}
        <section aria-labelledby="sk-cta" className="mx-auto max-w-6xl px-5 pb-24">
          <div data-reveal className="sk-conic relative overflow-hidden rounded-3xl p-px">
            <div className="relative rounded-3xl bg-[#0c1324] px-7 py-12 text-center md:px-16 md:py-14">
              <h2 id="sk-cta" className="text-3xl font-bold text-white md:text-4xl">
                {t.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-400">{t.ctaText}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-teal-300 px-6 py-3 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
                >
                  {t.projects}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes sk-in { from { opacity: 0; transform: translate3d(0, 24px, 0) } to { opacity: 1; transform: none } }
        @keyframes sk-pop { from { opacity: 0; transform: translate3d(0, 18px, 0) scale(.97) } to { opacity: 1; transform: none } }
        @keyframes sk-drift { 0%,100% { transform: translate3d(0,0,0) scale(1) } 33% { transform: translate3d(6%,-4%,0) scale(1.08) } 66% { transform: translate3d(-5%,5%,0) scale(.95) } }
        @keyframes sk-spin { to { transform: translate(-50%,-50%) rotate(360deg) } }
        @keyframes sk-unspin { to { transform: rotate(-360deg) } }
        @keyframes sk-rot { to { transform: rotate(360deg) } }
        @keyframes sk-ping { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(1.9); opacity: 0 } }
        @keyframes sk-sheen { from { background-position: 100% 0 } to { background-position: 0% 0 } }
        @keyframes sk-blink { 0%,100% { opacity: 1 } 50% { opacity: .25 } }

        .sk-in { animation: sk-in .9s cubic-bezier(.2,.7,.2,1) both; animation-delay: var(--d, 0ms) }
        .sk-pop { animation: sk-pop .55s cubic-bezier(.2,.7,.2,1) both }
        .sk-drift { animation: sk-drift 24s ease-in-out infinite }
        .sk-drift-2 { animation: sk-drift 32s ease-in-out infinite reverse }
        .sk-ring { transform: translate(-50%,-50%); animation: sk-spin linear infinite }
        .sk-ring-label { animation: sk-unspin linear infinite }
        .sk-ping { animation: sk-ping 2.4s cubic-bezier(0,0,.2,1) infinite }
        .sk-blink { animation: sk-blink 1.6s ease-in-out infinite }
        .sk-sheen {
          background: linear-gradient(100deg, #fff 20%, #2dd4bf 45%, #818cf8 65%, #fff 90%);
          background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: sk-sheen 2.4s ease-out .4s both;
        }

        .sk-js [data-reveal] { opacity: 0; transform: translate3d(0, 28px, 0); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); transition-delay: var(--d, 0ms) }
        .sk-js [data-reveal][data-visible] { opacity: 1; transform: none }
        .sk-bar { transform: scaleX(0); transform-origin: left; transition: transform .9s cubic-bezier(.2,.7,.2,1) .2s }
        [data-visible] .sk-bar, #skills-root:not(.sk-js) .sk-bar { transform: scaleX(1) }

        .sk-spot { isolation: isolate }
        .sk-spot::before {
          content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px; pointer-events: none;
          background: radial-gradient(340px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.8), rgba(129,140,248,.35) 40%, transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .35s;
        }
        .sk-spot::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;
          background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.08), transparent 60%);
          opacity: 0; transition: opacity .35s;
        }
        .sk-spot:hover::before, .sk-spot:hover::after, .sk-spot:focus-within::before { opacity: 1 }

        .sk-conic::before {
          content: ""; position: absolute; inset: -150%;
          background: conic-gradient(from 0deg, transparent 0 70%, #2dd4bf 80%, #818cf8 90%, transparent 100%);
          animation: sk-rot 7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .sk-in, .sk-pop, .sk-drift, .sk-drift-2, .sk-ring, .sk-ring-label, .sk-ping, .sk-sheen, .sk-blink, .sk-conic::before { animation: none !important }
          .sk-ring { transform: translate(-50%,-50%) }
          .sk-sheen { background-position: 0 0 }
          .sk-js [data-reveal] { opacity: 1; transform: none; transition: none }
          .sk-bar { transform: scaleX(1) }
        }
      `}</style>
    </div>
  )
}
