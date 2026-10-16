"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react"
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Check,
  Clock,
  Copy,
  Download,
  ExternalLink,
  FolderGit2,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react"

/* ─────────────────────────────────────────────────────────────
   Langue : clé partagée "portfolio-lang".
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
   Coordonnées (identiques au CV) et contenu.
   ───────────────────────────────────────────────────────────── */
const EMAIL = "saafiiheb.si@gmail.com"
const SCHOOL_EMAIL = "iheb.saafi@tek-up.tn"
const PHONE = { display: "+216 28 478 199", href: "tel:+21628478199", raw: "+21628478199" }
const GITHUB = "https://github.com/iheb137"
const LINKEDIN = "https://www.linkedin.com/in/saafi-iheb-8373211b8"

type Channel = {
  id: string
  icon: LucideIcon
  label: string
  value: string
  href: string
  copy?: string
  external?: boolean
  accent: "teal" | "indigo" | "amber"
  note: string
}

type Topic = { id: string; label: string; subject: string; body: string }

const T = {
  fr: {
    langLabel: "English",
    badge: "Disponible pour un PFE · janvier ou février 2027",
    kicker: "Contact",
    title: "Parlons de votre projet de PFE",
    lead:
      "Offre de stage, candidature spontanée ou entretien technique : écrivez-moi directement. Je réponds en français ou en anglais.",
    ping: "ping iheb",
    pingReply: "réponse de iheb : disponible pour un PFE de 6 mois",
    channelsTitle: "Me joindre",
    copy: "Copier",
    copied: "Copié",
    copyLabel: (what: string) => `Copier ${what}`,
    channels: [
      { id: "mail", icon: Mail, label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}`, copy: EMAIL, accent: "teal", note: "Le plus rapide" },
      { id: "school", icon: GraduationCap, label: "E-mail école", value: SCHOOL_EMAIL, href: `mailto:${SCHOOL_EMAIL}`, copy: SCHOOL_EMAIL, accent: "indigo", note: "Conventions de stage" },
      { id: "phone", icon: Phone, label: "Téléphone / WhatsApp", value: PHONE.display, href: PHONE.href, copy: PHONE.raw, accent: "amber", note: "Heure de Tunis" },
      { id: "linkedin", icon: Linkedin, label: "LinkedIn", value: "saafi-iheb-8373211b8", href: LINKEDIN, external: true, accent: "indigo", note: "Profil et messages" },
      { id: "github", icon: Github, label: "GitHub", value: "github.com/iheb137", href: GITHUB, external: true, accent: "teal", note: "Code source des projets" },
    ] as Channel[],
    composerTitle: "Écrire un message",
    composerIntro:
      "Choisissez un sujet : le message se pré-remplit et s'ouvre dans votre messagerie. Rien n'est envoyé ni enregistré par ce site.",
    topicLabel: "Sujet",
    topics: [
      {
        id: "offer",
        label: "Offre de PFE",
        subject: "Offre de PFE – {company}",
        body: "Bonjour Iheb,\n\nNous avons une offre de stage de fin d'études (6 mois, à partir de janvier ou février 2027) qui pourrait vous intéresser :\n\n– Intitulé :\n– Lieu :\n– Équipe / technologies :\n\nSeriez-vous disponible pour un premier échange ?\n\n{name}",
      },
      {
        id: "interview",
        label: "Entretien",
        subject: "Proposition d'entretien – {company}",
        body: "Bonjour Iheb,\n\nVotre profil a retenu notre attention. Nous aimerions organiser un entretien.\n\nCréneaux proposés :\n– \n– \n\n{name}",
      },
      {
        id: "question",
        label: "Question technique",
        subject: "Question sur un de vos projets",
        body: "Bonjour Iheb,\n\nJ'ai une question sur le projet :\n\n\n{name}",
      },
      {
        id: "other",
        label: "Autre",
        subject: "Prise de contact – {company}",
        body: "Bonjour Iheb,\n\n\n\n{name}",
      },
    ] as Topic[],
    nameLabel: "Votre nom",
    namePh: "Prénom Nom",
    companyLabel: "Entreprise",
    companyPh: "Nom de l'entreprise",
    messageLabel: "Message",
    send: "Ouvrir dans ma messagerie",
    sent: "Votre messagerie s'est ouverte. Si rien ne s'est passé, copiez l'adresse ci-contre.",
    defaultCompany: "votre entreprise",
    availTitle: "Disponibilité",
    avail: [
      { icon: Briefcase, label: "Stage de fin d'études (PFE)", value: "6 mois" },
      { icon: Calendar, label: "Début", value: "Janvier ou février 2027" },
      { icon: MapPin, label: "Lieu", value: "France ou Tunisie" },
      { icon: Languages, label: "Entretiens", value: "Français ou anglais" },
    ],
    fieldsTitle: "Domaines recherchés",
    fields: ["DevOps et CI/CD", "Cloud et infrastructure", "Full-stack", "Backend et architecture", "IA appliquée au logiciel"],
    clockTitle: "Heure à Tunis",
    clockNote: "Tunis · UTC+1",
    dayStates: { day: "Journée en cours à Tunis", evening: "Soirée à Tunis", night: "Nuit à Tunis" },
    cvTitle: "Mon CV",
    cvFr: "CV en français",
    cvEn: "CV en anglais",
    nextTitle: "Avant de m'écrire",
    next: [
      { href: "/projects", label: "Voir les projets", icon: FolderGit2 },
      { href: "/certifications", label: "Voir l'expérience", icon: Briefcase },
    ],
  },
  en: {
    langLabel: "Français",
    badge: "Available for a final-year internship · January or February 2027",
    kicker: "Contact",
    title: "Let's talk about your internship project",
    lead:
      "Internship offer, speculative application or technical interview: write to me directly. I reply in French or English.",
    ping: "ping iheb",
    pingReply: "reply from iheb: available for a 6-month internship",
    channelsTitle: "Reach me",
    copy: "Copy",
    copied: "Copied",
    copyLabel: (what: string) => `Copy ${what}`,
    channels: [
      { id: "mail", icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, copy: EMAIL, accent: "teal", note: "Fastest" },
      { id: "school", icon: GraduationCap, label: "School email", value: SCHOOL_EMAIL, href: `mailto:${SCHOOL_EMAIL}`, copy: SCHOOL_EMAIL, accent: "indigo", note: "Internship agreements" },
      { id: "phone", icon: Phone, label: "Phone / WhatsApp", value: PHONE.display, href: PHONE.href, copy: PHONE.raw, accent: "amber", note: "Tunis time" },
      { id: "linkedin", icon: Linkedin, label: "LinkedIn", value: "saafi-iheb-8373211b8", href: LINKEDIN, external: true, accent: "indigo", note: "Profile and messages" },
      { id: "github", icon: Github, label: "GitHub", value: "github.com/iheb137", href: GITHUB, external: true, accent: "teal", note: "Project source code" },
    ] as Channel[],
    composerTitle: "Write a message",
    composerIntro: "Pick a topic: the message is pre-filled and opens in your email app. This site neither sends nor stores anything.",
    topicLabel: "Topic",
    topics: [
      {
        id: "offer",
        label: "Internship offer",
        subject: "Internship offer – {company}",
        body: "Hello Iheb,\n\nWe have a final-year internship (6 months, starting January or February 2027) that might interest you:\n\n– Title:\n– Location:\n– Team / technologies:\n\nWould you be available for a first call?\n\n{name}",
      },
      {
        id: "interview",
        label: "Interview",
        subject: "Interview invitation – {company}",
        body: "Hello Iheb,\n\nYour profile caught our attention and we would like to set up an interview.\n\nProposed slots:\n– \n– \n\n{name}",
      },
      {
        id: "question",
        label: "Technical question",
        subject: "Question about one of your projects",
        body: "Hello Iheb,\n\nI have a question about the project:\n\n\n{name}",
      },
      {
        id: "other",
        label: "Other",
        subject: "Getting in touch – {company}",
        body: "Hello Iheb,\n\n\n\n{name}",
      },
    ] as Topic[],
    nameLabel: "Your name",
    namePh: "First Last",
    companyLabel: "Company",
    companyPh: "Company name",
    messageLabel: "Message",
    send: "Open in my email app",
    sent: "Your email app should have opened. If nothing happened, copy the address next to this form.",
    defaultCompany: "your company",
    availTitle: "Availability",
    avail: [
      { icon: Briefcase, label: "Final-year internship", value: "6 months" },
      { icon: Calendar, label: "Start", value: "January or February 2027" },
      { icon: MapPin, label: "Location", value: "France or Tunisia" },
      { icon: Languages, label: "Interviews", value: "French or English" },
    ],
    fieldsTitle: "Target areas",
    fields: ["DevOps and CI/CD", "Cloud and infrastructure", "Full-stack", "Backend and architecture", "AI applied to software"],
    clockTitle: "Time in Tunis",
    clockNote: "Tunis · UTC+1",
    dayStates: { day: "Daytime in Tunis", evening: "Evening in Tunis", night: "Night-time in Tunis" },
    cvTitle: "My CV",
    cvFr: "CV in French",
    cvEn: "CV in English",
    nextTitle: "Before you write",
    next: [
      { href: "/projects", label: "See the projects", icon: FolderGit2 },
      { href: "/certifications", label: "See the experience", icon: Briefcase },
    ],
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
function useReveal(dep: unknown) {
  useEffect(() => {
    const root = document.getElementById("contact-root")
    root?.classList.add("ct-js")
    const items = Array.from(document.querySelectorAll<HTMLElement>("#contact-root [data-reveal]:not([data-visible])"))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.1 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}

function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>(".ct-spot")
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty("--mx", `${e.clientX - r.left}px`)
      card.style.setProperty("--my", `${e.clientY - r.top}px`)
    }
    document.addEventListener("pointermove", onMove, { passive: true })
    return () => document.removeEventListener("pointermove", onMove)
  }, [])
}

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties

const ACCENT = {
  teal: { text: "text-teal-300", box: "border-teal-300/30 bg-teal-300/10 text-teal-300", ring: "hover:border-teal-300/50" },
  indigo: { text: "text-indigo-300", box: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300", ring: "hover:border-indigo-400/50" },
  amber: { text: "text-amber-300", box: "border-amber-300/30 bg-amber-300/10 text-amber-300", ring: "hover:border-amber-300/50" },
} as const

function Panel({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div data-reveal style={style} className={`ct-spot relative rounded-2xl border border-slate-500/20 bg-[#0c1324]/80 p-6 backdrop-blur-md ${className}`}>
      {children}
    </div>
  )
}

function PanelTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">{children}</h2>
}

/* ─────────────────────────────────────────────────────────────
   Bouton « copier » avec retour visuel et annonce vocale.
   ───────────────────────────────────────────────────────────── */
function CopyButton({ text, label, done, aria }: { text: string; label: string; done: string; aria: string }) {
  const [ok, setOk] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setOk(true)
      window.setTimeout(() => setOk(false), 1800)
    } catch {
      // Presse-papiers indisponible : le lien reste utilisable.
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={aria}
      className={`relative z-10 inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all ${
        ok ? "border-teal-300/60 bg-teal-300/15 text-teal-300" : "border-slate-500/30 bg-white/[0.04] text-slate-400 hover:border-slate-400/60 hover:text-white"
      }`}
    >
      {ok ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
      <span aria-live="polite">{ok ? done : label}</span>
    </button>
  )
}

/* ─────────────────────────────────────────────────────────────
   Signal du héros : ondes concentriques autour de l'enveloppe,
   et une ligne « ping » qui s'écrit.
   ───────────────────────────────────────────────────────────── */
function Signal({ ping, reply }: { ping: string; reply: string }) {
  const [typed, setTyped] = useState(ping.length)
  const [showReply, setShowReply] = useState(true)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setTyped(0)
    setShowReply(false)
    let i = 0
    let timer = window.setTimeout(function tick() {
      i += 1
      setTyped(i)
      if (i < ping.length) timer = window.setTimeout(tick, 70)
      else timer = window.setTimeout(() => setShowReply(true), 650)
    }, 700)
    return () => window.clearTimeout(timer)
  }, [ping])

  return (
    <div className="relative mx-auto flex w-full max-w-[420px] flex-col items-center">
      <div aria-hidden="true" className="relative grid aspect-square w-full max-w-[230px] sm:max-w-[320px] place-items-center">
        {[0, 1, 2, 3].map((k) => (
          <span key={k} className="ct-wave absolute inset-[18%] rounded-full border border-teal-300/40" style={{ animationDelay: `${k * 0.9}s` }} />
        ))}
        <span className="absolute inset-[6%] rounded-full border border-dashed border-indigo-400/20" />
        <span className="ct-orbit absolute inset-[6%]">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.9)]" />
        </span>
        <span className="ct-orbit-rev absolute inset-[22%]">
          <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.9)]" />
        </span>
        <span className="ct-float relative grid h-24 w-24 place-items-center rounded-3xl border border-teal-300/40 bg-[#0c1324] shadow-[0_0_60px_-10px_rgba(45,212,191,0.7)]">
          <Mail className="h-10 w-10 text-teal-300" />
        </span>
      </div>
      <div className="mt-4 w-full rounded-xl border border-slate-500/25 bg-[#060a14]/90 px-4 py-3 font-mono text-[13px] backdrop-blur">
        <p className="text-slate-300">
          <span className="text-teal-300">❯</span> {ping.slice(0, typed)}
          {!showReply && <span aria-hidden="true" className="ct-caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-teal-300" />}
        </p>
        <p className={`mt-1 text-amber-300 transition-opacity duration-500 ${showReply ? "opacity-100" : "opacity-0"}`}>
          <span className="text-slate-500">←</span> {reply}
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Horloge de Tunis (rendue côté client uniquement).
   ───────────────────────────────────────────────────────────── */
