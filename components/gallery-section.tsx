
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  { type: "video", src: "/Video10.mp4", title: "Volume Lash Transformation", category: "Lashes" },
  { type: "video", src: "/Video4.mp4", title: "Wispy Lash Transformation", category: "Lashes" },
  { type: "video", src: "/Video8.mp4", title: "Hybrid Lash Set", category: "Lashes" },
  { type: "video", src: "/Video5.mp4", title: "Microblading Session", category: "Brows" },
  { type: "video", src: "/Video9.mp4", title: "Hybrid Lashes", category: "Lashes" },
  { type: "video", src: "/Video11.mp4", title: "Classic Lash Set", category: "Lashes" },
  { type: "video", src: "/Video14.mp4", title: "Semi-permanent Tattoo", category: "Tattoo" },
  { type: "video", src: "/Video12.mp4", title: "Hybrid Lash Set", category: "Lashes" },
  { type: "video", src: "/Video13.mp4", title: "Microblading Session", category: "Brows" },

]

const categories = [
  { name: "All" },
  { name: "Lashes" },
  { name: "Brows" },
  { name: "Tattoo" },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentSlide, setCurrentSlide] = useState(0)

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const nextSlide = () => setCurrentSlide((s) => (s + 1) % filteredItems.length)
  const prevSlide = () =>
    setCurrentSlide((s) => (s - 1 + filteredItems.length) % filteredItems.length)

  const handleCardMouse = (e: React.MouseEvent, play: boolean) => {
    const video = (e.currentTarget as HTMLElement).querySelector("video") as HTMLVideoElement | null
    if (!video) return
    if (play) {
      video.muted = true
      video.play().catch(() => {})
    } else {
      video.pause()
      try { video.currentTime = 0 } catch {}
    }
  }

  const renderMedia = (item: any, isMobile = false) => {
    const heightClass = "h-[420px]"
    return (
      <video
        src={item.src}
        loop
        playsInline
        muted
        controls={isMobile}
        className={`w-full ${heightClass} object-cover bg-black`}
      />
    )
  }

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-[#7b3f00] mb-3">
            Bora Beauty Creations
          </h2>
          <p className="text-[#333] max-w-2xl mx-auto text-sm md:text-base">
            A curated showcase of our lash and brow artistry — real clients, real results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-2 bg-[#f9e0c2]/60 p-1 rounded-full border border-[#7b3f00]/20">
            {categories.map((c) => {
              const active = activeCategory === c.name
              return (
                <button
                  key={c.name}
                  onClick={() => { setActiveCategory(c.name); setCurrentSlide(0) }}
                  className={
                    `px-5 py-2 rounded-full text-sm font-medium transition ` +
                    (active
                      ? "bg-[#7b3f00] text-white"
                      : "bg-white text-[#7b3f00] hover:bg-[#f9e0c2]")
                  }
                >
                  {c.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="snap-x snap-mandatory overflow-x-auto -mx-6 px-6 flex gap-4 scrollbar-hide">
            {filteredItems.map((item, i) => (
              <div key={i} className="snap-start min-w-[80%] rounded-2xl overflow-hidden shadow-sm border border-[#7b3f00]/20 bg-white">
                <div onMouseEnter={(e) => handleCardMouse(e, true)} onMouseLeave={(e) => handleCardMouse(e, false)}>
                  {renderMedia(item, true)}
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-[#7b3f00]">{item.title}</h3>
                    <p className="text-xs text-[#333]">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <button onClick={prevSlide} className="p-2 rounded-full border border-[#7b3f00]/30 bg-white">
              <ChevronLeft className="w-5 h-5 text-[#7b3f00]" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full border border-[#7b3f00]/30 bg-white">
              <ChevronRight className="w-5 h-5 text-[#7b3f00]" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, i) => (
            <Card
              key={i}
              onMouseEnter={(e) => handleCardMouse(e, true)}
              onMouseLeave={(e) => handleCardMouse(e, false)}
              className="overflow-hidden rounded-2xl border border-[#7b3f00]/20 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="relative">
                {renderMedia(item, false)}
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-sm p-3 rounded-lg">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-gray-200">{item.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#333] mb-4 italic">
            “Your beauty transformation starts here.”
          </p>
          <Button
            className="border border-[#7b3f00] text-[#7b3f00] bg-transparent hover:bg-[#7b3f00] hover:text-white rounded-full px-8 py-3 text-sm"
            onClick={() => {
              const el = document.getElementById("booking")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Book Your Session
          </Button>
        </div>

      </div>
    </section>
  )
}
