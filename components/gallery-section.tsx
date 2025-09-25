/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const galleryItems = [
  { type: "video", src: "/video 10.mp4", title: "Volume Lash Transformation", category: "Lashes" },
  { type: "video", src: "/video 4.mp4", title: "whispy Lash Transformation", category: "Lashes" },
  { type: "video", src: "/video 8.mp4", title: "Hybrid Lash Set ", category: "Lashes" },
  { type: "video", src: "/video 5.mp4", title: "Microblading Session", category: "Brows" },
  { type: "video", src: "/video 9.mp4", title: "Hybrid Lashes", category: "Lashes" },
  { type: "video", src: "/video 11.mp4", title: "Classic Lash set", category: "Lashes" },
  { type: "video", src: "/video 14.mp4", title: "Semi-permanent Tatoo", category: "Tatoo" },
  { type: "video", src: "/video 12.mp4", title: "hybrid Lash set", category: "Lashes" },
  { type: "video", src: "/video 13.mp4", title: "Microblading Session", category: "Brows" }
]

const categories = [
  { name: "All" },
  { name: "Lashes" },
  { name: "Brows" },
  { name: "Tatoo" },
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
    if (item.type === "video") {
      return (
        <video
          src={item.src}
          loop
          playsInline
          muted
          controls={isMobile}
          className={`w-full ${heightClass} object-cover bg-gray-100 `}
        />
      )
    }
    return (
      <img
        src={item.src || "/placeholder.svg"}
        alt={item.title}
        className={`w-full ${heightClass} object-cover bg-gray-100`}
      />
    )
  }

  return (
    <section id="gallery" className="py-24 bg-pink-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-3">Our Beautiful Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto max-mobile:text-sm">
            Watch real transformations — short videos and photos showcasing our lash and brow artistry.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-3 bg-gray-100 p-1 rounded-full shadow-sm">
            {categories.map((c) => {
              const active = activeCategory === c.name
              return (
                <button
                  key={c.name}
                  onClick={() => { setActiveCategory(c.name); setCurrentSlide(0) }}
                  className={
                    `px-5 py-2 rounded-full font-medium transition` +
                    (active
                      ? " bg-pink-500 text-white shadow-md ring-2 ring-pink-200"
                      : " bg-white text-gray-700 hover:bg-pink-50")
                  }
                >
                  {c.name}
                </button>
              )
            })}
          </div>
        </div>

        <div className="md:hidden">
          <div className="snap-x snap-mandatory overflow-x-auto -mx-6 px-6 flex gap-4 scrollbar-hide">
            {filteredItems.map((item, i) => (
              <div key={i} className="snap-start min-w-[80%] rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
                <div onMouseEnter={(e) => handleCardMouse(e, true)} onMouseLeave={(e) => handleCardMouse(e, false)}>
                  {renderMedia(item, true)}
                  <div className="p-4 bg-gray-50">
                    <h3 className="text-lg font-playfair font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <button onClick={prevSlide} className="p-2 rounded-full bg-white shadow-sm border border-gray-200">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-white shadow-sm border border-gray-200">
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, i) => (
            <Card
              key={i}
              onMouseEnter={(e) => handleCardMouse(e, true)}
              onMouseLeave={(e) => handleCardMouse(e, false)}
              className="group overflow-hidden shadow-md rounded-2xl border border-gray-100 transition-transform hover:scale-[1.02] bg-white"
            >
              <div className="relative">
                {renderMedia(item, false)}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-sm p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-playfair font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4 italic">{"“Your beauty transformation awaits”"}</p>
          <Button
            size="lg"
            className="bg-pink-500 text-white rounded-full px-8 py-3 shadow-lg hover:bg-pink-600"
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
