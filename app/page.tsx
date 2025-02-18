import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { TransformationsSection } from "@/components/sections/transformations"
import { AchievementsSection } from "@/components/sections/achievements"
import { ContactSection } from "@/components/sections/contact"
import { ReviewsSection } from "@/components/sections/reviews"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TransformationsSection />
      <AchievementsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
