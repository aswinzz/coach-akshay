"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/main-1.jpg"
          alt="Coach Akshay training background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text readability */}
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <Image 
          src="/images/logo.png"
          alt="Coach Akshay Logo"
          width={200}
          height={67}
          className="h-20 w-auto"
          priority
          style={{
            clipPath: 'polygon(0px 0px, 25% 0px, 25% 100%, 0px 100%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">
            TRANSFORM YOUR BODY
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              WITH COACH AKSHAY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Expert personal training to help you achieve your fitness goals
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
} 