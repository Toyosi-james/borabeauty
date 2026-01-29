"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

const lashServices = [
  { title: "Classic Set", price: "₦25,000", duration: "2 hrs" },
  { title: "Hybrid Set", price: "₦30,000", duration: "2 hrs" },
  { title: "Volume Set", price: "₦35,000", duration: "2 hrs 30 mins" },
  { title: "Mega Volume Set", price: "₦45,000", duration: "3 hrs" },
]

const wispyAddOns = [
  { title: "Soft Wispy (3–4 spikes)", price: "₦5,000", duration: "30 mins extra" },
  { title: "Extra Wispy (6–9 spikes)", price: "₦8,000", duration: "30 mins extra" },
]

const bottomLashes = [
  { title: "Soft Bottoms", price: "₦8,000", duration: "10 mins extra" },
  { title: "Wispy Bottoms", price: "₦10,000", duration: "20 mins extra" },
]

export function LashPriceSection() {
  return (
    <section className="py-24 bg-[#f9e0c2]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#7b3f00] mb-4">
              Lash <span className="text-black">Price List</span>
            </h2>
            <p className="text-[#333] max-w-xl mx-auto text-sm md:text-base">
              Elegant lash services designed to enhance your natural beauty with precision and style.
            </p>
          </div>

          {/* Lash Sets */}
          <div className="space-y-6 mb-14">
            {lashServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm"
              >
                {/* Content */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-lg font-semibold text-[#7b3f00]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#333]">
                    Duration: {service.duration}
                  </p>
                  <p className="text-base font-semibold text-black">
                    {service.price}
                  </p>
                </div>

                {/* Button – RIGHT END */}
                <div className="flex justify-end">
                  <Link
                    href="/book-appointment"
                    className="text-sm font-medium text-[#7b3f00] border border-[#7b3f00] rounded-lg px-4 py-2 hover:bg-[#7b3f00] hover:text-white transition"
                  >
                    Book Now
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Wispy Add-ons */}
          <div className="mb-14">
            <h3 className="text-2xl font-playfair font-semibold text-[#7b3f00] mb-6">
              Wispy Add-ons
            </h3>
            <div className="space-y-4">
              {wispyAddOns.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white border border-neutral-200 rounded-xl p-4"
                >
                  <div>
                    <p className="font-medium text-black">{item.title}</p>
                    <p className="text-xs text-[#333]">{item.duration}</p>
                  </div>
                  <span className="font-semibold text-[#7b3f00]">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Lashes */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-[#7b3f00] mb-6">
              Bottom Lashes
            </h3>
            <div className="space-y-4">
              {bottomLashes.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white border border-neutral-200 rounded-xl p-4"
                >
                  <div>
                    <p className="font-medium text-black">{item.title}</p>
                    <p className="text-xs text-[#333]">{item.duration}</p>
                  </div>
                  <span className="font-semibold text-[#7b3f00]">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
