"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const organizations = [
  {
    id: 1,
    logo: "/sec.jpeg",
    name: "Securinets Tek-UP",
    role: "Active Member",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.25)",
    period: "2024 – Present",
    activities: [
      "Participation in cybersecurity events & CTFs",
      "Technical workshops and security trainings",
      "Collaboration on security research projects",
    ],
  },
  {
    id: 2,
    logo: "/IEEE.png",
    name: "IEEE TEK-UP SB",
    role: "Advisor SB & YP Member",
    color: "#00d4ff",
    glow: "rgba(0,212,255,0.25)",
    period: "Jan 2026 – Present",
    badge: "Current",
    activities: [
      "Strategic advisory to the Student Branch",
      "Mentoring and guiding active members",
      "Coordination with IEEE regional bodies",
      "Supporting academic & technical development",
    ],
    previousRole: {
      title: "Vice-Chairman",
      period: "Jan 2025 – Dec 31, 2025",
      note: "Mandate completed ✓",
      activities: [
        "Strategic planning & IEEE project execution",
        "Coordination of activities and events",
        "Leadership and team collaboration",
      ],
    },
  },
]

const eventImages = [
  { src: "/event1.jpeg", title: "Tek-Up Clubs Event 2025", description: "" },
  { src: "/event2.jpeg", title: "TSYP12 Workshop", description: "" },
  { src: "/event3.jpeg", title: "TSYP12 Team", description: "" },
  { src: "/event4.jpg", title: "TSYP12", description: "" },
  {
    src: "/event5.jpeg",
    title: "TSYP13",
    description:
      "This photo captures one of the final moments of my journey as IEEE Tek-Up SB Vice-Chair, standing beside the Chairman, @lbrahim_trad. It reflects not only the end of a mandate, but the culmination of dedication, challenges, growth, and unforgettable experiences.",
  },
  { src: "/event6.jpeg", title: "TSYP13 Team", description: "" },
]

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [visible, setVisible] = useState(false)
  const [expandedOrg, setExpandedOrg] = useState<number | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!isModalOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false)
      if (e.key === "ArrowRight") setSelectedImage((p) => (p + 1) % eventImages.length)
      if (e.key === "ArrowLeft") setSelectedImage((p) => (p - 1 + eventImages.length) % eventImages.length)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isModalOpen])

  return (
    <div style={{ minHeight: "100vh", background: "#080c14", fontFamily: "'Space Mono', monospace", position: "relative", overflow: "hidden" }}>

      {/* Grid bg */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px)`,
        backgroundSize: "60px 60px", pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{ position: "fixed", top: "-200px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse,rgba(0,212,255,0.07) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "72px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-20px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", borderRadius: "4px", padding: "6px 16px", marginBottom: "24px" }}>
            <span style={{ color: "#00d4ff", fontSize: "12px", letterSpacing: "3px" }}>$ cat events.log</span>
            <span style={{ display: "inline-block", width: "8px", height: "16px", background: "#00d4ff", animation: "blink 1s step-end infinite" }} />
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: "900", color: "#f0f4ff", margin: "0 0 16px", letterSpacing: "-1px", lineHeight: 1.1 }}>
            Events &{" "}
            <span style={{ color: "transparent", backgroundClip: "text", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(135deg,#00d4ff,#7c3aed)" }}>Activities</span>
          </h1>
          <p style={{ color: "#4a5568", fontSize: "0.9rem", letterSpacing: "2px", textTransform: "uppercase" }}>
            Associations · Competitions · Community
          </p>
        </div>

        {/* ── ORGANIZATIONS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "24px", marginBottom: "64px" }}>
          {organizations.map((org, i) => (
            <div key={org.id} style={{
              opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
              background: "linear-gradient(135deg,#0d1120,#0a0e1a)",
              border: `1px solid ${org.color}40`,
              borderRadius: "16px", overflow: "hidden",
              boxShadow: `0 0 40px ${org.glow}, 0 4px 24px rgba(0,0,0,0.4)`,
            }}>
              {/* Card top accent */}
              <div style={{ height: "3px", background: `linear-gradient(90deg, transparent, ${org.color}, transparent)` }} />

              <div style={{ padding: "32px" }}>
                {/* Logo + name */}
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
                  <div style={{ width: "72px", height: "72px", borderRadius: "12px", overflow: "hidden", border: `1px solid ${org.color}30`, background: "#0a0e1a", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={org.logo} alt={org.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => { e.currentTarget.src = "/placeholder.svg" }} />
                  </div>
                  <div>
                    <h3 style={{ color: "#f0f4ff", fontSize: "1rem", fontWeight: "700", margin: "0 0 4px" }}>{org.name}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ color: org.color, fontSize: "0.8rem", fontWeight: "600" }}>{org.role}</span>
                      {org.badge && (
                        <span style={{ background: `${org.color}20`, border: `1px solid ${org.color}50`, color: org.color, fontSize: "0.65rem", padding: "2px 8px", borderRadius: "20px", letterSpacing: "1px" }}>
                          {org.badge}
                        </span>
                      )}
                    </div>
                    <div style={{ color: "#4a5568", fontSize: "0.72rem", marginTop: "4px", letterSpacing: "1px" }}>{org.period}</div>
                  </div>
                </div>

                {/* Current activities */}
                <div style={{ marginBottom: org.previousRole ? "20px" : "0" }}>
                  <div style={{ color: "#4a5568", fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Responsibilities</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {org.activities.map((act) => (
                      <li key={act} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#94a3b8", fontSize: "0.8rem", lineHeight: "1.5" }}>
                        <span style={{ color: org.color, flexShrink: 0, marginTop: "2px" }}>▸</span>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Previous role accordion */}
                {org.previousRole && (
                  <div style={{ marginTop: "20px", borderTop: "1px solid #1a2035", paddingTop: "20px" }}>
                    <button
                      onClick={() => setExpandedOrg(expandedOrg === org.id ? null : org.id)}
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    >
                      <div style={{ textAlign: "left" }}>
                        <div style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: "600" }}>
                          Previous: {org.previousRole.title}
                        </div>
                        <div style={{ color: "#374151", fontSize: "0.68rem", marginTop: "2px" }}>{org.previousRole.period}</div>
                      </div>
                      <div style={{ color: "#374151", fontSize: "0.7rem", background: "#1a2035", padding: "4px 10px", borderRadius: "4px", flexShrink: 0 }}>
                        {expandedOrg === org.id ? "▲ Hide" : "▼ Show"}
                      </div>
                    </button>

                    {expandedOrg === org.id && (
                      <div style={{ marginTop: "16px", padding: "16px", background: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid #1a2035" }}>
                        <div style={{ color: "#10b981", fontSize: "0.7rem", marginBottom: "12px", letterSpacing: "1px" }}>
                          ✓ {org.previousRole.note}
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                          {org.previousRole.activities.map((act) => (
                            <li key={act} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#64748b", fontSize: "0.78rem", lineHeight: "1.5" }}>
                              <span style={{ color: "#374151", flexShrink: 0 }}>▸</span>
                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── GALLERY ── */}
        <div style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s",
          background: "linear-gradient(135deg,#0d1120,#0a0e1a)",
          border: "1px solid #1a2035", borderRadius: "16px", overflow: "hidden",
        }}>
          <div style={{ height: "3px", background: "linear-gradient(90deg,transparent,#7c3aed,transparent)" }} />
          <div style={{ padding: "40px" }}>

            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ color: "#4a5568", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>Photo Archive</div>
              <h3 style={{ color: "#f0f4ff", fontSize: "1.6rem", fontWeight: "700", margin: "0 0 8px" }}>Events Gallery</h3>
              <p style={{ color: "#4a5568", fontSize: "0.85rem" }}>Memorable moments from events and community activities</p>
            </div>

            {/* Main slider */}
            <div style={{ position: "relative", maxWidth: "860px", margin: "0 auto 24px" }}>
              <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #1a2035", position: "relative" }}>
                <div style={{ display: "flex", transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)", transform: `translateX(-${currentSlide * 100}%)` }}>
                  {eventImages.map((img, idx) => (
                    <div key={idx} style={{ minWidth: "100%", cursor: "pointer", position: "relative" }} onClick={() => { setSelectedImage(idx); setIsModalOpen(true) }}>
                      <img src={img.src} alt={img.title}
                        style={{ width: "100%", height: "420px", objectFit: "contain", background: "#060a12", display: "block", transition: "transform 0.3s ease" }}
                        onError={(e) => { e.currentTarget.src = "/placeholder.svg?height=420&width=860" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.02)" }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)" }}
                      />
                      {/* Hover overlay */}
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 50%)", opacity: 0, transition: "opacity 0.3s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = "1" }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = "0" }}>
                        <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                          <div style={{ color: "#fff", fontWeight: "700", fontSize: "1rem", marginBottom: "6px" }}>{img.title}</div>
                          {img.description && <div style={{ color: "#d1d5db", fontSize: "0.78rem", lineHeight: "1.5" }}>{img.description.slice(0, 120)}{img.description.length > 120 ? "…" : ""}</div>}
                        </div>
                      </div>
                      {/* Zoom hint */}
                      <div style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "6px 10px", color: "#94a3b8", fontSize: "0.7rem" }}>
                        🔍 Click to zoom
                      </div>
                    </div>
                  ))}
                </div>

                {/* Arrows */}
                {[
                  { side: "left", icon: <ChevronLeft size={20} />, action: () => setCurrentSlide((p) => (p - 1 + eventImages.length) % eventImages.length) },
                  { side: "right", icon: <ChevronRight size={20} />, action: () => setCurrentSlide((p) => (p + 1) % eventImages.length) },
                ].map(({ side, icon, action }) => (
                  <button key={side} onClick={action} style={{
                    position: "absolute", [side]: "16px", top: "50%", transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%",
                    width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", cursor: "pointer", transition: "all 0.2s",
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.3)" }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.6)" }}
                  >
                    {icon}
                  </button>
                ))}
              </div>

              {/* Counter */}
              <div style={{ position: "absolute", bottom: "16px", left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.7)", borderRadius: "20px", padding: "4px 14px", color: "#94a3b8", fontSize: "0.75rem" }}>
                {currentSlide + 1} / {eventImages.length}
              </div>
            </div>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "28px" }}>
              {eventImages.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} style={{
                  width: idx === currentSlide ? "24px" : "8px", height: "8px",
                  borderRadius: "4px", border: "none", cursor: "pointer",
                  background: idx === currentSlide ? "#00d4ff" : "#1a2035",
                  transition: "all 0.3s ease",
                }} />
              ))}
            </div>

            {/* Thumbnails */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: "10px", maxWidth: "860px", margin: "0 auto" }}>
              {eventImages.map((img, idx) => (
                <div key={idx} onClick={() => setCurrentSlide(idx)} style={{
                  borderRadius: "8px", overflow: "hidden", cursor: "pointer",
                  border: `2px solid ${idx === currentSlide ? "#00d4ff" : "#1a2035"}`,
                  boxShadow: idx === currentSlide ? "0 0 12px rgba(0,212,255,0.3)" : "none",
                  transform: idx === currentSlide ? "scale(1.04)" : "scale(1)",
                  transition: "all 0.25s ease",
                }}>
                  <img src={img.src} alt={img.title}
                    style={{ width: "100%", height: "80px", objectFit: "cover", background: "#060a12", display: "block" }}
                    onError={(e) => { e.currentTarget.src = "/placeholder.svg?height=80&width=130" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom tag */}
        <div style={{ marginTop: "56px", textAlign: "center", opacity: visible ? 1 : 0, transition: "opacity 1s ease 1s" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", color: "#2d3748", fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase" }}>
            <div style={{ width: "40px", height: "1px", background: "#1a2035" }} />
            Community · Leadership · Impact
            <div style={{ width: "40px", height: "1px", background: "#1a2035" }} />
          </div>
        </div>
      </div>

      {/* ── MODAL ── */}
      {isModalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false) }}>
          <div style={{ position: "relative", maxWidth: "1000px", width: "100%" }}>
            <img src={eventImages[selectedImage].src} alt={eventImages[selectedImage].title}
              style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain", display: "block", margin: "0 auto", borderRadius: "8px" }}
              onError={(e) => { e.currentTarget.src = "/placeholder.svg" }} />

            {/* Close */}
            <button onClick={() => setIsModalOpen(false)} style={{
              position: "absolute", top: "-16px", right: "-16px", background: "#1a2035", border: "1px solid #374151",
              borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center",
              color: "#94a3b8", cursor: "pointer",
            }}>
              <X size={18} />
            </button>

            {/* Modal arrows */}
            {[
              { side: "left", icon: <ChevronLeft size={22} />, action: () => setSelectedImage((p) => (p - 1 + eventImages.length) % eventImages.length) },
              { side: "right", icon: <ChevronRight size={22} />, action: () => setSelectedImage((p) => (p + 1) % eventImages.length) },
            ].map(({ side, icon, action }) => (
              <button key={side} onClick={action} style={{
                position: "absolute", [side]: "-20px", top: "50%", transform: "translateY(-50%)",
                background: "#1a2035", border: "1px solid #374151", borderRadius: "50%",
                width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", cursor: "pointer",
              }}>
                {icon}
              </button>
            ))}

            {/* Info */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <div style={{ color: "#f0f4ff", fontWeight: "700", fontSize: "1rem", marginBottom: "8px" }}>
                {eventImages[selectedImage].title}
              </div>
              {eventImages[selectedImage].description && (
                <div style={{ color: "#64748b", fontSize: "0.82rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
                  {eventImages[selectedImage].description}
                </div>
              )}
              <div style={{ color: "#374151", fontSize: "0.7rem", marginTop: "12px" }}>
                {selectedImage + 1} / {eventImages.length} · Press ESC to close · ← → to navigate
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </div>
  )
}
