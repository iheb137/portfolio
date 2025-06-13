"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Calendar, GraduationCap, Target, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">À propos de moi</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez mon parcours, mes passions et ce qui me motive dans le domaine du DevOps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Photo et informations principales */}
          <div className="lg:col-span-1">
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
              <div className="text-center space-y-6">
                <div className="relative group mx-auto w-fit">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <img
                    src="/iheb.jpg"
                    alt="IHEBEDDINE SAAFI"
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-gray-700 shadow-2xl"
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-100">IHEBEDDINE SAAFI</h2>
                  <p className="text-blue-400 font-medium">Étudiant DevOps Engineer</p>

                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <span>Tunisie</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Calendar className="h-5 w-5 text-blue-400" />
                      <span>Étudiant en cours</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <GraduationCap className="h-5 w-5 text-blue-400" />
                      <span>TEK-UP University</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="h-5 w-5 text-blue-400" />
                      <span className="text-sm">iheb.saafigroup@tek-up.de</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Présentation */}
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
                <Target className="h-6 w-6 text-blue-400 mr-3" />
                Ma présentation
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Je suis <span className="font-semibold text-blue-400">IHEBEDDINE SAAFI</span>, un étudiant passionné
                  en ingénierie DevOps avec une solide formation en développement full-stack.
                </p>
                <p>
                  Ma passion réside dans l'optimisation du cycle de vie du développement logiciel grâce à
                  l'automatisation, l'intégration continue/déploiement continu (CI/CD), et les solutions
                  d'infrastructure cloud.
                </p>
                <p>
                  Je m'épanouis dans la création d'applications web haute performance et évolutives en utilisant des
                  technologies de pointe, comblant le fossé entre le développement et les opérations pour livrer des
                  solutions efficaces et innovantes.
                </p>
              </div>
            </Card>

            {/* Objectifs */}
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Mes objectifs professionnels</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-blue-400">Court terme</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Maîtriser les outils DevOps avancés</li>
                    <li>• Obtenir des certifications cloud</li>
                    <li>• Contribuer à des projets open source</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-blue-400">Long terme</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Devenir DevOps Engineer senior</li>
                    <li>• Architecturer des solutions cloud</li>
                    <li>• Mentorer de jeunes développeurs</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Valeurs */}
            <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Mes valeurs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold text-gray-100">Innovation</h4>
                  <p className="text-sm text-gray-400">Toujours à la recherche de nouvelles solutions</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold text-gray-100">Collaboration</h4>
                  <p className="text-sm text-gray-400">Le travail d'équipe fait la force</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="font-semibold text-gray-100">Apprentissage</h4>
                  <p className="text-sm text-gray-400">Formation continue et amélioration</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
