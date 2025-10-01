"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface MobileHeaderProps {
  currentPage: number
  onPageChange: (page: number) => void
}

export function MobileHeader({ currentPage, onPageChange }: MobileHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const pages = [
    { id: 1, title: "Intro", subtitle: "The Human & AI Network" },
    { id: 2, title: "Details", subtitle: "Building Trust Economy" },
    { id: 3, title: "Founders", subtitle: "Meet Our Leaders" },
    { id: 4, title: "Products", subtitle: "Innovation & Apps" },
    { id: 5, title: "Team", subtitle: "Our Core Team" },
    { id: 6, title: "Partners", subtitle: "Strategic Collaborations" },
    { id: 7, title: "Yappers", subtitle: "Community Champions" },
  ]

  const currentPageData = pages.find((p) => p.id === currentPage)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/billions-logo.png" alt="Billions Logo" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-lg text-primary">Billions</span>
          </div>

          {/* Current Page Indicator */}
          <div className="flex-1 text-center">
            <Button
              variant="ghost"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-sm font-medium hover:bg-primary/10"
            >
              <div className="text-center">
                <div className="text-primary font-semibold">{currentPageData?.title}</div>
                <div className="text-xs text-muted-foreground hidden sm:block">{currentPageData?.subtitle}</div>
              </div>
              <svg
                className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>

          {/* Page Counter */}
          <div className="text-sm text-muted-foreground">{currentPage}/7</div>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <Card className={`absolute top-16 left-4 right-4 neumo-card mobile-dropdown ${isDropdownOpen ? "open" : ""}`}>
            <CardContent className="p-4">
              <div className="grid gap-2">
                {pages.map((page) => (
                  <Button
                    key={page.id}
                    variant={currentPage === page.id ? "default" : "ghost"}
                    onClick={() => {
                      onPageChange(page.id)
                      setIsDropdownOpen(false)
                    }}
                    className="justify-start h-auto p-3 rounded-xl"
                  >
                    <div className="text-left">
                      <div className="font-semibold">{page.title}</div>
                      <div className="text-xs text-muted-foreground">{page.subtitle}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
