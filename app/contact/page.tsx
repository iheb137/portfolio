"use client"

import { useState, useEffect } from "react"
import { Mail, Github, Linkedin, MapPin, Phone, ExternalLink } from "lucide-react"

const contacts = [
  {
    icon: <Mail size={20} />,
    label: "University Mail",
    value: "iheb.saafi@tek-up.tn",
    href: "mailto:iheb.saafi@tek-up.tn",
    color: "#00d4ff",
    glow: "rgba(0,212,255,0.25)",
    tag: "Primary",
  },
  {
    icon: <Mail size={20} />,
    label: "Personal Mail",
    value: "saafiiheb.si@gmail.com",
    href: "mailto:saafiiheb.si@gmail.com",
    color: "#ea4335",
    glow: "rgba(234,67,53,0.25)",
    tag: "Gmail",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone / WhatsApp",
    value: "+216 28 478 199",
    href: "tel:+21628478199",
    color: "#10b981",
    glow: "rgba(16,185,129,0.25)",
    tag: "Available",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/iheb137",
    href: "https://github.com/iheb137",
    color: "#f0f4ff",
    glow: "rgba(240,244,255,0.1)",
    tag: "Code",
    external: true,
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "saafi-iheb-8373211b8",
    href: "https://linkedin.com/in/saafi-iheb-8373211b8",
    color: "#0a66c2",
    glow: "rgba(10,102,194,0.3)",
    tag: "Network",
    external: true,
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Tunis, Tunisia",
    href: null,
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.2)",
    tag: "UTC+1",
  },
]

const statusItems = [
  { dot: "#10b981", text: "Open to Summer 2026 internships" },
  { dot: "#00d4ff", text: "Available for DevOps / DevSecOps roles" },
  { dot: "#f59e0b", text: "Interviews in French & English" },
  { dot: "#7c3aed", text: "Reply guaranteed within 24h" },
]

