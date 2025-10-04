"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0) // 0: ball bounce, 1: pop, 2: logo rise, 3: done

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 1200) // Bounce for 1.2s
    const timer2 = setTimeout(() => setPhase(2), 1800) // Pop at 1.8s
    const timer3 = setTimeout(() => {
      setPhase(3)
      onComplete()
    }, 3000) // Logo rise, complete at 3s

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <>
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-30px); }
          60% { transform: translateY(-15px); }
        }
        @keyframes pop {
          0% { transform: scale(1) translateY(0); opacity: 1; }
          50% { transform: scale(1.5) translateY(-20px); opacity: 1; }
          100% { transform: scale(0) translateY(-40px); opacity: 0; }
        }
        @keyframes rise {
          from { 
            transform: translateY(100vh) scale(0.8); 
            opacity: 0; 
          }
          to { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
        }
        .bouncing-ball {
          animation: bounce 1s infinite ease-in-out;
        }
        .popping-ball {
          animation: pop 0.6s ease-in-out forwards;
        }
        .rising-logo {
          animation: rise 1.2s ease-out forwards 0.2s;
        }
        .hidden { display: none !important; }
      `}</style>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Blue Ball - Centered */}
          <div
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500 rounded-full transition-all duration-300 ease-in-out ${
              phase === 0
                ? 'bouncing-ball'
                : phase === 1
                ? 'popping-ball'
                : 'hidden'
            }`}
          />

          {/* Logo - Rises to Center */}
          <div
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-20 sm:w-48 sm:h-24 ${
              phase >= 2 ? 'rising-logo opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src="/billions-logo.png" // Replace with actual logo path
              alt="Billions Logo"
              width={200}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </>
  )
}