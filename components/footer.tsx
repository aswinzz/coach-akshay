import { Instagram, Mail, Phone, File } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:coachakshay347@gmail.com",
      label: "Email Akshay"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/_coach_akshay/",
      label: "Instagram Profile"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      href: "https://coachakshay.com/tel:+91-9744962827",
      label: "Call Akshay"
    },
    {
      icon: <File className="w-6 h-6" />,
      href: "/files/visiting-card.pdf",
      label: "Download Visiting Card"
    }
  ]

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image 
              src="/images/logo.png"
              alt="Coach Akshay Logo"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-neutral-400">
              Passionate fitness coach dedicated to your success. Let's work together to achieve your goals and transform your life.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Sessions</h3>
            <div className="space-y-2 text-neutral-400">
              <p>Morning: 6:00 AM - 11:00 AM</p>
              <p>Evening: 4:00 PM - 9:00 PM</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact Me</h3>
            <div className="flex gap-4">
              {contacts.map((contact, index) => (
                <a
                  key={contact.href}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-neutral-400 hover:text-white"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400">
          <p>Copyright © 2024 Akshay CS | Developed By: <a href="aswinvb.com" className="hover:text-white">Aswin VB</a></p>
        </div>
      </div>
    </footer>
  )
} 