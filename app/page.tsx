"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const words = `As a DevOps-focused engineering student, I love bridging the gap between development and operations through automation and cloud solutions.`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      {/* HERO */}
      <section className="w-full py-12 md:py-24 lg:py-32 border border-border bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                Bienvenue sur mon portfolio
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {words}
              </p>
            </div>
            <div className="space-x-4">
              <Link href="#projects">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Voir mes projets
                </Button>
              </Link>
              <Link href="#contact" className="text-sm font-medium underline underline-offset-4 text-foreground">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                About Me
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                I am IHEBEDDINE SAAFI, a dedicated DevOps engineering student with a strong background in full-stack development. I am passionate about optimizing the software development lifecycle through automation, continuous integration/continuous deployment (CI/CD), and cloud infrastructure solutions. I thrive on building high-performance, scalable web applications using cutting-edge technologies, bridging the gap between development and operations to deliver efficient and innovative solutions.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/iheb.jpg"
                alt="Photo de profil d'IHEBEDDINE SAAFI"
                className="rounded-full w-48 h-48 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="w-full py-12 md:py-24 lg:py-32 border border-border bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              My CV
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Download my CV to learn more about my background.
            </p>
            <div className="mt-6">
              <a
                href="/cv.pdf" 
                download="cv.pdf"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                <Download className="mr-2 h-5 w-5" />
                Download My CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 border border-border bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              My Certifications
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Here are the certifications I have earned.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-foreground">AWS Certified Solutions Architect</h3>
                <p className="text-muted-foreground">Earned in 2024</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-foreground">Docker Certified Associate</h3>
                <p className="text-muted-foreground">Earned in 2023</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 border border-border bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              My Skills
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Here are my key technical skills.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-foreground">DevOps</h3>
                <p className="text-muted-foreground">CI/CD, Kubernetes, Docker</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-foreground">Cloud</h3>
                <p className="text-muted-foreground">AWS, Azure</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-foreground">Development</h3>
                <p className="text-muted-foreground">React, Node.js, Python</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS AND ASSOCIATIVE ACTIVITIES */}
      <section id="events" className="w-full py-12 md:py-24 lg:py-32 border border-border bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Events and Associative Activities
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              My participation in events and associative activities.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
                <img
                  src="/sec.jpeg" // Remplace par le chemin réel de ton image
                  alt="securinets Tek-UP"
                  className="w-32 h-32 object-cover rounded-lg mb-2 hover:scale-105 transition-transform"
                />
                <h3 className="text-xl font-semibold text-foreground">Hackathon 2024</h3>
                <p className="text-muted-foreground text-center">Participation in a hackathon on cloud solutions.</p>
              </Card>
              <Card className="p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
                <img
                  src="/IEEE.jpeg" // Remplace par le chemin réel de ton image
                  alt="IEEE TEK-UP SB"
                  className="w-32 h-32 object-cover rounded-lg mb-2 hover:scale-105 transition-transform"
                />
                <h3 className="text-xl font-semibold text-foreground">VICE-CHAIRMAN IEEE TEK-UP SB</h3>
                <p className="text-muted-foreground text-center">As Vice Chair of the IEEE Tek-Up Student Branch, I assist the Chair in leading the branch, coordinate activities and events, support member engagement, and help foster a collaborative environment to promote technical knowledge and professional development among students.

</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 border border-border bg-card">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              My Projects
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Here are some of the projects I’ve worked on recently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mt-2 block"
                >
                  View on GitHub
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border border-border bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Feel free to reach out to discuss your projects or opportunities!
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <a href="mailto:iheb.saafigroup@tek-up.de" className="text-primary hover:underline">
                iheb.saafigroup@tek-up.de
              </a>
              <div className="flex space-x-4">
                <Link href="https://github.com/iheb137" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 hover:text-primary" />
                </Link>
                <Link href="https://linkedin.com/in/saafi-iheb-8373211b8" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 hover:text-primary" />
                </Link>
              </div>
              <Textarea
                placeholder="Your message..."
                className="mt-4 w-full max-w-md border-input bg-background text-foreground focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const projects = [
  {
    title: "Chatbot psychologique",
    description: "An intelligent chatbot using AI to support users.",
    link: "https://github.com/iheb137/chatbot-ai",
  },
  {
    title: "Portfolio personnel",
    description: "My online portfolio to showcase my skills and projects.",
    link: "https://github.com/iheb137/portfolio",
  },
  {
    title: "iHar - Luxury Car Rental",
    description: "A management application for luxury vehicle rentals.",
    link: "https://github.com/iheb137/iHar",
  },
];