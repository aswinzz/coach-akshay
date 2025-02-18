import Image from "next/image"
import { Card, CardContent } from "../ui/card"

export function TransformationsSection() {
  const transformations = [
    {
      id: 1,
      image: "/images/transformation1.jpg",
      description: "12 weeks transformation - 15kg fat loss"
    },
    // Add more transformations from your existing content
  ]

  return (
    <section id="transformations" className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">JOURNEYS OF TRANSFORMATION</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.description}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="p-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 