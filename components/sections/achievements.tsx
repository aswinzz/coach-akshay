import Image from "next/image"
import { Card, CardContent } from "../ui/card"

export function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      image: "/images/achievement1.jpg",
      title: "Competition Victory"
    },
    // Add more achievements from your existing content
  ]

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">MY ACHIEVEMENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 