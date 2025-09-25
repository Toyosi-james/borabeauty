"use client"

import { Instagram, Heart, Sparkles } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-800 py-6 border-t border-pink-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Logo + Quote */}
          <div className="space-y-2">
            <h3 className="text-2xl font-serif font-bold text-pink-600">borabeauty</h3>
            <p className="text-gray-700 text-sm">{"Where beauty meets artistry ✨"}</p>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-yellow-500" />
              <p className="text-yellow-600 font-serif italic text-xs">
                {'"Making dreams come true, one lash at a time"'}
              </p>
              <Heart className="w-4 h-4 text-yellow-500" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 text-sm pt-15">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-6 pt-5">
            <a
              href="https://www.instagram.com/bora.beauty_?igsh=MTBnOHhrZTl2NnUxOA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Instagram className="w-6 h-6 text-pink-600" />
            </a>

            <a
              href="https://www.tiktok.com/@bora.beauty_?_t=ZM-8zzpFb8t5Ip&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaTiktok className="w-6 h-6 text-pink-600" />
            </a>
          </div>
        </div>

        {/* Bottom Notes */}
        <div className="border-t border-pink-300 pt-4 mt-6 text-center">
          <p className="text-gray-600 text-xs mb-1">
            © 2025 borabeauty. All rights reserved. Made with 💕 for beautiful souls.
          </p>
          <p className="text-pink-600 font-serif italic text-sm">
            {'"Beauty is not in the face; beauty is a light in the heart"'}
          </p>
          <div className="flex justify-center mt-2">
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  )
}
