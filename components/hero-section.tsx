"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/beautiful-woman-with-perfect-classic-lash-extensio.jpg')",
        backgroundSize: "cover", // 👈 changes from cover to fit
    backgroundRepeat: "no-repeat", // prevents tiling
    backgroundPosition:"center"
       }}
    >
      {/* Darker lilac overlay so text is more visible */}
      <div className="absolute inset-0 bg-lilac-200/70"></div>

      <div className="relative max-w-4xl mx-auto z-10 pt-70">
        {/* 👆 pt-24 pushes text downward */}
        <h1 className="text-5xl md:text-7xl font-playfair text-white leading-tight mb-6 drop-shadow-lg">
          Discover Your <span className="text-pink-500">Glow</span> ✨
        </h1>

        <p className="italic text-lg md:text-xl text-gray-800 mb-10 drop-shadow-md">
          At Bora Beauty, we bring elegance and confidence with every lash and brow.  
          Subtle, classy, and tailored just for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-md hover:bg-pink-600 transition-all cursor-pointer"
            onClick={() => scrollToSection("booking")}
          >
            Book Your Appointment
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full hover:bg-pink-50 transition-all cursor-pointer"
            onClick={() => scrollToSection("services")}
          >
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
