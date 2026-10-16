"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type CSSProperties } from "react"
import {
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Monitor,
  Phone,
} from "lucide-react"

/* ─────────────────────────────────────────────────────────────
   Langue : clé partagée "portfolio-lang". Le CV proposé suit la langue.
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

/** Fichiers PDF dans public/ : remplacer ces fichiers suffit pour mettre le CV à jour. */
const PDF = {
  fr: { href: "/cv.pdf", file: "CV_Iheb_Eddine_Saafi_FR.pdf", preview: "/cv-preview-fr.webp" },
  en: { href: "/cv-en.pdf", file: "CV_Iheb_Eddine_Saafi_EN.pdf", preview: "/cv-preview-en.webp" },
}

const T = {
  fr: {
    kicker: "Curriculum vitae",
    title: "Mon CV, en une page",
    intro: "Une seule colonne, lisible par les logiciels de tri des candidatures. Disponible en français et en anglais.",
    badge: "PFE de 6 mois · janvier ou février 2027 · France ou Tunisie",
    updated: "Mis à jour en octobre 2026",
    download: "Télécharger en français",
    downloadOther: "Download in English",
    open: "Ouvrir dans un nouvel onglet",
    tabPdf: "Aperçu PDF",
    tabWeb: "Version web",
    previewAlt: "Aperçu de la première page du CV en français",
    zoom: "Cliquer pour ouvrir le PDF",
    summary:
      "Élève ingénieur en génie logiciel. Je conçois des applications de bout en bout et je les livre avec ce qui les rend exploitables : tests automatisés, images Docker, pipelines CI/CD et manifestes Kubernetes.",
    expTitle: "Expérience professionnelle",
    exp: [
      {
        role: "Stage ingénieur — développement et MLOps",
        org: "Tunisie Telecom, DSI · Tunis",
        when: "Juil. – août 2026",
        points: [
          "Plateforme de détection des appels frauduleux conçue et réalisée seul : Spring Boot, Angular, FastAPI.",
          "Ingestion temps réel via Kafka, consumer idempotent ; modèle Random Forest avec réentraînement validé par les analystes.",
          "19 tests JUnit / Mockito et tests pytest en CI ; 3 images Docker publiées ; déploiement Kubernetes en 8 manifestes.",
        ],
      },
      {
        role: "Stage DevOps",
        org: "BIAT Innovation & Technology · Tunis",
        when: "Août – sept. 2025",
        points: [
          "Conception et mise en place d'un pipeline CI/CD Jenkins ; scripts Bash d'automatisation.",
          "Conteneurisation d'applications métier avec Docker et orchestration sur Kubernetes.",
        ],
      },
    ],
    projTitle: "Projets",
    proj: [
      { name: "MecaManage", ctx: "Équipe de 4", text: "Backend .NET 8 en Clean Architecture, JWT, RBAC, tests xUnit, workflows n8n." },
      { name: "IH-AR Hotel Management", ctx: "Binôme", text: "Pipeline GitLab CI en 4 étapes, PHPUnit, PHPStan, SonarCloud, Docker Hub." },
      { name: "Smart Career Hub", ctx: "Académique", text: "Spring Boot, Angular et FastAPI avec LLaMA 3 pour l'analyse de CV." },
      { name: "iHar", ctx: "Personnel", text: "Site PHP déployé sur Kubernetes par un pipeline Jenkins." },
    ],
    skillsTitle: "Compétences",
    skills: [
      ["DevOps et CI/CD", "Docker, GitHub Actions, GitLab CI, Jenkins, SonarCloud, Bash"],
      ["Infrastructure", "Kubernetes, Kafka, nginx, Linux, Vercel"],
      ["Backend", "Java / Spring Boot, C# / .NET, Python / FastAPI, PHP"],
      ["Frontend", "Angular, React / Next.js, TypeScript"],
      ["Données et IA", "PostgreSQL, MySQL, MongoDB, scikit-learn, LLM, RAG"],
      ["Tests", "JUnit 5, Mockito, xUnit, pytest, PHPUnit, Playwright"],
    ],
    eduTitle: "Formation",
    edu: [
      ["Cycle ingénieur, Génie Logiciel et Systèmes d'Information", "TEK-UP Université · 2024 – 2027"],
      ["Classes préparatoires Mathématiques-Physique", "IPEI El Manar · 2020 – 2024"],
      ["Certified Kubernetes Administrator (CKA)", "En préparation"],
    ],
    moreTitle: "Engagement et langues",
    more: [
      "IEEE TEK-UP : vice-président (2025), conseiller depuis 2026",
      "IEEEXtreme 18.0 et 19.0 · TSYP 12 et 13 · Securinets",
      "Arabe (maternelle) · Français (bilingue) · Anglais (courant)",
    ],
    readyTitle: "Prêt pour vos candidatures",
    ready: [
      "Une page, une colonne, sans tableau : lu correctement par les ATS",
      "Chaque chiffre est vérifiable dans un dépôt GitHub",
      "Le même contenu que ce portfolio",
    ],
    ctaTitle: "Le CV ne dit pas tout",
    ctaText: "Les projets montrent l'architecture, les tests et les pipelines. Pour un entretien, écrivez-moi.",
    projects: "Voir mes projets",
    contact: "Me contacter",
    langLabel: "English",
  },
  en: {
    kicker: "Résumé",
    title: "My CV, on one page",
    intro: "A single column, readable by applicant tracking systems. Available in English and French.",
    badge: "6-month internship · January or February 2027 · France or Tunisia",
    updated: "Updated October 2026",
    download: "Download in English",
    downloadOther: "Télécharger en français",
    open: "Open in a new tab",
    tabPdf: "PDF preview",
    tabWeb: "Web version",
    previewAlt: "Preview of the first page of the English CV",
    zoom: "Click to open the PDF",
    summary:
      "Software engineering student. I build applications end to end and ship them with what makes them operable: automated tests, Docker images, CI/CD pipelines and Kubernetes manifests.",
    expTitle: "Work experience",
    exp: [
      {
        role: "Engineering intern — development and MLOps",
        org: "Tunisie Telecom, IT department · Tunis",
        when: "Jul – Aug 2026",
        points: [
          "Fraudulent call detection platform designed and built on my own: Spring Boot, Angular, FastAPI.",
          "Real-time ingestion through Kafka, idempotent consumer; Random Forest model with analyst-validated retraining.",
          "19 JUnit / Mockito tests and pytest tests in CI; 3 published Docker images; Kubernetes deployment in 8 manifests.",
        ],
      },
      {
        role: "DevOps intern",
        org: "BIAT Innovation & Technology · Tunis",
        when: "Aug – Sep 2025",
        points: [
          "Designed and set up a Jenkins CI/CD pipeline; Bash automation scripts.",
          "Containerized business applications with Docker and orchestrated them on Kubernetes.",
        ],
      },
    ],
    projTitle: "Projects",
    proj: [
      { name: "MecaManage", ctx: "Team of 4", text: "Clean Architecture .NET 8 backend, JWT, RBAC, xUnit tests, n8n workflows." },
      { name: "IH-AR Hotel Management", ctx: "Pair", text: "Four-stage GitLab CI pipeline, PHPUnit, PHPStan, SonarCloud, Docker Hub." },
      { name: "Smart Career Hub", ctx: "Academic", text: "Spring Boot, Angular and FastAPI with LLaMA 3 for CV analysis." },
      { name: "iHar", ctx: "Personal", text: "PHP site deployed to Kubernetes by a Jenkins pipeline." },
    ],
    skillsTitle: "Skills",
    skills: [
      ["DevOps and CI/CD", "Docker, GitHub Actions, GitLab CI, Jenkins, SonarCloud, Bash"],
      ["Infrastructure", "Kubernetes, Kafka, nginx, Linux, Vercel"],
      ["Backend", "Java / Spring Boot, C# / .NET, Python / FastAPI, PHP"],
      ["Frontend", "Angular, React / Next.js, TypeScript"],
      ["Data and AI", "PostgreSQL, MySQL, MongoDB, scikit-learn, LLMs, RAG"],
      ["Testing", "JUnit 5, Mockito, xUnit, pytest, PHPUnit, Playwright"],
    ],
    eduTitle: "Education",
    edu: [
      ["Engineering degree, Software Engineering and Information Systems", "TEK-UP University · 2024 – 2027"],
      ["Preparatory classes, Mathematics-Physics", "IPEI El Manar · 2020 – 2024"],
      ["Certified Kubernetes Administrator (CKA)", "In preparation"],
    ],
    moreTitle: "Involvement and languages",
    more: [
      "IEEE TEK-UP: vice-chair (2025), advisor since 2026",
      "IEEEXtreme 18.0 and 19.0 · TSYP 12 and 13 · Securinets",
      "Arabic (native) · French (bilingual) · English (fluent)",
    ],
    readyTitle: "Ready for your applications",
    ready: [
      "One page, one column, no tables: parsed correctly by ATS",
      "Every figure can be checked in a GitHub repository",
      "The same content as this portfolio",
    ],
    ctaTitle: "The CV doesn't tell everything",
    ctaText: "The projects show the architecture, tests and pipelines. For an interview, write to me.",
    projects: "See my projects",
    contact: "Contact me",
    langLabel: "Français",
  },
} as const

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
    document.getElementById("cv-root")?.classList.add("cv-js")
    const items = Array.from(document.querySelectorAll<HTMLElement>("#cv-root [data-reveal]:not([data-visible])"))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}

