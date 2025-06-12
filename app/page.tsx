import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"
import Image from "next/image"

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
              <Link href="#accueil" className="transition-colors hover:text-foreground/80">Accueil</Link>
              <Link href="#a-propos" className="transition-colors hover:text-foreground/80">À propos</Link>
              <Link href="#projets" className="transition-colors hover:text-foreground/80">Projets</Link>
              <Link href="#competences" className="transition-colors hover:text-foreground/80">Compétences</Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center space-x-2">
              <Link href="https://github.com/iheb137" target="_blank" rel="noopener noreferrer">
                <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </div>
              </Link>
              <Link href="https://linkedin.com/in/saafi-iheb-8373211b8" target="_blank" rel="noopener noreferrer">
                <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ACCUEIL */}
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
                <Button asChild><Link href="#contact">Me contacter</Link></Button>
                <Button variant="outline" asChild><Link href="#projets">Voir mes projets</Link></Button>
              </div>
            </div>
          </div>
        </section>

        {/* À PROPOS */}
        <section id="a-propos" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">À propos de moi</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Qui suis-je?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Actuellement en 2ᵉ année du cycle ingénieur en GLCI à Tek-Up, je me spécialise dans les technologies Cloud,
                  la virtualisation et l’automatisation des processus. Passionné de DevOps, je cherche à intégrer un
                  environnement dynamique pour appliquer mes compétences CI/CD, Docker, Kubernetes, AWS.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild><Link href="#contact">Me contacter</Link></Button>
                  <Button variant="outline" asChild>
                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/profile.png"
                  alt="Photo de profil de Saafi"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-border object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROJETS */}
        <section id="projets" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Mes Projets</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Découvrez une sélection de mes travaux récents.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
                <Card key={project} className="overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt={`Aperçu du projet ${project}`}
                    width={400}
                    height={400}
                    className="rounded-t-md object-cover w-full h-48"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold text-xl mb-2">Projet {project}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Description courte du projet {project}. Technologies utilisées et objectifs.
                    </p>
                    <div className="flex justify-between items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" /> Démo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" /> Code
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
      </main>
    </div>
  )
}
