"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"

const transformations = [
  {
    id: 1,
    name: "Amit",
    image: "/images/amit.jpg",
    description: "I could see major changes in a short span of time. I would highly recommend him for your fitness needs."
  },
  {
    id: 2,
    name: "Mansi",
    image: "/images/mansi.jpg",
    description: "Going from almost a year now. Akshay is really a good trainer. I can see a lot of difference in my physique. He spends proper time and corrects the posture"
  },
  {
    id: 3,
    name: "Aswin",
    image: "/images/aswin-new-2.jpg",
    description: "In just 6 months, Akshay's personalized training and dietary guidance transformed my body. Leaner with more muscle mass, his expertise has been invaluable to my fitness journey!"
  },
  {
    id: 4,
    name: "Vandana",
    image: "/images/vandana.jpg",
    description: "Akshay has been an amazing personal trainer, guiding me to shed 6 kgs and gain confidence. His motivation and support have led to consistency and surpassing limits in every session 💪🔥"
  },
  {
    id: 5,
    name: "Deepsi",
    image: "/images/unknown.jpg",
    description: "6 months with Akshay, from 64.2 kg to 61.5 kg. Remarkable body changes. Nutrition advice, daily monitoring, and energy tips. Strength training for more energy, balanced exercises tailored to body type. Highly recommend!"
  },
]

export function TransformationsSection() {
  return (
    <section id="transformations" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="transformations-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 font-heading">
            JOURNEYS OF TRANSFORMATION
          </h2>
          <p className="text-lg text-neutral-600">
            Real results from real people. See how our personalized training programs 
            have helped transform lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TransformationCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TransformationCard = ({
  name,
  image,
  description
}: {
  name?: string
  image: string
  description: string
}) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full bg-white">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative h-80 overflow-hidden bg-neutral-100">
          <Image
            src={image}
            alt={`${name}'s fitness transformation journey with Coach Akshay`}
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-8 flex-1 flex flex-col">
          {name && (<div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-2xl font-bold text-neutral-900 mt-1 mb-1 font-heading">
              {name}
            </h3>
          </div>)}
          
          <p className="mt-4 text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 