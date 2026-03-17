import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-[85vh] w-full overflow-hidden bg-white">
        {/* Cream section - smooth gradual wave, extends full width */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[380px]"
          viewBox="10 -10 1900 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
      M10,270
      C450,268 900,200 1350,100
      C1600,45 1750,20 1910,30
      L1910,310
      L10,310
      Z
    "
            fill="#fcf8f3"
          />
        </svg>

        <div className="relative z-20 max-w-7xl mx-auto px-8 lg:px-16 pt-12 pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[85vh]">
          {/* Left - Text */}
          <div className="flex-1 order-2 lg:order-1">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2d1f1b] leading-tight">
              <span className="block text-5xl lg:text-6xl xl:text-7xl">
                Exceptional
              </span>
              <span className="block mt-1">Catering Services</span>
            </h1>
            <p className="mt-6 text-lg text-[#5f5a57] max-w-md">
              Delivering high-quality cuisine for your events and gatherings.
            </p>
            <Link
              href="#contact"
              className="inline-block mt-8 rounded-lg bg-[#6b3f2b] px-8 py-4 text-lg text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
          </div>

          {/* Right - Circular image */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-100 lg:h-100 shrink-0">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl bg-[#f3efeb]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/circle-food.png"
                  alt="Gourmet catering dish"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome section - below hero */}
      <section className="relative overflow-hidden bg-[#fcf8f3] py-20 lg:py-28">
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row gap-16 items-start">
          {/* Left - Welcome text (outside white box) */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-serif text-[#2d1f1b]">
              Welcome to Attila Catering
            </h2>
            <p className="mt-6 text-[#5f5a57] leading-relaxed">
              We provide exceptional culinary experiences tailored to your
              needs, whether it&apos;s a corporate event, wedding, or private
              gathering.
            </p>
          </div>

          {/* Right - Feature cards with white background */}
          <div className="flex-1 relative">
            {/* Wavy blob - from bottom right, curves up and left, rounded climbing */}
            <svg
              className="absolute bottom-0 right-0 w-full h-full min-h-[200px] pointer-events-none opacity-90"
              viewBox="0 0 500 350"
              preserveAspectRatio="xMaxYMax slice"
            >
              <path
                d="M500 350 L500 120 Q450 80 380 100 Q300 130 220 90 Q150 55 80 120 Q20 180 0 250 L0 350 Z"
                fill="#fcf8f3"
              />
            </svg>

            {/* White background - only around the three image cards */}
            <div className="relative z-10 bg-white rounded-3xl shadow-lg p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Event Catering */}
              <div className="flex flex-col items-center p-4 overflow-hidden">
                <div className="relative w-24 h-24 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/food.png"
                    alt="Event Catering"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#6b4a3c] font-medium">
                  Event Catering
                </span>
              </div>

              {/* Custom Menus */}
              <div className="flex flex-col items-center p-4 overflow-hidden">
                <div className="relative w-24 h-24 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/menu.png"
                    alt="Custom Menus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#6b4a3c] font-medium">Custom Menus</span>
              </div>

              {/* Professional Staff */}
              <div className="flex flex-col items-center p-4 overflow-hidden">
                <div className="relative w-24 h-24 mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/staff.png"
                    alt="Professional Staff"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#6b4a3c] font-medium">
                  Professional Staff
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
