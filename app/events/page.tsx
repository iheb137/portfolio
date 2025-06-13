"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

export default function EventsPage() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({})

  const handleImageError = (imageName: string) => {
    setImageErrors((prev) => ({ ...prev, [imageName]: true }))
    console.error(`Erreur de chargement pour l'image: ${imageName}`)
  }

  const handleImageLoad = (imageName: string) => {
    console.log(`Image chargée avec succès: ${imageName}`)
  }

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
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-blue-600/50 transition-all duration-500 transform hover:-translate-y-2">
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
          <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-blue-600/50 transition-all duration-500 transform hover:-translate-y-2">
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

        {/* Diagnostic des images */}
        <Card className="p-6 bg-red-900/20 border border-red-800/50 rounded-lg mb-8">
          <h3 className="text-red-400 font-semibold mb-4">🔍 Diagnostic des images</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-gray-300">event1.jpeg:</p>
              <p className={imageErrors["event1"] ? "text-red-400" : "text-green-400"}>
                {imageErrors["event1"] ? "❌ Erreur" : "✅ OK"}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300">event2.jpeg:</p>
              <p className={imageErrors["event2"] ? "text-red-400" : "text-green-400"}>
                {imageErrors["event2"] ? "❌ Erreur" : "✅ OK"}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300">evnt3.jpeg:</p>
              <p className={imageErrors["evnt3"] ? "text-red-400" : "text-green-400"}>
                {imageErrors["evnt3"] ? "❌ Erreur" : "✅ OK"}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300">event4.jpg:</p>
              <p className={imageErrors["event4"] ? "text-red-400" : "text-green-400"}>
                {imageErrors["event4"] ? "❌ Erreur" : "✅ OK"}
              </p>
            </div>
          </div>
        </Card>

        {/* Galerie d'événements */}
        <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-100">Galerie d'événements</h3>
            <p className="text-gray-400">Mes moments marquants lors des événements et activités associatives</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Photo 1 - event1.jpeg */}
              <div className="group relative overflow-hidden rounded-lg border-2 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                {imageErrors["event1"] ? (
                  <div className="w-full h-64 bg-red-900/30 border-2 border-red-700 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <p className="text-red-400 font-semibold">❌ Erreur</p>
                      <p className="text-red-300 text-sm">/event1.jpeg</p>
                      <p className="text-red-200 text-xs">Image non trouvée</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src="/event1.jpeg"
                    alt="Événement 1"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError("event1")}
                    onLoad={() => handleImageLoad("/event1.jpeg")}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold">Événement IEEE</h4>
                    <p className="text-gray-300 text-sm">Workshop technique</p>
                  </div>
                </div>
              </div>

              {/* Photo 2 - event2.jpeg */}
              <div className="group relative overflow-hidden rounded-lg border-2 border-gray-700 hover:border-red-500/50 transition-all duration-300">
                {imageErrors["event2"] ? (
                  <div className="w-full h-64 bg-red-900/30 border-2 border-red-700 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <p className="text-red-400 font-semibold">❌ Erreur</p>
                      <p className="text-red-300 text-sm">/event2.jpeg</p>
                      <p className="text-red-200 text-xs">Image non trouvée</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src="/event2.jpeg"
                    alt="Événement 2"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError("event2")}
                    onLoad={() => handleImageLoad("/event2.jpeg")}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold">Securinets Event</h4>
                    <p className="text-gray-300 text-sm">Cybersecurity workshop</p>
                  </div>
                </div>
              </div>

              {/* Photo 3 - evnt3.jpeg */}
              <div className="group relative overflow-hidden rounded-lg border-2 border-gray-700 hover:border-green-500/50 transition-all duration-300">
                {imageErrors["evnt3"] ? (
                  <div className="w-full h-64 bg-red-900/30 border-2 border-red-700 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <p className="text-red-400 font-semibold">❌ Erreur</p>
                      <p className="text-red-300 text-sm">/evnt3.jpeg</p>
                      <p className="text-red-200 text-xs">Image non trouvée</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src="/evnt3.jpeg"
                    alt="Événement 3"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError("evnt3")}
                    onLoad={() => handleImageLoad("/evnt3.jpeg")}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold">Team Building</h4>
                    <p className="text-gray-300 text-sm">Activité d'équipe</p>
                  </div>
                </div>
              </div>

              {/* Photo 4 - event4.jpg */}
              <div className="group relative overflow-hidden rounded-lg border-2 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                {imageErrors["event4"] ? (
                  <div className="w-full h-64 bg-red-900/30 border-2 border-red-700 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <p className="text-red-400 font-semibold">❌ Erreur</p>
                      <p className="text-red-300 text-sm">/event4.jpg</p>
                      <p className="text-red-200 text-xs">Image non trouvée</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src="/event4.jpg"
                    alt="Événement 4"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError("event4")}
                    onLoad={() => handleImageLoad("/event4.jpg")}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold">Tech Conference</h4>
                    <p className="text-gray-300 text-sm">Présentation technique</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions de dépannage */}
            <div className="mt-8 p-4 bg-blue-900/20 border border-blue-800/50 rounded-lg">
              <h4 className="text-blue-400 font-semibold mb-3">🔧 Étapes de dépannage :</h4>
              <div className="text-left space-y-2 text-sm text-blue-300">
                <p>
                  <strong>1.</strong> Vérifiez que les fichiers sont dans <code>public/</code>
                </p>
                <p>
                  <strong>2.</strong> Redémarrez votre serveur de développement (<code>npm run dev</code>)
                </p>
                <p>
                  <strong>3.</strong> Vérifiez la console du navigateur (F12) pour les erreurs
                </p>
                <p>
                  <strong>4.</strong> Essayez d'accéder directement : <code>localhost:3000/event1.jpeg</code>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
