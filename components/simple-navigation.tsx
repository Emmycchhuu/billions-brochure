"use client"

import { Button } from "@/components/ui/button"

interface SimpleNavigationProps {
  currentPage: number
  onPageChange: (page: number) => void
}

export function SimpleNavigation({ currentPage, onPageChange }: SimpleNavigationProps) {
  const totalPages = 8 // Updated to include anthem page

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center space-x-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full px-2 py-1 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
        {/* Previous Button */}
        <Button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="rounded-full w-5 h-5 p-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
        >
          <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>

        {/* Next Button */}
        <Button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="rounded-full w-5 h-5 p-0 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
        >
          <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
