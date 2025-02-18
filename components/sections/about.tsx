"use client"

import { useRef, useEffect, useState } from "react"
import { FeaturesSection } from "../ui/features-section"
import { Dumbbell, Target, Clock, Trophy } from "lucide-react"
import { FlipWords } from "../ui/flip-words"

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasScrolled) {
          setHasScrolled(true)
          if (videoRef.current) {
            videoRef.current.play()
          }
        }
      })
    }, options)

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current)
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current)
      }
    }
  }, [hasScrolled])

  const flipWords = [
    "Transform Your Body",
    "Build Strength",
    "Get Fit",
    "Live Healthy"
  ]

  const features = [
    {
      title: "Personalized Training",
      description: "Custom workout programs designed specifically for your goals and fitness level",
      icon: <Dumbbell className="w-8 h-8" />,
    },
    {
      title: "Goal-Oriented",
      description: "Clear milestones and tracking to ensure you achieve your fitness objectives",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Flexible Schedule",
      description: "Morning and evening sessions available to fit your lifestyle and schedule",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Expert Guidance",
      description: "7+ years of experience in personal training and competition preparation",
      icon: <Trophy className="w-8 h-8" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-white">
      <div className="container relative z-10 mx-auto px-4">
        {/* Hero Content Moved Here */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6">
            HELLO! I AM
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              COACH AKSHAY
            </span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <FlipWords 
              words={flipWords}
              duration={2000}
              className="text-2xl md:text-3xl font-medium text-neutral-800"
            />
          </div>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            Transform your body and life with personalized fitness training. 
            Expert guidance for your fitness journey.
          </p>
        </div>

        {/* About Content with Video */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                ABOUT ME
              </h2>
              <p className="text-lg text-neutral-600">
                I am not just a fitness trainer; I am your dedicated partner in achieving your fitness goals. 
                With over 7 years of experience in personal training, I specialize in creating customized 
                workout programs that deliver results.
              </p>
              <p className="text-lg text-neutral-600">
                My approach combines scientific principles with practical experience to help you transform 
                your physique, improve your strength, and enhance your overall well-being.
              </p>
            </div>

            {/* Video Section */}
            <div 
              ref={videoContainerRef}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-neutral-100"
            >
              <video
                ref={videoRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] object-cover origin-center -rotate-90"
                loop
                muted
                playsInline
                poster="/images/main-1.jpg"
              >
                <source src="/files/main-video-01.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <FeaturesSection features={features} />
        </div>
      </div>
    </section>
  )
} 