function TunisClock({ title, note, states }: { title: string; note: string; states: { day: string; evening: string; night: string } }) {
  const [now, setNow] = useState<{ hh: string; mm: string; ss: string; h: number } | null>(null)
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Tunis", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })
    const tick = () => {
      const [hh, mm, ss] = fmt.format(new Date()).split(":")
      setNow({ hh, mm, ss, h: Number(hh) })
    }
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])
  const state = !now ? "" : now.h >= 8 && now.h < 19 ? states.day : now.h >= 19 && now.h < 23 ? states.evening : states.night
  const isDay = now ? now.h >= 8 && now.h < 19 : true
  return (
    <Panel style={delay(120)}>
      <PanelTitle>{title}</PanelTitle>
      <p className="mt-3 font-mono text-4xl font-bold tracking-wider text-white" aria-live="off">
        {now ? (
          <>
            {now.hh}
            <span className="ct-tick text-teal-300">:</span>
            {now.mm}
            <span className="ml-1 text-lg text-slate-500">{now.ss}</span>
          </>
        ) : (
          "--:--"
        )}
      </p>
      <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
        <span aria-hidden="true" className={`h-2 w-2 rounded-full ${isDay ? "bg-teal-300 shadow-[0_0_10px_rgba(45,212,191,0.9)]" : "bg-indigo-400"}`} />
        {state || note}
      </p>
      <p className="mt-1 text-xs text-slate-500">{note}</p>
    </Panel>
  )
}

