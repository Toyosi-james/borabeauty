"use client";

/* eslint-disable @next/next/no-img-element */
export function AboutSection() {
  return (
    <section id="about-us" className="py-24 bg-[#f9e0c2]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#7b3f00] mb-6 tracking-tight">
              Welcome to <span className="text-black">Bora Beauty</span>
            </h2>
            <p className="text-lg text-[#333] max-w-2xl mx-auto leading-relaxed max-mobile:text-sm">
              A luxury beauty studio dedicated to enhancing your natural elegance
              through expertly crafted lash extensions and microblading.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-10">
              {/* Brand Story */}
              <div>
                <h3 className="text-2xl font-playfair font-semibold text-[#7b3f00] mb-4">
                  Our Philosophy
                </h3>
                <p className="text-[#333] leading-relaxed max-mobile:text-sm">
                  At Bora Beauty, we believe beauty should feel effortless, refined,
                  and personal. Every treatment is thoughtfully designed to complement
                  your unique features while maintaining a soft, timeless finish.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-2xl font-playfair font-semibold text-[#7b3f00] mb-4">
                  Expertise You Can Trust
                </h3>
                <p className="text-[#333] leading-relaxed max-mobile:text-sm">
                  With years of hands-on experience in luxury beauty services, Bora Beauty
                  is committed to precision, hygiene, and client comfort. From consultation
                  to final result, every detail is handled with care.
                </p>
              </div>

              {/* Quote */}
              <p className="text-[#7b3f00] font-medium italic max-mobile:text-sm">
                “Beauty is not about transformation — it’s about enhancement.”
              </p>

              {/* Booking Policy */}
              <div className="bg-white/80 p-6 rounded-xl border border-[#7b3f00]/20 shadow-sm max-mobile:text-sm">
                <h4 className="font-semibold text-[#7b3f00] mb-3">
                  Booking Information
                </h4>
                <p className="text-[#333] leading-relaxed">
                  Appointments are strictly by booking only. A deposit may be required
                  to secure your session. Kindly ensure cancellations or rescheduling
                  are made at least 24 hours in advance to respect time and availability.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/Debbie 2.jpeg"
                  alt="Bora Beauty professional at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
