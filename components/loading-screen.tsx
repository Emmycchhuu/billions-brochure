"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Show text after logo animation
    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 1000)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, 5000)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-6">
        <div className="slide-in-left">
          <div className="w-24 h-24 rounded-3xl flex items-center justify-center neumo-card overflow-hidden">
            <Image
              src="/billions-logo.png"
              alt="Billions Logo"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Billions Text */}
        {showText && (
          <div className="fade-in-up">
            <h1 className="text-4xl font-bold text-foreground">Billions</h1>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
