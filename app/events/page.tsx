"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const eventImages = [
    {
      src: "/event1.jpeg",
      title: "Tek-Up Clubs Event 2025",
      description: "",
    },
    {
      src: "/event2.jpeg",
      title: "TSYP12 Workshop",
      description: "",
    },
    {
      src: "/event3.jpeg",
      title: "TSYP12 Team",
      description: "",
    },
    {
      src: "/event4.jpg",
      title: "TSYP12",
      description: "",
    },
    {
      src: "/event5.jpeg",
      title: "TSYP13",
      description: "This photo captures one of the final moments of my journey as IEEE Tek-Up SB Vice-Chair, standing beside the Chairman, @lbrahim_trad . It reflects not only the end of a mandate, but the culmination of dedication, challenges, growth, and unforgettable experiences. As I officially close this chapter, I carry forward the lessons learned, the bonds formed, and the pride of having served a community driven by passion, purpose, and shared ambition.",
    },
    {
      src: "/event6.jpeg",
      title: "TSYP13 Team",
      description: "",
    },
    
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventImages.length) % eventImages.length)
  }

  const openModal = (index: number) => {
    setSelectedImage(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextModalImage = () => {
    setSelectedImage((prev) => (prev + 1) % eventImages.length)
  }

  const prevModalImage = () => {
    setSelectedImage((prev) => (prev - 1 + eventImages.length) % eventImages.length)
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Events & Activities</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">My involvement and associative commitments</p>
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
                <p className="text-gray-400">Active member</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-red-400">Activities:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Participation in cybersecurity events</li>
                  <li>• Technical workshops and trainings</li>
                  <li>• Collaboration on security projects</li>
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
                <p className="text-gray-400">Vice-Chairman(01/01/2025 ==>31/12/2025</p>
                <p className="text-gray-400">Advisor IEEE TEK-UP SB (2026) </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400">Responsibilities:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Coordination of activities and events</li>
                  <li>• Support for member engagement</li>
                  <li>• Promotion of technical development</li>
                  <li>• Leadership and collaboration</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Gallery slider */}
        <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700">
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Events Gallery</h3>
              <p className="text-gray-400">My most memorable moments during events and community activities</p>
            </div>

            {/* Main slider */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-xl border-2 border-gray-700">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {eventImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative group cursor-pointer" onClick={() => openModal(index)}>
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          className="w-full h-96 object-contain bg-gray-800 hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=384&width=600"
                            e.currentTarget.alt = "Image not available"
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-6 left-6 right-6 text-left">
                            <h4 className="text-white font-bold text-xl mb-2">{image.title}</h4>
                            <p className="text-gray-200">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation buttons */}
                <Button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                  size="sm"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                  size="sm"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Slide indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {eventImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {eventImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentSlide ? "border-blue-500 scale-105" : "border-gray-700 hover:border-gray-500"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-24 object-contain bg-gray-800"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=96&width=150"
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="mt-8 p-4 bg-blue-900/20 border border-blue-800/50 rounded-lg">
              <p className="text-blue-400 text-sm">
                💡 <strong>Navigation:</strong> Use the arrows, click the dots or thumbnails. Click on an image to zoom in!
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Full-screen modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <img
              src={eventImages[selectedImage].src || "/placeholder.svg"}
              alt={eventImages[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain"
            />

            {/* Close button */}
            <Button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              size="sm"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Modal navigation */}
            <Button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              size="sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              size="sm"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h4 className="text-white font-bold text-xl mb-2">{eventImages[selectedImage].title}</h4>
              <p className="text-gray-200">{eventImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
