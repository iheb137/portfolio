"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  CheckCircle2,
  Download,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react"

/* ─────────────────────────────────────────────────────────────
   Langue : FR par défaut, EN au clic. Le choix est mémorisé
   (clé partagée "portfolio-lang", réutilisée par les autres pages).
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
   Contenu : uniquement des faits vérifiables (dépôts GitHub, stages).
   ───────────────────────────────────────────────────────────── */
const T = {
  fr: {
    kicker: "À propos",
    title: "Élève ingénieur en génie logiciel",
    subtitle: "DevOps, cloud et développement full-stack",
    badge: "Recherche un PFE de 6 mois · janvier ou février 2027",
    lead:
      "Je conçois des applications de bout en bout et je les livre avec ce qui les rend exploitables : tests automatisés, images Docker, pipelines CI/CD et manifestes Kubernetes.",
    cv: "Télécharger mon CV",
    contact: "Me contacter",
    facts: [
      { icon: MapPin, text: "Tunis, Tunisie" },
      { icon: GraduationCap, text: "TEK-UP Université · GLSI, 5e année" },
      { icon: Briefcase, text: "PFE en France ou en Tunisie" },
      { icon: Mail, text: "saafiiheb.si@gmail.com" },
    ],
    stats: [
      { value: 2, suffix: "", label: "stages en entreprise (Tunisie Telecom, BIAT)" },
      { value: 6, suffix: "", label: "projets publiés avec leur code source" },
      { value: 19, suffix: "", label: "tests unitaires en CI sur mon dernier projet" },
      { value: 6, suffix: " mois", label: "de PFE, à partir de janvier ou février 2027" },
    ],
    storyTitle: "Mon parcours",
    story: [
      "Après deux ans de classes préparatoires en mathématiques-physique, j'ai rejoint le cycle ingénieur en génie logiciel (GLSI) de TEK-UP Université. J'ai commencé par le développement full-stack, puis je me suis passionné pour ce qui se passe après le code : l'intégration continue, les conteneurs et l'orchestration.",
      "Chez BIAT Innovation & Technology, j'ai mis en place un pipeline CI/CD Jenkins et conteneurisé des applications métier avec Docker et Kubernetes. À la DSI de Tunisie Telecom, j'ai conçu et réalisé seul une plateforme de détection d'appels frauduleux : Spring Boot, Angular, FastAPI, ingestion temps réel via Kafka, un modèle de machine learning réentraîné avec validation humaine, et un déploiement Kubernetes.",
      "Je cherche maintenant un PFE de six mois où je pourrai contribuer à une vraie chaîne de livraison, côté DevOps, cloud, backend ou full-stack.",
    ],
    timelineTitle: "Les étapes",
    timeline: [
      { when: "2020 – 2024", what: "Classes préparatoires Mathématiques-Physique", where: "IPEI El Manar", icon: GraduationCap },
      { when: "Depuis 2024", what: "Cycle ingénieur, Génie Logiciel et Systèmes d'Information", where: "TEK-UP Université", icon: GraduationCap },
      { when: "2025", what: "Vice-président, puis conseiller depuis 2026", where: "IEEE TEK-UP Student Branch", icon: Users },
      { when: "Août – sept. 2025", what: "Stage DevOps : pipeline Jenkins, Docker, Kubernetes", where: "BIAT Innovation & Technology", icon: Briefcase },
      { when: "Juil. – août 2026", what: "Stage ingénieur : plateforme de détection de fraude", where: "Tunisie Telecom, DSI", icon: Briefcase },
      { when: "2027", what: "Projet de fin d'études de 6 mois", where: "Votre équipe ?", icon: Rocket, next: true },
    ],
    bringTitle: "Ce que j'apporte à une équipe",
    bringIntro: "Chaque point s'appuie sur un projet ou un stage que vous pouvez vérifier.",
    bring: [
      { icon: Workflow, title: "Automatiser la livraison", text: "Pipelines GitHub Actions, GitLab CI et Jenkins : tests, analyse SonarCloud, construction et publication d'images Docker.", proof: "Détection de fraude, IH-AR, iHar" },
      { icon: Layers, title: "Déployer et exploiter", text: "Manifestes Kubernetes avec StatefulSets, volumes persistants, probes, autoscaling et conteneurs non-root.", proof: "Tunisie Telecom, BIAT" },
      { icon: ShieldCheck, title: "Livrer du code testé", text: "JUnit 5 et Mockito, pytest, xUnit, PHPUnit, exécutés automatiquement à chaque push.", proof: "Détection de fraude, MecaManage" },
      { icon: Target, title: "Structurer le backend", text: "Spring Boot, .NET en Clean Architecture, FastAPI ; JWT, contrôle d'accès par rôle, OpenAPI.", proof: "MecaManage, Smart Career Hub" },
      { icon: Brain, title: "Intégrer l'IA au logiciel", text: "Modèle Random Forest avec réentraînement et promotion manuelle ; intégration de LLM et de RAG.", proof: "Détection de fraude, Smart Career Hub" },
      { icon: Users, title: "Travailler en équipe", text: "Développement en sprints, branches et pull requests relues ; coordination d'événements à l'IEEE.", proof: "MecaManage, IEEE TEK-UP" },
    ],
    goalsTitle: "Objectifs",
    goals: [
      { term: "Court terme", items: ["Réussir un PFE de six mois sur un sujet DevOps, cloud ou backend", "Obtenir la certification Certified Kubernetes Administrator (en préparation)", "Approfondir l'observabilité et la sécurité des pipelines"] },
      { term: "Moyen terme", items: ["Devenir ingénieur DevOps / cloud", "Concevoir des plateformes fiables, automatisées de bout en bout", "Transmettre, comme je le fais aujourd'hui à l'IEEE"] },
    ],
    stackTitle: "Technologies utilisées dans mes projets",
    ctaTitle: "Un PFE à pourvoir en 2027 ?",
    ctaText: "Offre de stage, candidature spontanée ou entretien technique : je réponds en français ou en anglais.",
    projects: "Voir mes projets",
    langLabel: "English",
  },
  en: {
    kicker: "About",
    title: "Software engineering student",
    subtitle: "DevOps, cloud and full-stack development",
    badge: "Seeking a 6-month internship · January or February 2027",
    lead:
      "I build applications end to end and ship them with what makes them operable: automated tests, Docker images, CI/CD pipelines and Kubernetes manifests.",
    cv: "Download my CV",
    contact: "Contact me",
    facts: [
      { icon: MapPin, text: "Tunis, Tunisia" },
      { icon: GraduationCap, text: "TEK-UP University · GLSI, final year" },
      { icon: Briefcase, text: "Internship in France or Tunisia" },
      { icon: Mail, text: "saafiiheb.si@gmail.com" },
    ],
    stats: [
      { value: 2, suffix: "", label: "company internships (Tunisie Telecom, BIAT)" },
      { value: 6, suffix: "", label: "projects published with their source code" },
      { value: 19, suffix: "", label: "unit tests in CI on my latest project" },
      { value: 6, suffix: " months", label: "internship, from January or February 2027" },
    ],
    storyTitle: "My journey",
    story: [
      "After two years of preparatory classes in mathematics and physics, I joined the software engineering programme (GLSI) at TEK-UP University. I started with full-stack development, then became passionate about what happens after the code: continuous integration, containers and orchestration.",
      "At BIAT Innovation & Technology, I set up a Jenkins CI/CD pipeline and containerized business applications with Docker and Kubernetes. At Tunisie Telecom's IT department, I designed and built a fraudulent call detection platform on my own: Spring Boot, Angular, FastAPI, real-time ingestion through Kafka, a machine learning model retrained with human validation, and a Kubernetes deployment.",
      "I am now looking for a six-month final-year internship where I can contribute to a real delivery chain, in DevOps, cloud, backend or full-stack.",
    ],
    timelineTitle: "Milestones",
    timeline: [
      { when: "2020 – 2024", what: "Preparatory classes, Mathematics-Physics", where: "IPEI El Manar", icon: GraduationCap },
      { when: "Since 2024", what: "Engineering degree, Software Engineering and Information Systems", where: "TEK-UP University", icon: GraduationCap },
      { when: "2025", what: "Vice-chair, then advisor since 2026", where: "IEEE TEK-UP Student Branch", icon: Users },
      { when: "Aug – Sep 2025", what: "DevOps internship: Jenkins pipeline, Docker, Kubernetes", where: "BIAT Innovation & Technology", icon: Briefcase },
      { when: "Jul – Aug 2026", what: "Engineering internship: fraud detection platform", where: "Tunisie Telecom, IT department", icon: Briefcase },
      { when: "2027", what: "Six-month final-year internship", where: "Your team?", icon: Rocket, next: true },
    ],
    bringTitle: "What I bring to a team",
    bringIntro: "Each point is backed by a project or internship you can check.",
    bring: [
      { icon: Workflow, title: "Automate delivery", text: "GitHub Actions, GitLab CI and Jenkins pipelines: tests, SonarCloud analysis, Docker image build and publishing.", proof: "Fraud detection, IH-AR, iHar" },
      { icon: Layers, title: "Deploy and operate", text: "Kubernetes manifests with StatefulSets, persistent volumes, probes, autoscaling and non-root containers.", proof: "Tunisie Telecom, BIAT" },
      { icon: ShieldCheck, title: "Ship tested code", text: "JUnit 5 and Mockito, pytest, xUnit, PHPUnit, run automatically on every push.", proof: "Fraud detection, MecaManage" },
      { icon: Target, title: "Structure the backend", text: "Spring Boot, Clean Architecture .NET, FastAPI; JWT, role-based access control, OpenAPI.", proof: "MecaManage, Smart Career Hub" },
      { icon: Brain, title: "Bring AI into software", text: "Random Forest model with retraining and manual promotion; LLM and RAG integration.", proof: "Fraud detection, Smart Career Hub" },
      { icon: Users, title: "Work as a team", text: "Sprint-based development, branches and reviewed pull requests; event coordination at IEEE.", proof: "MecaManage, IEEE TEK-UP" },
    ],
    goalsTitle: "Goals",
    goals: [
      { term: "Short term", items: ["Complete a six-month internship on a DevOps, cloud or backend topic", "Earn the Certified Kubernetes Administrator certification (in preparation)", "Go deeper into pipeline observability and security"] },
      { term: "Medium term", items: ["Become a DevOps / cloud engineer", "Design reliable platforms, automated end to end", "Keep passing knowledge on, as I do today at IEEE"] },
    ],
    stackTitle: "Technologies used in my projects",
    ctaTitle: "A final-year internship to fill in 2027?",
    ctaText: "Internship offer, unsolicited application or technical interview: I reply in French or English.",
    projects: "See my projects",
    langLabel: "Français",
  },
} as const

