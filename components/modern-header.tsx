"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"

interface ModernHeaderProps {
  currentPage: number
  onPageChange: (page: number) => void
}

export function ModernHeader({ currentPage, onPageChange }: ModernHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const pages = [
    { id: 1, title: "Intro", subtitle: "The Human & AI Network" },
    { id: 2, title: "Details", subtitle: "Building Trust Economy" },
    { id: 3, title: "Founders", subtitle: "Meet Our Leaders" },
    { id: 4, title: "Products", subtitle: "Innovation & Apps" },
    { id: 5, title: "Team", subtitle: "Our Core Team" },
    { id: 6, title: "Partners", subtitle: "Strategic Collaborations" },
    { id: 7, title: "Yappers", subtitle: "Community Champions" },
    { id: 8, title: "Anthem", subtitle: "Our Vision & Sound" },
  ]

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-[92vw] max-w-5xl">
      <Card className="neumo-card bg-white border border-border rounded-full overflow-visible shadow-lg">
        <CardContent className="px-1 py-0">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-lg overflow-hidden">
                <Image
                  src="/billions-logo.png"
                  alt="Billions Logo"
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-extrabold text-sm leading-none tracking-tight text-primary">Billions</span>
            </div>

            {/* Theme toggle + Menu */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 bg-muted/40 rounded-full px-2 py-0">
                <span className="text-[10px] text-muted-foreground">Light</span>
                <Switch checked={theme !== "light"} onCheckedChange={() => toggleTheme()} />
                <span className="text-[10px] text-muted-foreground">Dark</span>
              </div>
              <Button
                aria-label="Open menu"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary border-0 p-1.5 transition-all duration-300 leading-none"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl p-3 animate-in slide-in-from-top-2 duration-300 max-h-80 overflow-y-auto border border-border shadow-xl">
              <div className="grid gap-1.5">
                {pages.map((page) => (
                  <Button
                    key={page.id}
                    variant={currentPage === page.id ? "default" : "ghost"}
                    onClick={() => {
                      onPageChange(page.id)
                      if (typeof window !== "undefined") {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      setIsDropdownOpen(false)
                    }}
                    className="justify-start h-auto p-2.5 rounded-lg transition-all duration-300"
                  >
                    <div className="text-left">
                      <div className="font-semibold text-sm">{page.title}</div>
                      <div className="text-xs text-muted-foreground">{page.subtitle}</div>
                    </div>
                  </Button>
                ))}
                <div className="border-t pt-2 mt-2 flex items-center justify-between">
                  <div className="text-sm font-semibold">Theme</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Light</span>
                    <Switch
                      checked={theme !== "light"}
                      onCheckedChange={() => toggleTheme()}
                    />
                    <span className="text-xs text-muted-foreground">Dark</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
