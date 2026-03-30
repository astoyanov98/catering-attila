import Image from "next/image";
import Link from "next/link";
import { featuredMenuContent, featuredMenuItems } from "@/data/homePage";

export function HomeFeaturedMenuSection() {
  return (
    <section className="relative overflow-hidden bg-[#fcf8f3] py-20 lg:py-28">
      <svg
        className="absolute left-0 top-0 h-28 w-full"
        viewBox="0 0 1600 140"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0 H1600 V68 C1450 98 1290 116 1070 104 C820 91 642 25 398 34 C245 40 120 63 0 92 Z"
          fill="#ffffff"
        />
      </svg>

      <div className="site-shell relative pt-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8d6c57]">
              {featuredMenuContent.eyebrow}
            </p>
            <h2 className="mt-5 font-serif text-3xl text-[#2d1f1b] lg:text-4xl">
              {featuredMenuContent.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#64564d]">
              {featuredMenuContent.description}
            </p>
          </div>

          <Link
            href={featuredMenuContent.cta.href}
            className="inline-flex items-center justify-center rounded-lg border border-[#d0bdaa] bg-white px-6 py-3 text-sm font-medium text-[#6b3f2b] transition-colors hover:bg-[#f8efe8]"
          >
            {featuredMenuContent.cta.label}
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredMenuItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[28px] border border-[#eaded2] bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(96,59,38,0.12)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>
              <div className="px-6 py-6">
                <p className="text-sm uppercase tracking-[0.22em] text-[#93715e]">
                  {item.subtitle}
                </p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl text-[#3d251d]">
                    {item.title}
                  </h3>
                  <span className="shrink-0 text-lg font-medium text-[#6b3f2b]">
                    {item.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
