"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState, type CSSProperties } from "react"
import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  Code,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  User,
  type LucideIcon,
} from "lucide-react"

/* ─────────────────────────────────────────────────────────────
   Langue : même clé que la page À propos ("portfolio-lang").
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

const GH = "https://github.com/iheb137/fraud-detection-platform"

/* ─────────────────────────────────────────────────────────────
   Contenu : uniquement des faits vérifiables.
   ───────────────────────────────────────────────────────────── */
const T = {
  fr: {
    badge: "Recherche un PFE de 6 mois · janvier ou février 2027",
    hello: "Bonjour, je suis",
    rolePrefix: "Élève ingénieur",
    roles: ["DevOps", "Cloud", "Full-stack", "MLOps"],
    lead:
      "Je conçois des applications de bout en bout et je les livre avec ce qui les rend exploitables : tests automatisés, images Docker, pipelines CI/CD et manifestes Kubernetes.",
    where: "Tunis, Tunisie · TEK-UP Université · PFE en France ou en Tunisie",
    cv: "Télécharger mon CV",
    projects: "Voir mes projets",
    contact: "Me contacter",
    scroll: "Défiler",
    stats: [
      { value: 2, suffix: "", label: "stages en entreprise", sub: "Tunisie Telecom · BIAT" },
      { value: 6, suffix: "", label: "projets publiés", sub: "code source sur GitHub" },
      { value: 5, suffix: "e", label: "année d'ingénieur", sub: "GLSI · TEK-UP Université" },
      { value: 6, suffix: " mois", label: "de PFE dès 2027", sub: "janvier ou février" },
    ],
    featuredKicker: "Projet phare",
    featuredContext: "Stage ingénieur · Tunisie Telecom (DSI) · juillet – août 2026",
    featuredTitle: "Plateforme de détection des appels frauduleux",
    featuredText:
      "Ingestion des enregistrements d'appels en temps réel via Kafka, scoring par un modèle Random Forest, alertes sur trois niveaux et cycle de réentraînement validé par les analystes. Conçue et réalisée seul, de l'architecture au déploiement Kubernetes.",
    metrics: [
      { value: 19, label: "tests unitaires backend en CI" },
      { value: 8, label: "manifestes Kubernetes" },
      { value: 3, label: "images Docker publiées" },
      { value: 5, label: "services orchestrés" },
    ],
    proofTitle: "Preuves dans le code",
    proofs: [
      { label: "Pipeline CI/CD", path: ".github/workflows/ci.yml", href: `${GH}/blob/main/.github/workflows/ci.yml` },
      { label: "Manifestes Kubernetes", path: "infra/k8s/", href: `${GH}/tree/main/infra/k8s` },
      { label: "Test du consumer Kafka", path: "KafkaConsumerServiceTest.java", href: `${GH}/blob/main/backend/backend/src/test/java/com/tunisietelecom/frauddetection/service/KafkaConsumerServiceTest.java` },
      { label: "Tests du service ML", path: "ml-service/tests/", href: `${GH}/tree/main/ml-service/tests` },
    ],
    source: "Code source",
    demo: "Démo en ligne",
    exploreTitle: "Explorer le portfolio",
    exploreIntro: "Chaque page renvoie vers le code, les pipelines et les stages qui le prouvent.",
    explore: "Découvrir",
    cards: [
      { title: "À propos", text: "Mon parcours de 2020 à 2027 et ce que j'apporte à une équipe.", href: "/about", icon: User, tag: "Profil" },
      { title: "Projets", text: "Détection de fraude, MecaManage, IH-AR DevOps, Smart Career Hub et plus.", href: "/projects", icon: Briefcase, tag: "Code" },
      { title: "Expérience", text: "Stages chez Tunisie Telecom et BIAT ; certification CKA en préparation.", href: "/certifications", icon: Award, tag: "Stages" },
      { title: "Compétences", text: "Docker, Kubernetes, GitHub Actions, Spring Boot, Angular, FastAPI.", href: "/skills", icon: Code, tag: "Stack" },
      { title: "Engagement", text: "IEEE TEK-UP (vice-président puis conseiller), Securinets, IEEEXtreme.", href: "/events", icon: Calendar, tag: "Communauté" },
      { title: "CV", text: "La version PDF, prête à joindre à une candidature.", href: "/cv", icon: FileText, tag: "PDF" },
    ],
    stackLabel: "Technologies utilisées dans mes projets",
    ctaTitle: "Un PFE à pourvoir en 2027 ?",
    ctaText: "Offre de stage, candidature spontanée ou entretien technique : je réponds en français ou en anglais.",
    langLabel: "English",
  },
  en: {
    badge: "Seeking a 6-month internship · January or February 2027",
    hello: "Hi, I'm",
    rolePrefix: "Engineering student in",
    roles: ["DevOps", "Cloud", "Full-stack", "MLOps"],
    lead:
      "I build applications end to end and ship them with what makes them operable: automated tests, Docker images, CI/CD pipelines and Kubernetes manifests.",
    where: "Tunis, Tunisia · TEK-UP University · Internship in France or Tunisia",
    cv: "Download my CV",
    projects: "See my projects",
    contact: "Contact me",
    scroll: "Scroll",
    stats: [
      { value: 2, suffix: "", label: "company internships", sub: "Tunisie Telecom · BIAT" },
      { value: 6, suffix: "", label: "published projects", sub: "source code on GitHub" },
      { value: 5, suffix: "th", label: "year of engineering school", sub: "GLSI · TEK-UP University" },
      { value: 6, suffix: " months", label: "internship from 2027", sub: "January or February" },
    ],
    featuredKicker: "Featured project",
    featuredContext: "Engineering internship · Tunisie Telecom (IT department) · July – August 2026",
    featuredTitle: "Fraudulent call detection platform",
    featuredText:
      "Real-time call record ingestion through Kafka, scoring by a Random Forest model, three-level alerts and a retraining cycle validated by analysts. Designed and built on my own, from architecture to Kubernetes deployment.",
    metrics: [
      { value: 19, label: "backend unit tests in CI" },
      { value: 8, label: "Kubernetes manifests" },
      { value: 3, label: "published Docker images" },
      { value: 5, label: "orchestrated services" },
    ],
    proofTitle: "Evidence in the code",
    proofs: [
      { label: "CI/CD pipeline", path: ".github/workflows/ci.yml", href: `${GH}/blob/main/.github/workflows/ci.yml` },
      { label: "Kubernetes manifests", path: "infra/k8s/", href: `${GH}/tree/main/infra/k8s` },
      { label: "Kafka consumer test", path: "KafkaConsumerServiceTest.java", href: `${GH}/blob/main/backend/backend/src/test/java/com/tunisietelecom/frauddetection/service/KafkaConsumerServiceTest.java` },
      { label: "ML service tests", path: "ml-service/tests/", href: `${GH}/tree/main/ml-service/tests` },
    ],
    source: "Source code",
    demo: "Live demo",
    exploreTitle: "Explore the portfolio",
    exploreIntro: "Each page links to the code, pipelines and internships that back it up.",
    explore: "Explore",
    cards: [
      { title: "About", text: "My journey from 2020 to 2027 and what I bring to a team.", href: "/about", icon: User, tag: "Profile" },
      { title: "Projects", text: "Fraud detection, MecaManage, IH-AR DevOps, Smart Career Hub and more.", href: "/projects", icon: Briefcase, tag: "Code" },
      { title: "Experience", text: "Internships at Tunisie Telecom and BIAT; CKA certification in preparation.", href: "/certifications", icon: Award, tag: "Internships" },
      { title: "Skills", text: "Docker, Kubernetes, GitHub Actions, Spring Boot, Angular, FastAPI.", href: "/skills", icon: Code, tag: "Stack" },
      { title: "Involvement", text: "IEEE TEK-UP (vice-chair, then advisor), Securinets, IEEEXtreme.", href: "/events", icon: Calendar, tag: "Community" },
      { title: "CV", text: "The PDF version, ready to attach to an application.", href: "/cv", icon: FileText, tag: "PDF" },
    ],
    stackLabel: "Technologies used in my projects",
    ctaTitle: "A final-year internship to fill in 2027?",
    ctaText: "Internship offer, unsolicited application or technical interview: I reply in French or English.",
    langLabel: "Français",
  },
} as const

