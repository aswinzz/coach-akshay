"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { MessageSquare } from "lucide-react"

export function ContactSection() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // WhatsApp link with pre-filled message
    const whatsappLink = `https://wa.me/919744962827?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            CONTACT ME
          </h2>
          <p className="text-lg text-neutral-600">
            Send me a message and let's discuss your fitness goals
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 p-4 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
              required
            />
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start Conversation</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
} 