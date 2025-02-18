"use client"

import { FeaturesSection } from "../ui/features-section"
import { Dumbbell, Target, Clock, Trophy } from "lucide-react"
import { SparklesCore } from "../ui/sparkles"

export function AboutSection() {
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
      description: "Morning and evening sessions available to fit your lifestyle",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Expert Guidance",
      description: "7+ years of experience in personal training and competition preparation",
      icon: <Trophy className="w-8 h-8" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ABOUT ME
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            I am not just a fitness trainer; I am your dedicated partner in achieving your fitness goals. 
            With over 7 years of experience in personal training, I specialize in creating customized 
            workout programs that deliver results.
          </p>
          <p className="text-lg text-neutral-300">
            My approach combines scientific principles with practical experience to help you transform 
            your physique, improve your strength, and enhance your overall well-being.
          </p>
        </div>

        <FeaturesSection features={features} />
      </div>
    </section>
  )
} 