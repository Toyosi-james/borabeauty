// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Instagram, Music2 } from "lucide-react";
import Debbie from "../public/Debbie 1.jpeg";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[#f9e0c2] px-4 pt-14 md:pt-10 text-[#2f2a25] flex flex-col items-center">

      {/* Founder Image */}
      <div className="mb-5">
        <Image
          src={Debbie}
          alt="Founder"
          width={155}
          height={155}
          className="rounded-full border-5 border-[#7b3f00]/40 shadow-lg object-cover"
          priority
        />
      </div>

      {/* Brand */}
      <div className="text-center mb-6">
        <p className="text-sm italic tracking-wide text-[#7b3f00]/80 mb-2">
          Brow & Lash Artist
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Bora Beauty
        </h1>
      </div>

      {/* Divider */}
      <div className="w-16 h-[1px] bg-[#7b3f00]/30 mb-5 rounded-full" />

      {/* Buttons */}
      <div className="flex flex-col gap-5 w-full max-w-md">

        <Link
          href="/about-us"
          className="py-6 md:py-4 text-lg md:text-base font-extrabold
                     text-[#7b3f00] rounded-lg text-center
                     bg-white/90 shadow-md transition active:scale-[0.97]"
        >
          Brand Overview
        </Link>

        <Link
          href="/services"
          className="py-6 md:py-4 text-lg md:text-base font-extrabold
                     text-[#7b3f00] rounded-lg text-center
                     bg-white/90 shadow-md transition active:scale-[0.97]"
        >
          Price List
        </Link>

        <Link
          href="/gallery"
          className="py-6 md:py-4 text-lg md:text-base font-extrabold
                     text-[#7b3f00] rounded-lg text-center
                     bg-white/90 shadow-md transition active:scale-[0.97]"
        >
          Our Creations
        </Link>

        <a
          href="https://calendly.com/anjoladeborah3/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="py-6 md:py-4 text-lg md:text-base font-extrabold
                     text-[#7b3f00] rounded-lg text-center
                     bg-white/90 shadow-md transition active:scale-[0.97]"
        >
          Book Appointment
        </a>

        <a
          href="https://wa.me/2349136919750?text=Hi!%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20for%20lash%20extensions/microblading.%20Can%20you%20share%20your%20availability?"
          target="_blank"
          rel="noopener noreferrer"
          className="py-6 md:py-4 text-lg md:text-base font-extrabold
                     text-[#7b3f00] rounded-lg text-center
                     bg-white/90 shadow-md transition active:scale-[0.97]"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-5 text-[#7b3f00]/70 font-extrabold">
        <a
          href="https://www.instagram.com/bora.beauty_?igsh=MTBnOHhrZTl2NnUxOA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#7b3f00] transition"
        >
          <Instagram size={25} />
        </a>

        <a
          href="https://www.tiktok.com/@bora.beauty_?_t=ZM-8zzpFb8t5Ip&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#7b3f00] transition"
        >
          <Music2 size={25} />
        </a>
      </div>

      {/* Bottom spacing */}
      <div className="h-10" />
    </div>
  );
}
