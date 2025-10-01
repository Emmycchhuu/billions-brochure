"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BottomNavigationProps {
  currentPage: number
  onPageChange: (page: number) => void
}

export function BottomNavigation({ currentPage, onPageChange }: BottomNavigationProps) {
  const totalPages = 7

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <Card className="neumo-card bg-white/95 backdrop-blur-md border-0">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded-full bg-white/80 hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </Button>

            {/* Page Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === page ? "bg-primary scale-125" : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full bg-white/80 hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50"
            >
              Next
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
