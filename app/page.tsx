"use client"

import { useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { ModernHeader } from "@/components/modern-header"
import { SimpleNavigation } from "@/components/simple-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { YappersSlideshow } from "@/components/yappers-slideshow"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <ModernHeader currentPage={currentPage} onPageChange={setCurrentPage} />

      <div className="pt-14 pb-32">
        {/* Page 1: Brief Introduction */}
        {currentPage === 1 && (
          <div className="container mx-auto px-4 py-12 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            <div className="max-w-6xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-200">
                  The Human and AI Network
                </h1>

                <div className="mb-8 animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-400">
                  <Image
                    src="/billions-progressive-verification.jpeg"
                    alt="Billions Progressive Verification"
                    width={600}
                    height={300}
                    className="mx-auto rounded-3xl neumo-card hover:scale-105 transition-all duration-500 animate-float"
                  />
                </div>

                <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-600">
                  Privacy-first verification using ZK proofs. 1.9M+ users worldwide.
                </p>

                <div className="flex justify-center animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-800">
                  <Button
                    size="lg"
                    className="rounded-full glow-hover bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://billions.network/', '_blank')}
                  >
                    Get Verified
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="neumo-card gradient-blue border-0 card-hover animate-in fade-in-50 slide-in-from-left-4 duration-700 delay-1000">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden neumo-card hover:scale-110 transition-all duration-300">
                      <Image
                        src="/mascot-crown-character.jpeg"
                        alt="Privacy First Mascot"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Privacy-First</h3>
                    <p className="text-muted-foreground">Zero-knowledge proofs ensure your data stays private</p>
                  </CardContent>
                </Card>

                <Card className="neumo-card gradient-green border-0 card-hover animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-1200">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden neumo-card hover:scale-110 transition-all duration-300">
                      <Image
                        src="/mascot-green-robot.jpeg"
                        alt="Community Mascot"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-accent">1.9M+ Users</h3>
                    <p className="text-muted-foreground">Growing community of verified humans and AIs</p>
                  </CardContent>
                </Card>

                <Card className="neumo-card gradient-orange border-0 card-hover animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-1400">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden neumo-card hover:scale-110 transition-all duration-300">
                      <Image
                        src="/mascot-striped-character.jpeg"
                        alt="Web3 Native Mascot"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-orange-500">Web3 Native</h3>
                    <p className="text-muted-foreground">Built for the decentralized future</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Page 2: Detailed Information */}
        {currentPage === 2 && (
          <div className="container mx-auto px-4 py-12 fade-in-up">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Building the Trust Economy</h1>
              </div>

              {/* Mission Section */}
              <Card className="neumo-card gradient-blue border-0">
                <CardContent className="p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        Billions Network is pioneering the future of digital identity verification through
                        zero-knowledge proofs, creating a privacy-first ecosystem where humans and AI can interact with
                        unprecedented trust and security.
                      </p>
                      <p className="text-muted-foreground">
                        We're building the infrastructure for a world where verification doesn't compromise privacy, and
                        where digital identity becomes a fundamental right, not a privilege.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/deep-trust-ai-identity.jpeg"
                        alt="Deep Trust - Why AI Needs an Identity"
                        width={400}
                        height={300}
                        className="rounded-2xl neumo-card animate-float-slow"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Metrics Section */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="neumo-card gradient-blue border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-primary mb-2">$30M</div>
                    <div className="text-sm text-muted-foreground">Total Funding</div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-green border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-accent mb-2">1.9M+</div>
                    <div className="text-sm text-muted-foreground">Verified Users</div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-orange border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Privacy Protected</div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-purple border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Network Uptime</div>
                  </CardContent>
                </Card>
              </div>

              {/* Ecosystem Overview */}
              <Card className="neumo-card gradient-blue border-0">
                <CardContent className="p-12 text-center">
                  <h2 className="text-3xl font-bold mb-8 text-primary">Billions Ecosystem</h2>
                  <Image
                    src="/billions-ecosystem.jpeg"
                    alt="Billions Ecosystem Overview"
                    width={800}
                    height={500}
                    className="mx-auto rounded-2xl neumo-card animate-float"
                  />
                  <p className="text-lg text-muted-foreground mt-8 max-w-4xl mx-auto">
                    Our comprehensive ecosystem spans AI, banking, enterprise, RWA, government, and Web3 sectors,
                    providing secure token distribution and verification services across multiple industries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Page 3: Founders and Co-Founders */}
        {currentPage === 3 && (
          <div className="container mx-auto px-4 py-12 fade-in-up">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Meet Our Founders</h1>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="neumo-card gradient-blue border-0 card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neumo-card">
                        <Image
                          src="/founder-evin-mcmullen.jpeg"
                          alt="Evin McMullen"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Evin McMullen</h3>
                    <div className="text-primary font-semibold mb-4">Co-Founder & CEO</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Visionary leader with deep expertise in blockchain technology and privacy-preserving systems.
                      Previously led identity initiatives at major Web3 companies, bringing over a decade of experience
                      in building scalable verification infrastructure.
                    </p>
                  </CardContent>
                </Card>

                <Card className="neumo-card gradient-green border-0 card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neumo-card">
                        <Image
                          src="/founder-david-schwartz.jpeg"
                          alt="David Schwartz"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">David Schwartz</h3>
                    <div className="text-accent font-semibold mb-4">Co-Founder & CTO</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Renowned cryptographer and distributed systems architect. Former Chief Cryptographer at Ripple,
                      David brings unparalleled expertise in zero-knowledge proofs and consensus mechanisms to Billions
                      Network's technical foundation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="neumo-card gradient-orange border-0 card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neumo-card">
                        <Image
                          src="/team-member-stylized.jpeg"
                          alt="Oleksandr Brezhniev"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Oleksandr Brezhniev</h3>
                    <div className="text-orange-500 font-semibold mb-4">Co-Founder & CPO</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Product strategist with a passion for user-centric design in complex systems. Previously led
                      product development at leading fintech companies, specializing in creating intuitive interfaces
                      for sophisticated privacy and security technologies.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Leadership Philosophy */}
              <Card className="neumo-card gradient-blue border-0 mt-16">
                <CardContent className="p-12 text-center">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Our Leadership Philosophy</h2>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    We believe that the future of digital identity lies in empowering individuals with complete control
                    over their personal data. Our founding team combines decades of experience in cryptography,
                    distributed systems, and user experience design to create solutions that are both technically
                    sophisticated and accessible to everyone.
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Button 
                      size="lg" 
                      className="rounded-full glow-hover bg-primary hover:bg-primary/90"
                      onClick={() => window.open('https://billions.network/', '_blank')}
                    >
                      Join Our Mission
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Page 4: Products and What They're Building */}
        {currentPage === 4 && (
          <div className="container mx-auto px-4 py-12 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Products & Innovation</h1>
              </div>

              <Card className="neumo-card gradient-blue border-0 overflow-hidden hover:scale-105 transition-all duration-500">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-6 md:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">Billions Mobile App</h2>
                      <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                        Our flagship mobile application puts privacy-first verification at your fingertips. With
                        intuitive design and powerful ZK-proof technology, users can verify their identity without
                        compromising personal data.
                      </p>
                      <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span>Biometric verification with zero data storage</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span>Cross-platform identity portability</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span>Real-time verification status</span>
                        </li>
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                          <Button 
                            className="rounded-full glow-hover bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.billions.app.mobile&pli=1', '_blank')}
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            Google Play
                          </Button>
                          <Button 
                            className="rounded-full glow-hover bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                            onClick={() => window.open('https://apps.apple.com/es/app/billions/id6742451067', '_blank')}
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                            </svg>
                            App Store
                          </Button>
                        </div>
                        <Button
                          variant="outline"
                          className="rounded-full bg-background hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          View Demo
                        </Button>
                      </div>
                    </div>
                    <div className="p-6 md:p-12 lg:p-0 flex items-center justify-center">
                      <div className="w-full max-w-2xl neumo-card overflow-hidden rounded-2xl">
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src="/billions-get-verified.jpeg"
                            alt="Get Verified - Billions App"
                            fill
                            className="object-cover hover:scale-110 transition-all duration-500 animate-float-slow"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="neumo-card gradient-green border-0 overflow-hidden hover:scale-105 transition-all duration-500">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-6 md:p-12 lg:p-0 flex items-center justify-center">
                      <div className="w-full max-w-2xl neumo-card overflow-hidden rounded-2xl">
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src="/billions-30m-raised.jpeg"
                            alt="$30M Raised - Still Early"
                            fill
                            className="object-cover hover:scale-110 transition-all duration-500 animate-float"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                    <div className="p-6 md:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-accent">Early Access Program</h2>
                      <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                        Join the first Human and AI Network with $30M in backing from leading investors. Get verified
                        privately and secure your position in the future of digital identity.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6 md:mb-8">
                        <div className="text-center">
                          <div className="text-xl md:text-2xl font-bold text-accent">$30M</div>
                          <div className="text-xs md:text-sm text-muted-foreground">Funding Raised</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl md:text-2xl font-bold text-accent">1.9M+</div>
                          <div className="text-xs md:text-sm text-muted-foreground">Early Users</div>
                        </div>
                      </div>
                      <Button 
                        className="rounded-full glow-hover bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                        onClick={() => window.open('https://billions.network/', '_blank')}
                      >
                        Get Early Access
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="neumo-card gradient-orange border-0 overflow-hidden hover:scale-105 transition-all duration-500">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-6 md:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-orange-500">
                        Billions Network Overview
                      </h2>
                      <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                        Billions Network is building the first global verification platform for humans and AI agents, leveraging zero-knowledge proofs and mobile-first NFC scans to ensure privacy without biometrics or data storage.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span>$30M raised from top VCs like Polychain and Coinbase</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span>1.99M+ verified users worldwide</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span>Powered by Circom ZK tech for DeFi, NFTs, and Web3</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative min-h-[300px] lg:min-h-[400px]">
                      <Image
                        src="/loading picks/gathreing.jpg"
                        alt="Billions Network Innovation"
                        fill
                        className="object-cover hover:scale-110 transition-all duration-500 animate-float-slow"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Page 5: Core Team */}
        {currentPage === 5 && (
          <div className="container mx-auto px-4 py-12 fade-in-up">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Core Team</h1>
              </div>

              <Card className="neumo-card gradient-blue border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-6 md:p-12 lg:p-0 flex items-center justify-center">
                      <div className="w-full max-w-2xl neumo-card overflow-hidden rounded-2xl">
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src="/billions-evolution-podcast.jpeg"
                            alt="The Evolution of Billions"
                            fill
                            className="object-cover"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                    <div className="p-6 md:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold mb-6 text-primary">Building the Future Together</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Our diverse team of engineers, researchers, and visionaries from around the world are united by
                        a common mission: creating a more private and secure digital identity infrastructure for
                        everyone.
                      </p>
                      <p className="text-muted-foreground mb-8">
                        Featured on Zero Knowledge Podcast discussing the evolution of human verification in the AI era.
                      </p>
                      <Button 
                        className="rounded-full glow-hover bg-primary hover:bg-primary/90 w-full sm:w-auto"
                        onClick={() => window.open('https://zeroknowledge.fm/podcast/377/', '_blank')}
                      >
                        Listen to Podcast
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="neumo-card gradient-blue border-0 card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neumo-card">
                        <Image
                          src="/core/jagonzalez.jpg"
                          alt="Javi Gonzalez"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Javi.eth</h3>
                    <div className="text-primary font-semibold mb-4">Community Lead</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Leads community engagement and growth for the Network.
                    </p>
                  </CardContent>
                </Card>

                <Card className="neumo-card gradient-green border-0 card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neumo-card">
                        <Image
                          src="/core/Raviantan.jpg"
                          alt="Ravi Kant Agrawal"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">ravidilse.eth</h3>
                    <div className="text-accent font-semibold mb-4">Director of Growth and AI Partnerships</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Oversees expansion strategies and strategic alliances, Particularly in AI integration and crypto ecosystems.
                    </p>
                  </CardContent>
                </Card>

                <Card className="neumo-card gradient-orange border-0 card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neumo-card">
                        <Image
                          src="/core/onchainron.jpg"
                          alt="Ron"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Ron</h3>
                    <div className="text-orange-500 font-semibold mb-4">Marketing Lead</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Drives Marketing Initiatives including content, campaigns, and brand positioning of the network.
                    </p>
                  </CardContent>
                </Card>

                <Card className="neumo-card gradient-blue border-0 card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neumo-card">
                        <Image
                          src="/core/0xalexdigital.jpg"
                          alt="Alex Digital"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">0xAlexDigital</h3>
                    <div className="text-primary font-semibold mb-4">CMO</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Oversees marketing strategies and brand growth for Billions Network, driving global adoption and community engagement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="neumo-card gradient-green border-0 card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neumo-card">
                        <Image
                          src="/core/kryptojogi.jpg"
                          alt="Joana"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">kryptojogi</h3>
                    <div className="text-accent font-semibold mb-4">Business Development Lead</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Drives partnerships and ecosystem expansion, forging key alliances to accelerate Billions' growth in Web3 and AI sectors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="neumo-card gradient-orange border-0 card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neumo-card">
                        <Image
                          src="/core/anchanmi_.jpg"
                          alt="Chanmi"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">anchanmi_</h3>
                    <div className="text-orange-500 font-semibold mb-4">Designer</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Leads visual design and user experience enhancements, creating intuitive interfaces that make privacy-first verification seamless and engaging.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Team Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="neumo-card gradient-orange border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-purple border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-blue border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">8</div>
                      <div className="text-sm text-muted-foreground">Time Zones</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-green border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Remote-First</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Page 6: Collaborations */}
        {currentPage === 6 && (
          <div className="container mx-auto px-4 py-12 fade-in-up">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Strategic Partnerships</h1>
              </div>

              <Card className="neumo-card gradient-blue border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-6 md:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold mb-6 text-primary">Building the Future Together</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Our strategic partnerships with leading AI companies, blockchain platforms, and enterprise
                        solutions providers are accelerating the adoption of privacy-first verification across
                        industries.
                      </p>
                      <p className="text-muted-foreground mb-8">
                        Reclaiming trust in the age of AI through innovative partnerships and collaborative development.
                      </p>
                      <Button className="rounded-full glow-hover bg-primary hover:bg-primary/90 w-full sm:w-auto">
                        Explore Partnerships
                      </Button>
                    </div>
                    <div className="p-6 md:p-12 lg:p-0 flex items-center justify-center">
                      <div className="w-full max-w-2xl neumo-card overflow-hidden rounded-2xl">
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src="/billions-trust-ai.jpeg"
                            alt="Reclaiming Trust in the Age of AI"
                            fill
                            className="object-cover"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="neumo-card gradient-green border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-6 md:p-12 lg:p-0 flex items-center justify-center">
                      <div className="w-full max-w-2xl neumo-card overflow-hidden rounded-2xl">
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src="/billions-camp-partnership.jpeg"
                            alt="Billions x CAMP - Preserving Human Creativity"
                            fill
                            className="object-cover"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                    <div className="p-6 md:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4 text-accent">CAMP Partnership</h3>
                      <div className="text-primary font-semibold mb-4">Preserving Human Creativity in the AI Era</div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Collaborative effort to preserve and celebrate human creativity while embracing AI innovation.
                        Together, we're developing frameworks that protect creative authenticity in an AI-driven world.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                          Creative Protection
                        </span>
                        <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">AI Ethics</span>
                        <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Innovation</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full bg-white hover:bg-accent hover:text-white w-full sm:w-auto"
                        onClick={() => window.open('https://x.com/billions_ntwk/status/1962931186839523673', '_blank')}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Existing Partnerships */}
              <div className="space-y-8">
                {/* Intuition Partnership */}
                <Card className="neumo-card gradient-green border-0 group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="md:col-span-1 flex items-center justify-center">
                        <div className="w-full max-w-2xl neumo-card overflow-hidden rounded-2xl">
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              src="/billions-intuition-partnership.jpeg"
                              alt="Billions x Intuition Partnership"
                              fill
                              className="object-cover"
                            />
                          </AspectRatio>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 text-accent">Intuition Partnership</h3>
                        <div className="text-primary font-semibold mb-4">Identity + Data, Verified</div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          Collaborative effort to create privacy-preserving data analytics solutions. Together, we're
                          developing tools that enable valuable insights while maintaining complete user privacy through
                          advanced cryptographic techniques.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                            Data Analytics
                          </span>
                          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                            Privacy Tech
                          </span>
                          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Insights</span>
                        </div>
                         <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full bg-white hover:bg-accent hover:text-white"
                          onClick={() => window.open('https://x.com/0xIntuition/status/1960681229533241598?t=', '_blank')}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sentient Partnership */}
                <Card className="neumo-card gradient-orange border-0 group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="md:col-span-1 flex items-center justify-center">
                        <div className="w-full max-w-2xl neumo-card overflow-hidden rounded-2xl">
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              src="/billions-sentient-partnership.jpeg"
                              alt="Billions x Sentient Partnership"
                              fill
                              className="object-cover"
                            />
                          </AspectRatio>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 text-orange-500">Sentient AGI Partnership</h3>
                        <div className="text-primary font-semibold mb-4">AI Identity Verification</div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          Pioneering collaboration to establish identity verification standards for AI agents. Together,
                          we're creating the first comprehensive framework for AI identity proofs using zero-knowledge
                          cryptography.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                            AI Verification
                          </span>
                          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">ZK Proofs</span>
                          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                            Agent Identity
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full bg-white hover:bg-accent hover:text-white"
                          onClick={() => window.open('https://x.com/billions_ntwk/status/1948038015151927432', '_blank')}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Flagship Partnership */}
                <Card className="neumo-card gradient-purple border-0 group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      <div className="md:col-span-1 flex items-center justify-center">
                        <div className="w-full max-w-2xl neumo-card overflow-hidden rounded-2xl">
                          <AspectRatio ratio={16 / 9}>
                            <Image
                              src="/billions-flagship-partnership.jpeg"
                              alt="Billions x Flagship Partnership"
                              fill
                              className="object-cover"
                            />
                          </AspectRatio>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 text-purple-600">Flagship Partnership</h3>
                        <div className="text-primary font-semibold mb-4">Building the AI Agent Identity Stack</div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          Strategic collaboration to develop comprehensive identity infrastructure for AI agents. This
                          partnership focuses on creating scalable, secure, and privacy-preserving identity solutions
                          for the next generation of AI applications.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                            AI Infrastructure
                          </span>
                          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                            Identity Stack
                          </span>
                          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Scalability</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full bg-white hover:bg-accent hover:text-white"
                          onClick={() => window.open('https://x.com/billions_ntwk/status/1960755097673101510', '_blank')}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Partnership Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="neumo-card gradient-blue border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Strategic Partners</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-green border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">50M+</div>
                      <div className="text-sm text-muted-foreground">Combined Users</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-orange border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-500 mb-2">8</div>
                      <div className="text-sm text-muted-foreground">Industries</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-purple border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">25</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Page 7: Top Yappers (Contributors) */}
        {currentPage === 7 && (
          <div className="container mx-auto px-4 py-12 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Bilions OGs</h1>
                <p className="text-lg text-muted-foreground">
                  Meet our community champions who drive conversations and shape our future
                </p>
              </div>

              <YappersSlideshow />

              {/* Community Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="neumo-card gradient-blue border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Active Contributors</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-green border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">50K+</div>
                      <div className="text-sm text-muted-foreground">Community Posts</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-orange border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-500 mb-2">1.2M</div>
                      <div className="text-sm text-muted-foreground">Total Engagement</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="neumo-card gradient-purple border-0 text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Community Support</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Page 8: Anthem */}
        {currentPage === 8 && (
          <div className="container mx-auto px-4 py-12 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Billions Stories</h1>
                <p className="text-lg text-muted-foreground">Stories that capture the spirit and impact of our mission</p>
              </div>

              {/* Stories Section */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Story 1 */}
                <Card className="neumo-card gradient-blue border-0 overflow-hidden hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">A Creator's Breakthrough</h3>
                        <p className="text-sm text-accent">Sarah L., Digital Artist</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "Billions gave me the tools to prove my work's authenticity without sharing my life story. Now, my art travels the blockchain with unbreakable trust—finally, creators like me can thrive in the AI age."
                    </p>
                  </CardContent>
                </Card>

                {/* Story 2 */}
                <Card className="neumo-card gradient-green border-0 overflow-hidden hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-accent mb-1">Empowering Global Aid</h3>
                        <p className="text-sm text-primary">Ahmed K., NGO Coordinator</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "In regions where trust is scarce, Billions' zero-knowledge verification delivered aid directly and securely. We've reached thousands without fraud—it's not just tech, it's hope in action."
                    </p>
                  </CardContent>
                </Card>

                {/* Story 3 */}
                <Card className="neumo-card gradient-orange border-0 overflow-hidden hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-orange-500 mb-1">AI Agent's First Step</h3>
                        <p className="text-sm text-primary">Dr. Elena R., AI Researcher</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "Verifying my AI agent's identity through Billions opened doors to ethical collaborations I never imagined. It's the bridge between human ingenuity and machine potential—pure magic."
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <Card className="neumo-card gradient-orange border-0">
                <CardContent className="p-12 text-center">
                  <h2 className="text-3xl font-bold mb-6 text-orange-500">Join Our Movement</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                    Be part of the revolution that's reshaping digital identity. Together, we're building a world where
                    privacy and verification coexist in perfect harmony.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="rounded-full glow-hover bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('https://billions.network/', '_blank')}
                    >
                      Get Verified Now
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full bg-background hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <SimpleNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
    </main>
  )
}