const STACK = [
  "Docker", "Kubernetes", "GitHub Actions", "GitLab CI", "Jenkins", "SonarCloud", "Kafka",
  "Spring Boot", ".NET", "FastAPI", "Angular", "Next.js", "TypeScript", "PostgreSQL",
  "MongoDB", "scikit-learn", "JUnit 5", "pytest", "Linux", "Bash",
]

/* ─────────────────────────────────────────────────────────────
   Fond animé du héros : un pipeline CI/CD vivant. Des impulsions
   partent de « git push », traversent build, test, scan, image,
   deploy et allument chaque étape. Pause hors écran.
   ───────────────────────────────────────────────────────────── */
const STAGES = ["git push", "build", "test", "scan", "image", "deploy", "k8s"]

type Node = { x: number; y: number; col: number; glow: number; out: number[] }
type Edge = { a: number; b: number }
type Pulse = { edge: number; t: number; speed: number; hue: "teal" | "indigo" | "amber" }

const COLORS = {
  teal: [45, 212, 191],
  indigo: [129, 140, 248],
  amber: [251, 191, 36],
} as const

// Générateur pseudo-aléatoire déterministe : même graphe à chaque chargement, pas de saut à l'hydratation.
function rng(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
  }
}

function buildGraph(w: number, h: number, compact: boolean) {
  const rand = rng(42)
  const nodes: Node[] = []
  const edges: Edge[] = []
  const cols: number[][] = []
  // Bureau : le pipeline occupe la moitié droite, à côté du texte. Mobile : bande basse, derrière un voile.
  const left = compact ? 0.08 : Math.max(0.6, 0.5 + 120 / w)
  const right = compact ? 0.92 : 0.95
  const top = compact ? 0.66 : 0.3
  const bottom = compact ? 0.94 : 0.74

  STAGES.forEach((_, c) => {
    const count = c === 0 || c === STAGES.length - 1 ? 1 : 2 + Math.floor(rand() * 2)
    const ids: number[] = []
    for (let i = 0; i < count; i++) {
      const x = (left + ((right - left) * c) / (STAGES.length - 1)) * w + (rand() - 0.5) * w * 0.02
      const y = (top + ((bottom - top) * (i + 0.5)) / count) * h + (rand() - 0.5) * h * 0.06
      ids.push(nodes.length)
      nodes.push({ x, y, col: c, glow: 0, out: [] })
    }
    cols.push(ids)
  })

  for (let c = 0; c < cols.length - 1; c++) {
    for (const a of cols[c]) {
      const targets = [...cols[c + 1]].sort(() => rand() - 0.5).slice(0, 1 + Math.floor(rand() * 2))
      for (const b of targets) {
        nodes[a].out.push(edges.length)
        edges.push({ a, b })
      }
    }
    // Chaque nœud de la colonne suivante doit être atteignable.
    for (const b of cols[c + 1]) {
      if (!edges.some((e) => e.b === b)) {
        const a = cols[c][Math.floor(rand() * cols[c].length)]
        nodes[a].out.push(edges.length)
        edges.push({ a, b })
      }
    }
  }
  return { nodes, edges, cols }
}

