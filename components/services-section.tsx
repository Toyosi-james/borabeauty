/* eslint-disable @next/next/no-img-element */
"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const lashServices = [
  {
    title: "Classic Set",
    price: "₦20,000",
    description: "Natural, elegant lashes for everyday beauty",
    image: "/classic-lash-extensions-natural-look-beautiful-eye.jpg",
    refillPrice: "₦12,000",
  },
  {
    title: "Hybrid Set",
    price: "₦25,000",
    description: "Perfect blend of classic and volume techniques",
    image: "/hybrid-lash-extensions-mixed-volume-beautiful-woma.jpg",
    refillPrice: "₦15,000",
  },
  {
    title: "Volume Set",
    price: "₦30,000",
    description: "Fuller, dramatic lashes for stunning impact",
    image: "/volume-lash-extensions-dramatic-full-lashes-beauty.jpg",
    refillPrice: "₦20,000",
  },
  {
    title: "Mega Volume",
    price: "₦40,000",
    description: "Ultra-dramatic, maximum fullness and glamour",
    image: "/mega-volume-lash-extensions-ultra-dramatic-full-gl.jpg",
    refillPrice: "₦30,000",
  },
]

const browServices = [
  {
    title: "Microblading",
    price: "₦65,000",
    description: "Hair-stroke technique for natural-looking brows",
    image: "/microblading-eyebrows-hair-stroke-technique-natura.jpg",
    refillPrice: "₦45,000",
  },
  {
    title: "Micro Shading",
    price: "₦70,000",
    description: "Soft powder effect for fuller, defined brows",
    image: "/micro-shading-eyebrows-powder-brows-soft-natural.jpg",
    refillPrice: "₦55,000",
  },
  {
    title: "Ombre Brows",
    price: "₦90,000",
    description: "Gradient effect from light to dark for dimension",
    image: "/ombre-brows-gradient-eyebrows-light-to-dark-profes.jpg",
    refillPrice: "₦65,000",
  },
  {
    title: "Combo Brows",
    price: "₦90,000",
    description: "Combination of microblading and shading techniques",
    image: "/combo-brows-microblading-and-shading-combination-t.jpg",
    refillPrice: "₦70,000",
  },
]

const extraServices = [
  { name: "Whispy/Bottom Lash", price: "₦10,000" },
  { name: "Colored/Glitters", price: "₦5,000" },
  { name: "Lash Removal", price: "₦5,000" },
  { name: "Lash Customization", price: "Contact for pricing" },
]

export function ServicesSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              Our <span className="text-pink-500">Premium Services</span> ✨
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed max-mobile:text-sm">
              Professional lash extensions and eyebrow artistry with transparent pricing and exceptional results.
            </p>
          </div>

          {/* Lash Extensions */}
          <div className="mb-20">
            <h3 className="text-3xl font-playfair font-medium text-yellow-600 mb-8 text-center">
              Lash Extensions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {lashServices.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-white shadow-md rounded-xl border border-pink-100 hover:shadow-lg transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Full Set:</span>
                        <span className="text-lg font-bold text-pink-500">{service.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Refill:</span>
                        <span className="text-md font-medium text-gray-800">{service.refillPrice}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Eyebrows */}
          <div className="mb-20">
            <h3 className="text-3xl font-playfair font-medium text-yellow-600 mb-8 text-center">
              Eyebrow Artistry
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {browServices.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-white shadow-md rounded-xl border border-pink-100 hover:shadow-lg transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Initial:</span>
                        <span className="text-lg font-bold text-pink-500">{service.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Refill:</span>
                        <span className="text-md font-medium text-gray-800">{service.refillPrice}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-playfair font-medium text-yellow-600 mb-8 text-center">
              Additional Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {extraServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 text-center shadow-md rounded-xl border-2 border-pink-400 hover:shadow-lg transition-all bg-pink-200"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h4>
                  <span className="text-xl font-bold text-pink-500">{service.price}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-pink-50 border border-pink-100 rounded-2xl p-12 text-center shadow-inner">
            <h3 className="text-3xl font-playfair font-medium text-gray-800 mb-6">
              Ready for Your Transformation?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto max-mobile:text-sm">
              Book your appointment today and experience the artistry that enhances your natural beauty.
            </p>
            <Button
              size="lg"
              className="bg-pink-500 text-white hover:bg-pink-600 rounded-full px-10 py-4 text-lg font-semibold shadow-lg"
              onClick={scrollToBooking}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
