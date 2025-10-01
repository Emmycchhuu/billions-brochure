"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const yappers = [
  {
    name: "Jazz_a_man",
    handle: "@jazz_a_man",
    role: "Content Creator",
    image: "/loading picks/Jazzaman.jpg",
    bio: "Bullish Ambassador, Community Mod, Super OG.",
  },
  {
    name: "OKES",
    handle: "@horkays",
    role: "Space Host",
    image: "/loading picks/Okes.jpg",
    bio: "Building in web3, Content Creator, Billions Super OG.",
  },
  {
    name: "Fave",
    handle: "@IceyEiza",
    role: "Space Host",
    image: "/loading picks/Fave.jpg",
    bio: "Creating comprehensive blockchain integration tutorials and developer resources.",
  },
  {
    name: "Eren",
    handle: "@Dhruv",
    role: "Security Analyst",
    image: "/loading picks/Eren.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  },
  {
    name: "Hizzy",
    handle: "@hizzy_tonlover",
    role: "Security Analyst",
    image: "/loading picks/Hizzy.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  },
  {
    name: "Tajudeen",
    handle: "@Tajudeen_10",
    role: "Security Analyst",
    image: "/loading picks/Tajudeen.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  },
  {
    name: "Star Jessei",
    handle: "@Starjessei_web3",
    role: "Security Analyst",
    image: "/loading picks/Star.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  },
  {
    name: "MonicaTalan",
    handle: "@monicatalan",
    role: "Security Analyst",
    image: "/loading picks/monica.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  },
  {
    name: "Lulu",
    handle: "@LouyemaLo",
    role: "Security Analyst",
    image: "/loading picks/Lulu.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  },
  {
    name: "Salesman 24/7",
    handle: "@salesman_1k",
    role: "Security Analyst",
    image: "/loading picks/salesman.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  },
  {
    name: "Kovac",
    handle: "@Mr_Kovacs",
    role: "Security Analyst",
    image: "/loading picks/Kovac.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  },
  {
    name: "Isreal",
    handle: "@Abra_002",
    role: "Security Analyst",
    image: "/loading picks/Isreal.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  },
  {
    name: "Senorita.Dutt64",
    handle: "@senorita_dutt64",
    role: "Security Analyst",
    image: "/loading picks/Senorita.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  },
  {
    name: "MIA",
    handle: "@MiaLuvs2Build",
    role: "Security Analyst",
    image: "/loading picks/MIA.jpg",
    bio: "Advocating security best practices and conducting vulnerability research.",
  }, 
]

export function YappersSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % yappers.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % yappers.length)
    setIsAutoPlaying(false) // Stop auto-play when user manually navigates
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + yappers.length) % yappers.length)
    setIsAutoPlaying(false) // Stop auto-play when user manually navigates
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentYapper = yappers[currentIndex]

  return (
    <div className="max-w-3xl mx-auto">
      {/* Main Profile Card */}
      <Card className="neumo-card gradient-blue border-0 mb-6 overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-0 min-h-[300px]">
            {/* Profile Image Section */}
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden neumo-card">
                  <Image
                    src={currentYapper.image || "/placeholder.svg"}
                    alt={currentYapper.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Verification Badge */}
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center neumo-card">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info Section */}
            <div className="p-6 flex flex-col justify-center">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1 text-primary">{currentYapper.name}</h3>
                <div className="text-accent font-semibold mb-2">{currentYapper.handle}</div>
                <div className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full inline-block mb-3">
                  {currentYapper.role}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{currentYapper.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="rounded-full bg-white hover:bg-accent hover:text-white"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {yappers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-accent scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="rounded-full bg-white hover:bg-accent hover:text-white"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Auto-play indicator */}
      <div className="text-center">
        <div className="text-xs text-muted-foreground mb-2">
          {isAutoPlaying ? "Auto-advancing every 5 seconds" : "Manual navigation mode"}
        </div>
        <Button variant="ghost" size="sm" onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="text-xs">
          {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
        </Button>
      </div>
    </div>
  )
}
