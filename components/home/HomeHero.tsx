import Image from "next/image";
import Link from "next/link";
import { heroContent, heroStats } from "@/data/homePage";

export function HomeHero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-white">
      <svg
        className="absolute bottom-0 left-0 h-[380px] w-full"
        viewBox="10 -10 1900 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,270 C450,268 900,200 1350,100 C1600,45 1750,20 1910,30 L1910,310 L10,310 Z"
          fill="#fcf8f3"
        />
      </svg>

      <div className="site-shell relative z-20 flex min-h-[85vh] flex-col items-center gap-12 pb-24 pt-12 lg:flex-row lg:gap-16">
        <div className="order-2 flex-1 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d6c57]">
            {heroContent.eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-[#2d1f1b] lg:text-5xl xl:text-6xl">
            <span className="block text-5xl lg:text-6xl xl:text-7xl">
              {heroContent.titleFirstLine}
            </span>
            <span className="mt-1 block">{heroContent.titleSecondLine}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a57]">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={heroContent.primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-[#6b3f2b] px-8 py-4 text-lg font-medium text-white transition-opacity hover:opacity-90"
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-[#d7c8bc] bg-white px-8 py-4 text-lg font-medium text-[#6b3f2b] transition-colors hover:bg-[#f8efe8]"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-[#efe3d9] bg-white/80 px-5 py-4 shadow-[0_18px_40px_rgba(96,59,38,0.06)]"
              >
                <p className="font-serif text-3xl text-[#603b26]">{stat.value}</p>
                <p className="mt-1 text-sm text-[#6e5c51]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex flex-1 justify-center lg:order-2 lg:justify-end">
          <div className="relative h-72 w-72 shrink-0 lg:h-[25rem] lg:w-[25rem]">
            <div className="absolute inset-0 rounded-full border-4 border-white bg-[#f3efeb] shadow-xl" />
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-white shadow-xl">
              <Image
                src={heroContent.imageSrc}
                alt={heroContent.imageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 288px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