const STACK = [
  "Docker", "Kubernetes", "GitHub Actions", "GitLab CI", "Jenkins", "SonarCloud", "Kafka",
  "Spring Boot", ".NET", "FastAPI", "Angular", "Next.js", "TypeScript", "PostgreSQL",
  "MongoDB", "scikit-learn", "JUnit 5", "pytest", "Linux", "Bash",
]

/* ─────────────────────────────────────────────────────────────
   Fond animé : réseau de nœuds traversé par des impulsions,
   comme des déploiements qui circulent. Pause hors écran,
   image fixe si l'utilisateur limite les animations.
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
   Petits effets réutilisables
   ───────────────────────────────────────────────────────────── */

/** Apparition au défilement : chaque [data-reveal] reçoit data-visible une seule fois. */
function useReveal(dep: unknown) {
  useEffect(() => {
    const root = document.getElementById("about-root")
    root?.classList.add("ab-js")
    const items = Array.from(document.querySelectorAll<HTMLElement>("#about-root [data-reveal]:not([data-visible])"))
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

/** Halo qui suit la souris sur les cartes .ab-spot */
function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>(".ab-spot")
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty("--mx", `${e.clientX - r.left}px`)
      card.style.setProperty("--my", `${e.clientY - r.top}px`)
    }
    document.addEventListener("pointermove", onMove, { passive: true })
    return () => document.removeEventListener("pointermove", onMove)
  }, [])
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setShown(0)
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1300)
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])
  return (
    <>
      <span ref={ref} aria-hidden="true">
        {shown}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </>
  )
}

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties

