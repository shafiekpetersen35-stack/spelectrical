"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Website enquiry from " + formData.name)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\n${formData.message}`,
    )
    window.location.href = `mailto:info@spelectrical.co.za?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-primary font-bold text-sm tracking-widest mb-3">GET IN TOUCH</div>
          <h2 className="text-3xl md:text-4xl font-bold text-pretty">Ready to Get Started?</h2>
          <p className="mt-4 text-gray-300">Speak with Shafiek Petersen at SP Electrical Services about your electrical, solar, backup power, COC or SSEG registration requirements.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex gap-4">
            <Phone className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:+27766729270" className="text-gray-300 hover:text-primary transition-colors">+27 76 672 9270</a>
              <p className="text-gray-300">Emergency assistance available</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:info@spelectrical.co.za" className="text-gray-300 hover:text-primary transition-colors">info@spelectrical.co.za</a>
            </div>
          </div>

          <div className="flex gap-4">
            <MessageCircle className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/27766729270"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                +27 76 672 9270
              </a>
              <p className="text-gray-300">Quick messaging</p>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2">Service Area</h3>
              <p className="text-gray-300">Cape Town, Western Cape</p>
              <p className="text-gray-300">Domestic & Commercial</p>
            </div>
          </div>
        </div>

        <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "DOL Licensed",
            "ECA (SA) Member",
            "Registered Electrical Contractor",
            "SSEG Registration Assistance",
          ].map((item) => (
            <div key={item} className="border border-primary/40 rounded-lg px-5 py-4 text-center">
              <p className="font-bold text-primary">{item}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-primary focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-primary focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-primary focus:outline-none"
              placeholder="+27 76 672 9270"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-primary focus:outline-none resize-none"
              placeholder="Tell us about your project, installation, COC or SSEG registration..."
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-green-700 text-black font-bold text-lg py-3">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}