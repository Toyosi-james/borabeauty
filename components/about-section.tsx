export function AboutSection() {
  return (
    <section id="about Us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6 tracking-tight">
              Meet Your <span className="text-pink-500">Beauty Artist</span> ✨
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed max-mobile:text-sm">
              Passionate about enhancing your natural beauty with precision, artistry, and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">
                  Our Story
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-mobile:text-sm">
                  With over <span className="text-pink-500 font-semibold">5 years</span> of expertise 
                  in luxury beauty treatments, I specialize in creating stunning lash extensions and 
                  precision microblading that enhance your natural beauty. Every treatment is personalized 
                  to complement your unique features.
                </p>
                <p className="text-yellow-600 font-medium italic max-mobile:text-sm">
                  "Every client deserves to feel absolutely gorgeous"
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-1 max-mobile:text-2xl">500+</div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-1 max-mobile:text-2xl">5+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-1 max-mobile:text-2xl">100%</div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/professional-female-lash-technician-working-on-cli.jpg"
                  alt="Professional lash technician at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
