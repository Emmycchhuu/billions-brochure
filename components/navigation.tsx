"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationProps {
  currentPage: number
  onPageChange: (page: number) => void
}

const pages = [
  { id: 1, label: "Intro", title: "Introduction" },
  { id: 2, label: "Details", title: "Detailed Information" },
  { id: 3, label: "Founders", title: "Founders & Co-Founders" },
  { id: 4, label: "Products", title: "Products & Building" },
  { id: 5, label: "Team", title: "Core Team" },
  { id: 6, label: "Partners", title: "Collaborations" },
  { id: 7, label: "Yappers", title: "Top Yappers" },
]

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < pages.length) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center space-x-4 bg-card/90 backdrop-blur-sm border border-border rounded-full px-6 py-3 neumo-card">
          <div className="text-sm font-medium text-muted-foreground">
            {currentPage} / {pages.length}
          </div>
          <div className="text-sm font-semibold text-primary">{pages.find((p) => p.id === currentPage)?.title}</div>
        </div>
      </nav>

      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex items-center space-x-2 bg-card/90 backdrop-blur-sm border border-border rounded-full px-4 py-2 neumo-card">
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="rounded-full p-2 transition-all duration-300 glow-hover"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Page Buttons */}
          {pages.map((page) => (
            <Button
              key={page.id}
              variant={currentPage === page.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onPageChange(page.id)}
              className={cn(
                "rounded-full transition-all duration-300 glow-hover min-w-[60px]",
                currentPage === page.id && "bg-primary text-primary-foreground scale-110",
              )}
            >
              {page.label}
            </Button>
          ))}

          {/* Next Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNext}
            disabled={currentPage === pages.length}
            className="rounded-full p-2 transition-all duration-300 glow-hover"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </nav>
    </>
  )
}

export function PageHeader({ title }: { title: string }) {
  return (
    <div className="text-center mb-12 fade-in-up pt-20">
      <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">{title}</h1>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
    </div>
  )
}
