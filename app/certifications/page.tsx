"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from "react"
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  FileCode2,
  Github,
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Rocket,
  Target,
} from "lucide-react"

/* ─────────────────────────────────────────────────────────────
   Langue : clé partagée "portfolio-lang" (mêmes réglages que
   les autres pages).
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
   Contenu : uniquement des faits vérifiables. Le code du stage
   BIAT est interne à la banque ; celui du stage Tunisie Telecom
   est public sur GitHub.
   ───────────────────────────────────────────────────────────── */
const GH = "https://github.com/iheb137/fraud-detection-platform"

type Exp = {
  id: string
  role: string
  org: string
  place: string
  when: string
  duration: string
  logo?: string
  initials: string
  accent: "teal" | "indigo"
  context: string
  done: string[]
  stack: string[]
  proofs: { label: string; href: string }[]
  privateNote?: string
}

const T = {
  fr: {
    langLabel: "English",
    kicker: "Expérience et certifications",
    title: "Deux stages en entreprise, des livrables concrets",
    lead:
      "Une banque, puis un opérateur télécom : à chaque fois, un vrai besoin, une solution livrée et déployée. Prochaine étape : un PFE de 6 mois à partir de janvier ou février 2027.",
    badge: "Disponible pour un PFE · janvier ou février 2027",
    cv: "Télécharger mon CV",
    contact: "Me contacter",
    terminalTitle: "parcours.log",
    terminal: [
      { cmd: "iheb experience --list" },
      { ok: true, date: "2025-08", text: "BIAT Innovation & Technology", tag: "DevOps" },
      { ok: true, date: "2026-07", text: "Tunisie Telecom, DSI", tag: "Dev & MLOps" },
      { ok: false, date: "2027-01", text: "Votre équipe ?", tag: "PFE · 6 mois" },
      { cmd: "iheb cert status cka" },
      { info: "CKA · en préparation, non obtenue à ce jour" },
    ],
    statsLabel: "Chiffres clés",
    stats: [
      { value: 2, label: "stages en entreprise" },
      { value: 4, label: "mois en entreprise" },
      { value: 19, label: "tests JUnit / Mockito écrits en stage" },
      { value: 8, label: "manifestes Kubernetes livrés" },
    ],
    expTitle: "Expérience professionnelle",
    expIntro: "Ce que j'ai réalisé, avec quelles technologies, et où le vérifier.",
    contextLabel: "Contexte",
    doneLabel: "Ce que j'ai réalisé",
    stackLabel: "Technologies",
    proofLabel: "Preuves dans le code",
    exps: [
      {
        id: "tt",
        role: "Stage ingénieur — développement et MLOps",
        org: "Tunisie Telecom",
        place: "DSI · Tunis",
        when: "Juillet – août 2026",
        duration: "2 mois",
        initials: "TT",
        accent: "teal",
        context:
          "Les analystes fraude ont besoin de repérer les appels frauduleux rapidement et de garder la main sur le modèle. J'ai conçu et réalisé seul la plateforme, de l'ingestion au déploiement.",
        done: [
          "Plateforme complète : API Spring Boot, interface Angular et service de machine learning FastAPI.",
          "Ingestion temps réel des appels via Kafka, avec un consumer idempotent.",
          "Modèle Random Forest réentraîné uniquement après validation des analystes.",
          "19 tests JUnit / Mockito et des tests pytest exécutés en intégration continue (GitHub Actions).",
          "3 images Docker publiées et un déploiement Kubernetes en 8 manifestes : StatefulSets, volumes persistants, probes, autoscaling, conteneurs non-root.",
        ],
        stack: ["Spring Boot", "Angular", "FastAPI", "Kafka", "scikit-learn", "PostgreSQL", "Docker", "Kubernetes", "GitHub Actions"],
        proofs: [
          { label: "Dépôt GitHub", href: GH },
          { label: ".github/workflows/ci.yml", href: `${GH}/blob/main/.github/workflows/ci.yml` },
          { label: "infra/k8s/", href: `${GH}/tree/main/infra/k8s` },
          { label: "ml-service/tests/", href: `${GH}/tree/main/ml-service/tests` },
        ],
      },
      {
        id: "biat",
        role: "Stage DevOps",
        org: "BIAT Innovation & Technology",
        place: "Tunis",
        when: "Août – septembre 2025",
        duration: "2 mois",
        logo: "/biat-logo.jpg",
        initials: "B",
        accent: "indigo",
        context:
          "Premier stage en entreprise, au sein de la filiale technologique d'une banque : automatiser la livraison d'applications métier dans un environnement exigeant.",
        done: [
          "Conception et mise en place d'un pipeline CI/CD Jenkins.",
          "Scripts Bash d'automatisation des tâches répétitives.",
          "Conteneurisation d'applications métier avec Docker et orchestration sur Kubernetes.",
        ],
        stack: ["Jenkins", "Docker", "Kubernetes", "Bash", "Git", "Linux"],
        proofs: [],
        privateNote: "Code interne à la banque, non public. J'en présente volontiers la démarche en entretien.",
      },
    ] as Exp[],
    nextTitle: "Prochaine étape : votre équipe",
    nextText: "Je cherche un stage de fin d'études (PFE) de 6 mois pour continuer à livrer des systèmes complets et exploitables.",
    nextFacts: [
      { icon: Calendar, text: "À partir de janvier ou février 2027" },
      { icon: Clock, text: "6 mois" },
      { icon: MapPin, text: "France ou Tunisie" },
    ],
    nextFields: ["DevOps et CI/CD", "Cloud et infrastructure", "Full-stack", "Backend et architecture", "IA appliquée au logiciel"],
    certTitle: "Certification",
    certName: "Certified Kubernetes Administrator",
    certIssuer: "Linux Foundation · CNCF",
    certStatus: "En préparation",
    certHonest: "Non obtenue à ce jour. Je l'indiquerai ici dès que je l'aurai passée.",
    certAbout:
      "Examen pratique, en ligne de commande sur de vrais clusters : on y administre Kubernetes, on ne répond pas à un QCM.",
    domainsLabel: "Domaines de l'examen",
    domains: [
      "Architecture, installation et configuration du cluster",
      "Workloads et ordonnancement",
      "Services et réseau",
      "Stockage",
      "Dépannage",
    ],
    practiceLabel: "Ce que je pratique déjà",
    practice: [
      { text: "StatefulSets, volumes persistants, probes, autoscaling", where: "Détection de fraude", href: `${GH}/tree/main/infra/k8s` },
      { text: "Déploiement sur Kubernetes par un pipeline Jenkins", where: "iHar", href: "https://github.com/iheb137/iHar---Luxury-Car-Rental" },
      { text: "Conteneurisation et orchestration en entreprise", where: "Stage BIAT", href: "" },
    ],
    eduTitle: "Formation",
    edu: [
      { when: "2024 – 2027", what: "Cycle ingénieur, Génie Logiciel et Systèmes d'Information", where: "TEK-UP Université" },
      { when: "2020 – 2024", what: "Classes préparatoires Mathématiques-Physique", where: "IPEI El Manar" },
    ],
    ctaTitle: "Parlons de votre projet de PFE",
    ctaText: "Je peux détailler chacun de ces stages en entretien, en français ou en anglais.",
    projects: "Voir mes projets",
  },
  en: {
    langLabel: "Français",
    kicker: "Experience and certifications",
    title: "Two company internships, concrete deliverables",
    lead:
      "A bank, then a telecom operator: each time a real need, a solution delivered and deployed. Next step: a 6-month final-year internship starting January or February 2027.",
    badge: "Available for a final-year internship · January or February 2027",
    cv: "Download my CV",
    contact: "Contact me",
    terminalTitle: "career.log",
    terminal: [
      { cmd: "iheb experience --list" },
      { ok: true, date: "2025-08", text: "BIAT Innovation & Technology", tag: "DevOps" },
      { ok: true, date: "2026-07", text: "Tunisie Telecom, IT dept.", tag: "Dev & MLOps" },
      { ok: false, date: "2027-01", text: "Your team?", tag: "Internship · 6 months" },
      { cmd: "iheb cert status cka" },
      { info: "CKA · in preparation, not obtained yet" },
    ],
    statsLabel: "Key figures",
    stats: [
      { value: 2, label: "company internships" },
      { value: 4, label: "months in industry" },
      { value: 19, label: "JUnit / Mockito tests written during the internship" },
      { value: 8, label: "Kubernetes manifests delivered" },
    ],
    expTitle: "Work experience",
    expIntro: "What I built, with which technologies, and where to check it.",
    contextLabel: "Context",
    doneLabel: "What I delivered",
    stackLabel: "Technologies",
    proofLabel: "Evidence in the code",
    exps: [
      {
        id: "tt",
        role: "Engineering intern — development and MLOps",
        org: "Tunisie Telecom",
        place: "IT department · Tunis",
        when: "July – August 2026",
        duration: "2 months",
        initials: "TT",
        accent: "teal",
        context:
          "Fraud analysts need to spot fraudulent calls quickly while keeping control over the model. I designed and built the platform on my own, from ingestion to deployment.",
        done: [
          "Complete platform: Spring Boot API, Angular interface and a FastAPI machine learning service.",
          "Real-time call ingestion through Kafka, with an idempotent consumer.",
          "Random Forest model retrained only after analyst validation.",
          "19 JUnit / Mockito tests and pytest tests run in continuous integration (GitHub Actions).",
          "3 published Docker images and a Kubernetes deployment in 8 manifests: StatefulSets, persistent volumes, probes, autoscaling, non-root containers.",
        ],
        stack: ["Spring Boot", "Angular", "FastAPI", "Kafka", "scikit-learn", "PostgreSQL", "Docker", "Kubernetes", "GitHub Actions"],
        proofs: [
          { label: "GitHub repository", href: GH },
          { label: ".github/workflows/ci.yml", href: `${GH}/blob/main/.github/workflows/ci.yml` },
          { label: "infra/k8s/", href: `${GH}/tree/main/infra/k8s` },
          { label: "ml-service/tests/", href: `${GH}/tree/main/ml-service/tests` },
        ],
      },
      {
        id: "biat",
        role: "DevOps intern",
        org: "BIAT Innovation & Technology",
        place: "Tunis",
        when: "August – September 2025",
        duration: "2 months",
        logo: "/biat-logo.jpg",
        initials: "B",
        accent: "indigo",
        context:
          "My first company internship, in the technology subsidiary of a bank: automating the delivery of business applications in a demanding environment.",
        done: [
          "Designed and set up a Jenkins CI/CD pipeline.",
          "Bash scripts to automate repetitive tasks.",
          "Containerized business applications with Docker and orchestrated them on Kubernetes.",
        ],
        stack: ["Jenkins", "Docker", "Kubernetes", "Bash", "Git", "Linux"],
        proofs: [],
        privateNote: "Internal bank code, not public. Happy to walk through the approach in an interview.",
      },
    ] as Exp[],
    nextTitle: "Next step: your team",
    nextText: "I am looking for a 6-month final-year internship to keep shipping complete, operable systems.",
    nextFacts: [
      { icon: Calendar, text: "From January or February 2027" },
      { icon: Clock, text: "6 months" },
      { icon: MapPin, text: "France or Tunisia" },
    ],
    nextFields: ["DevOps and CI/CD", "Cloud and infrastructure", "Full-stack", "Backend and architecture", "AI applied to software"],
    certTitle: "Certification",
    certName: "Certified Kubernetes Administrator",
    certIssuer: "Linux Foundation · CNCF",
    certStatus: "In preparation",
    certHonest: "Not obtained yet. I will update this page as soon as I have passed it.",
    certAbout: "A hands-on, command-line exam on real clusters: you administer Kubernetes rather than answer multiple-choice questions.",
    domainsLabel: "Exam domains",
    domains: [
      "Cluster architecture, installation and configuration",
      "Workloads and scheduling",
      "Services and networking",
      "Storage",
      "Troubleshooting",
    ],
    practiceLabel: "What I already practise",
    practice: [
      { text: "StatefulSets, persistent volumes, probes, autoscaling", where: "Fraud detection", href: `${GH}/tree/main/infra/k8s` },
      { text: "Deployment to Kubernetes from a Jenkins pipeline", where: "iHar", href: "https://github.com/iheb137/iHar---Luxury-Car-Rental" },
      { text: "Containerization and orchestration in a company", where: "BIAT internship", href: "" },
    ],
    eduTitle: "Education",
    edu: [
      { when: "2024 – 2027", what: "Engineering degree, Software Engineering and Information Systems", where: "TEK-UP University" },
      { when: "2020 – 2024", what: "Preparatory classes, Mathematics-Physics", where: "IPEI El Manar" },
    ],
    ctaTitle: "Let's talk about your internship project",
    ctaText: "I can go into detail on each of these internships in an interview, in French or English.",
    projects: "See my projects",
  },
}

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
    const root = document.getElementById("cert-root")
    root?.classList.add("ce-js")
    const items = Array.from(document.querySelectorAll<HTMLElement>("#cert-root [data-reveal]:not([data-visible])"))
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

