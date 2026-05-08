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
          fill="var(--secondary)"
        />
      </svg>

      <div className="site-shell relative z-20 flex min-h-[85vh] flex-col items-center gap-12 pb-24 pt-12 lg:flex-row lg:gap-16">
        <div className="order-2 flex-1 lg:order-1">
          <h1 className="mt-5 font-serif text-4xl leading-tight text-site-text lg:text-5xl xl:text-6xl">
            <span className="block text-5xl lg:text-6xl xl:text-7xl">
              {heroContent.titleFirstLine}
            </span>
            <span className="mt-1 block">{heroContent.titleSecondLine}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-site-text/80">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={heroContent.primaryCta.href}
              className="relative isolate inline-flex items-center justify-center overflow-hidden rounded-lg border border-primary bg-primary px-8 py-4 text-lg font-medium text-white transition-colors before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:ease-out hover:text-primary hover:before:scale-x-100"
            >
              <span className="relative z-10">{heroContent.primaryCta.label}</span>
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="relative isolate inline-flex items-center justify-center overflow-hidden rounded-lg border border-primary bg-white px-8 py-4 text-lg font-medium text-primary transition-colors before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:ease-out hover:text-white hover:before:scale-x-100"
            >
              <span className="relative z-10">{heroContent.secondaryCta.label}</span>
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-accent/35 bg-white/85 px-5 py-4 shadow-[0_18px_40px_rgba(107,46,15,0.08)]"
              >
                <p className="font-serif text-3xl text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-site-text/75">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex flex-1 justify-center lg:order-2 lg:justify-end">
          <div className="relative aspect-[4/3] w-full max-w-[22rem] shrink-0 lg:max-w-[30rem]">
            <div className="absolute inset-0 rounded-[2rem] border-4 border-white bg-secondary shadow-xl" />
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border-4 border-white shadow-xl">
              <Image
                src={heroContent.imageSrc}
                alt={heroContent.imageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 352px, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
