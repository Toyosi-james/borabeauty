// app/landing/page.tsx
import Image from "next/image";
import Link from "next/link";
import founderPic from "../../public/founder.jpg";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9e0c2] text-white px-4">
      
      {/* Founder Image */}
      <div className="mb-6">
        <Image
          src={founderPic}
          alt="Founder"
          width={160}
          height={160}
          className="rounded-full border-4 border-white object-cover"
          priority
        />
      </div>

      {/* Brand Name */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        Bora Beauty
      </h1>

      {/* Buttons */}
      <div className="flex flex-col space-y-4 w-full max-w-xs">

        {/* About Us */}
        <Link
          href="/about us"
          className="px-6 py-4 bg-white text-[#6b3f1d] font-semibold rounded-lg text-center hover:bg-purple-100 transition"
        >
          About Us
        </Link>

        {/* Price List */}
        <Link
          href="/services"
          className="px-6 py-4 bg-white text-[#6b3f1d] font-semibold rounded-lg text-center hover:bg-purple-100 transition"
        >
          Price List
        </Link>

        {/* Book Appointment - Calendly */}
        <a
          href="https://calendly.com/YOUR-CALENDLY-LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 bg-[#6b3f1d] text-white font-semibold rounded-lg text-center hover:opacity-90 transition"
        >
          Book an Appointment
        </a>

        {/* WhatsApp */}
      <a
          href="https://wa.me/2349136919750?text=Hi!%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20for%20lash%20extensions/microblading.%20Can%20you%20share%20your%20availability?"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 bg-white text-purple-600 font-semibold rounded-lg text-center hover:bg-purple-100 transition"
        >
          Chat with Us on WhatsApp
        </a>


        {/* View Our Work */}
        <Link
          href="/gallery"
          className="px-6 py-4 bg-white text-[#6b3f1d] font-semibold rounded-lg text-center hover:bg-purple-100 transition"
        >
          View Our Work
        </Link>

      </div>
    </div>
  );
}
