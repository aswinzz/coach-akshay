"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative h-[100vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/main-1.jpg"
          alt="Coach Akshay"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <Image 
          src="/images/logo.png"
          alt="Coach Akshay Logo"
          width={200}
          height={67}
          className="h-20 w-auto"
          style={{
            clipPath: 'polygon(0px 0px, 25% 0px, 25% 100%, 0px 100%)',
          }}
        />
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