/** Feuille de papier qui s'incline légèrement vers la souris. */
function TiltPaper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let raf = 0
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--rx", `${(-y * 5).toFixed(2)}deg`)
        el.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`)
        el.style.setProperty("--gx", `${(x + 0.5) * 100}%`)
        el.style.setProperty("--gy", `${(y + 0.5) * 100}%`)
      })
    }
    const onLeave = () => {
      el.style.setProperty("--rx", "0deg")
      el.style.setProperty("--ry", "0deg")
    }
    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", onLeave)
    return () => {
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div className="[perspective:1600px]">
      <div ref={ref} className="cv-tilt relative">
        {children}
      </div>
    </div>
  )
}

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 flex items-center gap-2.5 text-sm font-semibold text-teal-300">
      <span aria-hidden="true" className="h-4 w-1 rounded-full bg-gradient-to-b from-teal-300 to-indigo-400" />
      {children}
    </h3>
  )
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function CVPage() {
  const [lang, setLang] = useLang()
  const [tab, setTab] = useState<"pdf" | "web">("pdf")
  const t = T[lang]
  const pdf = PDF[lang]
  const other = PDF[lang === "fr" ? "en" : "fr"]
  useReveal(lang + tab)

  return (
    <div id="cv-root" className="relative min-h-screen overflow-x-clip bg-[#070c18] text-slate-200">
      <NetworkBackground />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="cv-drift absolute -left-[15%] -top-[20%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.12),transparent_60%)] blur-2xl" />
        <div className="cv-drift-2 absolute -right-[20%] top-[30%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.15),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-14 md:pt-20">
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

        <div className="mt-4 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          {/* ── COLONNE GAUCHE : présentation et actions ──────── */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="cv-in text-sm font-medium text-teal-300" style={delay(0)}>
              {t.kicker}
            </p>
            <h1 className="cv-in mt-3 text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl" style={delay(100)}>
              <span className="cv-sheen">{t.title}</span>
            </h1>
            <p className="cv-in mt-5 text-lg leading-relaxed text-slate-400" style={delay(180)}>
              {t.intro}
            </p>
            <p className="cv-in mt-6 inline-flex items-center gap-2.5 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-sm text-amber-300" style={delay(260)}>
              <span className="relative flex h-2 w-2">
                <span aria-hidden="true" className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
              </span>
              {t.badge}
            </p>

            <div className="cv-in mt-8 flex flex-wrap gap-3" style={delay(340)}>
              <a
                href={pdf.href}
                download={pdf.file}
                className="cv-shine relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-xl bg-teal-300 px-5 py-3 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
              >
                <Download className="h-4 w-4" />
                {t.download}
              </a>
              <a
                href={other.href}
                download={other.file}
                lang={lang === "fr" ? "en" : "fr"}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-slate-500/30 bg-white/5 px-5 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
              >
                <Download className="h-4 w-4" />
                {t.downloadOther}
              </a>
            </div>
            <a href={pdf.href} target="_blank" rel="noopener noreferrer" className="cv-in mt-4 inline-flex items-center gap-1.5 text-sm text-teal-300 underline decoration-teal-300/30 underline-offset-4 hover:decoration-teal-300" style={delay(400)}>
              {t.open}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <div className="cv-in mt-10 rounded-2xl border border-slate-500/20 bg-[#0c1324]/75 p-6 backdrop-blur" style={delay(460)}>
              <p className="font-semibold text-white">{t.readyTitle}</p>
              <ul className="mt-4 space-y-3">
                {t.ready.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 space-y-2 border-t border-slate-500/15 pt-5 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-teal-300" aria-hidden="true" />
                  <a href="mailto:saafiiheb.si@gmail.com" className="hover:text-teal-300">
                    saafiiheb.si@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-teal-300" aria-hidden="true" />
                  <a href="tel:+21628478199" className="hover:text-teal-300">
                    +216 28 478 199
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-teal-300" aria-hidden="true" />
                  <a href="https://www.linkedin.com/in/saafi-iheb-8373211b8" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                    linkedin.com/in/saafi-iheb-8373211b8
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-teal-300" aria-hidden="true" />
                  <a href="https://github.com/iheb137" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                    github.com/iheb137
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── COLONNE DROITE : aperçu ───────────────────────── */}
          <div className="cv-in" style={delay(200)}>
            <div role="tablist" aria-label={t.kicker} className="mb-5 inline-flex rounded-full border border-slate-500/25 bg-[#0c1324]/80 p-1 backdrop-blur">
              {(
                [
                  ["pdf", t.tabPdf, FileText],
                  ["web", t.tabWeb, Monitor],
                ] as const
              ).map(([id, label, Icon]) => (
                <button
                  key={id}
                  role="tab"
                  type="button"
                  aria-selected={tab === id}
                  onClick={() => setTab(id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
                    tab === id ? "bg-teal-300 text-[#070c18] shadow-[0_8px_24px_-10px_rgba(45,212,191,0.8)]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>

            <TiltPaper>
              {tab === "pdf" ? (
                <a
                  key={`pdf-${lang}`}
                  href={pdf.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-swap group relative block overflow-hidden rounded-2xl border border-slate-500/25 bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8),0_0_0_1px_rgba(45,212,191,0.15)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={pdf.preview} alt={t.previewAlt} width={1241} height={1754} className="block h-auto w-full" />
                  <span aria-hidden="true" className="cv-scan pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-teal-300/20 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center gap-2 bg-gradient-to-t from-[#070c18]/90 to-transparent px-4 pb-5 pt-16 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    {t.zoom}
                  </span>
                </a>
              ) : (
                <article key={`web-${lang}`} className="cv-swap relative overflow-hidden rounded-2xl border border-slate-500/25 bg-[#0c1324]/90 p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur sm:p-9">
                  <span aria-hidden="true" className="cv-scan pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-teal-300/[0.06] to-transparent" />
                  <header className="border-b border-slate-500/15 pb-5">
                    <h2 className="text-2xl font-bold text-white">Iheb Eddine Saafi</h2>
                    <p className="mt-1 text-teal-300">DevOps · Cloud · Full-stack</p>
                    <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        Tunis
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {t.updated}
                      </span>
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">{t.summary}</p>
                  </header>

                  <section className="mt-6">
                    <Heading>{t.expTitle}</Heading>
                    <ol className="space-y-5">
                      {t.exp.map((x) => (
                        <li key={x.role} className="relative border-l border-slate-500/25 pl-5">
                          <span aria-hidden="true" className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-teal-300 bg-[#0c1324]" />
                          <p className="flex flex-wrap items-baseline justify-between gap-x-4">
                            <span className="font-semibold text-white">{x.role}</span>
                            <span className="font-mono text-xs text-slate-400">{x.when}</span>
                          </p>
                          <p className="text-sm text-slate-400">{x.org}</p>
                          <ul className="mt-2 space-y-1.5">
                            {x.points.map((pt) => (
                              <li key={pt} className="flex gap-2.5 text-sm text-slate-300">
                                <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-teal-300" />
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="mt-7">
                    <Heading>{t.projTitle}</Heading>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {t.proj.map((p) => (
                        <li key={p.name} className="rounded-xl border border-slate-500/15 bg-white/[0.02] p-3.5 transition-colors hover:border-teal-300/40">
                          <p className="flex items-baseline justify-between gap-3">
                            <span className="font-medium text-white">{p.name}</span>
                            <span className="text-[11px] text-slate-400">{p.ctx}</span>
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-400">{p.text}</p>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="mt-7">
                    <Heading>{t.skillsTitle}</Heading>
                    <dl className="space-y-1.5 text-sm">
                      {t.skills.map(([k, v]) => (
                        <div key={k} className="grid gap-x-4 sm:grid-cols-[9rem_minmax(0,1fr)]">
                          <dt className="font-medium text-white">{k}</dt>
                          <dd className="text-slate-400">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </section>

                  <div className="mt-7 grid gap-7 sm:grid-cols-2">
                    <section>
                      <Heading>{t.eduTitle}</Heading>
                      <ul className="space-y-2.5">
                        {t.edu.map(([a, b]) => (
                          <li key={a} className="flex gap-2.5 text-sm">
                            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" aria-hidden="true" />
                            <span>
                              <span className="block text-white">{a}</span>
                              <span className="text-xs text-slate-400">{b}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <Heading>{t.moreTitle}</Heading>
                      <ul className="space-y-2.5">
                        {t.more.map((m) => (
                          <li key={m} className="flex gap-2.5 text-sm text-slate-300">
                            <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </article>
              )}
              <span aria-hidden="true" className="cv-glare pointer-events-none absolute inset-0 rounded-2xl" />
            </TiltPaper>
          </div>
        </div>

        {/* ── APPEL À L'ACTION ──────────────────────────────── */}
        <section data-reveal aria-labelledby="cv-cta" className="cv-conic relative mt-24 overflow-hidden rounded-3xl p-px">
          <div className="relative rounded-3xl bg-[#0c1324] px-7 py-12 text-center md:px-16 md:py-14">
            <h2 id="cv-cta" className="text-3xl font-bold text-white md:text-4xl">
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
        </section>
      </div>

      <style>{`
        @keyframes cv-in { from { opacity: 0; transform: translate3d(0, 24px, 0) } to { opacity: 1; transform: none } }
        @keyframes cv-swap { from { opacity: 0; transform: translate3d(0, 14px, 0) scale(.985) } to { opacity: 1; transform: none } }
        @keyframes cv-drift { 0%,100% { transform: translate3d(0,0,0) scale(1) } 33% { transform: translate3d(6%,-4%,0) scale(1.08) } 66% { transform: translate3d(-5%,5%,0) scale(.95) } }
        @keyframes cv-rot { to { transform: rotate(360deg) } }
        @keyframes cv-sheen { from { background-position: 100% 0 } to { background-position: 0% 0 } }
        @keyframes cv-scan { from { top: -6rem } to { top: 100% } }
        @keyframes cv-shine { 0%, 70% { transform: translateX(-120%) skewX(-20deg) } 100% { transform: translateX(220%) skewX(-20deg) } }

        .cv-in { animation: cv-in .9s cubic-bezier(.2,.7,.2,1) both; animation-delay: var(--d, 0ms) }
        .cv-swap { animation: cv-swap .5s cubic-bezier(.2,.7,.2,1) both }
        .cv-drift { animation: cv-drift 24s ease-in-out infinite }
        .cv-drift-2 { animation: cv-drift 32s ease-in-out infinite reverse }
        .cv-scan { animation: cv-scan 5s linear infinite }
        .cv-sheen {
          background: linear-gradient(100deg, #fff 20%, #2dd4bf 45%, #818cf8 65%, #fff 90%);
          background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: cv-sheen 2.4s ease-out .4s both;
        }
        .cv-shine::after {
          content: ""; position: absolute; inset: 0; width: 40%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
          animation: cv-shine 3.6s ease-in-out 1.2s infinite;
        }

        .cv-tilt {
          transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
          transform-style: preserve-3d;
          transition: transform .25s ease-out;
        }
        .cv-glare {
          background: radial-gradient(600px circle at var(--gx, 50%) var(--gy, 0%), rgba(45,212,191,.10), transparent 45%);
          opacity: 0; transition: opacity .3s;
        }
        .cv-tilt:hover .cv-glare { opacity: 1 }

        .cv-js [data-reveal] { opacity: 0; transform: translate3d(0, 28px, 0); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1) }
        .cv-js [data-reveal][data-visible] { opacity: 1; transform: none }

        .cv-conic::before {
          content: ""; position: absolute; inset: -150%;
          background: conic-gradient(from 0deg, transparent 0 70%, #2dd4bf 80%, #818cf8 90%, transparent 100%);
          animation: cv-rot 7s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .cv-in, .cv-swap, .cv-drift, .cv-drift-2, .cv-scan, .cv-sheen, .cv-shine::after, .cv-conic::before { animation: none !important }
          .cv-sheen { background-position: 0 0 }
          .cv-tilt { transform: none !important }
          .cv-js [data-reveal] { opacity: 1; transform: none; transition: none }
        }
      `}</style>
    </div>
  )
}
