"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { ArrowUpRight, Briefcase, Code2, FileText, FolderGit2, Home, Mail, Menu, User, Users, X, type LucideIcon } from "lucide-react"

/* ─────────────────────────────────────────────────────────────
   Langue : suit la langue choisie sur les pages (attribut lang
   de <html>, mis à jour par chaque page, clé "portfolio-lang").
   ───────────────────────────────────────────────────────────── */
type Lang = "fr" | "en"

function useDocLang(): Lang {
  const [lang, setLang] = useState<Lang>("fr")
  useEffect(() => {
    const read = () => {
      const l = document.documentElement.lang
      if (l === "fr" || l === "en") setLang(l)
    }
    try {
      const saved = localStorage.getItem("portfolio-lang")
      if (saved === "fr" || saved === "en") setLang(saved)
    } catch {}
    read()
    const mo = new MutationObserver(read)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] })
    return () => mo.disconnect()
  }, [])
  return lang
}

type Item = { href: string; icon: LucideIcon; label: { fr: string; en: string } }

const ITEMS: Item[] = [
  { href: "/", icon: Home, label: { fr: "Accueil", en: "Home" } },
  { href: "/about", icon: User, label: { fr: "À propos", en: "About" } },
  { href: "/projects", icon: FolderGit2, label: { fr: "Projets", en: "Projects" } },
  { href: "/skills", icon: Code2, label: { fr: "Compétences", en: "Skills" } },
  { href: "/certifications", icon: Briefcase, label: { fr: "Expérience", en: "Experience" } },
  { href: "/events", icon: Users, label: { fr: "Engagement", en: "Involvement" } },
  { href: "/cv", icon: FileText, label: { fr: "CV", en: "CV" } },
]

const TXT = {
  fr: { role: "DevOps · Cloud · Full-stack", status: "PFE 2027", contact: "Contact", open: "Ouvrir le menu", close: "Fermer le menu", nav: "Navigation principale", home: "Accueil", cv: "Télécharger le CV", avail: "Disponible pour un PFE de 6 mois · janvier ou février 2027" },
  en: { role: "DevOps · Cloud · Full-stack", status: "Internship 2027", contact: "Contact", open: "Open menu", close: "Close menu", nav: "Main navigation", home: "Home", cv: "Download CV", avail: "Available for a 6-month internship · January or February 2027" },
}

