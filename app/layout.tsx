import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Billions Network - Privacy-First Human & AI Verification",
  description: "The Human and AI Network: Privacy-first verification using ZK proofs. 1.9M+ users worldwide.",
  generator: "Billions Network",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {/* Subtle animated gradient orbs behind content */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div
            className="absolute rounded-full blur-3xl opacity-20 animate-float-slow"
            style={{
              background: "radial-gradient(circle at center, rgba(59,130,246,0.5), rgba(59,130,246,0))",
              width: 420,
              height: 420,
              top: -80,
              left: -120,
            }}
          />
          <div
            className="absolute rounded-full blur-3xl opacity-15 animate-float"
            style={{
              background: "radial-gradient(circle at center, rgba(34,197,94,0.45), rgba(34,197,94,0))",
              width: 360,
              height: 360,
              bottom: 80,
              left: 120,
            }}
          />
          <div
            className="absolute rounded-full blur-3xl opacity-15 animate-float"
            style={{
              background: "radial-gradient(circle at center, rgba(234,179,8,0.45), rgba(234,179,8,0))",
              width: 360,
              height: 360,
              top: 140,
              right: 140,
            }}
          />
          <div
            className="absolute rounded-full blur-3xl opacity-15 animate-float-slow"
            style={{
              background: "radial-gradient(circle at center, rgba(249,115,22,0.4), rgba(249,115,22,0))",
              width: 420,
              height: 420,
              bottom: -100,
              right: -120,
            }}
          />
        </div>
        <ThemeProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