function SectionTitle({ children, id }: { children: ReactNode; id: string }) {
  return (
    <div data-reveal className="mb-10">
      <h2 id={id} className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {children}
      </h2>
      <span aria-hidden="true" className="ab-bar mt-4 block h-[3px] w-16 rounded-full bg-gradient-to-r from-teal-300 via-indigo-400 to-transparent" />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function AboutPage() {
  const [lang, setLang] = useLang()
  const t = T[lang]
  useReveal(lang)
  useSpotlight()

  return (
    <div id="about-root" className="relative min-h-screen overflow-x-clip bg-[#070c18] text-slate-200">
      <NetworkBackground />

      {/* Aurores lumineuses */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="ab-drift absolute -left-[15%] -top-[20%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.14),transparent_60%)] blur-2xl" />
        <div className="ab-drift-2 absolute -right-[20%] top-[20%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.16),transparent_60%)] blur-2xl" />
        <div className="ab-drift absolute -bottom-[30%] left-[25%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.06),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* ── HÉROS ─────────────────────────────────────────── */}
        <section aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="rounded-full border border-slate-500/30 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur transition-colors hover:border-teal-300 hover:text-teal-300"
              lang={lang === "fr" ? "en" : "fr"}
            >
              {t.langLabel}
            </button>
          </div>

          <div className="mt-6 grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
            <div>
              <p className="ab-in inline-flex items-center gap-2.5 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-sm text-amber-300" style={delay(0)}>
                <span className="relative flex h-2 w-2">
                  <span aria-hidden="true" className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
                </span>
                {t.badge}
              </p>
              <p className="ab-in mt-8 text-sm font-medium text-teal-300" style={delay(80)}>
                {t.kicker}
              </p>
              <h1 id="about-title" className="ab-in mt-2 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl" style={delay(160)}>
                <span className="ab-sheen">Iheb Eddine Saafi</span>
              </h1>
              <p className="ab-in mt-4 text-xl text-white md:text-2xl" style={delay(240)}>
                {t.title}
                <span className="text-slate-400"> — {t.subtitle}</span>
              </p>
              <p className="ab-in mt-6 max-w-xl leading-relaxed text-slate-400" style={delay(320)}>
                {t.lead}
              </p>
              <div className="ab-in mt-8 flex flex-wrap gap-3" style={delay(400)}>
                <a
                  href="/cv.pdf"
                  download
                  className="group inline-flex items-center gap-2 rounded-xl bg-teal-300 px-5 py-2.5 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
                >
                  <Download className="h-4 w-4" />
                  {t.cv}
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-white/5 px-5 py-2.5 font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Carte profil */}
            <div className="ab-in ab-spot relative rounded-3xl border border-slate-500/20 bg-[#0c1324]/80 p-7 backdrop-blur-md" style={delay(300)}>
              <div className="flex items-center gap-5">
                <div className="relative grid h-28 w-28 shrink-0 place-items-center">
                  <span aria-hidden="true" className="ab-spin absolute inset-0 rounded-full bg-[conic-gradient(#2dd4bf,#818cf8,#fbbf24,#2dd4bf)]" />
                  <Image src="/iheb.jpg" alt="Iheb Eddine Saafi" width={400} height={358} priority className="relative h-[104px] w-[104px] rounded-full border-4 border-[#0c1324] object-cover" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Iheb Eddine Saafi</p>
                  <p className="text-sm text-teal-300">DevOps · Cloud · Full-stack</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5">
                {t.facts.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 rounded-xl border border-slate-500/15 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300">
                    <Icon className="h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CHIFFRES ──────────────────────────────────────── */}
        <section aria-label={lang === "fr" ? "Chiffres clés" : "Key figures"} className="border-y border-slate-500/10 bg-[#0c1324]/60 backdrop-blur-sm">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4">
            {t.stats.map((s, i) => (
              <div key={s.label} data-reveal style={delay(i * 100)} className="flex flex-col-reverse px-2 py-9 text-center md:px-6">
                <dt className="mt-2 text-sm leading-snug text-slate-400">{s.label}</dt>
                <dd className="bg-gradient-to-br from-teal-300 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── PARCOURS + FRISE ──────────────────────────────── */}
        <section aria-labelledby="story-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle id="story-title">{t.storyTitle}</SectionTitle>
              <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                {t.story.map((p, i) => (
                  <p key={i} data-reveal style={delay(i * 120)}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle id="timeline-title">{t.timelineTitle}</SectionTitle>
              <ol className="relative ml-3 border-l border-slate-500/20">
                <span aria-hidden="true" className="ab-rail absolute -left-px top-0 w-px bg-gradient-to-b from-teal-300 via-indigo-400 to-amber-300" />
                {t.timeline.map((step, i) => {
                  const Icon = step.icon
                  const next = "next" in step && step.next
                  return (
                    <li key={step.what} data-reveal style={delay(i * 110)} className="relative pb-8 pl-9 last:pb-0">
                      <span
                        aria-hidden="true"
                        className={`absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full border ${
                          next ? "border-amber-300 bg-amber-300/15 text-amber-300 shadow-[0_0_24px_rgba(251,191,36,0.45)]" : "border-teal-300/50 bg-[#0c1324] text-teal-300"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className={`font-mono text-xs ${next ? "text-amber-300" : "text-slate-400"}`}>{step.when}</p>
                      <p className="mt-1 font-medium text-white">{step.what}</p>
                      <p className="text-sm text-slate-400">{step.where}</p>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* ── CE QUE J'APPORTE ──────────────────────────────── */}
        <section aria-labelledby="bring-title" className="relative border-y border-slate-500/10 bg-[#0c1324]/70 py-20 backdrop-blur-sm md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle id="bring-title">{t.bringTitle}</SectionTitle>
            <p data-reveal className="-mt-4 mb-10 max-w-2xl text-slate-400">
              {t.bringIntro}
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.bring.map((b, i) => {
                const Icon = b.icon as LucideIcon
                return (
                  <article
                    key={b.title}
                    data-reveal
                    style={delay((i % 3) * 110)}
                    className="ab-spot group relative flex flex-col rounded-2xl border border-slate-500/20 bg-[#070c18]/70 p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-teal-300/30 bg-teal-300/10 text-teal-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-white">{b.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{b.text}</p>
                    <p className="mt-5 flex items-center gap-2 border-t border-slate-500/15 pt-4 text-xs text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal-300" aria-hidden="true" />
                      {b.proof}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── OBJECTIFS ─────────────────────────────────────── */}
        <section aria-labelledby="goals-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionTitle id="goals-title">{t.goalsTitle}</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            {t.goals.map((g, gi) => (
              <div key={g.term} data-reveal style={delay(gi * 120)} className="ab-spot relative rounded-2xl border border-slate-500/20 bg-[#0c1324]/70 p-7 backdrop-blur-sm">
                <p className="flex items-center gap-3 text-lg font-semibold text-white">
                  <span aria-hidden="true" className={`h-6 w-1.5 rounded-full ${gi === 0 ? "bg-teal-300" : "bg-indigo-400"}`} />
                  {g.term}
                </p>
                <ul className="mt-5 space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-300">
                      <Award className={`mt-0.5 h-4 w-4 shrink-0 ${gi === 0 ? "text-teal-300" : "text-indigo-400"}`} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── TECHNOLOGIES (bandeau défilant) ───────────────── */}
        <section aria-label={t.stackTitle} className="relative overflow-hidden border-y border-slate-500/10 bg-[#0c1324]/60 py-6">
          <p className="sr-only">{STACK.join(", ")}</p>
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#070c18] to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#070c18] to-transparent" />
          <div aria-hidden="true" className="ab-marquee flex w-max">
            {[0, 1].map((k) => (
              <ul key={k} className="flex shrink-0 items-center gap-10 pr-10">
                {STACK.map((s) => (
                  <li key={s} className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-slate-400">
                    {s}
                    <span className="h-1 w-1 rounded-full bg-teal-300/60" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* ── APPEL À L'ACTION ──────────────────────────────── */}
        <section aria-labelledby="cta-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div data-reveal className="ab-conic relative overflow-hidden rounded-3xl p-px">
            <div className="relative rounded-3xl bg-[#0c1324] px-7 py-12 text-center md:px-16 md:py-16">
              <h2 id="cta-title" className="text-3xl font-bold text-white md:text-4xl">
                {t.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-400">{t.ctaText}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-teal-300 px-6 py-3 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
                >
                  <Briefcase className="h-4 w-4" />
                  {t.projects}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Animations propres à la page */}
      <style>{`
        @keyframes ab-in { from { opacity: 0; transform: translate3d(0, 24px, 0) } to { opacity: 1; transform: none } }
        @keyframes ab-drift { 0%,100% { transform: translate3d(0,0,0) scale(1) } 33% { transform: translate3d(6%,-4%,0) scale(1.08) } 66% { transform: translate3d(-5%,5%,0) scale(.95) } }
        @keyframes ab-spin { to { transform: rotate(360deg) } }
        @keyframes ab-marquee { to { transform: translate3d(-50%,0,0) } }
        @keyframes ab-sheen { from { background-position: 100% 0 } to { background-position: 0% 0 } }
        @keyframes ab-rail { from { height: 0 } to { height: 100% } }

        .ab-in { animation: ab-in .9s cubic-bezier(.2,.7,.2,1) both; animation-delay: var(--d, 0ms) }
        .ab-drift { animation: ab-drift 24s ease-in-out infinite }
        .ab-drift-2 { animation: ab-drift 32s ease-in-out infinite reverse }
        .ab-spin { animation: ab-spin 7s linear infinite }
        .ab-marquee { animation: ab-marquee 38s linear infinite }
        .ab-marquee:hover { animation-play-state: paused }
        .ab-rail { height: 100%; animation: ab-rail 1.8s cubic-bezier(.2,.7,.2,1) .3s both }
        .ab-sheen {
          background: linear-gradient(100deg, #fff 20%, #2dd4bf 45%, #818cf8 65%, #fff 90%);
          background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: ab-sheen 2.4s ease-out .5s both;
        }

        /* Apparition au défilement (active seulement quand JavaScript tourne) */
        .ab-js [data-reveal] { opacity: 0; transform: translate3d(0, 28px, 0); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); transition-delay: var(--d, 0ms) }
        .ab-js [data-reveal][data-visible] { opacity: 1; transform: none }
        .ab-bar { transform: scaleX(0); transform-origin: left; transition: transform .9s cubic-bezier(.2,.7,.2,1) .2s }
        [data-visible] .ab-bar, #about-root:not(.ab-js) .ab-bar { transform: scaleX(1) }

        /* Cartes « projecteur » : bordure et halo qui suivent la souris */
        .ab-spot { isolation: isolate }
        .ab-spot::before {
          content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px; pointer-events: none;
          background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.8), rgba(129,140,248,.35) 40%, transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .35s;
        }
        .ab-spot::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;
          background: radial-gradient(480px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.08), transparent 60%);
          opacity: 0; transition: opacity .35s;
        }
        .ab-spot:hover::before, .ab-spot:hover::after { opacity: 1 }

        /* Bordure animée du bloc final */
        .ab-conic::before {
          content: ""; position: absolute; inset: -150%;
          background: conic-gradient(from 0deg, transparent 0 70%, #2dd4bf 80%, #818cf8 90%, transparent 100%);
          animation: ab-spin 7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .ab-in, .ab-drift, .ab-drift-2, .ab-spin, .ab-marquee, .ab-rail, .ab-sheen, .ab-conic::before { animation: none !important }
          .ab-sheen { background-position: 0 0 }
          .ab-js [data-reveal] { opacity: 1; transform: none; transition: none }
          .ab-bar { transform: scaleX(1) }
        }
      `}</style>
    </div>
  )
}
