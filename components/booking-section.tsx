"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, MapPin, Phone, Calendar } from "lucide-react"
import { useEffect } from "react"


declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string
        text?: string
        color?: string
        textColor?: string
        branding?: boolean
      }) => void
    }
  }
}

export function BookingSection() {
  useEffect(() => {
    // Load Calendly CSS
    if (!document.getElementById("calendly-css")) {
      const link = document.createElement("link")
      link.id = "calendly-css"
      link.rel = "stylesheet"
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      document.head.appendChild(link)
    }

    // Load Calendly JS
    if (!document.getElementById("calendly-js")) {
      const script = document.createElement("script")
      script.id = "calendly-js"
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.onload = () => {
        // Initialize badge widget after script is loaded
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/anjoladeborah3/30min',
            text: 'Schedule time with me',
            color: '#ff007c',
            textColor: '#ffffff',
            branding: true,
          })
        }
      }
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 max-mobile:text-4xl">
              <span className="text-gray-900">Book Your</span>{" "}
              <span className="text-gray-900">Session</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto max-mobile:text-sm">
              Choose your preferred way to connect with us.
            </p>
          </div>

          {/* Booking Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Calendly (Now handled via badge widget, no need for a separate button) */}
            <Card className="p-8 bg-pink-100 border border-pink-300 shadow-lg rounded-2xl">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Online Booking</h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Click the pink floating badge at the bottom right to schedule your appointment.
                </p>
              </div>
            </Card>

            {/* WhatsApp */}
            <Card className="p-8 bg-pink-100 border border-pink-300 shadow-lg rounded-2xl">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">WhatsApp Booking</h3>
                <p className="text-gray-700 mb-6 text-lg">Quick, personal, and instant!</p>

                <Button
                  size="lg"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md transition-all"
                  onClick={() =>
                    window.open(
                      "https://wa.me/2349136919750?text=Hi! I’d like to book an appointment for lash extensions/microblading. Can you share your availability?",
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center bg-pink-100 border border-pink-300 rounded-xl shadow-lg">
              <Clock className="w-10 h-10 text-pink-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">Business Hours</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Tue - Fri: 9:00 AM - 7:00 PM
                <br />
                Sat: 9:00 AM - 7:00 PM
                <br />
                Mon: Closed
              </p>
            </Card>

            <Card className="p-6 text-center bg-pink-100 border border-pink-300 rounded-xl shadow-lg">
              <MapPin className="w-10 h-10 text-pink-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">Location</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lekki, Lagos
                <br />
                Nigeria
              </p>
            </Card>

            <Card className="p-6 text-center bg-pink-100 border border-pink-300 rounded-xl shadow-lg">
              <Phone className="w-10 h-10 text-pink-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">Contact</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                +234 913 691 9750
                <br />
                <a
                  href="mailto:anjoladeborah3@gmail.com"
                  className="text-pink-600 hover:text-pink-700 underline transition-colors"
                >
                  anjoladeborah3@gmail.com
                </a>
                <br />
                24/7 Support
              </p>
            </Card>
          </div>

          {/* Quotes */}
          <div className="space-y-4">
            <p className="text-pink-500 font-serif italic text-2xl max-mobile:text-sm">
              “Life is too short for boring lashes and brows!”
            </p>
            <p className="text-gray-800 font-serif italic text-lg max-mobile:text-sm">
              Your beauty appointment awaits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
