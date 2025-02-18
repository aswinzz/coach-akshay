"use client"

import Image from "next/image"
import { CardSpotlight } from "../ui/card-spotlight"
import { Button } from "../ui/button"
import { FlipWords } from "../ui/flip-words"

export function HeroSection() {
  const flipWords = [
    "Transform Your Body",
    "Build Strength",
    "Get Fit",
    "Live Healthy"
  ]

  return (
    <section id="home" className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg" // The image from your old site
          alt="Coach Akshay"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                HELLO! I AM
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                  COACH AKSHAY
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center">
                <FlipWords 
                  words={flipWords}
                  className="text-2xl md:text-3xl font-medium"
                />
              </div>

              <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto">
                Transform your body and life with personalized fitness training. 
                Expert guidance for your fitness journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
                  asChild
                >
                  <a href="#contact">Start Your Journey</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8"
                  asChild
                >
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
} 