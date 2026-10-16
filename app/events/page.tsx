"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from "react"
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Code2,
  Expand,
  Mail,
  Megaphone,
  ShieldCheck,
  Trophy,
  Users,
  X,
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
   Contenu
   ───────────────────────────────────────────────────────────── */
type Role = { title: string; period: string; current?: boolean; points: string[] }
type Org = { id: string; name: string; logo: string; accent: "teal" | "indigo" | "rose"; roles: Role[] }
type Photo = { src: string; w: number; h: number; title: string; caption: string; tag: string }

const PHOTO_SIZES: Record<string, [number, number]> = {
  "/event1.jpeg": [1280, 1830],
  "/event2.jpeg": [1280, 1707],
  "/event3.jpeg": [1280, 1706],
  "/event4.jpg": [1200, 1600],
  "/event5.jpeg": [1171, 1280],
  "/event6.jpeg": [960, 1280],
}
const ph = (src: string, title: string, caption: string, tag: string): Photo => ({ src, w: PHOTO_SIZES[src][0], h: PHOTO_SIZES[src][1], title, caption, tag })

const T = {
  fr: {
    langLabel: "English",
    kicker: "Engagement associatif et compétitions",
    title: "Au-delà du code : organiser, transmettre, se mesurer",
    lead:
      "Vice-président puis conseiller de la branche étudiante IEEE de TEK-UP, membre de Securinets, participant à IEEEXtreme et au congrès TSYP : des expériences qui m'ont appris à coordonner une équipe et à tenir des délais.",
    statsLabel: "Chiffres clés",
    stats: [
      { value: 2, label: "associations" },
      { value: 1, label: "mandat de vice-président" },
      { value: 2, label: "éditions d'IEEEXtreme" },
      { value: 2, label: "éditions du TSYP" },
    ],
    orgTitle: "Associations",
    orgIntro: "Les rôles que j'ai tenus et ce que j'y ai fait.",
    current: "En cours",
    done: "Mandat terminé",
    orgs: [
      {
        id: "ieee",
        name: "IEEE TEK-UP Student Branch",
        logo: "/IEEE.png",
        accent: "teal",
        roles: [
          {
            title: "Conseiller du Student Branch",
            period: "Depuis janvier 2026",
            current: true,
            points: ["Accompagnement des nouveaux membres du bureau.", "Lien avec les instances IEEE."],
          },
          {
            title: "Vice-président",
            period: "Janvier – décembre 2025",
            points: ["Planification et exécution des projets de la branche.", "Coordination des activités et des événements.", "Travail en équipe avec le bureau et les membres."],
          },
        ],
      },
      {
        id: "securinets",
        name: "Securinets TEK-UP",
        logo: "/sec.jpeg",
        accent: "rose",
        roles: [
          {
            title: "Membre",
            period: "Depuis 2024",
            current: true,
            points: ["Participation aux ateliers et aux compétitions de cybersécurité du club."],
          },
        ],
      },
    ] as Org[],
    compTitle: "Compétitions et congrès",
    comps: [
      {
        icon: Code2,
        name: "IEEEXtreme 18.0 et 19.0",
        kind: "Compétition de programmation",
        text: "Compétition mondiale de programmation de 24 heures, en équipe : algorithmique, gestion du temps et du stress.",
        chips: ["24 h", "En équipe", "2 éditions"],
      },
      {
        icon: Megaphone,
        name: "TSYP 12 et TSYP 13",
        kind: "Congrès",
        text: "Tunisian Student and Young Professional Congress : conférences, ateliers techniques et rencontres avec les autres branches IEEE.",
        chips: ["Ateliers", "Conférences", "2 éditions"],
      },
    ],
    learnTitle: "Ce que j'en retire",
    learn: [
      { icon: Users, title: "Coordonner", text: "Organiser des activités avec un bureau de bénévoles, répartir les tâches, tenir un calendrier." },
      { icon: Megaphone, title: "Communiquer", text: "Présenter, animer, échanger avec des étudiants, des intervenants et d'autres branches." },
      { icon: Trophy, title: "Tenir la pression", text: "24 heures de compétition en équipe : prioriser et livrer une solution qui fonctionne." },
      { icon: ShieldCheck, title: "Penser sécurité", text: "Les ateliers Securinets me sensibilisent aux vulnérabilités courantes et aux bonnes pratiques." },
    ],
    galleryTitle: "En images",
    galleryIntro: "Cliquez sur une photo pour l'agrandir. Flèches du clavier pour naviguer, Échap pour fermer.",
    open: "Agrandir",
    close: "Fermer",
    prev: "Photo précédente",
    next: "Photo suivante",
    photos: [
      ph("/event5.jpeg", "TSYP 13", "L'un des derniers moments de mon mandat de vice-président de l'IEEE TEK-UP SB, aux côtés du président de la branche.", "Fin de mandat"),
      ph("/event2.jpeg", "TSYP 12 · atelier", "Atelier technique pendant le congrès.", "Atelier"),
      ph("/event1.jpeg", "Événement des clubs TEK-UP", "Mai 2025.", "Clubs"),
      ph("/event6.jpeg", "TSYP 13 · équipe", "La délégation IEEE TEK-UP.", "Équipe"),
      ph("/event3.jpeg", "TSYP 12 · équipe", "Avec l'équipe pendant le congrès.", "Équipe"),
      ph("/event4.jpg", "TSYP 12", "Sur le site du congrès.", "Congrès"),
    ],
    ctaTitle: "Envie d'en parler ?",
    ctaText: "Ces expériences comptent autant que le code dans une équipe. Je les raconte volontiers en entretien.",
    contact: "Me contacter",
    about: "En savoir plus sur moi",
  },
  en: {
    langLabel: "Français",
    kicker: "Student organizations and competitions",
    title: "Beyond code: organizing, sharing, competing",
    lead:
      "Vice-chair then advisor of the IEEE TEK-UP Student Branch, Securinets member, IEEEXtreme and TSYP participant: experiences that taught me to coordinate a team and meet deadlines.",
    statsLabel: "Key figures",
    stats: [
      { value: 2, label: "student organizations" },
      { value: 1, label: "term as vice-chair" },
      { value: 2, label: "IEEEXtreme editions" },
      { value: 2, label: "TSYP editions" },
    ],
    orgTitle: "Organizations",
    orgIntro: "The roles I held and what I did in them.",
    current: "Current",
    done: "Term completed",
    orgs: [
      {
        id: "ieee",
        name: "IEEE TEK-UP Student Branch",
        logo: "/IEEE.png",
        accent: "teal",
        roles: [
          {
            title: "Student Branch advisor",
            period: "Since January 2026",
            current: true,
            points: ["Mentoring new board members.", "Liaising with IEEE bodies."],
          },
          {
            title: "Vice-chair",
            period: "January – December 2025",
            points: ["Planned and delivered the branch's projects.", "Coordinated activities and events.", "Worked with the board and members."],
          },
        ],
      },
      {
        id: "securinets",
        name: "Securinets TEK-UP",
        logo: "/sec.jpeg",
        accent: "rose",
        roles: [
          {
            title: "Member",
            period: "Since 2024",
            current: true,
            points: ["Took part in the club's cybersecurity workshops and competitions."],
          },
        ],
      },
    ] as Org[],
    compTitle: "Competitions and congresses",
    comps: [
      {
        icon: Code2,
        name: "IEEEXtreme 18.0 and 19.0",
        kind: "Programming competition",
        text: "24-hour worldwide team programming competition: algorithms, time management and pressure.",
        chips: ["24 h", "Team", "2 editions"],
      },
      {
        icon: Megaphone,
        name: "TSYP 12 and TSYP 13",
        kind: "Congress",
        text: "Tunisian Student and Young Professional Congress: talks, technical workshops and meetings with other IEEE branches.",
        chips: ["Workshops", "Talks", "2 editions"],
      },
    ],
    learnTitle: "What I take from it",
    learn: [
      { icon: Users, title: "Coordinate", text: "Running activities with a volunteer board, splitting tasks, keeping to a schedule." },
      { icon: Megaphone, title: "Communicate", text: "Presenting, hosting, working with students, speakers and other branches." },
      { icon: Trophy, title: "Handle pressure", text: "24 hours of team competition: prioritize and ship a working solution." },
      { icon: ShieldCheck, title: "Think security", text: "Securinets workshops keep me aware of common vulnerabilities and good practices." },
    ],
    galleryTitle: "In pictures",
    galleryIntro: "Click a photo to enlarge it. Arrow keys to navigate, Escape to close.",
    open: "Enlarge",
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
    photos: [
      ph("/event5.jpeg", "TSYP 13", "One of the last moments of my term as IEEE TEK-UP SB vice-chair, next to the branch chair.", "End of term"),
      ph("/event2.jpeg", "TSYP 12 · workshop", "Technical workshop during the congress.", "Workshop"),
      ph("/event1.jpeg", "TEK-UP clubs event", "May 2025.", "Clubs"),
      ph("/event6.jpeg", "TSYP 13 · team", "The IEEE TEK-UP delegation.", "Team"),
      ph("/event3.jpeg", "TSYP 12 · team", "With the team during the congress.", "Team"),
      ph("/event4.jpg", "TSYP 12", "At the congress venue.", "Congress"),
    ],
    ctaTitle: "Want to hear more?",
    ctaText: "In a team, these experiences matter as much as code. Happy to talk about them in an interview.",
    contact: "Contact me",
    about: "More about me",
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
    const root = document.getElementById("events-root")
    root?.classList.add("ev-js")
    const items = Array.from(document.querySelectorAll<HTMLElement>("#events-root [data-reveal]:not([data-visible])"))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}

function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>(".ev-spot")
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty("--mx", `${e.clientX - r.left}px`)
      card.style.setProperty("--my", `${e.clientY - r.top}px`)
    }
    document.addEventListener("pointermove", onMove, { passive: true })
    return () => document.removeEventListener("pointermove", onMove)
  }, [])
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
        const p = Math.min(1, (now - start) / 1100)
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
      <span aria-hidden="true" className="ev-bar mt-4 block h-[3px] w-16 rounded-full bg-gradient-to-r from-teal-300 via-indigo-400 to-transparent" />
      {intro && <p className="mt-5 max-w-2xl text-slate-400">{intro}</p>}
    </div>
  )
}