function bezier(ax: number, ay: number, bx: number, by: number, t: number) {
  const mx = (ax + bx) / 2
  const u = 1 - t
  const x = u * u * u * ax + 3 * u * u * t * mx + 3 * u * t * t * mx + t * t * t * bx
  const y = u * u * u * ay + 3 * u * u * t * ay + 3 * u * t * t * by + t * t * t * by
  return [x, y] as const
}

function PipelineCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let w = 0
    let h = 0
    let graph = buildGraph(1, 1, false)
    let pulses: Pulse[] = []
    let raf = 0
    let running = false
    let last = 0
    let spawnClock = 0
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }

    // Halo pré-rendu : bien moins coûteux que shadowBlur à chaque image.
    const sprites = Object.fromEntries(
      (Object.keys(COLORS) as (keyof typeof COLORS)[]).map((k) => {
        const s = document.createElement("canvas")
        s.width = s.height = 64
        const g = s.getContext("2d")!
        const [r, gg, b] = COLORS[k]
        const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32)
        grad.addColorStop(0, `rgba(${r},${gg},${b},1)`)
        grad.addColorStop(0.2, `rgba(${r},${gg},${b},0.55)`)
        grad.addColorStop(1, `rgba(${r},${gg},${b},0)`)
        g.fillStyle = grad
        g.fillRect(0, 0, 64, 64)
        return [k, s]
      }),
    ) as Record<keyof typeof COLORS, HTMLCanvasElement>

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas!.width = Math.round(w * dpr)
      canvas!.height = Math.round(h * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      graph = buildGraph(w, h, w < 1024)
      pulses = []
      draw(0)
    }

    function spawn() {
      const root = graph.cols[0][0]
      const outs = graph.nodes[root].out
      const r = Math.random()
      pulses.push({
        edge: outs[Math.floor(Math.random() * outs.length)],
        t: 0,
        speed: 0.55 + Math.random() * 0.35,
        hue: r < 0.7 ? "teal" : r < 0.92 ? "indigo" : "amber",
      })
      graph.nodes[root].glow = 1
    }

    function pos(n: Node) {
      const depth = 0.012 + (n.col / STAGES.length) * 0.018
      return [n.x + mouse.x * w * depth, n.y + mouse.y * h * depth] as const
    }

    function draw(dt: number) {
      ctx!.clearRect(0, 0, w, h)
      const { nodes, edges, cols } = graph

      // Arêtes
      ctx!.lineWidth = 1
      for (const e of edges) {
        const [ax, ay] = pos(nodes[e.a])
        const [bx, by] = pos(nodes[e.b])
        const mx = (ax + bx) / 2
        ctx!.strokeStyle = "rgba(148,163,184,0.22)"
        ctx!.beginPath()
        ctx!.moveTo(ax, ay)
        ctx!.bezierCurveTo(mx, ay, mx, by, bx, by)
        ctx!.stroke()
      }

      // Impulsions
      for (const p of pulses) {
        const e = edges[p.edge]
        const [ax, ay] = pos(nodes[e.a])
        const [bx, by] = pos(nodes[e.b])
        const [r, g, b] = COLORS[p.hue]
        // Traînée
        for (let k = 6; k >= 1; k--) {
          const tt = Math.max(0, p.t - k * 0.025)
          const [x, y] = bezier(ax, ay, bx, by, tt)
          ctx!.fillStyle = `rgba(${r},${g},${b},${0.05 * (7 - k)})`
          ctx!.beginPath()
          ctx!.arc(x, y, 1.6, 0, Math.PI * 2)
          ctx!.fill()
        }
        const [x, y] = bezier(ax, ay, bx, by, p.t)
        ctx!.drawImage(sprites[p.hue], x - 14, y - 14, 28, 28)
      }

      // Nœuds
      for (const n of nodes) {
        const [x, y] = pos(n)
        n.glow = Math.max(0, n.glow - dt * 1.4)
        if (n.glow > 0.02) {
          ctx!.globalAlpha = n.glow
          const size = 34 + n.glow * 26
          ctx!.drawImage(n.col === STAGES.length - 1 ? sprites.amber : sprites.teal, x - size / 2, y - size / 2, size, size)
          ctx!.globalAlpha = 1
        }
        ctx!.fillStyle = "rgb(12,19,36)"
        ctx!.strokeStyle = `rgba(${n.glow > 0.05 ? "45,212,191" : "148,163,184"},${0.35 + n.glow * 0.65})`
        ctx!.lineWidth = 1.5
        ctx!.beginPath()
        ctx!.arc(x, y, 4.5, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.stroke()
      }

      // Libellés des étapes
      ctx!.font = '500 11px ui-monospace, SFMono-Regular, Menlo, monospace'
      ctx!.textAlign = "center"
      cols.forEach((ids, c) => {
        const top = Math.min(...ids.map((i) => pos(nodes[i])[1]))
        const [x] = pos(nodes[ids[0]])
        const lit = Math.max(...ids.map((i) => nodes[i].glow))
        ctx!.fillStyle = `rgba(156,170,190,${0.32 + lit * 0.5})`
        ctx!.fillText(STAGES[c], x, top - 18)
      })
    }

    function step(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000 || 0)
      last = now
      mouse.x += (mouse.tx - mouse.x) * 0.05
      mouse.y += (mouse.ty - mouse.y) * 0.05

      spawnClock -= dt
      if (spawnClock <= 0) {
        spawn()
        spawnClock = 0.45 + Math.random() * 0.5
      }

      const { nodes, edges } = graph
      const next: Pulse[] = []
      for (const p of pulses) {
        p.t += dt * p.speed
        if (p.t >= 1) {
          const target = nodes[edges[p.edge].b]
          target.glow = 1
          if (target.out.length) {
            next.push({ ...p, t: 0, edge: target.out[Math.floor(Math.random() * target.out.length)] })
          }
        } else next.push(p)
      }
      pulses = next.slice(-60)
      draw(dt)
      if (running) raf = requestAnimationFrame(step)
    }

    function start() {
      if (running || reduced) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(step)
    }
    function stop() {
      running = false
      cancelAnimationFrame(raf)
    }

    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX / window.innerWidth - 0.5
      mouse.ty = e.clientY / window.innerHeight - 0.5
    }
    const onVisibility = () => (document.hidden ? stop() : start())
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
    const ro = new ResizeObserver(resize)

    resize()
    if (reduced) {
      // Image fixe : quelques étapes allumées pour garder la lecture du pipeline.
      graph.nodes.forEach((n, i) => (n.glow = i % 3 === 0 ? 0.8 : 0))
      draw(0)
    }
    ro.observe(canvas)
    io.observe(canvas)
    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />
}

