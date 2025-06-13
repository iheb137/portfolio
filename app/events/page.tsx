"use client"

import { Card } from "@/components/ui/card"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Événements & Activités</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Mes participations et engagements associatifs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Securinets */}
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-red-600/50 transition-all duration-300">
            <div className="space-y-6">
              <div className="text-center">
                <img
                  src="/sec.jpeg"
                  alt="Securinets Tek-UP"
                  className="w-32 h-32 object-cover rounded-xl mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-100">Securinets Tek-UP</h3>
                <p className="text-gray-400">Membre actif</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-red-400">Activités :</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Participation aux événements de cybersécurité</li>
                  <li>• Workshops techniques et formations</li>
                  <li>• Collaboration sur des projets de sécurité</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* IEEE */}
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-blue-600/50 transition-all duration-300">
            <div className="space-y-6">
              <div className="text-center">
                <img src="/IEEE.png" alt="IEEE TEK-UP SB" className="w-32 h-32 object-cover rounded-xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-100">IEEE TEK-UP SB</h3>
                <p className="text-gray-400">Vice-Chairman</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400">Responsabilités :</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Coordination des activités et événements</li>
                  <li>• Support à l'engagement des membres</li>
                  <li>• Promotion du développement technique</li>
                  <li>• Leadership et collaboration</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Section pour futures photos */}
        <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-100">Galerie d'événements</h3>
            <p className="text-gray-400">
              Cette section sera enrichie avec des photos de mes participations aux différents événements et activités.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Photo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
