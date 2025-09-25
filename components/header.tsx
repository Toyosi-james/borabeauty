"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/transparent shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between ">
        {/* Logo */}
        <h1 className="text-3xl font-playfair tracking-wide text-yellow-500 text-shadow-gray-900 drop-shadow-sm">
          Bora's <span className="italic text-pink-500">Beauty</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["about Us", "services", "gallery", "booking"].map((section, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(section)}
              className="text-sm font-medium text-gray-100 md:text-gray-600 hover:text-pink-500 transition-colors drop-shadow-sm cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        {/* Book Button */}
        <div className="hidden md:block">
          <Button
            className="bg-pink-500 text-white hover:bg-pink-600 transition-all px-6 py-2 rounded-full shadow-md cursor-pointer"
            onClick={() => scrollToSection("booking")}
          >
            Book Now ✨
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pink-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-3 pb-6 space-y-10 bg-white/transparent backdrop-blur-md shadow-md">
          {["about Us", "services", "gallery", "booking"].map((section, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(section)}
              className="block text-gray-700 hover:text-pink-500 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          {/* <Button className="w-full bg-pink-500 text-white rounded-full shadow-md">
            Book Now ✨
          </Button> */}
        </div>
      )}
    </header>
  )
}
