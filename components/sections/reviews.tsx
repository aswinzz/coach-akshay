"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    content: "I'm training for the past year and I'm getting personal training from Akshay, he is doing a great job.",
    author: "Mukesh Hari"
  },
  {
    id: 2,
    content: "Special thanks to Akshay Sir, he knows the subject in and out he knows the diet you should go for the weights you should lift. In just one month I lost 5 kgs and got in a very good shape. I opted for the personal trainer for 3 months.",
    author: "Akshay Mehrotra"
  },
  {
    id: 3,
    content: "I have been training under Akshay for more than a year now and my body has transformed so much. I have lost 10 kgs and gained so much confidence. I am so thankful to him for his guidance and support.",
    author: "Aswin"
  }
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000) // Change review every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="reviews" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            CLIENT REVIEWS
          </h2>
          <p className="text-lg text-neutral-600">
            What my clients say about their transformation journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Reviews Slider */}
          <div className="relative h-[300px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              >
                <Quote className="w-12 h-12 text-blue-500 mb-6" />
                <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-8">
                  {reviews[currentIndex].content}
                </p>
                <p className="text-lg font-medium text-blue-600">
                  {reviews[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-blue-500" 
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 