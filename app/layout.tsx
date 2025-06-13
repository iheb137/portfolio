import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "IHEBEDDINE SAAFI - Portfolio",
  description: "Portfolio professionnel de IHEBEDDINE SAAFI - Étudiant DevOps Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body className="dark bg-gray-950 text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navigation />
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
