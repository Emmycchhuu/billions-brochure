"use client"

import { useEffect, useState } from "react"

interface EnhancedLoadingScreenProps {
  onComplete: () => void
}

export function EnhancedLoadingScreen({ onComplete }: EnhancedLoadingScreenProps) {
  const [showText, setShowText] = useState(false)
  const [showSubtext, setShowSubtext] = useState(false)

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 800)
    const subtextTimer = setTimeout(() => setShowSubtext(true), 1400)
    const completeTimer = setTimeout(() => onComplete(), 3000)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(subtextTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce">
            <div className="text-5xl font-bold text-white animate-pulse">00</div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 animate-ping"></div>
        </div>

        {/* Brand Text */}
        {showText && (
          <div className="text-center animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Billions
            </h1>
          </div>
        )}

        {/* Subtitle */}
        {showSubtext && (
          <div className="text-center animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">Privacy-First Verification Network</p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