const ACCENT = {
  teal: { border: "border-teal-300/25", text: "text-teal-300", dot: "bg-teal-300", glow: "shadow-[0_0_18px_rgba(45,212,191,0.8)]", soft: "bg-teal-300/10 border-teal-300/30" },
  indigo: { border: "border-indigo-400/25", text: "text-indigo-300", dot: "bg-indigo-400", glow: "shadow-[0_0_18px_rgba(129,140,248,0.8)]", soft: "bg-indigo-400/10 border-indigo-400/30" },
  rose: { border: "border-rose-400/25", text: "text-rose-300", dot: "bg-rose-400", glow: "shadow-[0_0_18px_rgba(251,113,133,0.8)]", soft: "bg-rose-400/10 border-rose-400/30" },
} as const

/* ─────────────────────────────────────────────────────────────
   Héros : pile de photos qui s'étalent en éventail.
   ───────────────────────────────────────────────────────────── */
function PhotoFan({ photos, onOpen, openLabel }: { photos: Photo[]; onOpen: (i: number) => void; openLabel: string }) {
  const fan = photos.slice(0, 3)
  const pose = [
    { rot: -9, x: -34, y: 10 },
    { rot: 7, x: 34, y: 18 },
    { rot: 0, x: 0, y: 0 },
  ]
  return (
    <div className="ev-fan group relative mx-auto h-[340px] w-full max-w-[380px] sm:h-[420px]">
      {[1, 2, 0].map((idx, layer) => {
        const p = fan[idx]
        const { rot, x, y } = pose[layer]
        return (
          <button
            key={p.src}
            type="button"
            onClick={() => onOpen(idx)}
            aria-label={`${openLabel} : ${p.title}`}
            className="ev-fan-card absolute left-1/2 top-1/2 w-[58%] overflow-hidden rounded-2xl border border-white/10 bg-[#0c1324] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300"
            style={{ "--rot": `${rot}deg`, "--x": `${x}%`, "--y": `${y}px`, zIndex: layer + 1 } as CSSProperties}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt="" width={p.w} height={p.h} className="aspect-[4/5] w-full rounded-xl object-cover" />
            <span className="block px-1 pb-0.5 pt-2 text-left text-xs font-medium text-slate-300">{p.title}</span>
          </button>
        )
      })}
      <span aria-hidden="true" className="ev-float absolute -right-2 top-6 z-10 grid h-12 w-12 place-items-center rounded-2xl border border-amber-300/40 bg-[#0c1324] text-amber-300 shadow-[0_0_30px_-6px_rgba(251,191,36,0.8)]">
        <Award className="h-6 w-6" />
      </span>
      <span aria-hidden="true" className="ev-float-2 absolute -left-1 bottom-10 z-10 grid h-11 w-11 place-items-center rounded-2xl border border-teal-300/40 bg-[#0c1324] text-teal-300 shadow-[0_0_30px_-6px_rgba(45,212,191,0.8)]">
        <Users className="h-5 w-5" />
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Carte photo avec inclinaison 3D au survol.
   ───────────────────────────────────────────────────────────── */
function TiltPhoto({ p, onOpen, openLabel, style }: { p: Photo; onOpen: () => void; openLabel: string; style?: CSSProperties }) {
  const ref = useRef<HTMLButtonElement>(null)
  const onMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== "mouse") return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty("--ry", `${px * 10}deg`)
    el.style.setProperty("--rx", `${-py * 10}deg`)
    el.style.setProperty("--gx", `${(px + 0.5) * 100}%`)
    el.style.setProperty("--gy", `${(py + 0.5) * 100}%`)
  }
  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty("--ry", "0deg")
    el.style.setProperty("--rx", "0deg")
  }
  return (
    <div data-reveal style={style} className="mb-5 break-inside-avoid [perspective:1000px]">
      <button
        ref={ref}
        type="button"
        onClick={onOpen}
        onPointerMove={onMove}
        onPointerLeave={reset}
        aria-label={`${openLabel} : ${p.title}`}
        className="ev-tilt group relative block w-full overflow-hidden rounded-2xl border border-slate-500/20 bg-[#0c1324] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.src} alt={`${p.title}. ${p.caption}`} width={p.w} height={p.h} loading="lazy" className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]" />
        <span aria-hidden="true" className="ev-glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070c18] via-[#070c18]/70 to-transparent p-4 pt-14">
          <span className="mb-2 inline-block rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[11px] text-slate-200 backdrop-blur">{p.tag}</span>
          <span className="block font-semibold text-white">{p.title}</span>
          <span className="mt-0.5 block text-sm leading-snug text-slate-300">{p.caption}</span>
        </span>
        <span aria-hidden="true" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/50 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Expand className="h-4 w-4" />
        </span>
      </button>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Visionneuse plein écran (<dialog> natif : focus et Échap gérés).
   ───────────────────────────────────────────────────────────── */
function Lightbox({
  photos,
  index,
  onClose,
  onIndex,
  labels,
}: {
  photos: Photo[]
  index: number | null
  onClose: () => void
  onIndex: (i: number) => void
  labels: { close: string; prev: string; next: string }
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const touch = useRef<number | null>(null)
  const n = photos.length
  const go = useCallback((d: number) => index !== null && onIndex((index + d + n) % n), [index, n, onIndex])

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (index !== null && !d.open) {
      d.showModal()
      document.body.style.overflow = "hidden"
    }
    if (index === null && d.open) d.close()
  }, [index])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index, go])

  const p = index !== null ? photos[index] : null

  return (
    <dialog
      ref={ref}
      aria-label={p?.title}
      onClose={() => {
        document.body.style.overflow = ""
        onClose()
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close()
      }}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return
        const dx = e.changedTouches[0].clientX - touch.current
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
        touch.current = null
      }}
      className="ev-dialog m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-slate-200 backdrop:bg-[#03060d]/92 backdrop:backdrop-blur-md"
    >
      {p && (
        <div className="flex h-full flex-col items-center justify-center px-4 py-6" onClick={(e) => e.target === e.currentTarget && ref.current?.close()}>
          <figure key={p.src} className="ev-zoom flex max-h-full w-full max-w-4xl flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={`${p.title}. ${p.caption}`} width={p.w} height={p.h} className="max-h-[74vh] w-auto rounded-2xl border border-white/10 object-contain shadow-[0_40px_120px_-30px_rgba(45,212,191,0.45)]" />
            <figcaption className="mt-5 max-w-xl text-center">
              <span className="block font-semibold text-white">{p.title}</span>
              <span className="mt-1 block text-sm text-slate-400">{p.caption}</span>
              <span className="mt-3 block font-mono text-xs text-slate-500">
                {index! + 1} / {n}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
      <button type="button" onClick={() => ref.current?.close()} aria-label={labels.close} className="fixed right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20">
        <X className="h-5 w-5" />
      </button>
      <button type="button" onClick={() => go(-1)} aria-label={labels.prev} className="fixed left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-teal-300/30 md:left-6">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button type="button" onClick={() => go(1)} aria-label={labels.next} className="fixed right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-teal-300/30 md:right-6">
        <ChevronRight className="h-6 w-6" />
      </button>
    </dialog>
  )
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function EventsPage() {
  const [lang, setLang] = useLang()
  const t = T[lang]
  const [open, setOpen] = useState<number | null>(null)
  useReveal(lang)
  useSpotlight()

  return (
    <div id="events-root" className="relative min-h-screen overflow-x-clip bg-[#070c18] text-slate-200">
      <NetworkBackground />

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="ev-drift absolute -left-[15%] -top-[20%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.13),transparent_60%)] blur-2xl" />
        <div className="ev-drift-2 absolute -right-[20%] top-[25%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.15),transparent_60%)] blur-2xl" />
        <div className="ev-drift absolute -bottom-[30%] left-[20%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.06),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* ── HÉROS ─────────────────────────────────────────── */}
        <section aria-labelledby="events-title" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
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
              <p className="ev-in text-sm font-medium text-teal-300" style={delay(0)}>
                {t.kicker}
              </p>
              <h1 id="events-title" className="ev-in mt-3 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl" style={delay(100)}>
                <span className="ev-sheen">{t.title}</span>
              </h1>
              <p className="ev-in mt-6 max-w-xl text-lg leading-relaxed text-slate-400" style={delay(200)}>
                {t.lead}
              </p>
              <ul className="ev-in mt-8 flex flex-wrap gap-3" style={delay(300)}>
                {t.orgs.map((o) => (
                  <li key={o.id} className="flex items-center gap-2.5 rounded-full border border-slate-500/25 bg-white/[0.04] py-1 pl-1 pr-4 text-sm text-slate-200 backdrop-blur">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={o.logo} alt="" width={28} height={28} className="h-7 w-7 rounded-full bg-white object-cover" />
                    {o.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ev-in" style={delay(250)}>
              <PhotoFan photos={t.photos} onOpen={setOpen} openLabel={t.open} />
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

        {/* ── ASSOCIATIONS ──────────────────────────────────── */}
        <section aria-labelledby="org-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionTitle id="org-title" intro={t.orgIntro}>
            {t.orgTitle}
          </SectionTitle>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            {t.orgs.map((o, oi) => {
              const a = ACCENT[o.accent]
              return (
                <article
                  key={o.id}
                  data-reveal
                  style={delay(oi * 140)}
                  aria-labelledby={`org-${o.id}`}
                  className={`ev-spot relative overflow-hidden rounded-3xl border bg-[#0c1324]/80 p-6 backdrop-blur-md md:p-8 ${a.border}`}
                >
                  <header className="flex items-center gap-4">
                    <span className="relative grid h-16 w-16 shrink-0 place-items-center">
                      <span aria-hidden="true" className="ev-spin absolute inset-0 rounded-2xl bg-[conic-gradient(#2dd4bf,#818cf8,#fb7185,#2dd4bf)] opacity-70" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={o.logo} alt={`Logo ${o.name}`} width={225} height={225} className="relative h-[58px] w-[58px] rounded-[14px] bg-white object-cover" />
                    </span>
                    <h3 id={`org-${o.id}`} className="text-xl font-bold text-white">
                      {o.name}
                    </h3>
                  </header>

                  <ol className="relative mt-7 space-y-6 border-l border-slate-500/20 pl-6">
                    {o.roles.map((r, ri) => (
                      <li key={r.title} data-reveal style={delay(200 + ri * 140)} className="relative">
                        <span
                          aria-hidden="true"
                          className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ring-4 ring-[#0c1324] ${r.current ? `${a.dot} ${a.glow}` : "bg-slate-500"}`}
                        />
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <p className={`font-semibold ${r.current ? "text-white" : "text-slate-300"}`}>{r.title}</p>
                          <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${r.current ? `${a.soft} ${a.text}` : "border-slate-500/30 bg-white/[0.03] text-slate-400"}`}>
                            {r.current ? t.current : t.done}
                          </span>
                        </div>
                        <p className="mt-0.5 font-mono text-xs text-slate-500">{r.period}</p>
                        <ul className="mt-3 space-y-1.5">
                          {r.points.map((pt) => (
                            <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                              <span aria-hidden="true" className={`mt-2 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </article>
              )
            })}
          </div>
        </section>

        {/* ── COMPÉTITIONS ──────────────────────────────────── */}
        <section aria-labelledby="comp-title" className="relative border-y border-slate-500/10 bg-[#0c1324]/70 py-20 backdrop-blur-sm md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle id="comp-title">{t.compTitle}</SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
              {t.comps.map((c, i) => {
                const Icon = c.icon as LucideIcon
                return (
                  <article key={c.name} data-reveal style={delay(i * 140)} className="ev-conic relative overflow-hidden rounded-3xl p-px">
                    <div className="relative h-full rounded-3xl bg-[#070c18] p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border ${i === 0 ? "border-teal-300/30 bg-teal-300/10 text-teal-300" : "border-indigo-400/30 bg-indigo-400/10 text-indigo-300"}`}>
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-slate-500">{c.kind}</p>
                          <h3 className="mt-1 text-xl font-bold text-white">{c.name}</h3>
                        </div>
                      </div>
                      <p className="mt-5 leading-relaxed text-slate-300">{c.text}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {c.chips.map((ch) => (
                          <li key={ch} className="rounded-lg border border-slate-500/25 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-300">
                            {ch}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>

            <h3 data-reveal className="mb-6 mt-16 text-xl font-semibold text-white">
              {t.learnTitle}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.learn.map((l, i) => {
                const Icon = l.icon as LucideIcon
                return (
                  <div key={l.title} data-reveal style={delay(i * 90)} className="ev-spot group relative rounded-2xl border border-slate-500/20 bg-[#070c18]/70 p-5 transition-transform duration-300 hover:-translate-y-1">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-amber-300/25 bg-amber-300/[0.08] text-amber-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-4 font-semibold text-white">{l.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{l.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── GALERIE ───────────────────────────────────────── */}
        <section aria-labelledby="gallery-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionTitle id="gallery-title" intro={t.galleryIntro}>
            {t.galleryTitle}
          </SectionTitle>
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {t.photos.map((p, i) => (
              <TiltPhoto key={p.src} p={p} onOpen={() => setOpen(i)} openLabel={t.open} style={delay((i % 3) * 110)} />
            ))}
          </div>
        </section>

        {/* ── APPEL À L'ACTION ──────────────────────────────── */}
        <section aria-labelledby="cta-title" className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
          <div data-reveal className="ev-conic relative overflow-hidden rounded-3xl p-px">
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
                  href="/about"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-500/30 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-teal-300/60"
                >
                  <Users className="h-4 w-4" />
                  {t.about}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Lightbox photos={t.photos} index={open} onClose={() => setOpen(null)} onIndex={setOpen} labels={{ close: t.close, prev: t.prev, next: t.next }} />

      <style>{`
        @keyframes ev-in { from { opacity: 0; transform: translate3d(0, 24px, 0) } to { opacity: 1; transform: none } }
        @keyframes ev-drift { 0%,100% { transform: translate3d(0,0,0) scale(1) } 33% { transform: translate3d(6%,-4%,0) scale(1.08) } 66% { transform: translate3d(-5%,5%,0) scale(.95) } }
        @keyframes ev-spin { to { transform: rotate(360deg) } }
        @keyframes ev-sheen { from { background-position: 100% 0 } to { background-position: 0% 0 } }
        @keyframes ev-float { 0%,100% { transform: translateY(0) rotate(0) } 50% { transform: translateY(-10px) rotate(6deg) } }
        @keyframes ev-zoom { from { opacity: 0; transform: scale(.94) } to { opacity: 1; transform: none } }
        @keyframes ev-deal { from { opacity: 0; transform: translate(-50%, -40%) rotate(0deg) scale(.9) } to { opacity: 1; transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) rotate(var(--rot)) } }

        .ev-in { animation: ev-in .9s cubic-bezier(.2,.7,.2,1) both; animation-delay: var(--d, 0ms) }
        .ev-drift { animation: ev-drift 26s ease-in-out infinite }
        .ev-drift-2 { animation: ev-drift 34s ease-in-out infinite reverse }
        .ev-spin { animation: ev-spin 8s linear infinite }
        .ev-float { animation: ev-float 6s ease-in-out infinite }
        .ev-float-2 { animation: ev-float 7s ease-in-out infinite reverse }
        .ev-zoom { animation: ev-zoom .35s cubic-bezier(.2,.7,.2,1) both }
        .ev-sheen {
          background: linear-gradient(100deg, #fff 20%, #2dd4bf 45%, #818cf8 65%, #fff 90%);
          background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: ev-sheen 2.4s ease-out .5s both;
        }

        /* Éventail de photos */
        .ev-fan-card { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) rotate(var(--rot)); animation: ev-deal .9s cubic-bezier(.2,.7,.2,1) backwards }
        .ev-fan-card:nth-child(1) { animation-delay: .35s }
        .ev-fan-card:nth-child(2) { animation-delay: .5s }
        .ev-fan-card:nth-child(3) { animation-delay: .65s }
        .ev-fan:hover .ev-fan-card { transform: translate(calc(-50% + var(--x) * 1.7), calc(-50% + var(--y) * 1.4)) rotate(calc(var(--rot) * 1.6)) }
        .ev-fan .ev-fan-card:hover { transform: translate(calc(-50% + var(--x) * 1.7), calc(-50% + var(--y) - 14px)) rotate(calc(var(--rot) * 1.6)) scale(1.04); z-index: 5 !important }

        /* Inclinaison 3D des photos */
        .ev-tilt { transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)); transition: transform .25s ease-out, border-color .3s, box-shadow .3s; transform-style: preserve-3d }
        .ev-tilt:hover { border-color: rgba(45,212,191,.45); box-shadow: 0 30px 60px -25px rgba(45,212,191,.35) }
        .ev-glare { background: radial-gradient(500px circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,.14), transparent 45%) }

        /* Visionneuse */
        .ev-dialog[open] { display: block }
        .ev-dialog::backdrop { background: rgba(3,6,13,.92) }

        .ev-js [data-reveal] { opacity: 0; transform: translate3d(0, 28px, 0); transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); transition-delay: var(--d, 0ms) }
        .ev-js [data-reveal][data-visible] { opacity: 1; transform: none }
        .ev-bar { transform: scaleX(0); transform-origin: left; transition: transform .9s cubic-bezier(.2,.7,.2,1) .2s }
        [data-visible] .ev-bar, #events-root:not(.ev-js) .ev-bar { transform: scaleX(1) }

        .ev-spot { isolation: isolate }
        .ev-spot::before {
          content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px; pointer-events: none;
          background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.8), rgba(129,140,248,.35) 40%, transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .35s;
        }
        .ev-spot::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;
          background: radial-gradient(480px circle at var(--mx, 50%) var(--my, 0%), rgba(45,212,191,.08), transparent 60%);
          opacity: 0; transition: opacity .35s;
        }
        .ev-spot:hover::before, .ev-spot:hover::after { opacity: 1 }

        .ev-conic::before {
          content: ""; position: absolute; inset: -150%;
          background: conic-gradient(from 0deg, transparent 0 70%, #2dd4bf 80%, #818cf8 88%, #fb7185 95%, transparent 100%);
          animation: ev-spin 8s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .ev-in, .ev-drift, .ev-drift-2, .ev-spin, .ev-float, .ev-float-2, .ev-zoom, .ev-sheen, .ev-fan-card, .ev-conic::before { animation: none !important }
          .ev-sheen { background-position: 0 0 }
          .ev-tilt { transform: none !important }
          .ev-js [data-reveal] { opacity: 1; transform: none; transition: none }
          .ev-bar { transform: scaleX(1) }
        }
      `}</style>
    </div>
  )
}