/* ─────────────────────────────────────────────────────────────
   Effets réutilisables
   ───────────────────────────────────────────────────────────── */
function useReveal(dep: unknown) {
  useEffect(() => {
    const root = document.getElementById("home-root")
    root?.classList.add("hm-js")
    const items = Array.from(document.querySelectorAll<HTMLElement>("#home-root [data-reveal]:not([data-visible])"))
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
      const card = (e.target as Element | null)?.closest?.<HTMLElement>(".hm-spot")
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

/** Mots qui s'écrivent puis s'effacent, en boucle. */
function Typewriter({ words }: { words: readonly string[] }) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let i = 0
    let len = words[0].length
    let deleting = true
    const tick = () => {
      let wait = 90
      if (deleting) {
        len--
        wait = 45
        if (len <= 0) {
          deleting = false
          i = (i + 1) % words.length
          wait = 300
        }
      } else {
        len++
        if (len >= words[i].length) {
          deleting = true
          wait = 1800
        }
      }
      setText(words[i].slice(0, Math.max(0, len)))
      timer = window.setTimeout(tick, wait)
    }
    let timer = window.setTimeout(tick, 2200)
    return () => window.clearTimeout(timer)
  }, [words])
  return (
    <span className="relative">
      <span aria-hidden="true" className="bg-gradient-to-r from-teal-300 to-indigo-400 bg-clip-text text-transparent">
        {text}
      </span>
      <span aria-hidden="true" className="hm-caret ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-teal-300" />
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  )
}

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties

