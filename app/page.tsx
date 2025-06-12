import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">MonPortfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#accueil" className="transition-colors hover:text-foreground/80">
                Accueil
              </Link>
              <Link href="#a-propos" className="transition-colors hover:text-foreground/80">
                À propos
              </Link>
              <Link href="#projets" className="transition-colors hover:text-foreground/80">
                Projets
              </Link>
              <Link href="#competences" className="transition-colors hover:text-foreground/80">
                Compétences
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
              <Link href="https://github.com/iheb137" target="_blank" rel="noreferrer">
                <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://linkedin.com/in/votre-username" target="_blank" rel="noreferrer">
                <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="accueil" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  IHEBEDDINE SAAFI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Tech Lover | Cloud & DevOps Learner | Étudiant Ingénieur
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Me contacter</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projets">Voir mes projets</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="a-propos" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">À propos de moi</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Qui suis-je?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Actuellement en deuxième année du cycle ingénieur en Génie Logiciel et Cloud Intelligent (GLCI) à Tek-Up, je me spécialise dans les technologies Cloud, la virtualisation et l’automatisation des processus de développement. Passionné par l’univers DevOps, je cherche à intégrer un environnement dynamique où je pourrai mettre en pratique mes compétences en CI/CD, conteneurisation (Docker, Kubernetes) et gestion d’infrastructure cloud (AWS). Curieux, rigoureux et orienté solution, je suis motivé à contribuer activement à la fluidité des cycles de développement et à l’amélioration continue des systèmes.


                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Me contacter</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                      Télécharger mon CV
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
              <Image
                src="/profile.png"
                alt="Photo de profil"
                width={400}
                height={400}
                className="rounded-full aspect-square object-cover border-4 border-border bg-muted"
               />
        
              </div>
            </div>
          </div>
        </section>

        <section id="projets" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Mes Projets</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Découvrez une sélection de mes travaux récents.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
                <Card key={project} className="overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=250&width=500&text=Projet+${project}`}
                    alt={`Projet ${project}`}
                    width="500"
                    height="250"
                    className="object-cover w-full h-48"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold text-xl mb-2">Projet {project}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Description courte du projet {project}. Technologies utilisées et objectifs.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" /> Démo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" className="flex items-center gap-1">
                          <Github className="h-4 w-4" /> Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="#">Voir plus de projets</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="competences" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Expertise</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Mes Compétences</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Les technologies et outils que j'utilise au quotidien.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
              {["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Git", "Figma"].map(
                (skill) => (
                  <div key={skill} className="flex flex-col items-center space-y-2 rounded-lg border p-4 bg-background">
                    <div className="rounded-full bg-muted p-2">
                      <div className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium">{skill}</h3>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Travaillons ensemble</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  N'hésitez pas à me contacter pour discuter de votre projet.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg space-y-6 py-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <Mail className="h-6 w-6" />
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">iheb.saafigroup@tek-up.de</p>
              </div>
              <div className="flex justify-center space-x-4">
                <Button asChild>
                  <Link href="iheb.saafigroup@tek-up.de" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> M'envoyer un email
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="www.linkedin.com/in/saafi-iheb-8373211b8"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
            © {new Date().getFullYear()} IHEBEDDINE SAAFI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/votre-username" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/votre-username" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
