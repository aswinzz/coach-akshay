import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ClientAchievementsSection } from "@/components/sections/client-achievements"
import { TransformationsSection } from "@/components/sections/transformations"
import { AchievementsSection } from "@/components/sections/achievements"
import { ContactSection } from "@/components/sections/contact"
import { ReviewsSection } from "@/components/sections/reviews"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <article>
          <HeroSection />
          
          <section aria-labelledby="about-heading">
            <AboutSection />
          </section>
          
          <section aria-labelledby="client-achievements-heading">
            <ClientAchievementsSection />
          </section>
          
          <section aria-labelledby="transformations-heading">
            <TransformationsSection />
          </section>
          
          <section aria-labelledby="achievements-heading">
            <AchievementsSection />
          </section>
          
          <section aria-labelledby="reviews-heading">
            <ReviewsSection />
          </section>
          
          <section aria-labelledby="contact-heading">
            <ContactSection />
          </section>
        </article>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
