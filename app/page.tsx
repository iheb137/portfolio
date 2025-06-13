"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail, ExternalLink, Award, Code, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

const words = `As a DevOps-focused engineering student, I love bridging the gap between development and operations through automation and cloud solutions.`

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Typing animation for description
    const wordsArray = words.split(" ")
    let currentText = ""
    let wordIndex = 0

    const typingInterval = setInterval(() => {
      if (wordIndex < wordsArray.length) {
        currentText += (wordIndex === 0 ? "" : " ") + wordsArray[wordIndex]
        setTypedText(currentText)
        wordIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      {/* HERO */}
      <section className="w-full py-12 md:py-24 lg:py-32 border border-border bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div
            className={`flex flex-col items-center justify-center space-y-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary-foreground text-sm font-medium animate-fade-in-up">
                  👋 Welcome to my universe
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white animate-slide-in-left">
                Welcome to my{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  portfolio
                </span>
              </h1>

              <div className="mt-6 h-16 flex items-center justify-center">
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in">
              <Link href="#projects">
                <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Discover my projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="group border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Contact me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  About me
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  About Me
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I am <span className="font-semibold text-primary">IHEBEDDINE SAAFI</span>, a dedicated DevOps
                  engineering student with a strong background in full-stack development.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I am passionate about optimizing the software development lifecycle through automation, continuous
                  integration/continuous deployment (CI/CD), and cloud infrastructure solutions.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I thrive on building high-performance, scalable web applications using cutting-edge technologies,
                  bridging the gap between development and operations to deliver efficient and innovative solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["DevOps", "Cloud", "CI/CD", "Automation", "Full-Stack"].map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center animate-slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative">
                  <img
                    src="/iheb.jpg"
                    alt="Profile photo of IHEBEDDINE SAAFI"
                    className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white/10 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary/5 to-purple-500/5">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                My CV
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                My CV
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Download my CV to learn more about my background and experience.
              </p>
            </div>

            <div className="flex justify-center">
              <a
                href="/cv.pdf"
                download="cv.pdf"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Download My CV
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">✨</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Certifications
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                My Certifications
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Here are the certifications I have earned to validate my expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-orange-500/10 rounded-full">
                    <Award className="h-8 w-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      AWS Certified Solutions Architect
                    </h3>
                    <p className="text-muted-foreground">Earned in 2024</p>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Card>

              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <Award className="h-8 w-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Docker Certified Associate
                    </h3>
                    <p className="text-muted-foreground">Earned in 2023</p>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Skills
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                My Skills
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Here are my key technical skills.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      System & Linux
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">Ubuntu, CentOS,RED HAT, SSH, KALI</p>
                  <div className="h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </Card>

              <Card className="group p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      DevOps & Cloud
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Docker, Kubernetes (basics), CI/CD (GitHub Actions), AWS (EC2, S3), VirtualBox, VMware, Git, GitHub
                  </p>
                  <div className="h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </Card>

              <Card className="group p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      Web Development
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    HTML, CSS, JavaScript, PHP (basics), Next.js (frontend), Tailwind CSS
                  </p>
                  <div className="h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </Card>

              <Card className="group p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      Programming & Object-Oriented Development
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Java (OOP, JavaFX), Python (OOP, scripting)
                  </p>
                  <div className="h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </Card>

              <Card className="group p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      Database Management
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    MySQL, XAMPP, basic SQL queries, database design & integration
                  </p>
                  <div className="h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </Card>

              <Card className="group p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-green-500">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      Tools & Environments
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">IntelliJ IDEA, VS Code, Cursor, XAMPP</p>
                  <div className="h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </Card>

              <Card className="group p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      Artificial Intelligence & Generative AI
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Prompt Engineering,LLM Integration,RAG (Retrieval-Augmented Generation),Memory in Chatbots,AI Tools:
                    LangChain (basics), Ollama
                  </p>
                  <div className="h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS AND ASSOCIATIVE ACTIVITIES */}
      <section id="events" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary/5 to-purple-500/5">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Activities
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Events and Associative Activities
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                My participation in events and associative activities that shape my professional journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="flex flex-col items-center space-y-6">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/sec.jpeg"
                      alt="securinets Tek-UP"
                      className="w-32 h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      securinets Tek-UP
                    </h3>
                    <p className="text-muted-foreground">Active member at Securinets Tek-Up</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </Card>

              <Card className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20">
                <div className="flex flex-col items-center space-y-6">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/IEEE.png"
                      alt="IEEE TEK-UP SB"
                      className="w-32 h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      VICE-CHAIRMAN IEEE TEK-UP SB
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      As Vice Chair of the IEEE Tek-Up Student Branch, I assist the Chair in leading the branch,
                      coordinate activities and events, support member engagement, and help foster a collaborative
                      environment to promote technical knowledge and professional development among students.
                    </p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                My Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Here are some of the projects I've worked on recently, showcasing my skills and passion for development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>
                      <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/link:rotate-12 transition-transform" />
                        View on GitHub
                        <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                      <div className="h-1 w-16 bg-gradient-to-r from-primary to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-purple-500/5">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Feel free to reach out to discuss your projects, opportunities, or just to say hello!
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8">
              <div className="group">
                <a
                  href="mailto:iheb.saafigroup@tek-up.de"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <Mail className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                  iheb.saafigroup@tek-up.de
                </a>
              </div>

              <div className="flex space-x-6">
                <Link
                  href="https://github.com/iheb137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-card hover:bg-primary/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg border-2 border-transparent hover:border-primary/20"
                >
                  <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="https://linkedin.com/in/saafi-iheb-8373211b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-card hover:bg-primary/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg border-2 border-transparent hover:border-primary/20"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const projects = [
  {
    title: "Chatbot psychologique",
    description:
      "Dr Slimen est un chatbot psychologue intelligent, basé sur les LLMs et la technologie RAG, conçu pour offrir un soutien émotionnel personnalisé et confidentiel.",
    link: "https://github.com/iheb137/chatbot-ai",
  },
  {
    title: "Portfolio personnel",
    description: "Portfolio personnel",
    link: "https://github.com/iheb137/portfolio",
  },
  {
    title: "iHar - Luxury Car Rental",
    description: "A management application for luxury vehicle rentals.",
    link: "https://github.com/iheb137/iHar---Luxury-Car-Rental",
  },
  {
    title: "Gestion-de-clinique-",
    description:
      "Projet Java de gestion de clinique médicale développé avec JavaFX pour l'interface graphique, intégrant une base de données pour la gestion des patients, des rendez-vous, et du personnel médical..",
    link: "https://github.com/iheb137/Gestion-de-clinique-",
  },
]
