"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"

const clientAchievements = [
  {
    id: 1,
    title: "UBIFF Mr.Karnataka",
    beforeImage: "/images/amit-2.png",
    afterImage: "/images/amit-2.JPG",
    description: "Championship victory showcasing dedication and excellence"
  },
  {
    id: 2,
    title: "State Level Mr.Karnataka Loyal classic 2024 4th place",
    beforeImage: "/images/amit-prize-1.JPG",
    afterImage: "/images/amit-prize-2.JPG",
    description: "Outstanding performance at the state level competition"
  },
  {
    id: 3,
    title: "Mrs. India Finalist 2024",
    beforeImage: "/images/achievement-04.jpg",
    afterImage: "/images/achievement-4.png",
    description: "National level recognition in prestigious competition"
  }
]

export function ClientAchievementsSection() {
  return (
    <section id="client-achievements" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="client-achievements-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 font-heading">
            CLIENT ACHIEVEMENTS
          </h2>
          <p className="text-lg text-neutral-600">
            Real transformations from dedicated clients
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {clientAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 md:p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 text-center mb-4 font-heading">
                    {achievement.title}
                  </h3>
                  <p className="text-neutral-600 text-center mb-8">
                    {achievement.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <Image
                        src={achievement.beforeImage}
                        alt={`${achievement.title} Image 1`}
                        fill
                        className="object-contain bg-neutral-100"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <Image
                        src={achievement.afterImage}
                        alt={`${achievement.title} Image 2`}
                        fill
                        className="object-contain bg-neutral-100"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
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