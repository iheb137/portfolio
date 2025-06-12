import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"

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
            <nav className="flex items-center space-x-2">
              <Link href="https://github.com/iheb137" target="_blank" rel="noopener noreferrer">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </div>
              </Link>
              <Link href="https://linkedin.com/in/saafi-iheb-8373211b8" target="_blank" rel="noopener noreferrer">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-accent"
                  aria-label="LinkedIn"
                >
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

        {/* À PROPOS */}
        <section id="a-propos" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">À propos de moi</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Qui suis-je?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Actuellement en 2ᵉ année du cycle ingénieur en GLCI à Tek-Up, je me spécialise dans les technologies
                  Cloud, la virtualisation et l'automatisation des processus. Passionné de DevOps, je cherche à intégrer
                  un environnement dynamique pour appliquer mes compétences CI/CD, Docker, Kubernetes, AWS.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Me contacter</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Télécharger mon CV
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                {/* Photo de profil simplifiée */}
                <div className="w-[300px] h-[300px] rounded-full border-4 border-border bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-6xl">IS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETS */}
        <section id="projets" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfolio</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Mes Projets</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Découvrez une sélection de mes travaux récents en DevOps et Cloud.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 1,
                  title: "Pipeline CI/CD",
                  description:
                    "Automatisation complète avec Jenkins, Docker et Kubernetes pour le déploiement d'applications.",
                  tech: "Jenkins • Docker • K8s",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  id: 2,
                  title: "Infrastructure AWS",
                  description: "Déploiement d'infrastructure cloud avec Terraform et monitoring avec CloudWatch.",
                  tech: "AWS • Terraform • CloudWatch",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  id: 3,
                  title: "Stack Monitoring",
                  description: "Solution de monitoring complète avec Prometheus, Grafana et alerting automatisé.",
                  tech: "Prometheus • Grafana • AlertManager",
                  gradient: "from-green-500 to-emerald-500",
                },
              ].map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center text-white p-4`}
                  >
                    <h3 className="font-bold text-xl mb-2 text-center">{project.title}</h3>
                    <p className="text-sm text-center opacity-90">{project.tech}</p>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" /> Démo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://github.com/iheb137"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
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
                <Link href="https://github.com/iheb137">Voir plus sur GitHub</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section id="competences" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Expertise</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Mes Compétences</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Les technologies et outils que j'utilise dans mes projets DevOps et Cloud.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Docker",
                "Kubernetes",
                "AWS",
                "Jenkins",
                "Terraform",
                "Ansible",
                "Prometheus",
                "Grafana",
                "Linux",
                "Git",
                "Python",
                "Bash",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center space-y-2 rounded-lg border p-4 bg-background hover:shadow-md transition-shadow"
                >
                  <div className="rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-3">
                    <div className="h-6 w-6 bg-white rounded-sm" />
                  </div>
                  <h3 className="font-medium text-center">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Travaillons ensemble</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  N'hésitez pas à me contacter pour discuter d'opportunités ou de projets DevOps.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg space-y-6 py-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background">
                <Mail className="h-8 w-8 text-blue-500" />
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">saafi.ihebeddine@example.com</p>
              </div>
              <div className="flex justify-center space-x-4">
                <Button asChild>
                  <Link href="mailto:saafi.ihebeddine@example.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> M'envoyer un email
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://linkedin.com/in/saafi-iheb-8373211b8"
                    target="_blank"
                    rel="noopener noreferrer"
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
            © {new Date().getFullYear()} Ihebeddine Saafi. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/iheb137" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 hover:text-blue-500 transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/saafi-iheb-8373211b8" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 hover:text-blue-500 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