const isActive = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`))

export function Navigation() {
  const pathname = usePathname() ?? "/"
  const lang = useDocLang()
  const t = TXT[lang]
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  /* Indicateur glissant sous le lien actif ou survolé */
  const railRef = useRef<HTMLUListElement>(null)
  const [pill, setPill] = useState<{ x: number; w: number; visible: boolean }>({ x: 0, w: 0, visible: false })
  const [hover, setHover] = useState<string | null>(null)

  const place = useCallback(
    (href: string | null) => {
      const rail = railRef.current
      if (!rail) return
      const target = href ?? ITEMS.find((i) => isActive(pathname, i.href))?.href ?? null
      const el = target ? rail.querySelector<HTMLElement>(`[data-href="${target}"]`) : null
      if (!el) return setPill((p) => ({ ...p, visible: false }))
      setPill({ x: el.offsetLeft, w: el.offsetWidth, visible: true })
    },
    [pathname],
  )

  useLayoutEffect(() => {
    place(hover)
  }, [place, hover, lang])

  useEffect(() => {
    const onResize = () => place(null)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [place])

  /* Ombre au défilement + barre de progression de lecture */
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(y > 8)
      setProgress(max > 0 ? Math.min(1, y / max) : 0)
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
  }, [pathname])

  /* Menu mobile : fermeture au changement de page, Échap, blocage du défilement */
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-20 transition-[background-color,box-shadow,border-color] duration-500 ${
          scrolled || open
            ? "border-b border-slate-500/15 bg-[#070c18]/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-b border-transparent bg-[#070c18]/40 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5">
          {/* ── Identité ─────────────────────────────── */}
          <Link href="/" aria-label={`Iheb Eddine Saafi — ${t.home}`} className="group flex min-w-0 items-center gap-3">
            <span className="relative grid h-12 w-12 shrink-0 place-items-center">
              <span aria-hidden="true" className="nv-spin absolute inset-0 rounded-full bg-[conic-gradient(#2dd4bf,#818cf8,#fbbf24,#2dd4bf)] opacity-90 transition-opacity group-hover:opacity-100" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/iheb.jpeg" alt="" width={44} height={44} className="relative h-11 w-11 rounded-full border-[3px] border-[#070c18] object-cover" />
              <span aria-hidden="true" className="absolute bottom-0 right-0 flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-60" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#070c18] bg-teal-300" />
              </span>
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[15px] font-bold tracking-tight text-white sm:text-base">Iheb Eddine Saafi</span>
              <span className="mt-0.5 flex items-center gap-2 font-mono text-[11px] text-slate-400 lg:hidden xl:flex">
                <span className="text-teal-300">❯</span>
                <span className="truncate">{t.role}</span>
                <span aria-hidden="true" className="nv-caret hidden h-3 w-1.5 bg-teal-300 sm:inline-block" />
              </span>
            </span>
          </Link>

          {/* ── Liens (ordinateur) ───────────────────── */}
          <nav aria-label={t.nav} className="hidden lg:block">
            <ul
              ref={railRef}
              onMouseLeave={() => setHover(null)}
              className="relative flex items-center rounded-full border border-slate-500/20 bg-white/[0.03] p-1 backdrop-blur"
            >
              <li
                aria-hidden="true"
                className="nv-pill pointer-events-none absolute bottom-1 top-1 rounded-full border border-teal-300/40 bg-gradient-to-r from-teal-300/15 to-indigo-400/15 shadow-[0_0_24px_-6px_rgba(45,212,191,0.65)]"
                style={{ transform: `translateX(${pill.x - 4}px)`, width: pill.w, opacity: pill.visible ? 1 : 0, left: 4 }}
              />
              {ITEMS.map((item) => {
                const active = isActive(pathname, item.href)
                return (
                  <li key={item.href} data-href={item.href} className="relative">
                    <Link
                      href={item.href}
                      onMouseEnter={() => setHover(item.href)}
                      onFocus={() => setHover(item.href)}
                      onBlur={() => setHover(null)}
                      aria-current={active ? "page" : undefined}
                      className={`relative block whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors xl:px-4 ${
                        active ? "text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {item.label[lang]}
                      {active && <span aria-hidden="true" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_8px_#2dd4bf]" />}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* ── Actions ──────────────────────────────── */}
          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 font-mono text-[11px] text-amber-300 2xl:inline-flex" title={t.avail}>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fbbf24]" />
              {t.status}
            </span>
            <Link
              href="/contact"
              aria-current={isActive(pathname, "/contact") ? "page" : undefined}
              className="nv-cta group relative hidden items-center gap-2 overflow-hidden rounded-full bg-teal-300 px-4 py-2 text-sm font-semibold text-[#070c18] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(45,212,191,0.9)] sm:inline-flex"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t.contact}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="nv-mobile"
              aria-label={open ? t.close : t.open}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-500/30 bg-white/5 text-slate-200 transition-colors hover:border-teal-300/60 hover:text-teal-300 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Barre de progression de lecture, façon pipeline */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden">
          <div
            className="h-full origin-left bg-gradient-to-r from-teal-300 via-indigo-400 to-amber-300 shadow-[0_0_10px_rgba(45,212,191,0.8)]"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {/* ── Menu mobile plein écran ──────────────────── */}
      <div
        id="nv-mobile"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-[#070c18]/95 backdrop-blur-xl lg:hidden"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.18),transparent_65%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.18),transparent_65%)]" />
        <nav aria-label={t.nav} className="relative mx-auto max-w-lg px-5 py-6">
          <ul className="space-y-1.5">
            {[...ITEMS, { href: "/contact", icon: Mail, label: { fr: "Contact", en: "Contact" } }].map((item, i) => {
              const Icon = item.icon
              const active = isActive(pathname, item.href)
              return (
                <li key={item.href} className="nv-item" style={{ animationDelay: `${i * 45}ms` }}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center gap-4 rounded-2xl border px-4 py-3.5 transition-colors ${
                      active ? "border-teal-300/40 bg-teal-300/10 text-white" : "border-transparent text-slate-300 hover:border-slate-500/30 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="w-6 font-mono text-xs text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                    <Icon className={`h-5 w-5 ${active ? "text-teal-300" : "text-slate-500 group-hover:text-teal-300"}`} aria-hidden="true" />
                    <span className="flex-1 text-lg font-medium">{item.label[lang]}</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="nv-item mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[0.07] p-4" style={{ animationDelay: "380ms" }}>
            <p className="flex items-center gap-2 text-sm text-amber-200">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_8px_#fbbf24]" />
              {t.avail}
            </p>
            <a href={lang === "fr" ? "/cv.pdf" : "/cv-en.pdf"} download className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:underline">
              <FileText className="h-4 w-4" aria-hidden="true" />
              {t.cv}
            </a>
          </div>
        </nav>
      </div>

      <style>{`
        @keyframes nv-spin { to { transform: rotate(360deg) } }
        @keyframes nv-caret { 50% { opacity: 0 } }
        @keyframes nv-item { from { opacity: 0; transform: translate3d(0, 12px, 0) } to { opacity: 1; transform: none } }
        @keyframes nv-shine { 0% { transform: translateX(-120%) skewX(-20deg) } 60%, 100% { transform: translateX(260%) skewX(-20deg) } }
        .nv-spin { animation: nv-spin 6s linear infinite }
        .nv-caret { animation: nv-caret 1s steps(1) infinite }
        .nv-pill { transition: transform .45s cubic-bezier(.2,.8,.2,1), width .45s cubic-bezier(.2,.8,.2,1), opacity .3s }
        .nv-item { animation: nv-item .45s cubic-bezier(.2,.7,.2,1) both }
        .nv-cta::after { content: ""; position: absolute; inset: 0; width: 40%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent); animation: nv-shine 4.5s ease-in-out infinite; pointer-events: none }
        @media (prefers-reduced-motion: reduce) {
          .nv-spin, .nv-caret, .nv-item, .nv-cta::after { animation: none !important }
          .nv-pill { transition: none }
        }
      `}</style>
    </>
  )
}
