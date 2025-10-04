"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const yappers = [
  {
    name: "Jazz_a_man",
    handle: "@jazz_a_man",
    role: "Bullish Ambassador",
    image: "/loading picks/Jazzaman.jpg",
    bio: "As a Super OG and community moderator, Jazz_a_man drives engagement through NFT promotions, milestone celebrations like the 15K member mark, and rallying supporters around Billions' privacy-first ZK vision via threads and videos.",
  },
  {
    name: "OKES",
    handle: "@horkays",
    role: "Space Host & Builder",
    image: "/loading picks/Okes.jpg",
    bio: "A dedicated Space Host and content creator, OKES fosters Web3 discussions in Billions Spaces, connects with the fam through daily GM posts, and boosts viral CT activity to drive ecosystem adoption.",
  },
  {
    name: "Fave",
    handle: "@IceyEiza",
    role: "Space Host & Video Creator",
    image: "/loading picks/Fave.jpg",
    bio: "Excelling in video creation and space hosting, Fave builds community vibes with engaging replies, event promotions, and content that highlights Billions' human-AI network, keeping the fam connected and bullish.",
  },
  {
    name: "Eren",
    handle: "@Dhruv",
    role: "ZK Research Lead",
    image: "/loading picks/Eren.jpg",
    bio: "A prolific yapper on ZK tech, Eren climbs leaderboards by exploring and promoting Billions alongside projects like Cysic and Brevis, sharing deep insights on verifiable compute and privacy-preserving identities.",
  },
  {
    name: "Hizzy",
    handle: "@hizzy_tonlover",
    role: "Community Strategist",
    image: "/loading picks/Hizzy.jpg",
    bio: "As KOL and Partnership Manager, Hizzy designs growth strategies, replies to every engagement to build connections, and amplifies Billions' mission through targeted outreach and chain-wide promotions.",
  },
  {
    name: "Tajudeen",
    handle: "@Tajudeen_10",
    role: "Growth Strategist",
    image: "/loading picks/Tajudeen.jpg",
    bio: "A Web3 growth expert, Tajudeen analyzes milestones like CoinGecko listings and TGE predictions, organizing community efforts and connecting builders to innovate in Billions' human-AI verification ecosystem.",
  },
  {
    name: "Star Jessei",
    handle: "@Starjessei_web3",
    role: "Content Curator",
    image: "/loading picks/Star.jpg",
    bio: "As a content creator and community mod, Star Jessei curates viral threads, promotes Spaces, and educates on Billions' NFC-based ZK verification, bridging Web3 trust for the masses.",
  },
  {
    name: "MonicaTalan",
    handle: "@monicatalan",
    role: "Partnership Liaison",
    image: "/loading picks/monica.jpg",
    bio: "Focused on alliances, Monica integrates Billions' identity layer with DeFi projects, enhancing sybil-resistant ecosystems through strategic outreach and cross-project collaborations.",
  },
  {
    name: "Lulu",
    handle: "@LouyemaLo",
    role: "Video Content Creator",
    image: "/loading picks/Lulu.jpg",
    bio: "A video specialist and Super OG, Lulu crafts daily countdown reels for Supermasks and engages the community, ensuring seamless, fun verification experiences through creative mobile-first content.",
  },
  {
    name: "Salesman 24/7",
    handle: "@salesman_1k",
    role: "Advocacy Marketer",
    image: "/loading picks/salesman.jpg",
    bio: "As a community mod, Salesman promotes rewards like free Supermask mints, drives referrals via eligibility checkers, and accumulates Power Points across channels to grow Billions' human network.",
  },
  {
    name: "Kovac",
    handle: "@Mr_Kovacs",
    role: "Tokenomics Analyst",
    image: "/loading picks/Kovac.jpg",
    bio: "Analyzing Biton token utility and economic models, Kovac educates the community on long-term growth, hosting Spaces to discuss rewards and the sustainable tokenomics powering Billions.",
  },
  {
    name: "Isreal",
    handle: "@Abra_002",
    role: "Feedback Moderator",
    image: "/loading picks/Isreal.jpg",
    bio: "A content advocate and Super OG, Isreal gathers feedback through daily challenges like swim countdowns, guiding iterations on ZK proofs and privacy tools for a robust mainnet.",
  },
  {
    name: "Senorita.Dutt64",
    handle: "@senorita_dutt64",
    role: "Diversity Ambassador",
    image: "/loading picks/Senorita.jpg",
    bio: "As a creative creator and Super OG, Senorita promotes inclusive participation via memes and replies, bridging cultural gaps in Billions' global network to reach the next billion users.",
  },
  {
    name: "MIA",
    handle: "@MiaLuvs2Build",
    role: "Innovation Scout",
    image: "/loading picks/MIA.jpg",
    bio: "On the Billions team with DeFi research focus, MIA scouts AI trends, highlights integrations like SentientAGI, and fuels edges in human-AI verification through funding updates and event recaps.",
  }, 
]

export function YappersSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

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

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const currentYapper = yappers[currentIndex]

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Main Profile Card */}
      <Card 
        ref={cardRef}
        className="neumo-card gradient-blue border-0 mb-6 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CardContent className="p-0">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-0 min-h-[280px] md:min-h-[300px]">
            {/* Profile Image Section */}
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4 md:p-6 order-1 md:order-1">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden neumo-card">
                  <Image
                    src={currentYapper.image || "/placeholder.svg"}
                    alt={currentYapper.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Verification Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 md:w-8 md:h-8 bg-accent rounded-full flex items-center justify-center neumo-card">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info Section */}
            <div className="p-4 md:p-6 flex flex-col justify-center order-2 md:order-2">
              <div className="mb-3 md:mb-4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-primary">{currentYapper.name}</h3>
                <div className="text-accent font-semibold mb-2 text-sm md:text-base">{currentYapper.handle}</div>
                <div className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full inline-block mb-3">
                  {currentYapper.role}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-center md:text-left">{currentYapper.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-3 order-2 sm:order-1">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="rounded-full bg-white hover:bg-accent hover:text-white text-xs px-3 py-2"
          >
            <ChevronLeft className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="rounded-full bg-white hover:bg-accent hover:text-white text-xs px-3 py-2"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-3 h-3 ml-1" />
          </Button>
        </div>

        <div className="flex items-center gap-1.5 order-1 sm:order-2 overflow-x-auto max-w-full">
          {yappers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                index === currentIndex ? "bg-accent scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play indicator */}
      <div className="text-center px-4">
        <div className="text-xs text-muted-foreground mb-2">
          {isAutoPlaying ? "Auto-advancing every 5 seconds" : "Manual navigation mode"}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)} 
          className="text-xs px-4 py-2 rounded-full hover:bg-accent/10"
        >
          {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
        </Button>
      </div>
    </div>
  )
}