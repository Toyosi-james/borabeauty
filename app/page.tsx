import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import "./globals.css"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <BookingSection />
      <Footer />
      <CalendlyWidget />
    </main>
  )
}
