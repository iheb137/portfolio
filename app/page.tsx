"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

const words = `As a DevOps-focused engineering student, I love bridging the gap between development and operations through automation and cloud solutions.

.`

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* HERO */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Bienvenue sur mon portfolio
              </h1>
              <TextGenerateEffect words={words} />
            </div>
            <div className="space-x-4">
              <Link href="#projects">
                <Button>Voir mes projets</Button>
              </Link>
              <Link href="#contact" className="text-sm font-medium underline underline-offset-4">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">À propos de moi</h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                I’m a passionate developer and DevOps engineering student with solid experience in full-stack development. I enjoy building high-performance, intuitive web applications using the latest technologies..
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/iheb.jpg"
                alt="Photo de profil"
                className="rounded-full w-48 h-48 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 border-y">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mes Projets</h2>
            <p className="mt-4 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Voici quelques-uns des projets sur lesquels j'ai travaillé récemment.
            </p>
          </div>
          <HoverEffect items={projects} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Me Contacter</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                N'hésitez pas à me joindre pour discuter de vos projets ou d'opportunités !
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <a href="mailto:saafi.iheb@example.com" className="text-blue-600 hover:underline">
                saafi.iheb@example.com
              </a>
              <div className="flex space-x-4">
                <Link href="https://github.com/iheb137" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 hover:text-blue-500" />
                </Link>
                <Link href="https://linkedin.com/in/saafi-iheb-8373211b8" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 hover:text-blue-500" />
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
    description: "Un chatbot intelligent utilisant l'IA pour accompagner les utilisateurs.",
    link: "https://github.com/iheb137/chatbot-ai",
  },
  {
    title: "Portfolio personnel",
    description: "Mon portfolio en ligne pour présenter mes compétences et projets.",
    link: "https://github.com/iheb137/portfolio",
  },
  {
    title: "iHar - Location de voitures de luxe",
    description: "Application de gestion pour la location de véhicules haut de gamme.",
    link: "https://github.com/iheb137/iHar",
  },
]
