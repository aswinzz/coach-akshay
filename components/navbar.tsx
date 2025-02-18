"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "My Clients", href: "#transformations" },
  { name: "Contact", href: "#contact" },
  { name: "My Achievements", href: "#achievements" },
  { name: "Reviews", href: "#reviews" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight - 80
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={cn(
        "fixed top-0 inset-x-0 h-16 bg-white/80 backdrop-blur-sm z-50 border-b border-neutral-200 transition-all duration-300",
        scrolled ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <Image 
          src="/images/logo.png"
          alt="Coach Akshay Logo"
          width={120}
          height={40}
          className="h-10 w-auto"
        />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
} 