/* ─────────────────────────────────────────────────────────────
   Page d'accueil
   ───────────────────────────────────────────────────────────── */
export default function Home() {
  const [lang, setLang] = useLang()
  const t = T[lang]
  useReveal(lang)
  useSpotlight()

  return (
    <div id="home-root" className="relative min-h-screen overflow-x-clip bg-[#070c18] text-slate-200">
      {/* ── HÉROS ─────────────────────────────────────────── */}
      <section aria-labelledby="home-title" className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="hm-drift absolute -left-[12%] -top-[25%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.15),transparent_60%)] blur-2xl" />
          <div className="hm-drift-2 absolute -right-[15%] top-[5%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.17),transparent_60%)] blur-2xl" />
          <div className="hm-drift absolute -bottom-[35%] left-[30%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.07),transparent_60%)] blur-2xl" />
          <div className="hm-grid absolute inset-0" />
          <PipelineCanvas />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,24,0.92)_0%,rgba(7,12,24,0.75)_55%,rgba(7,12,24,0.25)_100%)] lg:bg-[linear-gradient(90deg,#070c18_0%,rgba(7,12,24,0.85)_32%,rgba(7,12,24,0)_62%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070c18] to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <div className="flex justify-end lg:absolute lg:right-8 lg:top-6">
            <button
              type="button"
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              lang={lang === "fr" ? "en" : "fr"}
              className="rounded-full border border-slate-500/30 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur transition-colors hover:border-teal-300 hover:text-teal-300"
            >
              {t.langLabel}
            </button>
          </div>

          <div className="max-w-2xl">
            <div className="hm-in flex flex-wrap items-center gap-4" style={delay(0)}>
              <span className="relative grid h-16 w-16 shrink-0 place-items-center">
                <span aria-hidden="true" className="hm-spin absolute inset-0 rounded-full bg-[conic-gradient(#2dd4bf,#818cf8,#fbbf24,#2dd4bf)]" />
                <Image src="/iheb.jpeg" alt="Iheb Eddine Saafi" width={400} height={358} priority className="relative h-[58px] w-[58px] rounded-full border-[3px] border-[#070c18] object-cover" />
              </span>
              <p className="inline-flex items-center gap-2.5 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-sm text-amber-300">
                <span className="relative flex h-2 w-2">
                  <span aria-hidden="true" className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
                </span>
                {t.badge}
              </p>
            </div>

            <p className="hm-in mt-8 text-lg text-slate-400" style={delay(100)}>
              {t.hello}
            </p>
            <h1 id="home-title" className="hm-in mt-1 text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl" style={delay(180)}>
              <span className="hm-sheen">Iheb Eddine Saafi</span>
            </h1>
            <p className="hm-in mt-5 text-2xl font-medium text-white sm:text-3xl" style={delay(280)}>
              {t.rolePrefix} <Typewriter words={t.roles} />
            </p>
            <p className="hm-in mt-5 max-w-xl leading-relaxed text-slate-400" style={delay(360)}>
              {t.lead}
            </p>
            <p className="hm-in mt-4 flex items-start gap-2 text-sm text-slate-400" style={delay(420)}>
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              {t.where}
            </p>

            <div className="hm-in mt-9 flex flex-wrap gap-3" style={delay(500)}>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-teal-300 px-5 py-3 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
              >
                <Download className="h-4 w-4" />
                {t.cv}
              </a>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
              >
                {t.projects}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="https://github.com/iheb137" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-12 w-12 place-items-center rounded-xl border border-slate-500/30 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60 hover:text-teal-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/saafi-iheb-8373211b8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center rounded-xl border border-slate-500/30 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60 hover:text-teal-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <a href="#stats" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-400 transition-colors hover:text-teal-300 md:flex">
          <span className="flex h-9 w-5 justify-center rounded-full border border-slate-500/40 pt-1.5">
            <span aria-hidden="true" className="h-2 w-0.5 animate-bounce rounded-full bg-current" />
          </span>
          {t.scroll}
        </a>
      </section>

      {/* ── CHIFFRES ──────────────────────────────────────── */}
      <section id="stats" aria-label={lang === "fr" ? "Chiffres clés" : "Key figures"} className="relative border-y border-slate-500/10 bg-[#0c1324]/80">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 md:grid-cols-4">
          {t.stats.map((s, i) => (
            <div key={s.label} data-reveal style={delay(i * 100)} className="flex flex-col-reverse px-2 py-10 text-center md:border-l md:border-slate-500/10 md:first:border-l-0">
              <dt className="mt-2 text-sm text-slate-300">
                {s.label}
                <span className="mt-0.5 block text-xs text-slate-400">{s.sub}</span>
              </dt>
              <dd className="bg-gradient-to-br from-teal-300 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── PROJET PHARE ──────────────────────────────────── */}
      <section aria-labelledby="featured-title" className="relative py-20 md:py-28">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-0 h-[36rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(129,140,248,0.12),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div data-reveal className="mb-10">
            <p className="text-sm font-medium text-teal-300">{t.featuredKicker}</p>
            <span aria-hidden="true" className="hm-bar mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-teal-300 via-indigo-400 to-transparent" />
          </div>

          <article data-reveal className="hm-spot relative grid gap-10 rounded-3xl border border-slate-500/20 bg-[#0c1324]/80 p-6 backdrop-blur-md sm:p-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <p className="inline-flex rounded-2xl border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs text-amber-300">{t.featuredContext}</p>
              <h2 id="featured-title" className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">
                {t.featuredTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-400">{t.featuredText}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {["Spring Boot", "Angular", "FastAPI", "scikit-learn", "Kafka", "PostgreSQL", "Docker", "Kubernetes", "GitHub Actions"].map((s) => (
                  <li key={s} className="rounded-md border border-slate-500/20 bg-white/[0.04] px-2 py-0.5 text-xs text-slate-300">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={GH} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-teal-300 px-5 py-2.5 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]">
                  <Github className="h-4 w-4" />
                  {t.source}
                </a>
                <a href="https://fraud-detection-platform-brown.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-white/5 px-5 py-2.5 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60">
                  {t.demo}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <dl className="grid grid-cols-2 gap-3">
                {t.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col-reverse rounded-2xl border border-slate-500/15 bg-[#070c18]/70 px-4 py-4">
                    <dt className="mt-2 text-sm leading-snug text-slate-400">{m.label}</dt>
                    <dd className="bg-gradient-to-br from-teal-300 to-indigo-400 bg-clip-text text-4xl font-bold leading-none text-transparent">
                      <CountUp value={m.value} />
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="overflow-hidden rounded-2xl border border-slate-500/15 bg-[#070c18]/90">
                <div className="flex items-center gap-2 border-b border-slate-500/15 px-4 py-2.5">
                  <span aria-hidden="true" className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-300/70" />
                  </span>
                  <p className="ml-2 text-sm font-medium text-white">{t.proofTitle}</p>
                </div>
                <ul className="divide-y divide-slate-500/10">
                  {t.proofs.map((p) => (
                    <li key={p.href}>
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 px-4 py-2.5 transition-colors hover:bg-teal-300/[0.06]">
                        <span className="text-sm text-slate-200">
                          <span aria-hidden="true" className="mr-2 font-mono text-teal-300">✓</span>
                          {p.label}
                        </span>
                        <span className="inline-flex items-center gap-1.5 break-all font-mono text-xs text-slate-400 group-hover:text-teal-300">
                          {p.path}
                          <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── EXPLORER ──────────────────────────────────────── */}
      <section aria-labelledby="explore-title" className="relative border-y border-slate-500/10 bg-[#0c1324]/70 py-20 md:py-28">
        <div aria-hidden="true" className="hm-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div data-reveal className="mb-12">
            <h2 id="explore-title" className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              {t.exploreTitle}
            </h2>
            <span aria-hidden="true" className="hm-bar mt-4 block h-[3px] w-16 rounded-full bg-gradient-to-r from-teal-300 via-indigo-400 to-transparent" />
            <p className="mt-5 max-w-xl text-slate-400">{t.exploreIntro}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.cards.map((c, i) => {
              const Icon = c.icon as LucideIcon
              return (
                <Link
                  key={c.href}
                  href={c.href}
                  data-reveal
                  style={delay((i % 3) * 110)}
                  className="hm-spot group relative flex flex-col rounded-2xl border border-slate-500/20 bg-[#070c18]/80 p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-teal-300/30 bg-teal-300/10 text-teal-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-slate-500/20 px-2.5 py-0.5 text-xs text-slate-400">{c.tag}</span>
                  </span>
                  <span className="mt-5 text-lg font-semibold text-white">{c.title}</span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{c.text}</span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-300">
                    {t.explore}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ──────────────────────────────────── */}
      <section aria-label={t.stackLabel} className="relative overflow-hidden border-b border-slate-500/10 py-6">
        <p className="sr-only">{STACK.join(", ")}</p>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#070c18] to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#070c18] to-transparent" />
        <div aria-hidden="true" className="hm-marquee flex w-max">
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
      <section aria-labelledby="cta-title" className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div data-reveal className="hm-conic relative overflow-hidden rounded-3xl p-px">
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
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-slate-500/30 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
              >
                <Download className="h-4 w-4" />
                {t.cv}
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes hm-in { from { opacity: 0; transform: translate3d(0, 24px, 0) } to { opacity: 1; transform: none } }
        @keyframes hm-drift { 0%,100% { transform: translate3d(0,0,0) scale(1) } 33% { transform: translate3d(6%,-4%,0) scale(1.08) } 66% { transform: translate3d(-5%,5%,0) scale(.95) } }
        @keyframes hm-spin { to { transform: rotate(360deg) } }
        @keyframes hm-marquee { to { transform: translate3d(-50%,0,0) } }
        @keyframes hm-sheen { from { background-position: 100% 0 } to { background-position: 0% 0 } }
        @keyframes hm-blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }

        .hm-in { animation: hm-in .9s cubic-bezier(.2,.7,.2,1) both; animation-delay: var(--d, 0ms) }
        .hm-drift { animation: hm-drift 24s ease-in-out infinite }
        .hm-drift-2 { animation: hm-drift 32s ease-in-out infinite reverse }
        .hm-spin { animation: hm-spin 7s linear infinite }
        .hm-caret { animation: hm-blink 1s step-end infinite }
        .hm-marquee { animation: hm-marquee 38s linear infinite }
        .hm-marquee:hover { animation-play-state: paused }
        .hm-sheen {
          background: linear-gradient(100deg, #fff 20%, #2dd4bf 45%, #818cf8 65%, #fff 90%);
          background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: hm-sheen 2.4s ease-out .5s both;
        }
        .hm-grid {
          background-image: linear-gradient(rgba(148,163,184,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.07) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
        }

        .hm-js [data-reveal] { opacity: 0; transform: translate3d(0, 28px, 0); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); transition-delay: var(--d, 0ms) }
        .hm-js [data-reveal][data-visible] { opacity: 1; transform: none }
        .hm-bar { transform: scaleX(0); transform-origin: left; transition: transform .9s cubic-bezier(.2,.7,.2,1) .2s }
        [data-visible] .hm-bar, #home-root:not(.hm-js) .hm-bar { transform: scaleX(1) }

        .hm-spot { isolation: isolate }
        .hm-spot::before {
          content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px; pointer-events: none;
          background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.8), rgba(129,140,248,.35) 40%, transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .35s;
        }
        .hm-spot::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;
          background: radial-gradient(480px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.08), transparent 60%);
          opacity: 0; transition: opacity .35s;
        }
        .hm-spot:hover::before, .hm-spot:hover::after, .hm-spot:focus-visible::before { opacity: 1 }

        .hm-conic::before {
          content: ""; position: absolute; inset: -150%;
          background: conic-gradient(from 0deg, transparent 0 70%, #2dd4bf 80%, #818cf8 90%, transparent 100%);
          animation: hm-spin 7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hm-in, .hm-drift, .hm-drift-2, .hm-spin, .hm-marquee, .hm-sheen, .hm-caret, .hm-conic::before { animation: none !important }
          .hm-sheen { background-position: 0 0 }
          .hm-js [data-reveal] { opacity: 1; transform: none; transition: none }
          .hm-bar { transform: scaleX(1) }
        }
      `}</style>
    </div>
  )
}
