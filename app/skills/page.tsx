"use client"

import { useState, useEffect } from "react"

const skills = [
  {
    id: 1,
    category: "DevOps & CI/CD",
    color: "#00d4ff",
    glow: "rgba(0,212,255,0.3)",
    borderColor: "#00d4ff",
    items: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    category: "Backend Development",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.3)",
    borderColor: "#7c3aed",
    items: ["Spring Boot", "Symfony", "Java", "PHP", "Python", "REST APIs"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    category: "Frontend Development",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.3)",
    borderColor: "#f59e0b",
    items: ["Angular", "Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    category: "AI & LLM",
    color: "#10b981",
    glow: "rgba(16,185,129,0.3)",
    borderColor: "#10b981",
    items: ["RAG", "Prompt Engineering", "LangChain", "Flask + LLM", "OpenAI API"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    category: "Databases",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.3)",
    borderColor: "#ef4444",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Design", "XAMPP"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 6,
    category: "System & Security",
    color: "#f97316",
    glow: "rgba(249,115,22,0.3)",
    borderColor: "#f97316",
    items: ["Linux (Ubuntu, CentOS)", "Bash Scripting", "SSH", "Kali Linux", "Network Basics"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 7,
    category: "Versioning & Tools",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.3)",
    borderColor: "#06b6d4",
    items: ["Git", "GitHub", "GitLab", "Jira", "Agile / Scrum"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 8,
    category: "Languages",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.3)",
    borderColor: "#8b5cf6",
    items: ["Java", "Python", "JavaScript", "PHP", "C", "C#", "Bash"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function SkillsPage() {
  const [visible, setVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080c14",
        fontFamily: "'Space Mono', 'Courier New', monospace",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated grid background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Top glow orb */}
      <div
        style={{
          position: "fixed",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "72px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Terminal-style label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: "4px",
              padding: "6px 16px",
              marginBottom: "24px",
            }}
          >
            <span style={{ color: "#00d4ff", fontSize: "12px", letterSpacing: "3px" }}>$ ls --skills</span>
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "16px",
                background: "#00d4ff",
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "900",
              color: "#f0f4ff",
              margin: "0 0 16px 0",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Technical{" "}
            <span
              style={{
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                backgroundImage: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              }}
            >
              Arsenal
            </span>
          </h1>
          <p
            style={{
              color: "#4a5568",
              fontSize: "1rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Tools & technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              onMouseEnter={() => setHoveredId(skill.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.07}s`,
                background:
                  hoveredId === skill.id
                    ? `linear-gradient(135deg, rgba(${skill.color.replace("#","").match(/.{2}/g)?.map(x=>parseInt(x,16)).join(",")},0.12), #0d1120)`
                    : "linear-gradient(135deg, #0d1120, #0a0e1a)",
                border: `1px solid ${hoveredId === skill.id ? skill.borderColor + "80" : "#1a2035"}`,
                borderRadius: "12px",
                padding: "28px",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                boxShadow: hoveredId === skill.id ? `0 0 30px ${skill.glow}, 0 4px 24px rgba(0,0,0,0.4)` : "0 2px 12px rgba(0,0,0,0.3)",
                transition: "all 0.35s ease",
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "60px",
                  height: "60px",
                  background: `linear-gradient(225deg, ${skill.color}18, transparent)`,
                  borderBottomLeftRadius: "60px",
                }}
              />

              {/* Top line accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "28px",
                  right: "28px",
                  height: "1px",
                  background: hoveredId === skill.id
                    ? `linear-gradient(90deg, transparent, ${skill.color}, transparent)`
                    : "transparent",
                  transition: "all 0.35s ease",
                }}
              />

              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                <div
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    background: `${skill.color}18`,
                    border: `1px solid ${skill.color}30`,
                    color: skill.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {skill.icon}
                </div>
                <h3
                  style={{
                    color: "#e2e8f0",
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    margin: 0,
                  }}
                >
                  {skill.category}
                </h3>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skill.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: "0.72rem",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      background: `${skill.color}12`,
                      border: `1px solid ${skill.color}25`,
                      color: hoveredId === skill.id ? skill.color : "#64748b",
                      letterSpacing: "0.5px",
                      transition: "all 0.3s ease",
                      fontFamily: "inherit",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          style={{
            marginTop: "64px",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.8s",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              color: "#2d3748",
              fontSize: "0.8rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: "40px", height: "1px", background: "#1a2035" }} />
            Always learning · Always building
            <div style={{ width: "40px", height: "1px", background: "#1a2035" }} />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
