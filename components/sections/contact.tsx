import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">CONTACT ME</h2>
        <div className="max-w-md mx-auto">
          <div className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input type="tel" placeholder="Your Phone" />
            <textarea 
              className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 p-3 min-h-[100px]"
              placeholder="Your Message"
            />
            <Button className="w-full">Send Message</Button>
          </div>
          
          <div className="mt-8 text-center space-y-2">
            <p>Email: coachakshay347@gmail.com</p>
            <p>Phone: +91 9744962827</p>
          </div>
        </div>
      </div>
    </section>
  )
} 