export default function ContactPage() {
  const [visible, setVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [copied, setCopied] = useState<string | null>(null)
  const [time, setTime] = useState("")

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Tunisia local time
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const tn = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Tunis",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
      }).format(now)
      setTime(tn + " TUN")
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <div style={{ minHeight: "100vh", background: "#080c14", fontFamily: "'Space Mono', monospace", position: "relative", overflow: "hidden" }}>

      {/* Grid bg */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px)`,
        backgroundSize: "60px 60px", pointerEvents: "none", zIndex: 0,
      }} />

      {/* Glow orbs */}
      <div style={{ position: "fixed", top: "-150px", left: "20%", width: "500px", height: "500px", background: "radial-gradient(ellipse,rgba(0,212,255,0.06) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "-150px", right: "15%", width: "400px", height: "400px", background: "radial-gradient(ellipse,rgba(124,58,237,0.06) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "72px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-24px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", borderRadius: "4px", padding: "6px 16px", marginBottom: "24px" }}>
            <span style={{ color: "#00d4ff", fontSize: "12px", letterSpacing: "3px" }}>$ ping iheb.saafi</span>
            <span style={{ display: "inline-block", width: "8px", height: "16px", background: "#00d4ff", animation: "blink 1s step-end infinite" }} />
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: "900", color: "#f0f4ff", margin: "0 0 16px", letterSpacing: "-1px", lineHeight: 1.1 }}>
            Let's{" "}
            <span style={{ color: "transparent", backgroundClip: "text", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(135deg,#00d4ff,#7c3aed)" }}>Connect</span>
          </h1>
          <p style={{ color: "#4a5568", fontSize: "0.9rem", letterSpacing: "2px", textTransform: "uppercase" }}>
            Open to opportunities · Ready to collaborate
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "24px", alignItems: "start" }}>

          {/* ── LEFT: Contact cards ── */}
          <div>
            <div style={{ color: "#4a5568", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "20px" }}>
              // reach_out_via
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {contacts.map((c, i) => (
                <div
                  key={c.label}
                  onMouseEnter={() => setHoveredId(c.label)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-30px)",
                    transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`,
                    background: hoveredId === c.label ? `linear-gradient(135deg, ${c.color}0f, #0d1120)` : "#0d1120",
                    border: `1px solid ${hoveredId === c.label ? c.color + "60" : "#1a2035"}`,
                    borderRadius: "12px",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    cursor: c.href ? "pointer" : "default",
                    boxShadow: hoveredId === c.label ? `0 0 24px ${c.glow}` : "none",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Top accent line */}
                  <div style={{
                    position: "absolute", top: 0, left: "24px", right: "24px", height: "1px",
                    background: hoveredId === c.label ? `linear-gradient(90deg,transparent,${c.color},transparent)` : "transparent",
                    transition: "all 0.3s",
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "10px", flexShrink: 0,
                    background: `${c.color}15`, border: `1px solid ${c.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: c.color, transition: "all 0.3s",
                    boxShadow: hoveredId === c.label ? `0 0 16px ${c.glow}` : "none",
                  }}>
                    {c.icon}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ color: "#4a5568", fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase" }}>{c.label}</span>
                      <span style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color, fontSize: "0.6rem", padding: "1px 7px", borderRadius: "20px", letterSpacing: "1px" }}>{c.tag}</span>
                    </div>
                    {c.href ? (
                      <a href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined}
                        style={{ color: hoveredId === c.label ? c.color : "#94a3b8", fontSize: "0.88rem", fontWeight: "600", textDecoration: "none", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px" }}>
                        {c.value}
                        {c.external && <ExternalLink size={12} style={{ opacity: 0.5 }} />}
                      </a>
                    ) : (
                      <span style={{ color: "#94a3b8", fontSize: "0.88rem", fontWeight: "600" }}>{c.value}</span>
                    )}
                  </div>

                  {/* Copy button (only for email/phone) */}
                  {(c.label.includes("Mail") || c.label === "Phone / WhatsApp") && (
                    <button
                      onClick={() => copyToClipboard(c.value, c.label)}
                      style={{
                        background: copied === c.label ? `${c.color}20` : "#1a2035",
                        border: `1px solid ${copied === c.label ? c.color + "60" : "#2d3748"}`,
                        borderRadius: "6px", padding: "6px 12px", color: copied === c.label ? c.color : "#4a5568",
                        fontSize: "0.65rem", cursor: "pointer", letterSpacing: "1px",
                        transition: "all 0.2s", flexShrink: 0, fontFamily: "inherit",
                      }}
                    >
                      {copied === c.label ? "✓ COPIED" : "COPY"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Status panel ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Live clock */}
            <div style={{
              opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.5s",
              background: "#0d1120", border: "1px solid #1a2035", borderRadius: "12px", padding: "24px",
              textAlign: "center",
            }}>
              <div style={{ color: "#4a5568", fontSize: "0.65rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Local Time</div>
              <div style={{ color: "#00d4ff", fontSize: "1.6rem", fontWeight: "700", fontFamily: "'Space Mono',monospace", letterSpacing: "2px" }}>
                {time || "––:––:–– TUN"}
              </div>
              <div style={{ color: "#374151", fontSize: "0.7rem", marginTop: "8px" }}>Africa/Tunis · GMT+1</div>
            </div>

            {/* Status */}
            <div style={{
              opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.6s",
              background: "#0d1120", border: "1px solid #1a2035", borderRadius: "12px",
              overflow: "hidden",
            }}>
              <div style={{ height: "3px", background: "linear-gradient(90deg,#10b981,#00d4ff,#7c3aed)" }} />
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981", animation: "pulse 2s ease-in-out infinite" }} />
                  <span style={{ color: "#10b981", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "2px" }}>AVAILABLE</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {statusItems.map((s) => (
                    <div key={s.text} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: s.dot, flexShrink: 0, marginTop: "5px" }} />
                      <span style={{ color: "#64748b", fontSize: "0.78rem", lineHeight: "1.5" }}>{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div style={{
              opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.7s",
              background: "#0d1120", border: "1px solid #1a2035", borderRadius: "12px", padding: "24px",
            }}>
              <div style={{ color: "#4a5568", fontSize: "0.65rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>Quick Actions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Send Email", href: "mailto:iheb.saafi@tek-up.tn", color: "#00d4ff", icon: "✉" },
                  { label: "Call / WhatsApp", href: "tel:+21628478199", color: "#10b981", icon: "📱" },
                  { label: "View Portfolio", href: "/", color: "#7c3aed", icon: "🌐" },
                ].map((btn) => (
                  <a key={btn.label} href={btn.href}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      background: `${btn.color}10`, border: `1px solid ${btn.color}25`,
                      borderRadius: "8px", padding: "10px 16px",
                      color: btn.color, fontSize: "0.8rem", fontWeight: "600",
                      textDecoration: "none", transition: "all 0.2s", fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${btn.color}20`; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${btn.color}50` }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${btn.color}10`; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${btn.color}25` }}
                  >
                    <span>{btn.icon}</span>
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM MESSAGE ── */}
        <div style={{
          marginTop: "48px",
          opacity: visible ? 1 : 0, transition: "opacity 1s ease 1s",
          background: "#0d1120", border: "1px solid #1a2035", borderRadius: "12px",
          overflow: "hidden",
        }}>
          <div style={{ height: "2px", background: "linear-gradient(90deg,transparent,#00d4ff,#7c3aed,transparent)" }} />
          <div style={{ padding: "36px", textAlign: "center" }}>
            <h3 style={{ color: "#f0f4ff", fontSize: "1.4rem", fontWeight: "700", margin: "0 0 12px" }}>
              Let's Build Something Great Together
            </h3>
            <p style={{ color: "#4a5568", fontSize: "0.85rem", lineHeight: "1.8", maxWidth: "560px", margin: "0 auto 24px" }}>
              Whether it's a DevOps pipeline, a full-stack project, or just a chat about tech — I'm always open to new opportunities and meaningful collaborations.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", color: "#2d3748", fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase" }}>
              <div style={{ width: "40px", height: "1px", background: "#1a2035" }} />
              iheb.saafi · Tunis, Tunisia · 2026
              <div style={{ width: "40px", height: "1px", background: "#1a2035" }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.3)} }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
