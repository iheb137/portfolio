"use client"

import { Card } from "@/components/ui/card"
import { Code } from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">My Skills</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Technologies and tools I master</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill 1 */}
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-green-600/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-100">System & Linux</h3>
              </div>
              <p className="text-gray-400 text-sm">Ubuntu, CentOS, RED HAT, SSH, KALI</p>
            </div>
          </Card>

          {/* Skill 2 */}
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-blue-600/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-100">DevOps & Cloud</h3>
              </div>
              <p className="text-gray-400 text-sm">Docker, Kubernetes, CI/CD, AWS, Git, GitHub</p>
            </div>
          </Card>

          {/* Skill 3 */}
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-purple-600/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-100">Web Development</h3>
              </div>
              <p className="text-gray-400 text-sm">HTML, CSS, JavaScript, Next.js, Tailwind CSS</p>
            </div>
          </Card>

          {/* Skill 4 */}
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-orange-600/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-100">Programming</h3>
              </div>
              <p className="text-gray-400 text-sm">Java (OOP, JavaFX), Python (OOP, scripting)</p>
            </div>
          </Card>

          {/* Skill 5 */}
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-indigo-600/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-100">Database</h3>
              </div>
              <p className="text-gray-400 text-sm">MySQL, XAMPP, SQL queries, database design</p>
            </div>
          </Card>

          {/* Skill 6 */}
          <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-pink-600/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-100">AI & Tools</h3>
              </div>
              <p className="text-gray-400 text-sm">LLM Integration, RAG, Prompt Engineering, LangChain</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