/** Halo qui suit la souris sur les cartes .ce-spot */
function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>(".ce-spot")
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty("--mx", `${e.clientX - r.left}px`)
      card.style.setProperty("--my", `${e.clientY - r.top}px`)
    }
    document.addEventListener("pointermove", onMove, { passive: true })
    return () => document.removeEventListener("pointermove", onMove)
  }, [])
}

/** Remplissage de la frise au rythme du défilement (0 → 1). */
function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [p, setP] = useState(1)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const v = (vh * 0.65 - r.top) / Math.max(1, r.height)
      setP(Math.max(0, Math.min(1, v)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [ref])
  return p
}

function CountUp({ value }: { value: number }) {
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
      </span>
      <span className="sr-only">{value}</span>
    </>
  )
}

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties

function SectionTitle({ children, id, intro }: { children: ReactNode; id: string; intro?: string }) {
  return (
    <div data-reveal className="mb-10">
      <h2 id={id} className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {children}
      </h2>
      <span aria-hidden="true" className="ce-bar mt-4 block h-[3px] w-16 rounded-full bg-gradient-to-r from-teal-300 via-indigo-400 to-transparent" />
      {intro && <p className="mt-5 max-w-2xl text-slate-400">{intro}</p>}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Terminal du héros : les lignes s'affichent une à une.
   Le texte complet reste lisible par les lecteurs d'écran.
   ───────────────────────────────────────────────────────────── */
type Line = { cmd?: string; ok?: boolean; date?: string; text?: string; tag?: string; info?: string }

function Terminal({ title, lines }: { title: string; lines: readonly Line[] }) {
  const [count, setCount] = useState(lines.length)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setCount(0)
    let i = 0
    let timer = 0
    const next = () => {
      i += 1
      setCount(i)
      if (i < lines.length) timer = window.setTimeout(next, lines[i]?.cmd ? 750 : 380)
    }
    timer = window.setTimeout(next, 600)
    return () => window.clearTimeout(timer)
  }, [lines])

  return (
    <div className="ce-spot relative overflow-hidden rounded-2xl border border-slate-500/25 bg-[#060a14]/90 shadow-[0_30px_80px_-30px_rgba(45,212,191,0.35)] backdrop-blur-md">
      <div className="flex items-center gap-2 border-b border-slate-500/20 bg-white/[0.03] px-4 py-3">
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-rose-400/80" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-amber-300/80" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-teal-300/80" />
        <span className="ml-3 font-mono text-xs text-slate-400">{title}</span>
      </div>
      <ul className="min-h-[248px] space-y-2 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((l, i) => {
          const visible = i < count
          const isLast = i === count - 1
          return (
            <li key={i} className={`ce-line ${visible ? "opacity-100" : "opacity-0"}`} aria-hidden={!visible || undefined}>
              {l.cmd && (
                <span className="text-slate-300">
                  <span className="text-teal-300">❯</span> {l.cmd}
                  {isLast && <span aria-hidden="true" className="ce-caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-teal-300" />}
                </span>
              )}
              {l.text && (
                <span className="flex flex-wrap items-baseline gap-x-3">
                  <span className={l.ok ? "text-teal-300" : "ce-blink text-amber-300"}>{l.ok ? "✓" : "◌"}</span>
                  <span className="text-slate-400">{l.date}</span>
                  <span className={l.ok ? "text-white" : "text-amber-300"}>{l.text}</span>
                  <span className="text-xs text-indigo-300">[{l.tag}]</span>
                </span>
              )}
              {l.info && (
                <span className="text-indigo-300">
                  <span className="text-slate-400">→</span> {l.info}
                  {isLast && <span aria-hidden="true" className="ce-caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-indigo-300" />}
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Carte d'expérience
   ───────────────────────────────────────────────────────────── */
function ExperienceCard({ e, t, index }: { e: Exp; t: (typeof T)["fr"]; index: number }) {
  const [logoOk, setLogoOk] = useState(Boolean(e.logo))
  const teal = e.accent === "teal"
  return (
    <li data-reveal style={delay(80)} className="relative pl-8 md:pl-16">
      {/* Nœud sur la frise */}
      <span
        aria-hidden="true"
        className={`ce-node absolute left-0 top-8 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border bg-[#070c18] md:h-12 md:w-12 ${
          teal ? "border-teal-300/70 text-teal-300" : "border-indigo-400/70 text-indigo-300"
        }`}
      >
        <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
      </span>

      <article
        aria-labelledby={`exp-${e.id}`}
        className={`ce-spot group relative overflow-hidden rounded-3xl border bg-[#0c1324]/80 p-5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 md:p-8 ${
          teal ? "border-teal-300/25" : "border-indigo-400/25"
        }`}
      >
        <span aria-hidden="true" className="pointer-events-none absolute -right-6 -top-10 select-none font-mono text-[9rem] font-bold leading-none text-white/[0.03]">
          {e.when.match(/\d{4}/)?.[0]}
        </span>

        {/* En-tête */}
        <header className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-slate-500/30 bg-white">
            {e.logo && logoOk ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={e.logo} alt={`Logo ${e.org}`} className="h-full w-full object-contain p-1.5" onError={() => setLogoOk(false)} />
            ) : (
              <span className={`grid h-full w-full place-items-center text-lg font-bold ${teal ? "bg-teal-300/15 text-teal-300" : "bg-indigo-400/15 text-indigo-300"}`}>{e.initials}</span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 id={`exp-${e.id}`} className="text-xl font-bold text-white md:text-2xl">
              {e.role}
            </h3>
            <p className={`mt-1 flex flex-wrap items-center gap-x-2 font-medium ${teal ? "text-teal-300" : "text-indigo-300"}`}>
              <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{e.org}</span>
              <span className="font-normal text-slate-400">· {e.place}</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-500/25 bg-white/[0.04] px-3 py-1 text-slate-300">
                <Calendar className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
                {e.when}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-500/25 bg-white/[0.04] px-3 py-1 text-slate-300">
                <Clock className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
                {e.duration}
              </span>
            </div>
          </div>
          <span aria-hidden="true" className="hidden font-mono text-sm text-slate-500 sm:block">
            0{index + 1}
          </span>
        </header>

        {/* Corps */}
        <div className="relative mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t.contextLabel}</p>
            <p className="mt-2 leading-relaxed text-slate-300">{e.context}</p>

            <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-slate-500">{t.doneLabel}</p>
            <ul className="mt-3 space-y-3">
              {e.done.map((d, i) => (
                <li key={d} data-reveal style={delay(120 + i * 90)} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${teal ? "text-teal-300" : "text-indigo-300"}`} aria-hidden="true" />
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t.stackLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {e.stack.map((s) => (
                  <li
                    key={s}
                    className={`rounded-lg border px-2.5 py-1 font-mono text-xs transition-colors ${
                      teal ? "border-teal-300/25 bg-teal-300/[0.06] text-teal-200 hover:border-teal-300/60" : "border-indigo-400/25 bg-indigo-400/[0.06] text-indigo-200 hover:border-indigo-400/60"
                    }`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t.proofLabel}</p>
              {e.proofs.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {e.proofs.map((p, i) => (
                    <li key={p.href}>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2.5 rounded-xl border border-slate-500/20 bg-[#070c18]/70 px-3.5 py-2.5 text-sm text-slate-300 transition-colors hover:border-teal-300/50 hover:text-white"
                      >
                        {i === 0 ? <Github className="h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" /> : <FileCode2 className="h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />}
                        <span className={`min-w-0 flex-1 truncate ${i === 0 ? "" : "font-mono text-xs"}`}>{p.label}</span>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-50 transition-transform group-hover/link:translate-x-0.5 group-hover/link:opacity-100" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 flex gap-2.5 rounded-xl border border-dashed border-slate-500/30 px-3.5 py-3 text-sm leading-relaxed text-slate-400">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                  {e.privateNote}
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function CertificationsPage() {
  const [lang, setLang] = useLang()
  const t = T[lang]
  useReveal(lang)
  useSpotlight()
  const timelineRef = useRef<HTMLOListElement>(null)
  const progress = useScrollProgress(timelineRef)

  return (
    <div id="cert-root" className="relative min-h-screen overflow-x-clip bg-[#070c18] text-slate-200">
      <NetworkBackground />

      {/* Aurores lumineuses */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="ce-drift absolute -right-[15%] -top-[20%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.13),transparent_60%)] blur-2xl" />
        <div className="ce-drift-2 absolute -left-[20%] top-[30%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.15),transparent_60%)] blur-2xl" />
        <div className="ce-drift absolute -bottom-[30%] right-[20%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.06),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* ── HÉROS ─────────────────────────────────────────── */}
        <section aria-labelledby="cert-title" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
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

          <div className="mt-6 grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <p className="ce-in inline-flex items-center gap-2.5 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-sm text-amber-300" style={delay(0)}>
                <span className="relative flex h-2 w-2 shrink-0">
                  <span aria-hidden="true" className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
                </span>
                {t.badge}
              </p>
              <p className="ce-in mt-8 text-sm font-medium text-teal-300" style={delay(80)}>
                {t.kicker}
              </p>
              <h1 id="cert-title" className="ce-in mt-2 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl" style={delay(160)}>
                <span className="ce-sheen">{t.title}</span>
              </h1>
              <p className="ce-in mt-6 max-w-xl text-lg leading-relaxed text-slate-400" style={delay(260)}>
                {t.lead}
              </p>
              <div className="ce-in mt-8 flex flex-wrap gap-3" style={delay(340)}>
                <a
                  href={lang === "fr" ? "/cv.pdf" : "/cv-en.pdf"}
                  download
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-teal-300 px-5 py-2.5 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
                >
                  <Download className="h-4 w-4" />
                  {t.cv}
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-500/30 bg-white/5 px-5 py-2.5 font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="ce-in" style={delay(300)}>
              <Terminal key={lang} title={t.terminalTitle} lines={t.terminal} />
            </div>
          </div>
        </section>

        {/* ── CHIFFRES ──────────────────────────────────────── */}
        <section aria-label={t.statsLabel} className="border-y border-slate-500/10 bg-[#0c1324]/60 backdrop-blur-sm">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4">
            {t.stats.map((s, i) => (
              <div key={s.label} data-reveal style={delay(i * 100)} className="flex flex-col-reverse px-2 py-9 text-center md:px-6">
                <dt className="mt-2 text-sm leading-snug text-slate-400">{s.label}</dt>
                <dd className="bg-gradient-to-br from-teal-300 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── EXPÉRIENCE (frise qui se remplit au défilement) ─ */}
        <section aria-labelledby="exp-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionTitle id="exp-title" intro={t.expIntro}>
            {t.expTitle}
          </SectionTitle>

          <ol ref={timelineRef} className="relative ml-4 space-y-12 md:ml-6">
            <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px -translate-x-1/2 bg-slate-500/20" />
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-300 via-teal-300 to-indigo-400 shadow-[0_0_12px_rgba(45,212,191,0.6)]"
              style={{ height: `${progress * 100}%` }}
            />

            {/* Prochaine étape : en tête de frise */}
            <li data-reveal className="relative pl-8 md:pl-16">
              <span aria-hidden="true" className="absolute left-0 top-8 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border border-amber-300 bg-amber-300/15 text-amber-300 shadow-[0_0_28px_rgba(251,191,36,0.5)] md:h-12 md:w-12">
                <span className="absolute inset-0 animate-ping rounded-full border border-amber-300/50" />
                <Rocket className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <div className="ce-conic relative overflow-hidden rounded-3xl p-px">
                <div className="relative rounded-3xl bg-[#0c1324] p-5 md:p-8">
                  <p className="font-mono text-xs text-amber-300">2027</p>
                  <h3 className="mt-1 text-xl font-bold text-white md:text-2xl">{t.nextTitle}</h3>
                  <p className="mt-2 max-w-2xl text-slate-400">{t.nextText}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {t.nextFacts.map(({ icon: Icon, text }) => (
                      <li key={text} className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/[0.08] px-3.5 py-1.5 text-sm text-amber-200">
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {text}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {t.nextFields.map((f) => (
                      <li key={f} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-500/25 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">
                        <Target className="h-3 w-3 text-teal-300" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            {t.exps.map((e, i) => (
              <ExperienceCard key={e.id} e={e} t={t} index={i} />
            ))}
          </ol>
        </section>

        {/* ── CERTIFICATION ─────────────────────────────────── */}
        <section aria-labelledby="cka-title" className="relative border-y border-slate-500/10 bg-[#0c1324]/70 py-20 backdrop-blur-sm md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle id="cka-title">{t.certTitle}</SectionTitle>

            <div data-reveal className="ce-spot relative overflow-hidden rounded-3xl border border-indigo-400/25 bg-[#070c18]/80 p-6 md:p-10">
              <div className="grid gap-10 lg:grid-cols-[auto_minmax(0,1fr)]">
                {/* Badge animé */}
                <div className="flex justify-center lg:block">
                  <div className="relative grid h-44 w-44 place-items-center">
                    <svg aria-hidden="true" viewBox="0 0 200 200" className="ce-spin-slow absolute inset-0 h-full w-full">
                      <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(129,140,248,.25)" strokeDasharray="4 8" />
                      <circle cx="100" cy="8" r="5" fill="#2dd4bf" />
                      <circle cx="192" cy="100" r="3.5" fill="#818cf8" />
                    </svg>
                    <svg aria-hidden="true" viewBox="0 0 200 200" className="ce-spin-rev absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]">
                      <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(45,212,191,.2)" strokeDasharray="60 20" />
                      <circle cx="10" cy="100" r="4" fill="#fbbf24" />
                    </svg>
                    <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute h-24 w-24">
                      <defs>
                        <linearGradient id="ce-hex" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0" stopColor="#2dd4bf" />
                          <stop offset="1" stopColor="#818cf8" />
                        </linearGradient>
                      </defs>
                      <polygon points="50,4 90,27 90,73 50,96 10,73 10,27" fill="rgba(12,19,36,.95)" stroke="url(#ce-hex)" strokeWidth="2.5" />
                    </svg>
                    <span className="relative font-mono text-2xl font-bold tracking-tight text-white">CKA</span>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-white">{t.certName}</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-300">
                      <span aria-hidden="true" className="ce-blink h-1.5 w-1.5 rounded-full bg-amber-300" />
                      {t.certStatus}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{t.certIssuer}</p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">{t.certAbout}</p>
                  <p className="mt-3 text-sm text-slate-400">{t.certHonest}</p>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t.domainsLabel}</p>
                      <ol className="mt-3 space-y-2">
                        {t.domains.map((d, i) => (
                          <li key={d} data-reveal style={delay(i * 80)} className="flex items-center gap-3 rounded-xl border border-slate-500/15 bg-white/[0.03] px-3.5 py-2.5 text-sm text-slate-300">
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-indigo-400/15 font-mono text-xs text-indigo-300">{i + 1}</span>
                            {d}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{t.practiceLabel}</p>
                      <ul className="mt-3 space-y-2">
                        {t.practice.map((p, i) => {
                          const inner = (
                            <>
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                              <span className="min-w-0 flex-1">
                                <span className="block text-slate-300">{p.text}</span>
                                <span className="mt-0.5 block text-xs text-teal-300">{p.where}</span>
                              </span>
                              {p.href && <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden="true" />}
                            </>
                          )
                          const cls = "flex gap-3 rounded-xl border border-slate-500/15 bg-white/[0.03] px-3.5 py-2.5 text-sm"
                          return (
                            <li key={p.text} data-reveal style={delay(i * 100)}>
                              {p.href ? (
                                <a href={p.href} target="_blank" rel="noopener noreferrer" className={`${cls} transition-colors hover:border-teal-300/50`}>
                                  {inner}
                                </a>
                              ) : (
                                <div className={cls}>{inner}</div>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FORMATION ─────────────────────────────────────── */}
        <section aria-labelledby="edu-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionTitle id="edu-title">{t.eduTitle}</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            {t.edu.map((e, i) => (
              <div key={e.what} data-reveal style={delay(i * 120)} className="ce-spot relative flex gap-5 rounded-2xl border border-slate-500/20 bg-[#0c1324]/70 p-6 backdrop-blur-sm">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border ${i === 0 ? "border-teal-300/30 bg-teal-300/10 text-teal-300" : "border-indigo-400/30 bg-indigo-400/10 text-indigo-300"}`}>
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs text-slate-400">{e.when}</p>
                  <p className="mt-1 font-semibold text-white">{e.what}</p>
                  <p className="text-sm text-slate-400">{e.where}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── APPEL À L'ACTION ──────────────────────────────── */}
        <section aria-labelledby="cta-title" className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
          <div data-reveal className="ce-conic relative overflow-hidden rounded-3xl p-px">
            <div className="relative rounded-3xl bg-[#0c1324] px-7 py-12 text-center md:px-16 md:py-16">
              <h2 id="cta-title" className="text-3xl font-bold text-white md:text-4xl">
                {t.ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-400">{t.ctaText}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-teal-300 px-6 py-3 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-500/30 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
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
        @keyframes ce-in { from { opacity: 0; transform: translate3d(0, 24px, 0) } to { opacity: 1; transform: none } }
        @keyframes ce-drift { 0%,100% { transform: translate3d(0,0,0) scale(1) } 33% { transform: translate3d(-6%,4%,0) scale(1.08) } 66% { transform: translate3d(5%,-5%,0) scale(.95) } }
        @keyframes ce-spin { to { transform: rotate(360deg) } }
        @keyframes ce-sheen { from { background-position: 100% 0 } to { background-position: 0% 0 } }
        @keyframes ce-caret { 50% { opacity: 0 } }
        @keyframes ce-blink { 50% { opacity: .35 } }
        @keyframes ce-line { from { opacity: 0; transform: translate3d(-8px,0,0) } to { opacity: 1; transform: none } }
        @keyframes ce-pop { 0% { transform: translateX(-50%) scale(.4); opacity: 0 } 70% { transform: translateX(-50%) scale(1.12) } 100% { transform: translateX(-50%) scale(1); opacity: 1 } }

        .ce-in { animation: ce-in .9s cubic-bezier(.2,.7,.2,1) both; animation-delay: var(--d, 0ms) }
        .ce-drift { animation: ce-drift 26s ease-in-out infinite }
        .ce-drift-2 { animation: ce-drift 34s ease-in-out infinite reverse }
        .ce-spin-slow { animation: ce-spin 22s linear infinite }
        .ce-spin-rev { animation: ce-spin 16s linear infinite reverse }
        .ce-caret { animation: ce-caret 1s steps(1) infinite }
        .ce-blink { animation: ce-blink 1.6s ease-in-out infinite }
        .ce-line.opacity-100 { animation: ce-line .35s ease-out both }
        .ce-sheen {
          background: linear-gradient(100deg, #fff 20%, #2dd4bf 45%, #818cf8 65%, #fff 90%);
          background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: ce-sheen 2.4s ease-out .5s both;
        }

        /* Apparition au défilement (active seulement quand JavaScript tourne) */
        .ce-js [data-reveal] { opacity: 0; transform: translate3d(0, 28px, 0); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); transition-delay: var(--d, 0ms) }
        .ce-js [data-reveal][data-visible] { opacity: 1; transform: none }
        .ce-js [data-reveal] .ce-node { opacity: 0 }
        .ce-js [data-reveal][data-visible] .ce-node { animation: ce-pop .6s cubic-bezier(.2,.7,.2,1) .25s both }
        .ce-bar { transform: scaleX(0); transform-origin: left; transition: transform .9s cubic-bezier(.2,.7,.2,1) .2s }
        [data-visible] .ce-bar, #cert-root:not(.ce-js) .ce-bar { transform: scaleX(1) }

        /* Cartes « projecteur » : bordure et halo qui suivent la souris */
        .ce-spot { isolation: isolate }
        .ce-spot::before {
          content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px; pointer-events: none;
          background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.8), rgba(129,140,248,.35) 40%, transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .35s;
        }
        .ce-spot::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;
          background: radial-gradient(480px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.08), transparent 60%);
          opacity: 0; transition: opacity .35s;
        }
        .ce-spot:hover::before, .ce-spot:hover::after { opacity: 1 }

        /* Bordure animée */
        .ce-conic::before {
          content: ""; position: absolute; inset: -150%;
          background: conic-gradient(from 0deg, transparent 0 70%, #fbbf24 78%, #2dd4bf 88%, #818cf8 95%, transparent 100%);
          animation: ce-spin 7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .ce-in, .ce-drift, .ce-drift-2, .ce-spin-slow, .ce-spin-rev, .ce-caret, .ce-blink, .ce-line, .ce-sheen, .ce-conic::before, .ce-node { animation: none !important }
          .ce-sheen { background-position: 0 0 }
          .ce-js [data-reveal] { opacity: 1; transform: none; transition: none }
          .ce-js [data-reveal] .ce-node { opacity: 1 }
          .ce-bar { transform: scaleX(1) }
        }
      `}</style>
    </div>
  )
}