/* ─────────────────────────────────────────────────────────────
   Rédaction d'un e-mail pré-rempli (mailto, aucun envoi serveur).
   ───────────────────────────────────────────────────────────── */
function Composer({ t }: { t: (typeof T)["fr"] }) {
  const [topicId, setTopicId] = useState(t.topics[0].id)
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [opened, setOpened] = useState(false)
  const topic = t.topics.find((x) => x.id === topicId) ?? t.topics[0]
  const fill = (s: string) => s.replace("{company}", company.trim() || t.defaultCompany).replace("{name}", name.trim())
  const [body, setBody] = useState(fill(topic.body))
  const [edited, setEdited] = useState(false)

  // Le modèle suit le sujet, le nom et l'entreprise tant que le message n'a pas été modifié à la main.
  useEffect(() => {
    if (!edited) setBody(fill(topic.body))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId, name, company, t])

  const subject = fill(topic.subject)
  const href = useMemo(() => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, [subject, body])

  const submit = (e: FormEvent) => {
    e.preventDefault()
    window.location.href = href
    setOpened(true)
  }

  const input =
    "w-full rounded-xl border border-slate-500/25 bg-[#070c18]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-teal-300/70 focus:ring-2 focus:ring-teal-300/20"

  return (
    <form onSubmit={submit} className="space-y-5">
      <fieldset>
        <legend className="mb-2 text-sm text-slate-300">{t.topicLabel}</legend>
        <div className="flex flex-wrap gap-2">
          {t.topics.map((x) => {
            const active = x.id === topicId
            return (
              <label
                key={x.id}
                className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-300/60 ${
                  active ? "border-teal-300/70 bg-teal-300/15 text-teal-200 shadow-[0_0_18px_-6px_rgba(45,212,191,0.8)]" : "border-slate-500/30 bg-white/[0.03] text-slate-400 hover:text-white"
                }`}
              >
                <input
                  type="radio"
                  name="topic"
                  value={x.id}
                  checked={active}
                  onChange={() => {
                    setTopicId(x.id)
                    setEdited(false)
                  }}
                  className="sr-only"
                />
                {x.label}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-slate-300">{t.nameLabel}</span>
          <input className={input} value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePh} autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-slate-300">{t.companyLabel}</span>
          <input className={input} value={company} onChange={(e) => setCompany(e.target.value)} placeholder={t.companyPh} autoComplete="organization" />
        </label>
      </div>

      <div>
        <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm text-slate-300">
          <label htmlFor="ct-message">{t.messageLabel}</label>
          <span id="ct-subject" className="truncate font-mono text-xs text-slate-500">
            {subject}
          </span>
        </div>
        <textarea
          id="ct-message"
          aria-describedby="ct-subject"
          className={`${input} min-h-[210px] resize-y font-mono text-[13px] leading-relaxed`}
          value={body}
          onChange={(e) => {
            setBody(e.target.value)
            setEdited(true)
          }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-teal-300 px-5 py-2.5 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
        >
          <Send className="h-4 w-4 transition-transform group-hover:-rotate-12 group-hover:translate-x-0.5" />
          {t.send}
        </button>
        <p aria-live="polite" className="text-sm text-slate-400">
          {opened ? t.sent : ""}
        </p>
      </div>
    </form>
  )
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [lang, setLang] = useLang()
  const t = T[lang]
  useReveal(lang)
  useSpotlight()

  return (
    <div id="contact-root" className="relative min-h-screen overflow-x-clip bg-[#070c18] text-slate-200">
      <NetworkBackground />

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="ct-drift absolute -left-[15%] -top-[20%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.13),transparent_60%)] blur-2xl" />
        <div className="ct-drift-2 absolute -right-[20%] top-[25%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.15),transparent_60%)] blur-2xl" />
        <div className="ct-drift absolute -bottom-[30%] left-[30%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.06),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* ── HÉROS ─────────────────────────────────────────── */}
        <section aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:pt-20">
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

          <div className="mt-6 grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <div>
              <p className="ct-in inline-flex items-center gap-2.5 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-sm text-amber-300" style={delay(0)}>
                <span className="relative flex h-2 w-2 shrink-0">
                  <span aria-hidden="true" className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
                </span>
                {t.badge}
              </p>
              <p className="ct-in mt-8 text-sm font-medium text-teal-300" style={delay(80)}>
                {t.kicker}
              </p>
              <h1 id="contact-title" className="ct-in mt-2 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl" style={delay(160)}>
                <span className="ct-sheen">{t.title}</span>
              </h1>
              <p className="ct-in mt-6 max-w-xl text-lg leading-relaxed text-slate-400" style={delay(260)}>
                {t.lead}
              </p>
              <div className="ct-in mt-8 flex flex-wrap gap-3" style={delay(340)}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-teal-300 px-5 py-2.5 font-medium text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(45,212,191,0.7)]"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-500/30 bg-white/5 px-5 py-2.5 font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-400/60"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="ct-in" style={delay(280)}>
              <Signal key={lang} ping={t.ping} reply={t.pingReply} />
            </div>
          </div>
        </section>

        {/* ── CANAUX ────────────────────────────────────────── */}
        <section aria-labelledby="channels-title" className="border-y border-slate-500/10 bg-[#0c1324]/60 py-14 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-5">
            <h2 id="channels-title" className="sr-only">
              {t.channelsTitle}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {t.channels.map((c, i) => {
                const a = ACCENT[c.accent]
                const Icon = c.icon
                return (
                  <li
                    key={c.id}
                    data-reveal
                    style={delay(i * 80)}
                    className={`ct-spot group relative flex flex-col rounded-2xl border border-slate-500/20 bg-[#070c18]/80 p-5 transition-all duration-300 hover:-translate-y-1 ${a.ring}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className={`grid h-11 w-11 place-items-center rounded-xl border transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${a.box}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {c.copy && <CopyButton text={c.copy} label={t.copy} done={t.copied} aria={t.copyLabel(c.value)} />}
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">{c.label}</p>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className={`mt-1 flex items-center gap-1.5 break-all text-sm font-medium text-white transition-colors hover:text-teal-300`}
                    >
                      <span className="after:absolute after:inset-0 after:content-['']">{c.value}</span>
                      {c.external && <ExternalLink className="h-3 w-3 shrink-0 opacity-50" aria-hidden="true" />}
                    </a>
                    <p className={`mt-auto pt-3 text-xs ${a.text}`}>{c.note}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* ── MESSAGE + DISPONIBILITÉ ───────────────────────── */}
        <section aria-labelledby="composer-title" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div data-reveal className="ct-conic relative overflow-hidden rounded-3xl p-px">
              <div className="relative h-full rounded-3xl bg-[#0c1324] p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-teal-300/30 bg-teal-300/10 text-teal-300">
                    <MessageSquare className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 id="composer-title" className="text-2xl font-bold text-white">
                    {t.composerTitle}
                  </h2>
                </div>
                <p className="mb-7 mt-3 max-w-xl text-sm text-slate-400">{t.composerIntro}</p>
                <Composer key={lang} t={t} />
              </div>
            </div>

            <div className="space-y-6">
              <Panel>
                <PanelTitle>{t.availTitle}</PanelTitle>
                <dl className="mt-4 space-y-3">
                  {t.avail.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-amber-300/25 bg-amber-300/[0.08] text-amber-300">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <dt className="text-xs text-slate-500">{label}</dt>
                        <dd className="text-sm font-medium text-white">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">{t.fieldsTitle}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {t.fields.map((f) => (
                    <li key={f} className="rounded-lg border border-slate-500/25 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">
                      {f}
                    </li>
                  ))}
                </ul>
              </Panel>

              <TunisClock title={t.clockTitle} note={t.clockNote} states={t.dayStates} />

              <Panel style={delay(200)}>
                <PanelTitle>{t.cvTitle}</PanelTitle>
                <div className="mt-4 grid gap-2">
                  {[
                    { href: "/cv.pdf", label: t.cvFr, tag: "FR" },
                    { href: "/cv-en.pdf", label: t.cvEn, tag: "EN" },
                  ].map((cv) => (
                    <a
                      key={cv.href}
                      href={cv.href}
                      download
                      className="group flex items-center gap-3 rounded-xl border border-slate-500/20 bg-[#070c18]/70 px-3.5 py-2.5 text-sm text-slate-300 transition-colors hover:border-teal-300/50 hover:text-white"
                    >
                      <span className="grid h-7 w-9 place-items-center rounded-md bg-teal-300/10 font-mono text-xs text-teal-300">{cv.tag}</span>
                      <span className="flex-1">{cv.label}</span>
                      <Download className="h-4 w-4 text-teal-300 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </Panel>
            </div>
          </div>
        </section>

        {/* ── LIENS UTILES ──────────────────────────────────── */}
        <section aria-labelledby="next-title" className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
          <h2 id="next-title" data-reveal className="text-center text-sm font-medium text-slate-400">
            {t.nextTitle}
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {t.next.map(({ href, label, icon: Icon }, i) => (
              <Link
                key={href}
                href={href}
                data-reveal
                style={delay(i * 100)}
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-500/30 bg-white/5 px-5 py-2.5 font-medium text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
              >
                <Icon className="h-4 w-4 text-teal-300" />
                {label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <p data-reveal className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Iheb Eddine Saafi · Tunis
          </p>
        </section>
      </div>

      <style>{`
        @keyframes ct-in { from { opacity: 0; transform: translate3d(0, 24px, 0) } to { opacity: 1; transform: none } }
        @keyframes ct-drift { 0%,100% { transform: translate3d(0,0,0) scale(1) } 33% { transform: translate3d(6%,-4%,0) scale(1.08) } 66% { transform: translate3d(-5%,5%,0) scale(.95) } }
        @keyframes ct-spin { to { transform: rotate(360deg) } }
        @keyframes ct-sheen { from { background-position: 100% 0 } to { background-position: 0% 0 } }
        @keyframes ct-wave { 0% { transform: scale(1); opacity: .8 } 100% { transform: scale(2.6); opacity: 0 } }
        @keyframes ct-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        @keyframes ct-caret { 50% { opacity: 0 } }
        @keyframes ct-tick { 50% { opacity: .2 } }

        .ct-in { animation: ct-in .9s cubic-bezier(.2,.7,.2,1) both; animation-delay: var(--d, 0ms) }
        .ct-drift { animation: ct-drift 26s ease-in-out infinite }
        .ct-drift-2 { animation: ct-drift 34s ease-in-out infinite reverse }
        .ct-wave { animation: ct-wave 3.6s cubic-bezier(.2,.6,.3,1) infinite }
        .ct-orbit { animation: ct-spin 14s linear infinite }
        .ct-orbit-rev { animation: ct-spin 9s linear infinite reverse }
        .ct-float { animation: ct-float 5s ease-in-out infinite }
        .ct-caret { animation: ct-caret 1s steps(1) infinite }
        .ct-tick { animation: ct-tick 1s steps(1) infinite }
        .ct-sheen {
          background: linear-gradient(100deg, #fff 20%, #2dd4bf 45%, #818cf8 65%, #fff 90%);
          background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: ct-sheen 2.4s ease-out .5s both;
        }

        .ct-js [data-reveal] { opacity: 0; transform: translate3d(0, 28px, 0); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); transition-delay: var(--d, 0ms) }
        .ct-js [data-reveal][data-visible] { opacity: 1; transform: none }

        .ct-spot { isolation: isolate }
        .ct-spot::before {
          content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px; pointer-events: none;
          background: radial-gradient(320px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.8), rgba(129,140,248,.35) 40%, transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .35s;
        }
        .ct-spot::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;
          background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.08), transparent 60%);
          opacity: 0; transition: opacity .35s;
        }
        .ct-spot:hover::before, .ct-spot:hover::after { opacity: 1 }

        .ct-conic::before {
          content: ""; position: absolute; inset: -150%;
          background: conic-gradient(from 0deg, transparent 0 70%, #2dd4bf 80%, #818cf8 90%, transparent 100%);
          animation: ct-spin 8s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .ct-in, .ct-drift, .ct-drift-2, .ct-wave, .ct-orbit, .ct-orbit-rev, .ct-float, .ct-caret, .ct-tick, .ct-sheen, .ct-conic::before { animation: none !important }
          .ct-wave { opacity: .25 }
          .ct-sheen { background-position: 0 0 }
          .ct-js [data-reveal] { opacity: 1; transform: none; transition: none }
        }
      `}</style>
    </div>
  )
}
