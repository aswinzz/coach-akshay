"use client"

import { motion } from "framer-motion"

export function FeaturesSection({ features }: { 
  features: { 
    title: string; 
    description: string; 
    icon: React.ReactNode 
  }[] 
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </div>
  )
}

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-8 hover:shadow-lg transition-all duration-500 border border-neutral-200 hover:border-blue-500">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 p-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-500">
            {title}
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 h-12 w-12 rounded-full border border-neutral-200 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-blue-200" />
        <div className="absolute bottom-4 right-8 h-8 w-8 rounded-full border border-neutral-200 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-blue-200" />
      </div>
    </div>
  )
}
