"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/#home" className="flex items-center flex-shrink-0" aria-label="SP Electrical home">
          <div className="relative aspect-[3.65/1] w-[min(60vw,300px)] overflow-hidden">
            <Image
              src="/sp-electrical-logo.jpg"
              alt="SP Electrical Services — Trusted Expertise"
              fill
              priority
              sizes="(max-width: 640px) 60vw, 300px"
              className="object-cover"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button asChild className="bg-primary hover:bg-green-700 text-black font-bold"><a href="/#contact">Get Quote</a></Button>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen} aria-controls="mobile-navigation">
          {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="w-full bg-primary hover:bg-green-700 text-black font-bold mt-4"><a href="/#contact" onClick={() => setIsOpen(false)}>Get Quote</a></Button>
          </div>
        </div>
      )}
    </header>
  )
}
