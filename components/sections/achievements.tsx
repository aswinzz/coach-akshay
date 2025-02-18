"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"

const achievements = [
  {
    id: 1,
    title: "Mr. Thrissur Championship",
    image: "/images/achievement-1.jpg"
  },
  {
    id: 2,
    title: "Mr. Thrissur Championship",
    image: "/images/achievement-2.jpg"
  },
  {
    id: 3,
    title: "Mr. Kerala Championship",
    image: "/images/achievement-3.jpg"
  }
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            MY ACHIEVEMENTS
          </h2>
          <p className="text-lg text-neutral-600">
            2-Time Mr. Thrissur Champion & 1-Time Mr. Kerala Champion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-96 overflow-hidden bg-neutral-100">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 